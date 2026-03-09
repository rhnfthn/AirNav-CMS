<template>
  <div class="min-h-full">
    <div class="max-w-2xl mx-auto">
      <div class="mb-8">
        <h2 class="text-2xl font-black uppercase tracking-wide theme-text-primary">Edit About Section</h2>
        <p class="theme-text-secondary mt-1 font-medium">Update your profile information displayed on the website.</p>
      </div>

      <!-- Crop Popup -->
      <div v-if="crop.open" class="fixed inset-0 z-50">
        <div
          class="absolute inset-0"
          style="background-color: color-mix(in srgb, var(--color-shadow) 60%, transparent 40%);"
          @click="closeCrop(false)"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center p-4">
          <div class="neo-card w-full max-w-lg p-5">
            <div class="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 class="text-lg font-black theme-text-primary">Preview & Crop</h3>
                <p class="text-xs font-bold theme-text-secondary" style="opacity: 0.9;">Drag to reposition • Zoom to fit • Output: square</p>
              </div>
              <button
                type="button"
                class="neo-btn-ghost font-black"
                :disabled="crop.applying"
                @click="closeCrop(false)"
              >
                Close
              </button>
            </div>

            <div class="max-w-[320px] mx-auto">
              <div
                ref="cropViewportEl"
                class="aspect-square rounded-xl border-[3px] theme-border overflow-hidden touch-none select-none"
                style="background-color: var(--bg-main); box-shadow: 4px 4px 0px 0px var(--color-shadow);"
                @pointerdown="onCropPointerDown"
                @pointermove="onCropPointerMove"
                @pointerup="onCropPointerUp"
                @pointercancel="onCropPointerUp"
              >
                <div class="w-full h-full relative">
                  <img
                    v-if="crop.objectUrl"
                    :src="crop.objectUrl"
                    alt="Crop preview"
                    class="absolute left-1/2 top-1/2 max-w-none"
                    :style="cropImageStyle"
                    draggable="false"
                  />
                </div>
              </div>
            </div>

            <div class="mt-5">
              <div class="flex items-center gap-3">
                <button type="button" class="neo-btn-secondary font-black" :disabled="crop.applying" @click="zoomOut">
                  -
                </button>
                <input
                  v-model.number="crop.zoom"
                  type="range"
                  min="1"
                  max="3"
                  step="0.01"
                  class="w-full"
                  :disabled="crop.applying"
                  @input="onZoomChanged"
                />
                <button type="button" class="neo-btn-secondary font-black" :disabled="crop.applying" @click="zoomIn">
                  +
                </button>
              </div>
              <div class="flex items-center justify-between mt-2">
                <p class="text-xs font-bold theme-text-secondary" style="opacity: 0.9;">Zoom: {{ Math.round(crop.zoom * 100) }}%</p>
                <button type="button" class="neo-btn-ghost font-black" :disabled="crop.applying" @click="resetCrop">
                  Reset
                </button>
              </div>
            </div>

            <div class="flex gap-3 pt-5">
              <button type="button" class="neo-btn-secondary font-black" :disabled="crop.applying" @click="closeCrop(false)">
                Cancel
              </button>
              <button type="button" class="neo-btn-primary font-black" :disabled="crop.applying || !crop.file" @click="applyCropAndUpload">
                <span v-if="crop.applying" class="flex items-center gap-2">
                  <div class="neo-spinner w-4 h-4"></div>
                  Applying...
                </span>
                <span v-else>Use Photo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="loading" class="flex justify-center py-12">
        <div class="neo-spinner"></div>
      </div>

      <div v-else class="neo-card p-6">
        <form @submit.prevent="saveAbout" class="space-y-6">
          <div>
            <label class="neo-label">Title / Role</label>
            <input
              v-model="form.title"
              type="text"
              class="neo-input"
              placeholder="e.g., Full Stack Developer"
              :disabled="saving"
            />
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="neo-label">University</label>
              <input
                v-model="form.university"
                type="text"
                class="neo-input"
                placeholder="e.g., Universitas ..."
                :disabled="saving"
              />
            </div>
            <div>
              <label class="neo-label">Major</label>
              <input
                v-model="form.major"
                type="text"
                class="neo-input"
                placeholder="e.g., Informatics"
                :disabled="saving"
              />
            </div>
          </div>

          <div class="max-w-xs">
            <label class="neo-label">GPA</label>
            <input
              v-model.number="form.gpa"
              type="number"
              step="0.01"
              min="0"
              max="4"
              class="neo-input"
              placeholder="e.g., 3.75"
              :disabled="saving"
            />
          </div>

          <div>
            <label class="neo-label">Description</label>
            <textarea
              v-model="form.description"
              rows="8"
              class="neo-input resize-none"
              placeholder="Write about yourself..."
              :disabled="saving"
            ></textarea>
          </div>

          <div>
            <label class="neo-label">Photo (attachment)</label>
            <input
              type="file"
              accept="image/*"
              class="neo-input"
              :disabled="saving || uploadingPhoto"
              @change="onPhotoSelected"
            />
            <p class="text-xs theme-text-secondary mt-1" style="opacity: 0.85;">Upload a photo file (no URL needed)</p>
          </div>

          <!-- Preview -->
          <div v-if="uploadingPhoto" class="text-sm font-bold theme-text-secondary" style="opacity: 0.95;">
            Uploading photo...
          </div>

          <div v-if="form.photoUrl" class="mt-2">
            <div class="neo-card p-4">
              <div class="flex items-center justify-between gap-4 mb-3">
                <label class="neo-label mb-0">Preview</label>
                <div class="flex items-center gap-2">
                  <p class="text-xs font-bold theme-text-secondary" style="opacity: 0.9;">Square crop • auto fit</p>
                  <button
                    type="button"
                    class="neo-btn-ghost font-black inline-flex items-center gap-2"
                    :disabled="saving || uploadingPhoto || crop.open"
                    @click="editCurrentPhoto"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                    </svg>
                    Edit
                  </button>
                </div>
              </div>

              <div class="max-w-[260px] mx-auto">
                <div
                  class="aspect-square rounded-xl border-[3px] theme-border overflow-hidden"
                  style="background-color: var(--bg-main); box-shadow: 4px 4px 0px 0px var(--color-shadow);"
                >
                  <img
                    :src="form.photoUrl"
                    alt="Photo preview"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-3 pt-4">
            <button type="submit" :disabled="saving" class="neo-btn-primary font-black">
              <span v-if="saving" class="flex items-center gap-2">
                <div class="neo-spinner w-4 h-4"></div>
                Saving...
              </span>
              <span v-else>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

const { apiFetch } = useApiClient();
const toast = useToastStore();

const loading = ref(true);
const saving = ref(false);
const form = reactive({
  title: '',
  description: '',
  photoUrl: '',
  university: '',
  major: '',
  gpa: null as number | null,
});

const { uploadFile } = useUploader();
const uploadingPhoto = ref(false);

const cropViewportEl = ref<HTMLElement | null>(null);
const crop = reactive({
  open: false,
  applying: false,
  file: null as File | null,
  objectUrl: '',
  naturalWidth: 0,
  naturalHeight: 0,
  zoom: 1,
  offsetX: 0,
  offsetY: 0,
  dragging: false,
  dragPointerId: null as number | null,
  lastX: 0,
  lastY: 0,
});

const cropImageStyle = computed(() => {
  const viewport = cropViewportEl.value;
  const viewportW = viewport?.clientWidth ?? 0;
  const viewportH = viewport?.clientHeight ?? 0;
  if (!viewportW || !viewportH || !crop.naturalWidth || !crop.naturalHeight) {
    return {
      transform: 'translate(-50%, -50%) scale(1)',
      width: '0px',
      height: '0px',
    } as Record<string, string>;
  }

  const baseScale = Math.max(viewportW / crop.naturalWidth, viewportH / crop.naturalHeight);
  const scale = baseScale * crop.zoom;
  const drawnW = crop.naturalWidth * scale;
  const drawnH = crop.naturalHeight * scale;

  return {
    transform: `translate(calc(-50% + ${crop.offsetX}px), calc(-50% + ${crop.offsetY}px))`,
    width: `${drawnW}px`,
    height: `${drawnH}px`,
  } as Record<string, string>;
});

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const clampOffsetsToCoverViewport = () => {
  const viewport = cropViewportEl.value;
  if (!viewport || !crop.naturalWidth || !crop.naturalHeight) return;

  const viewportW = viewport.clientWidth;
  const viewportH = viewport.clientHeight;
  const baseScale = Math.max(viewportW / crop.naturalWidth, viewportH / crop.naturalHeight);
  const scale = baseScale * crop.zoom;
  const drawnW = crop.naturalWidth * scale;
  const drawnH = crop.naturalHeight * scale;

  const maxOffsetX = Math.max(0, (drawnW - viewportW) / 2);
  const maxOffsetY = Math.max(0, (drawnH - viewportH) / 2);
  crop.offsetX = clamp(crop.offsetX, -maxOffsetX, maxOffsetX);
  crop.offsetY = clamp(crop.offsetY, -maxOffsetY, maxOffsetY);
};

const openCrop = async (file: File) => {
  crop.file = file;
  crop.zoom = 1;
  crop.offsetX = 0;
  crop.offsetY = 0;
  crop.naturalWidth = 0;
  crop.naturalHeight = 0;
  crop.open = true;

  if (crop.objectUrl) URL.revokeObjectURL(crop.objectUrl);
  crop.objectUrl = URL.createObjectURL(file);

  const img = new Image();
  img.src = crop.objectUrl;
  await img.decode();
  crop.naturalWidth = img.naturalWidth;
  crop.naturalHeight = img.naturalHeight;

  await nextTick();
  clampOffsetsToCoverViewport();
};

const closeCrop = (keepObjectUrl: boolean) => {
  crop.open = false;
  crop.dragging = false;
  crop.dragPointerId = null;
  crop.lastX = 0;
  crop.lastY = 0;
  crop.file = null;
  crop.naturalWidth = 0;
  crop.naturalHeight = 0;
  crop.zoom = 1;
  crop.offsetX = 0;
  crop.offsetY = 0;

  if (!keepObjectUrl && crop.objectUrl) {
    URL.revokeObjectURL(crop.objectUrl);
    crop.objectUrl = '';
  }
};

const resetCrop = () => {
  crop.zoom = 1;
  crop.offsetX = 0;
  crop.offsetY = 0;
  clampOffsetsToCoverViewport();
};

const zoomIn = () => {
  crop.zoom = clamp(Number((crop.zoom + 0.1).toFixed(2)), 1, 3);
  clampOffsetsToCoverViewport();
};

const zoomOut = () => {
  crop.zoom = clamp(Number((crop.zoom - 0.1).toFixed(2)), 1, 3);
  clampOffsetsToCoverViewport();
};

const onZoomChanged = () => {
  crop.zoom = clamp(crop.zoom, 1, 3);
  clampOffsetsToCoverViewport();
};

const onCropPointerDown = (event: PointerEvent) => {
  if (crop.applying) return;
  const viewport = cropViewportEl.value;
  if (!viewport) return;
  crop.dragging = true;
  crop.dragPointerId = event.pointerId;
  crop.lastX = event.clientX;
  crop.lastY = event.clientY;
  (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
};

const onCropPointerMove = (event: PointerEvent) => {
  if (!crop.dragging || crop.dragPointerId !== event.pointerId || crop.applying) return;
  const dx = event.clientX - crop.lastX;
  const dy = event.clientY - crop.lastY;
  crop.lastX = event.clientX;
  crop.lastY = event.clientY;
  crop.offsetX += dx;
  crop.offsetY += dy;
  clampOffsetsToCoverViewport();
};

const onCropPointerUp = (event: PointerEvent) => {
  if (crop.dragPointerId !== event.pointerId) return;
  crop.dragging = false;
  crop.dragPointerId = null;
};

const cropToSquareBlob = async (): Promise<Blob> => {
  const viewport = cropViewportEl.value;
  if (!viewport || !crop.objectUrl || !crop.naturalWidth || !crop.naturalHeight) {
    throw new Error('Crop not ready');
  }

  const viewportW = viewport.clientWidth;
  const viewportH = viewport.clientHeight;
  const baseScale = Math.max(viewportW / crop.naturalWidth, viewportH / crop.naturalHeight);
  const scale = baseScale * crop.zoom;

  const outSize = 768;
  const canvas = document.createElement('canvas');
  canvas.width = outSize;
  canvas.height = outSize;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');

  const img = new Image();
  img.src = crop.objectUrl;
  await img.decode();

  const drawnW = crop.naturalWidth * scale;
  const drawnH = crop.naturalHeight * scale;
  const centerX = viewportW / 2 + crop.offsetX;
  const centerY = viewportH / 2 + crop.offsetY;
  const topLeftX = centerX - drawnW / 2;
  const topLeftY = centerY - drawnH / 2;

  const ratio = outSize / viewportW;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  const rootStyles = getComputedStyle(document.documentElement);
  const bgMain = rootStyles.getPropertyValue('--bg-main').trim();
  ctx.fillStyle = bgMain || 'white';
  ctx.fillRect(0, 0, outSize, outSize);
  ctx.drawImage(img, topLeftX * ratio, topLeftY * ratio, drawnW * ratio, drawnH * ratio);

  const blob: Blob = await new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Failed to export image'))), 'image/jpeg', 0.9);
  });
  return blob;
};

const applyCropAndUpload = async () => {
  if (!crop.file) return;
  crop.applying = true;
  uploadingPhoto.value = true;
  try {
    const blob = await cropToSquareBlob();
    const croppedFile = new File([blob], 'about-photo.jpg', { type: 'image/jpeg' });
    const url = await uploadFile(croppedFile);
    form.photoUrl = url;
    toast.success('Photo updated');
    closeCrop(false);
  } catch (error: any) {
    toast.error(error?.data?.message || error?.message || 'Failed to apply crop');
  } finally {
    crop.applying = false;
    uploadingPhoto.value = false;
  }
};

const editCurrentPhoto = async () => {
  if (!form.photoUrl) return;
  try {
    const res = await fetch(form.photoUrl);
    if (!res.ok) throw new Error('Failed to load current photo');
    const blob = await res.blob();
    const ext = blob.type === 'image/png' ? 'png' : blob.type === 'image/webp' ? 'webp' : 'jpg';
    const file = new File([blob], `about-photo.${ext}`, { type: blob.type || 'image/jpeg' });
    await openCrop(file);
  } catch (error: any) {
    toast.error(error?.message || 'Failed to open editor');
  }
};

onMounted(async () => {
  try {
    const data = await apiFetch<any>('/about');
    if (data) {
      form.title = data.title || '';
      form.description = data.description || '';
      form.photoUrl = data.photoUrl || '';
      form.university = data.university || '';
      form.major = data.major || '';
      if (data.gpa === null || data.gpa === undefined || data.gpa === '') {
        form.gpa = null;
      } else {
        const parsed = Number(data.gpa);
        form.gpa = Number.isFinite(parsed) ? parsed : null;
      }
    }
  } catch (error) {
    console.error('Error fetching about:', error);
  } finally {
    loading.value = false;
  }
});

const saveAbout = async () => {
  saving.value = true;
  try {
    const payload: any = { ...form };
    if (!payload.photoUrl) delete payload.photoUrl;
    if (!payload.university) delete payload.university;
    if (!payload.major) delete payload.major;
    if (payload.gpa === null || payload.gpa === undefined || payload.gpa === '') delete payload.gpa;

    await apiFetch('/about', {
      method: 'PUT',
      body: payload,
    });
    toast.success('About section updated successfully!');
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to update');
  } finally {
    saving.value = false;
  }
};

const onPhotoSelected = async (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  try {
    if (!file.type.startsWith('image/')) {
      toast.error('Please choose an image file');
      return;
    }
    await openCrop(file);
  } catch (error: any) {
    toast.error(error?.data?.message || error?.message || 'Failed to open preview');
  } finally {
    input.value = '';
  }
};
</script>
