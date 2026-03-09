import { Injectable } from '@nestjs/common';
import { HeroImagePosition, HeroLayout } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import {
  HOME_SECTIONS,
  type HomeSectionKey,
  UpdateHomeLayoutDto,
} from './dto/update-home-layout.dto';

const DEFAULT_LAYOUT = {
  heroImagePosition: HeroImagePosition.left,
  heroLayout: HeroLayout.image_text,
  sectionsOrder: [...HOME_SECTIONS],
  showFeaturedProjects: true,
};

const OLD_DEFAULT_SECTIONS: HomeSectionKey[] = [
  'hero',
  'about',
  'projects',
  'experience',
  'contact',
];

const arraysEqual = (a: unknown[], b: unknown[]) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

const normalizeEnabledSections = (raw: unknown): HomeSectionKey[] => {
  const current = Array.isArray(raw) ? raw : [];
  const filtered = current.filter((k): k is HomeSectionKey =>
    (HOME_SECTIONS as readonly string[]).includes(String(k)),
  );

  // If user is still on the old default set (before adding new sections),
  // upgrade to the latest defaults so new sections appear automatically.
  if (arraysEqual(filtered, OLD_DEFAULT_SECTIONS)) {
    return [...HOME_SECTIONS];
  }

  // Otherwise preserve their custom order and append any newly introduced keys.
  const enabled = [...filtered];
  const set = new Set(enabled);
  for (const key of HOME_SECTIONS) {
    if (!set.has(key)) enabled.push(key);
  }
  return enabled;
};

const toPrismaHeroLayout = (layout: UpdateHomeLayoutDto['heroLayout']) => {
  if (!layout) return undefined;
  switch (layout) {
    case 'image-text':
      return HeroLayout.image_text;
    case 'text-image':
      return HeroLayout.text_image;
    case 'centered':
      return HeroLayout.centered;
  }
};

const fromPrismaHeroLayout = (
  layout: HeroLayout,
): 'image-text' | 'text-image' | 'centered' => {
  switch (layout) {
    case HeroLayout.image_text:
      return 'image-text';
    case HeroLayout.text_image:
      return 'text-image';
    case HeroLayout.centered:
      return 'centered';
  }
};

@Injectable()
export class HomeLayoutService {
  constructor(private readonly prisma: PrismaService) {}

  private async getOrCreate() {
    const existing = await this.prisma.homeLayoutSettings.findFirst();
    if (existing) {
      const normalizedSectionsOrder = normalizeEnabledSections(
        (existing as any).sectionsOrder,
      );

      if (
        !arraysEqual(
          ((existing as any).sectionsOrder ?? []) as unknown[],
          normalizedSectionsOrder,
        )
      ) {
        return this.prisma.homeLayoutSettings.update({
          where: { id: existing.id },
          data: {
            sectionsOrder: normalizedSectionsOrder,
            showFeaturedProjects: normalizedSectionsOrder.includes('projects'),
          },
        });
      }

      return existing;
    }

    return this.prisma.homeLayoutSettings.create({
      data: DEFAULT_LAYOUT,
    });
  }

  async getLayout() {
    const layout = await this.getOrCreate();
    return {
      ...layout,
      heroLayout: fromPrismaHeroLayout(layout.heroLayout),
    };
  }

  async updateLayout(dto: UpdateHomeLayoutDto) {
    const existing = await this.getOrCreate();

    const data: any = { ...dto };

    if (dto.heroLayout) {
      data.heroLayout = toPrismaHeroLayout(dto.heroLayout);
    }

    // Prisma expects Json; store array directly
    if (dto.sectionsOrder) {
      data.sectionsOrder = dto.sectionsOrder;
      data.showFeaturedProjects = dto.sectionsOrder.includes('projects');
    }

    const updated = await this.prisma.homeLayoutSettings.update({
      where: { id: existing.id },
      data,
    });

    return {
      ...updated,
      heroLayout: fromPrismaHeroLayout(updated.heroLayout),
    };
  }

  getDefaultLayout() {
    return {
      ...DEFAULT_LAYOUT,
      heroLayout: fromPrismaHeroLayout(DEFAULT_LAYOUT.heroLayout),
      heroImagePosition: DEFAULT_LAYOUT.heroImagePosition,
    };
  }
}
