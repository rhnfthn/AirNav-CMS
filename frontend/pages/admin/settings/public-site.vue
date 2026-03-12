<template>
  <div class="min-h-full">
    <div class="max-w-6xl mx-auto">
      <div class="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 class="text-2xl font-black uppercase tracking-wide theme-text-primary">Public Site Customizer</h2>
          <p class="theme-text-secondary mt-1">Customize colors and UI elements for the public site per page.</p>
        </div>
        <NuxtLink to="/admin/settings/theme" class="neo-btn-secondary font-black">← Admin Theme</NuxtLink>
      </div>

      <!-- Tabs Navigation -->
      <div class="flex flex-wrap gap-2 mb-6 border-b-[3px] theme-border pb-4">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-4 py-2 text-sm font-bold rounded-lg border-2 transition-all"
          :class="activeTab === tab.id 
            ? 'border-[var(--color-border)] bg-[var(--color-button)] text-[var(--color-on-button)]' 
            : 'border-transparent hover:border-[var(--color-border)] theme-text-secondary'"
        >
          {{ tab.label }}
        </button>
      </div>

      <div v-if="loading" class="flex justify-center py-12">
        <div class="neo-spinner"></div>
      </div>

      <div v-else class="space-y-6">

        <!-- ===== HEADER TAB ===== -->
        <template v-if="activeTab === 'header'">
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Header Background</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('headerBg', FIELD_GROUPS.headerBg, 'Header Background')"
              >
                <span v-if="savingSection === 'headerBg'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AdminColorRow label="Header Background" v-model="form.headerBgColor" />
              <AdminColorRow label="Header Text Color" v-model="form.headerTextColor" />
              <AdminColorRow label="Header Hover Background" v-model="form.headerHoverBg" />
              <AdminColorRow label="Header Hover Text" v-model="form.headerHoverText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Logo Button (Rhn Fthn)</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('headerLogo', FIELD_GROUPS.headerLogo, 'Header Logo Button')"
              >
                <span v-if="savingSection === 'headerLogo'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Logo Background" v-model="form.headerLogoBg" />
              <AdminColorRow label="Logo Text" v-model="form.headerLogoText" />
              <AdminColorRow label="Logo Border" v-model="form.headerLogoBorder" />
              <AdminColorRow label="Logo Shadow" v-model="form.headerLogoShadow" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <button
                class="px-4 py-2 text-sm font-black border-[3px] rounded-lg"
                :style="{
                  backgroundColor: form.headerLogoBg,
                  color: form.headerLogoText,
                  borderColor: form.headerLogoBorder,
                  boxShadow: `4px 4px 0px 0px ${form.headerLogoShadow}`
                }"
              >Rhn Fthn</button>
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section Divider</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('sectionDivider', FIELD_GROUPS.sectionDivider, 'Section Divider')"
              >
                <span v-if="savingSection === 'sectionDivider'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Section Divider/Border Color" v-model="form.sectionDividerColor" />
          </div>
        </template>

        <!-- ===== HOME PAGE TAB ===== -->
        <template v-else-if="activeTab === 'home'">
          <!-- Section 1: Hero -->
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section 1: Hero</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('homeHero', FIELD_GROUPS.homeHero, 'Home • Hero')"
              >
                <span v-if="savingSection === 'homeHero'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <p class="text-sm theme-text-secondary mb-4">Hero area with photo and intro text.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <AdminColorRow label="Section Background" v-model="form.heroSectionBg" />
              <div>
                <label class="neo-label">Photo Card Size</label>
                <select v-model="form.homeHeroCardWidth" class="neo-input">
                  <option value="small">1:1</option>
                  <option value="medium">4:3</option>
                </select>
              </div>
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Photo Card</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Card Background" v-model="form.homeHeroCardBg" />
              <AdminColorRow label="Card Border" v-model="form.homeHeroCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.homeHeroCardShadow" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Badge "Full Stack Developer"</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Badge Background" v-model="form.homeHeroBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.homeHeroBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.homeHeroBadgeText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Text Colors</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <AdminColorRow label="Header Text" v-model="form.homeHeroHeaderText" />
              <AdminColorRow label="Content Text" v-model="form.homeHeroContentText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">"Experience" Badge</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <AdminColorRow label="Badge Background" v-model="form.homeHeroExpBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.homeHeroExpBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.homeHeroExpBadgeText" />
              <AdminColorRow label="Badge Shadow" v-model="form.homeHeroExpBadgeShadow" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">View Projects Button</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Button Background" v-model="form.homeHeroBtnBg" />
              <AdminColorRow label="Button Text" v-model="form.homeHeroBtnText" />
              <AdminColorRow label="Button Border" v-model="form.homeHeroBtnBorder" />
              <AdminColorRow label="Button Shadow" v-model="form.homeHeroBtnShadow" />
            </div>

            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Another Design Button</h4>
            <div class="grid grid-cols-1 gap-4">
              <div>
                <label class="neo-label">URL</label>
                <input
                  v-model="form.homeHeroAnotherDesignUrl"
                  class="neo-input"
                  type="url"
                  placeholder="https://..."
                />
                <p class="text-xs theme-text-secondary mt-1">Jika kosong, tombol tidak akan tampil di home.</p>
              </div>
            </div>
          </div>

          <!-- Section 2: About Me -->
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section 2: About Me</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('homeAbout', FIELD_GROUPS.homeAbout, 'Home • About')"
              >
                <span v-if="savingSection === 'homeAbout'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Section Background" v-model="form.aboutSectionBg" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Badge "About Me"</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Badge Background" v-model="form.homeAboutBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.homeAboutBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.homeAboutBadgeText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Text Colors</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <AdminColorRow label="Header Text" v-model="form.homeAboutHeaderText" />
              <AdminColorRow label="Content Text" v-model="form.homeAboutContentText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Info Badges (University, Major, GPA)</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Badge Background" v-model="form.homeAboutInfoBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.homeAboutInfoBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.homeAboutInfoBadgeText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Stats Cards (Projects, Experience, etc.)</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Card Background" v-model="form.homeAboutStatCardBg" />
              <AdminColorRow label="Card Border" v-model="form.homeAboutStatCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.homeAboutStatCardShadow" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <AdminColorRow label="Number Text Color" v-model="form.homeAboutStatNumberText" />
              <AdminColorRow label="Label Text Color" v-model="form.homeAboutStatLabelText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Learn More Button</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Button Background" v-model="form.homeAboutBtnBg" />
              <AdminColorRow label="Button Text" v-model="form.homeAboutBtnText" />
              <AdminColorRow label="Button Border" v-model="form.homeAboutBtnBorder" />
              <AdminColorRow label="Button Shadow" v-model="form.homeAboutBtnShadow" />
            </div>
          </div>

          <!-- Section 3: Portfolio -->
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section 3: Portfolio</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('homePortfolio', FIELD_GROUPS.homePortfolio, 'Home • Portfolio')"
              >
                <span v-if="savingSection === 'homePortfolio'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Section Background" v-model="form.projectsSectionBg" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Badge "Portfolio"</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Badge Background" v-model="form.homePortfolioBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.homePortfolioBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.homePortfolioBadgeText" />
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Header Text" v-model="form.homePortfolioHeaderText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Project Cards</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Card Background" v-model="form.homePortfolioCardBg" />
              <AdminColorRow label="Card Border" v-model="form.homePortfolioCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.homePortfolioCardShadow" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <AdminColorRow label="Card Header Text" v-model="form.homePortfolioCardHeaderText" />
              <AdminColorRow label="Card Content Text" v-model="form.homePortfolioCardContentText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Tech Stack Badges</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Badge Background" v-model="form.homePortfolioTechBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.homePortfolioTechBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.homePortfolioTechBadgeText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">View All Projects Button</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Button Background" v-model="form.homePortfolioBtnBg" />
              <AdminColorRow label="Button Text" v-model="form.homePortfolioBtnText" />
              <AdminColorRow label="Button Border" v-model="form.homePortfolioBtnBorder" />
              <AdminColorRow label="Button Shadow" v-model="form.homePortfolioBtnShadow" />
            </div>
          </div>

          <!-- Section 4: Credentials -->
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section 4: Credentials</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('homeCerts', FIELD_GROUPS.homeCerts, 'Home • Credentials')"
              >
                <span v-if="savingSection === 'homeCerts'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Section Background" v-model="form.certificationsSectionBg" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Badge "Credentials"</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Badge Background" v-model="form.homeCertBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.homeCertBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.homeCertBadgeText" />
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Header Text" v-model="form.homeCertHeaderText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Certification Cards</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Card Background" v-model="form.homeCertCardBg" />
              <AdminColorRow label="Card Border" v-model="form.homeCertCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.homeCertCardShadow" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <AdminColorRow label="Card Header Text" v-model="form.homeCertCardHeaderText" />
              <AdminColorRow label="Card Content Text" v-model="form.homeCertCardContentText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">View Credential Button</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <AdminColorRow label="Button Background" v-model="form.homeCertViewBtnBg" />
              <AdminColorRow label="Button Text" v-model="form.homeCertViewBtnText" />
              <AdminColorRow label="Button Border" v-model="form.homeCertViewBtnBorder" />
              <AdminColorRow label="Button Shadow" v-model="form.homeCertViewBtnShadow" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">View All Certifications Button</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Button Background" v-model="form.homeCertAllBtnBg" />
              <AdminColorRow label="Button Text" v-model="form.homeCertAllBtnText" />
              <AdminColorRow label="Button Border" v-model="form.homeCertAllBtnBorder" />
              <AdminColorRow label="Button Shadow" v-model="form.homeCertAllBtnShadow" />
            </div>
          </div>

          <!-- Section 5: Career -->
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section 5: Career (Experience)</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('homeExperience', FIELD_GROUPS.homeExperience, 'Home • Experience')"
              >
                <span v-if="savingSection === 'homeExperience'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Section Background" v-model="form.experienceSectionBg" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Badge "Career"</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Badge Background" v-model="form.homeExpBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.homeExpBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.homeExpBadgeText" />
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Header Text" v-model="form.homeExpHeaderText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Experience Cards</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Card Background" v-model="form.homeExpCardBg" />
              <AdminColorRow label="Card Border" v-model="form.homeExpCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.homeExpCardShadow" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <AdminColorRow label="Card Header Text" v-model="form.homeExpCardHeaderText" />
              <AdminColorRow label="Card Content Text" v-model="form.homeExpCardContentText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">View Full Experience Button</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Button Background" v-model="form.homeExpBtnBg" />
              <AdminColorRow label="Button Text" v-model="form.homeExpBtnText" />
              <AdminColorRow label="Button Border" v-model="form.homeExpBtnBorder" />
              <AdminColorRow label="Button Shadow" v-model="form.homeExpBtnShadow" />
            </div>
          </div>

          <!-- Section 6: Tech Stack -->
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section 6: Tech Stack (Tools)</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('homeTools', FIELD_GROUPS.homeTools, 'Home • Tools')"
              >
                <span v-if="savingSection === 'homeTools'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Section Background" v-model="form.toolsSectionBg" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Badge "Tech Stack"</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Badge Background" v-model="form.homeToolsBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.homeToolsBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.homeToolsBadgeText" />
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Header Text" v-model="form.homeToolsHeaderText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Category Cards</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Card Background" v-model="form.homeToolsCardBg" />
              <AdminColorRow label="Card Border" v-model="form.homeToolsCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.homeToolsCardShadow" />
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Card Header Text" v-model="form.homeToolsCardHeaderText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Tool Badges</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <AdminColorRow label="Badge Background" v-model="form.homeToolsToolBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.homeToolsToolBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.homeToolsToolBadgeText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">View All Tools Button</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Button Background" v-model="form.homeToolsBtnBg" />
              <AdminColorRow label="Button Text" v-model="form.homeToolsBtnText" />
              <AdminColorRow label="Button Border" v-model="form.homeToolsBtnBorder" />
              <AdminColorRow label="Button Shadow" v-model="form.homeToolsBtnShadow" />
            </div>
          </div>

          <!-- Section 7: CTA -->
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section 7: Let's Work Together (CTA)</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('homeCta', FIELD_GROUPS.homeCta, 'Home • CTA')"
              >
                <span v-if="savingSection === 'homeCta'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 gap-4 mb-4">
              <AdminColorRow label="Section Background" v-model="form.ctaSectionBg" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Text Colors</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <AdminColorRow label="Header Text" v-model="form.homeCtaHeaderText" />
              <AdminColorRow label="Content Text" v-model="form.homeCtaContentText" />
            </div>
            <h4 class="text-sm font-black theme-text-primary mt-4 mb-2">Get in Touch Button</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Button Background" v-model="form.homeCtaBtnBg" />
              <AdminColorRow label="Button Text" v-model="form.homeCtaBtnText" />
              <AdminColorRow label="Button Border" v-model="form.homeCtaBtnBorder" />
              <AdminColorRow label="Button Shadow" v-model="form.homeCtaBtnShadow" />
            </div>
          </div>
        </template>

        <!-- ===== ABOUT PAGE TAB ===== -->
        <template v-else-if="activeTab === 'about'">
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Page Background</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutPageBg', FIELD_GROUPS.aboutPageBg, 'About • Page Background')"
              >
                <span v-if="savingSection === 'aboutPageBg'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="About Page Background" v-model="form.aboutSectionBg" />
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Badge "About Me"</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutBadge', FIELD_GROUPS.aboutBadge, 'About • Badge')"
              >
                <span v-if="savingSection === 'aboutBadge'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Badge Background" v-model="form.aboutBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.aboutBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.aboutBadgeText" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <span
                class="px-3 py-1 border-2 rounded-full text-xs font-bold"
                :style="{ backgroundColor: form.aboutBadgeBg, borderColor: form.aboutBadgeBorder, color: form.aboutBadgeText }"
              >About Me</span>
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Title "Full Stack Developer"</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutTitle', FIELD_GROUPS.aboutTitle, 'About • Title Box')"
              >
                <span v-if="savingSection === 'aboutTitle'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <p class="text-sm theme-text-secondary mb-4">The highlighted title box with neobrutalism style.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Title Background" v-model="form.aboutTitleBg" />
              <AdminColorRow label="Title Border" v-model="form.aboutTitleBorder" />
              <AdminColorRow label="Title Text" v-model="form.aboutTitleText" />
              <AdminColorRow label="Title Shadow" v-model="form.aboutTitleShadow" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <span
                class="px-3 py-1.5 border-[3px] text-lg font-black inline-block -rotate-1"
                :style="{
                  backgroundColor: form.aboutTitleBg,
                  borderColor: form.aboutTitleBorder,
                  color: form.aboutTitleText,
                  boxShadow: `4px 4px 0px 0px ${form.aboutTitleShadow}`
                }"
              >Full Stack Developer</span>
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Photo Card</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutPhoto', FIELD_GROUPS.aboutPhoto, 'About • Photo Card')"
              >
                <span v-if="savingSection === 'aboutPhoto'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AdminColorRow label="Photo Border" v-model="form.aboutPhotoBorder" />
              <AdminColorRow label="Photo Shadow" v-model="form.aboutPhotoShadow" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Text Color</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutText', FIELD_GROUPS.aboutText, 'About • Description Text')"
              >
                <span v-if="savingSection === 'aboutText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Description Text Color" v-model="form.aboutTextColor" />
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Main Header Text</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutInfoText', FIELD_GROUPS.aboutInfoText, 'About • Header Text')"
              >
                <span v-if="savingSection === 'aboutInfoText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <p class="text-sm theme-text-secondary mb-4">Controls the "Portfolio Owner" header and its subtitle text color.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AdminColorRow label="Header Text (Portfolio Owner)" v-model="form.aboutInfoHeaderText" />
              <AdminColorRow label="Subtitle Text" v-model="form.aboutInfoContentText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Education Text</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutEducationText', FIELD_GROUPS.aboutEducationText, 'About • Education Text')"
              >
                <span v-if="savingSection === 'aboutEducationText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <p class="text-sm theme-text-secondary mb-4">Controls the "Education" header and the university/major/GPA lines.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AdminColorRow label="Header Text (Education)" v-model="form.aboutEducationHeaderText" />
              <AdminColorRow label="Content Text" v-model="form.aboutEducationContentText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Info Card (Photo Card Container)</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutInfoCard', FIELD_GROUPS.aboutInfoCard, 'About • Info Card')"
              >
                <span v-if="savingSection === 'aboutInfoCard'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Card Background" v-model="form.aboutCardBg" />
              <AdminColorRow label="Card Border" v-model="form.aboutCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.aboutCardShadow" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Skills & Tools Cards</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutSkillsCards', FIELD_GROUPS.aboutSkillsCards, 'About • Skills Cards')"
              >
                <span v-if="savingSection === 'aboutSkillsCards'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <p class="text-sm theme-text-secondary mb-4">These cards are used in the Skills & Tools section (separate from the Photo Card container).</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Card Background" v-model="form.aboutSkillsCardBg" />
              <AdminColorRow label="Card Border" v-model="form.aboutSkillsCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.aboutSkillsCardShadow" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Skills & Tools Badges</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutSkillBadges', FIELD_GROUPS.aboutSkillBadges, 'About • Skill Badges')"
              >
                <span v-if="savingSection === 'aboutSkillBadges'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Skill Badge Background" v-model="form.aboutSkillBadgeBg" />
              <AdminColorRow label="Skill Badge Border" v-model="form.aboutSkillBadgeBorder" />
              <AdminColorRow label="Skill Badge Text" v-model="form.aboutSkillBadgeText" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <span
                class="px-3 py-1 border-2 rounded-full text-xs font-bold mr-1"
                :style="{ backgroundColor: form.aboutSkillBadgeBg, borderColor: form.aboutSkillBadgeBorder, color: form.aboutSkillBadgeText }"
              >Vue.js</span>
              <span
                class="px-3 py-1 border-2 rounded-full text-xs font-bold"
                :style="{ backgroundColor: form.aboutSkillBadgeBg, borderColor: form.aboutSkillBadgeBorder, color: form.aboutSkillBadgeText }"
              >NestJS</span>
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Quick Link Buttons</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('aboutButtons', FIELD_GROUPS.aboutButtons, 'About • Buttons')"
              >
                <span v-if="savingSection === 'aboutButtons'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <p class="text-sm theme-text-secondary mb-4">View My Projects, Work Experience, Contact Me buttons.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Button Background" v-model="form.aboutBtnBg" />
              <AdminColorRow label="Button Text" v-model="form.aboutBtnText" />
              <AdminColorRow label="Button Border" v-model="form.aboutBtnBorder" />
              <AdminColorRow label="Button Shadow" v-model="form.aboutBtnShadow" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <button
                class="px-5 py-2 text-sm font-bold border-[3px] rounded-lg"
                :style="{
                  backgroundColor: form.aboutBtnBg,
                  color: form.aboutBtnText,
                  borderColor: form.aboutBtnBorder,
                  boxShadow: `4px 4px 0px 0px ${form.aboutBtnShadow}`
                }"
              >View My Projects</button>
            </div>
          </div>
        </template>

        <!-- ===== PROJECTS PAGE TAB ===== -->
        <template v-else-if="activeTab === 'projects'">
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Page Background</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('projectsPageBg', FIELD_GROUPS.projectsPageBg, 'Projects • Page Background')"
              >
                <span v-if="savingSection === 'projectsPageBg'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Projects Page Background" v-model="form.projectsSectionBg" />
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Page Badge "Portfolio"</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('projectsPageBadge', FIELD_GROUPS.projectsPageBadge, 'Projects • Page Badge')"
              >
                <span v-if="savingSection === 'projectsPageBadge'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Badge Background" v-model="form.projectBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.projectBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.projectBadgeText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Header & Tech Filter Badges</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('projectsTextAndBadges', FIELD_GROUPS.projectsTextAndBadges, 'Projects • Header & Filter Badges')"
              >
                <span v-if="savingSection === 'projectsTextAndBadges'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>

            <h4 class="text-sm font-black theme-text-primary mb-2">Header Text Colors</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <AdminColorRow label="Header Text" v-model="form.projectsHeaderText" />
              <AdminColorRow label="Content Text" v-model="form.projectsContentText" />
            </div>

            <h4 class="text-sm font-black theme-text-primary mb-2">Tech Filter Badge (MongoDB, NestJS, etc.)</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Badge Background" v-model="form.projectFilterBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.projectFilterBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.projectFilterBadgeText" />
              <AdminColorRow label="Badge Shadow" v-model="form.projectFilterBadgeShadow" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Project Cards</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('projectsCards', FIELD_GROUPS.projectsCards, 'Projects • Cards')"
              >
                <span v-if="savingSection === 'projectsCards'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Card Background" v-model="form.projectCardBg" />
              <AdminColorRow label="Card Border" v-model="form.projectCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.projectCardShadow" />
            </div>
            <div class="mt-4">
              <label class="neo-label">Photo Height</label>
              <select v-model="form.projectPhotoHeight" class="neo-input w-48">
                <option value="small">Small (1:1)</option>
                <option value="medium">Medium (16:9)</option>
                <option value="large">Large (4:3)</option>
              </select>
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Project Detail Popup</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('projectsPopup', FIELD_GROUPS.projectsPopup, 'Projects • Popup')"
              >
                <span v-if="savingSection === 'projectsPopup'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Popup Background" v-model="form.projectPopupBg" />
              <AdminColorRow label="Popup Border" v-model="form.projectPopupBorder" />
              <AdminColorRow label="Popup Shadow" v-model="form.projectPopupShadow" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Live Demo Button (Primary)</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('projectsBtnPrimary', FIELD_GROUPS.projectsBtnPrimary, 'Projects • Live Demo Button')"
              >
                <span v-if="savingSection === 'projectsBtnPrimary'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Background" v-model="form.projectBtnPrimaryBg" />
              <AdminColorRow label="Text" v-model="form.projectBtnPrimaryText" />
              <AdminColorRow label="Border" v-model="form.projectBtnPrimaryBorder" />
              <AdminColorRow label="Shadow" v-model="form.projectBtnPrimaryShadow" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <button
                class="px-4 py-2 text-sm font-bold border-[3px] rounded-lg"
                :style="{
                  backgroundColor: form.projectBtnPrimaryBg,
                  color: form.projectBtnPrimaryText,
                  borderColor: form.projectBtnPrimaryBorder,
                  boxShadow: `4px 4px 0px 0px ${form.projectBtnPrimaryShadow}`
                }"
              >Live Demo</button>
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">GitHub Button (Secondary)</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('projectsBtnSecondary', FIELD_GROUPS.projectsBtnSecondary, 'Projects • GitHub Button')"
              >
                <span v-if="savingSection === 'projectsBtnSecondary'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Background" v-model="form.projectBtnSecondaryBg" />
              <AdminColorRow label="Text" v-model="form.projectBtnSecondaryText" />
              <AdminColorRow label="Border" v-model="form.projectBtnSecondaryBorder" />
              <AdminColorRow label="Shadow" v-model="form.projectBtnSecondaryShadow" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <button
                class="px-4 py-2 text-sm font-bold border-[3px] rounded-lg"
                :style="{
                  backgroundColor: form.projectBtnSecondaryBg,
                  color: form.projectBtnSecondaryText,
                  borderColor: form.projectBtnSecondaryBorder,
                  boxShadow: `4px 4px 0px 0px ${form.projectBtnSecondaryShadow}`
                }"
              >GitHub</button>
            </div>
          </div>
        </template>

        <!-- ===== CERTIFICATIONS PAGE TAB ===== -->
        <template v-else-if="activeTab === 'certifications'">
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Page Background</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('certPageBg', FIELD_GROUPS.certPageBg, 'Certifications • Page Background')"
              >
                <span v-if="savingSection === 'certPageBg'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Certifications Page Background" v-model="form.certificationsSectionBg" />
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Page Badge "Achievements"</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('certPageBadge', FIELD_GROUPS.certPageBadge, 'Certifications • Page Badge')"
              >
                <span v-if="savingSection === 'certPageBadge'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Badge Background" v-model="form.certBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.certBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.certBadgeText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Card Badge "Year"</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('certYearBadge', FIELD_GROUPS.certYearBadge, 'Certifications • Year Badge')"
              >
                <span v-if="savingSection === 'certYearBadge'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Badge Background" v-model="form.certYearBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.certYearBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.certYearBadgeText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Certification Cards</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('certCards', FIELD_GROUPS.certCards, 'Certifications • Cards')"
              >
                <span v-if="savingSection === 'certCards'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Card Background" v-model="form.certCardBg" />
              <AdminColorRow label="Card Border" v-model="form.certCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.certCardShadow" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <AdminColorRow label="Card Header Text" v-model="form.certCardHeaderText" />
              <AdminColorRow label="Card Content Text" v-model="form.certCardContentText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">"View Credential" Link Button</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('certViewBtn', FIELD_GROUPS.certViewBtn, 'Certifications • View Credential')"
              >
                <span v-if="savingSection === 'certViewBtn'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Underline Color (Normal)" v-model="form.certBtnBg" />
              <AdminColorRow label="Text Color (Normal)" v-model="form.certBtnText" />
              <AdminColorRow label="Underline Color (Hover)" v-model="form.certBtnBorder" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <AdminColorRow label="Text Color (Hover)" v-model="form.certBtnHoverText" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <span
                class="text-sm font-bold border-b-[3px] pb-0.5 cursor-pointer cert-credential-link"
                :style="{
                  '--cert-link-text': form.certBtnText,
                  '--cert-link-border': form.certBtnBg,
                  '--cert-link-hover-text': form.certBtnHoverText,
                  '--cert-link-hover-border': form.certBtnBorder,
                }"
              >View Credential →</span>
            </div>
          </div>
        </template>

        <!-- ===== EXPERIENCE PAGE TAB ===== -->
        <template v-else-if="activeTab === 'experience'">
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Page Background</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('expPageBg', FIELD_GROUPS.expPageBg, 'Experience • Page Background')"
              >
                <span v-if="savingSection === 'expPageBg'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Experience Page Background" v-model="form.experienceSectionBg" />
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Page Badge "Career"</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('expPageBadge', FIELD_GROUPS.expPageBadge, 'Experience • Page Badge')"
              >
                <span v-if="savingSection === 'expPageBadge'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Badge Background" v-model="form.expBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.expBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.expBadgeText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Page Section Text</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('expPageText', FIELD_GROUPS.expPageText, 'Experience • Section Text')"
              >
                <span v-if="savingSection === 'expPageText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AdminColorRow label="Section Header Text" v-model="form.experienceSectionHeaderText" />
              <AdminColorRow label="Section Content Text" v-model="form.experienceSectionContentText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Experience Cards</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('expCards', FIELD_GROUPS.expCards, 'Experience • Cards')"
              >
                <span v-if="savingSection === 'expCards'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Card Background" v-model="form.expCardBg" />
              <AdminColorRow label="Card Border" v-model="form.expCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.expCardShadow" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Card Badge (Inside Card)</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('expCardBadge', FIELD_GROUPS.expCardBadge, 'Experience • Card Badge')"
              >
                <span v-if="savingSection === 'expCardBadge'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Badge Background" v-model="form.expCardBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.expCardBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.expCardBadgeText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Card Text</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('expCardText', FIELD_GROUPS.expCardText, 'Experience • Card Text')"
              >
                <span v-if="savingSection === 'expCardText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Card Header Text" v-model="form.expCardHeaderText" />
              <AdminColorRow label="Card Sub Header Text" v-model="form.expCardSubHeaderText" />
              <AdminColorRow label="Card Content Text" v-model="form.expCardContentText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Timeline</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('expTimeline', FIELD_GROUPS.expTimeline, 'Experience • Timeline')"
              >
                <span v-if="savingSection === 'expTimeline'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Timeline Dot Background" v-model="form.expTimelineDotBg" />
              <AdminColorRow label="Timeline Dot Border" v-model="form.expTimelineDotBorder" />
              <AdminColorRow label="Timeline Line Color" v-model="form.expTimelineLineBg" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <div class="flex items-center gap-3">
                <div
                  class="w-5 h-5 rounded-md border-[3px]"
                  :style="{
                    backgroundColor: form.expTimelineDotBg,
                    borderColor: form.expTimelineDotBorder,
                    boxShadow: `2px 2px 0px 0px ${form.expCardShadow}`
                  }"
                ></div>
                <div class="w-24 h-1" :style="{ backgroundColor: form.expTimelineLineBg }"></div>
              </div>
            </div>
          </div>
        </template>

        <!-- ===== TOOLS PAGE TAB ===== -->
        <template v-else-if="activeTab === 'tools'">
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Page Background</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('toolsPageBg', FIELD_GROUPS.toolsPageBg, 'Tools • Page Background')"
              >
                <span v-if="savingSection === 'toolsPageBg'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Tools Page Background" v-model="form.toolsSectionBg" />
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section Badge "Tech Stack"</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('toolsSectionBadge', FIELD_GROUPS.toolsSectionBadge, 'Tools • Section Badge')"
              >
                <span v-if="savingSection === 'toolsSectionBadge'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Badge Background" v-model="form.toolsBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.toolsBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.toolsBadgeText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section Header & Content</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('toolsSectionText', FIELD_GROUPS.toolsSectionText, 'Tools • Section Text')"
              >
                <span v-if="savingSection === 'toolsSectionText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AdminColorRow label="Header Text" v-model="form.toolsHeaderText" />
              <AdminColorRow label="Content Text" v-model="form.toolsContentText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Category Cards</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('toolsCards', FIELD_GROUPS.toolsCards, 'Tools • Cards')"
              >
                <span v-if="savingSection === 'toolsCards'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Card Background" v-model="form.toolsCardBg" />
              <AdminColorRow label="Card Border" v-model="form.toolsCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.toolsCardShadow" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Category Title Dot</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('toolsTitleDot', FIELD_GROUPS.toolsTitleDot, 'Tools • Category Dot')"
              >
                <span v-if="savingSection === 'toolsTitleDot'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AdminColorRow label="Dot Background" v-model="form.toolsCategoryDotBg" />
              <AdminColorRow label="Dot Border" v-model="form.toolsCategoryDotBorder" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <div class="flex items-center gap-2">
                <div
                  class="w-3 h-3 rounded-sm border-2"
                  :style="{ backgroundColor: form.toolsCategoryDotBg, borderColor: form.toolsCategoryDotBorder }"
                ></div>
                <span class="font-bold" :style="{ color: form.toolsCategoryTitleText }">Category Name</span>
              </div>
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Tool Icons</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('toolsIcons', FIELD_GROUPS.toolsIcons, 'Tools • Icons')"
              >
                <span v-if="savingSection === 'toolsIcons'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AdminColorRow label="Icon Background" v-model="form.toolsIconBg" />
              <AdminColorRow label="Icon Border" v-model="form.toolsIconBorder" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <div
                class="w-9 h-9 rounded-lg border-2 flex items-center justify-center"
                :style="{ backgroundColor: form.toolsIconBg, borderColor: form.toolsIconBorder }"
              >
                <span class="text-sm font-black theme-text-secondary">V</span>
              </div>
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Category Header Text</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('toolsCategoryTitleText', FIELD_GROUPS.toolsCategoryTitleText, 'Tools • Category Header Text')"
              >
                <span v-if="savingSection === 'toolsCategoryTitleText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Category Header Text" v-model="form.toolsCategoryTitleText" />
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Tool Name Text</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('toolsItemText', FIELD_GROUPS.toolsItemText, 'Tools • Tool Name Text')"
              >
                <span v-if="savingSection === 'toolsItemText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Tool Name Text" v-model="form.toolsItemText" />
          </div>
        </template>

        <!-- ===== CONTACT PAGE TAB ===== -->
        <template v-else-if="activeTab === 'contact'">
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Page Background</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('contactPageBg', FIELD_GROUPS.contactPageBg, 'Contact • Page Background')"
              >
                <span v-if="savingSection === 'contactPageBg'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Contact Page Background" v-model="form.contactSectionBg" />
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section Badge "Get in Touch"</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('contactSectionBadge', FIELD_GROUPS.contactSectionBadge, 'Contact • Section Badge')"
              >
                <span v-if="savingSection === 'contactSectionBadge'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Badge Background" v-model="form.contactBadgeBg" />
              <AdminColorRow label="Badge Border" v-model="form.contactBadgeBorder" />
              <AdminColorRow label="Badge Text" v-model="form.contactBadgeText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Section Header & Content Text</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('contactSectionText', FIELD_GROUPS.contactSectionText, 'Contact • Section Text')"
              >
                <span v-if="savingSection === 'contactSectionText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AdminColorRow label="Header Text" v-model="form.contactHeaderText" />
              <AdminColorRow label="Content Text" v-model="form.contactContentText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Contact Form Card</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('contactCard', FIELD_GROUPS.contactCard, 'Contact • Form Card')"
              >
                <span v-if="savingSection === 'contactCard'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Card Background" v-model="form.contactCardBg" />
              <AdminColorRow label="Card Border" v-model="form.contactCardBorder" />
              <AdminColorRow label="Card Shadow" v-model="form.contactCardShadow" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Form Inputs</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('contactInputs', FIELD_GROUPS.contactInputs, 'Contact • Inputs')"
              >
                <span v-if="savingSection === 'contactInputs'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AdminColorRow label="Input Background" v-model="form.contactInputBg" />
              <AdminColorRow label="Input Border" v-model="form.contactInputBorder" />
              <AdminColorRow label="Input Text" v-model="form.contactInputText" />
              <AdminColorRow label="Form Label Text" v-model="form.contactLabelColor" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <input
                type="text"
                placeholder="Your name"
                class="px-4 py-2 border-[3px] rounded-lg w-48"
                :style="{
                  backgroundColor: form.contactInputBg,
                  borderColor: form.contactInputBorder,
                  color: form.contactInputText
                }"
              />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Direct Contact Caption</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('contactDirectText', FIELD_GROUPS.contactDirectText, 'Contact • Direct Caption')"
              >
                <span v-if="savingSection === 'contactDirectText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Or Reach Out Directly Text" v-model="form.contactDirectText" />
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Send Message Button</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('contactBtn', FIELD_GROUPS.contactBtn, 'Contact • Send Button')"
              >
                <span v-if="savingSection === 'contactBtn'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Background" v-model="form.contactBtnBg" />
              <AdminColorRow label="Text" v-model="form.contactBtnText" />
              <AdminColorRow label="Border" v-model="form.contactBtnBorder" />
              <AdminColorRow label="Shadow" v-model="form.contactBtnShadow" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <button
                class="px-5 py-2.5 text-sm font-bold border-[3px] rounded-lg"
                :style="{
                  backgroundColor: form.contactBtnBg,
                  color: form.contactBtnText,
                  borderColor: form.contactBtnBorder,
                  boxShadow: `4px 4px 0px 0px ${form.contactBtnShadow}`
                }"
              >Send Message</button>
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Social Buttons (Email, LinkedIn, GitHub)</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('contactSocial', FIELD_GROUPS.contactSocial, 'Contact • Social Buttons')"
              >
                <span v-if="savingSection === 'contactSocial'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Background" v-model="form.contactSocialBtnBg" />
              <AdminColorRow label="Text" v-model="form.contactSocialBtnText" />
              <AdminColorRow label="Border" v-model="form.contactSocialBtnBorder" />
              <AdminColorRow label="Shadow" v-model="form.contactSocialBtnShadow" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <div class="flex gap-2">
                <button
                  class="px-4 py-2 text-sm font-bold border-[3px] rounded-lg"
                  :style="{
                    backgroundColor: form.contactSocialBtnBg,
                    color: form.contactSocialBtnText,
                    borderColor: form.contactSocialBtnBorder,
                    boxShadow: `4px 4px 0px 0px ${form.contactSocialBtnShadow}`
                  }"
                >Email</button>
                <button
                  class="px-4 py-2 text-sm font-bold border-[3px] rounded-lg"
                  :style="{
                    backgroundColor: form.contactSocialBtnBg,
                    color: form.contactSocialBtnText,
                    borderColor: form.contactSocialBtnBorder,
                    boxShadow: `4px 4px 0px 0px ${form.contactSocialBtnShadow}`
                  }"
                >LinkedIn</button>
              </div>
            </div>
          </div>
        </template>

        <!-- ===== FOOTER TAB ===== -->
        <template v-else-if="activeTab === 'footer'">
          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Footer Background</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('footerBg', FIELD_GROUPS.footerBg, 'Footer Background')"
              >
                <span v-if="savingSection === 'footerBg'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <AdminColorRow label="Footer Background" v-model="form.footerBgColor" />
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Text Colors</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('footerText', FIELD_GROUPS.footerText, 'Footer Text')"
              >
                <span v-if="savingSection === 'footerText'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Header/Title Text" v-model="form.footerHeaderText" />
              <AdminColorRow label="Content Text" v-model="form.footerContentText" />
              <AdminColorRow label="Copyright Text" v-model="form.footerCopyrightText" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Logo</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('footerLogo', FIELD_GROUPS.footerLogo, 'Footer Logo')"
              >
                <span v-if="savingSection === 'footerLogo'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AdminColorRow label="Logo Background" v-model="form.footerLogoBg" />
              <AdminColorRow label="Logo Border" v-model="form.footerLogoBorder" />
              <AdminColorRow label="Logo Shadow" v-model="form.footerLogoShadow" />
            </div>
          </div>

          <div class="neo-card p-6">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Social Buttons</h3>
              <button
                type="button"
                class="neo-btn-secondary font-black px-3 py-2 text-xs"
                :disabled="saving"
                @click="savePartial('footerSocial', FIELD_GROUPS.footerSocial, 'Footer Social Buttons')"
              >
                <span v-if="savingSection === 'footerSocial'">Saving...</span>
                <span v-else>Save</span>
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AdminColorRow label="Button Background" v-model="form.footerSocialBtnBg" />
              <AdminColorRow label="Button Border" v-model="form.footerSocialBtnBorder" />
              <AdminColorRow label="Button Text/Icon" v-model="form.footerSocialBtnText" />
              <AdminColorRow label="Button Shadow" v-model="form.footerSocialBtnShadow" />
            </div>
            <div class="mt-4">
              <p class="text-xs font-bold theme-text-secondary mb-2">Preview:</p>
              <div class="flex gap-2">
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center border-2"
                  :style="{
                    backgroundColor: form.footerSocialBtnBg,
                    borderColor: form.footerSocialBtnBorder,
                    color: form.footerSocialBtnText,
                    boxShadow: `2px 2px 0px 0px ${form.footerSocialBtnShadow}`
                  }"
                >
                  <span class="text-sm font-bold">G</span>
                </div>
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center border-2"
                  :style="{
                    backgroundColor: form.footerSocialBtnBg,
                    borderColor: form.footerSocialBtnBorder,
                    color: form.footerSocialBtnText,
                    boxShadow: `2px 2px 0px 0px ${form.footerSocialBtnShadow}`
                  }"
                >
                  <span class="text-sm font-bold">L</span>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- Actions -->
        <div class="flex flex-wrap gap-3 pt-4 border-t-[3px] theme-border">
          <button type="button" class="neo-btn-primary font-black" :disabled="saving" @click="save">
            <span v-if="savingSection === 'all'" class="flex items-center gap-2">
              <div class="neo-spinner w-4 h-4" style="border-top-color: var(--color-on-button)"></div>
              Saving...
            </span>
            <span v-else>Save All Settings</span>
          </button>
          <button type="button" class="neo-btn-secondary font-black" :disabled="saving" @click="resetToDefaults">
            <span v-if="savingSection === 'resetDefaults'" class="flex items-center gap-2">
              <div class="neo-spinner w-4 h-4" style="border-top-color: var(--color-text-secondary)"></div>
              Resetting...
            </span>
            <span v-else>Reset to Defaults</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';
import { usePublicSiteSettingsStore, type PublicSiteSettings } from '~/stores/publicSiteSettings';
import AdminColorRow from '~/components/admin/ColorRow.vue';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

const toast = useToastStore();
const pssStore = usePublicSiteSettingsStore();
const { apiFetch } = useApiClient();

const tabs = [
  { id: 'header', label: 'Header' },
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'tools', label: 'Tools' },
  { id: 'contact', label: 'Contact' },
  { id: 'footer', label: 'Footer' },
];

const activeTab = ref('header');
const loading = ref(true);
const saving = ref(false);
const savingSection = ref<string | null>(null);

const form = reactive<PublicSiteSettings>({
  headerBgColor: '#6FA8DC',
  footerBgColor: '#6FA8DC',
  cardBgColor: '#FFFFFF',
  cardBorderColor: '#B8C6DB',
  cardShadowColor: '#B8C6DB',
  heroPhotoSize: 'medium',
  heroPhotoBorder: '#B8C6DB',
  heroPhotoShadow: '#B8C6DB',
  primaryBtnBg: '#6FA8DC',
  primaryBtnText: '#FFFFFF',
  primaryBtnBorder: '#B8C6DB',
  primaryBtnShadow: '#B8C6DB',
  secondaryBtnBg: '#EAF4FB',
  secondaryBtnText: '#2C3E50',
  secondaryBtnBorder: '#B8C6DB',
  secondaryBtnShadow: '#B8C6DB',
  navLinkColor: '#FFFFFF',
  navLinkHoverBg: '#A7D3F5',
  badgeBgColor: '#EAF4FB',
  badgeBorderColor: '#B8C6DB',
  badgeTextColor: '#2C3E50',
  sectionAltBg: '#F4F9FD',
  ctaSectionBg: '#FFFFFF',
  heroSectionBg: '#FFFFFF',
  aboutSectionBg: '#FFFFFF',
  projectsSectionBg: '#F4F9FD',
  certificationsSectionBg: '#FFFFFF',
  experienceSectionBg: '#F4F9FD',
  toolsSectionBg: '#FFFFFF',
  contactSectionBg: '#F4F9FD',
  // About page detailed
  aboutBadgeBg: '#EAF4FB',
  aboutBadgeBorder: '#B8C6DB',
  aboutBadgeText: '#2C3E50',
  aboutTitleBg: '#6FA8DC',
  aboutTitleBorder: '#B8C6DB',
  aboutTitleText: '#FFFFFF',
  aboutTitleShadow: '#B8C6DB',
  aboutPhotoBorder: '#B8C6DB',
  aboutPhotoShadow: '#B8C6DB',
  aboutTextColor: '#4A5568',
  aboutInfoHeaderText: '#1A202C',
  aboutInfoContentText: '#4A5568',
  aboutEducationHeaderText: '#4A5568',
  aboutEducationContentText: '#2C3E50',
  aboutCardBg: '#FFFFFF',
  aboutCardBorder: '#B8C6DB',
  aboutCardShadow: '#B8C6DB',
  aboutOuterCardBg: '#F4F9FD',
  aboutOuterCardBorder: '#B8C6DB',
  aboutOuterCardShadow: '#B8C6DB',
  aboutSkillsCardBg: '#FFFFFF',
  aboutSkillsCardBorder: '#B8C6DB',
  aboutSkillsCardShadow: '#B8C6DB',
  aboutSkillBadgeBg: '#EAF4FB',
  aboutSkillBadgeBorder: '#B8C6DB',
  aboutSkillBadgeText: '#2C3E50',
  aboutBtnBg: '#EAF4FB',
  aboutBtnText: '#2C3E50',
  aboutBtnBorder: '#B8C6DB',
  aboutBtnShadow: '#B8C6DB',
  // Projects page detailed
  projectBadgeBg: '#EAF4FB',
  projectBadgeBorder: '#B8C6DB',
  projectBadgeText: '#2C3E50',
  projectsHeaderText: '#1A202C',
  projectsContentText: '#4A5568',
  projectFilterBadgeBg: '#FFFFFF',
  projectFilterBadgeBorder: '#B8C6DB',
  projectFilterBadgeText: '#2C3E50',
  projectFilterBadgeShadow: '#B8C6DB',
  projectCardBg: '#FFFFFF',
  projectCardBorder: '#B8C6DB',
  projectCardShadow: '#B8C6DB',
  projectPhotoHeight: 'medium',
  projectPopupBg: '#FFFFFF',
  projectPopupBorder: '#B8C6DB',
  projectPopupShadow: '#B8C6DB',
  projectBtnPrimaryBg: '#6FA8DC',
  projectBtnPrimaryText: '#FFFFFF',
  projectBtnPrimaryBorder: '#B8C6DB',
  projectBtnPrimaryShadow: '#B8C6DB',
  projectBtnSecondaryBg: '#EAF4FB',
  projectBtnSecondaryText: '#2C3E50',
  projectBtnSecondaryBorder: '#B8C6DB',
  projectBtnSecondaryShadow: '#B8C6DB',
  // Certifications page detailed
  certBadgeBg: '#EAF4FB',
  certBadgeBorder: '#B8C6DB',
  certBadgeText: '#2C3E50',
  certYearBadgeBg: '#EAF4FB',
  certYearBadgeBorder: '#B8C6DB',
  certYearBadgeText: '#2C3E50',
  certCardBg: '#FFFFFF',
  certCardBorder: '#B8C6DB',
  certCardShadow: '#B8C6DB',
  certCardHeaderText: '#1A202C',
  certCardContentText: '#4A5568',
  certBtnBg: '#6FA8DC',
  certBtnText: '#2C3E50',
  certBtnBorder: '#B8C6DB',
  certBtnHoverText: '#6FA8DC',
  // Experience page detailed
  experienceSectionHeaderText: '#1A202C',
  experienceSectionContentText: '#4A5568',
  expBadgeBg: '#EAF4FB',
  expBadgeBorder: '#B8C6DB',
  expBadgeText: '#2C3E50',
  expCardBg: '#FFFFFF',
  expCardBorder: '#B8C6DB',
  expCardShadow: '#B8C6DB',
  expCardBadgeBg: '#EAF4FB',
  expCardBadgeBorder: '#B8C6DB',
  expCardBadgeText: '#2C3E50',
  expCardHeaderText: '#1A202C',
  expCardSubHeaderText: '#4A5568',
  expCardContentText: '#4A5568',
  expTimelineDotBg: '#6FA8DC',
  expTimelineDotBorder: '#B8C6DB',
  expTimelineLineBg: '#B8C6DB',
  // Tools page detailed
  toolsBadgeBg: '#EAF4FB',
  toolsBadgeBorder: '#B8C6DB',
  toolsBadgeText: '#2C3E50',
  toolsHeaderText: '#1A202C',
  toolsContentText: '#4A5568',
  toolsCardBg: '#FFFFFF',
  toolsCardBorder: '#B8C6DB',
  toolsCardShadow: '#B8C6DB',
  toolsCategoryTitleText: '#2C3E50',
  toolsItemText: '#2C3E50',
  toolsTextColor: '#2C3E50',
  toolsIconBg: '#F4F9FD',
  toolsIconBorder: '#B8C6DB',
  toolsCategoryDotBg: '#6FA8DC',
  toolsCategoryDotBorder: '#B8C6DB',
  // Contact page detailed
  contactBadgeBg: '#EAF4FB',
  contactBadgeBorder: '#B8C6DB',
  contactBadgeText: '#2C3E50',
  contactHeaderText: '#1A202C',
  contactContentText: '#4A5568',
  contactCardBg: '#FFFFFF',
  contactCardBorder: '#B8C6DB',
  contactCardShadow: '#B8C6DB',
  contactTextColor: '#4A5568',
  contactLabelColor: '#2C3E50',
  contactInputBg: '#FFFFFF',
  contactInputBorder: '#B8C6DB',
  contactInputText: '#2C3E50',
  contactBtnBg: '#6FA8DC',
  contactBtnText: '#FFFFFF',
  contactBtnBorder: '#B8C6DB',
  contactBtnShadow: '#B8C6DB',
  contactDirectText: '#4A5568',
  contactSocialBtnBg: '#EAF4FB',
  contactSocialBtnText: '#2C3E50',
  contactSocialBtnBorder: '#B8C6DB',
  contactSocialBtnShadow: '#B8C6DB',
  // Header section detailed
  headerTextColor: '#FFFFFF',
  headerHoverBg: '#A7D3F5',
  headerHoverText: '#2C3E50',
  headerLogoBg: '#6FA8DC',
  headerLogoBorder: '#B8C6DB',
  headerLogoText: '#FFFFFF',
  headerLogoShadow: '#B8C6DB',
  sectionDividerColor: '#B8C6DB',
  // Home Hero section detailed
  homeHeroCardWidth: 'medium',
  homeHeroCardBg: '#FFFFFF',
  homeHeroCardBorder: '#B8C6DB',
  homeHeroCardShadow: '#B8C6DB',
  homeHeroBadgeBg: '#EAF4FB',
  homeHeroBadgeBorder: '#B8C6DB',
  homeHeroBadgeText: '#2C3E50',
  homeHeroHeaderText: '#1A202C',
  homeHeroContentText: '#4A5568',
  homeHeroExpBadgeBg: '#6FA8DC',
  homeHeroExpBadgeBorder: '#B8C6DB',
  homeHeroExpBadgeText: '#FFFFFF',
  homeHeroExpBadgeShadow: '#B8C6DB',
  homeHeroBtnBg: '#6FA8DC',
  homeHeroBtnText: '#FFFFFF',
  homeHeroBtnBorder: '#B8C6DB',
  homeHeroBtnShadow: '#B8C6DB',
  homeHeroAnotherDesignUrl: '',
  // Home About section detailed
  homeAboutBadgeBg: '#EAF4FB',
  homeAboutBadgeBorder: '#B8C6DB',
  homeAboutBadgeText: '#2C3E50',
  homeAboutHeaderText: '#1A202C',
  homeAboutContentText: '#4A5568',
  homeAboutInfoBadgeBg: '#EAF4FB',
  homeAboutInfoBadgeBorder: '#B8C6DB',
  homeAboutInfoBadgeText: '#2C3E50',
  homeAboutStatCardBg: '#FFFFFF',
  homeAboutStatCardBorder: '#B8C6DB',
  homeAboutStatCardShadow: '#B8C6DB',
  homeAboutStatNumberText: '#1A202C',
  homeAboutStatLabelText: '#4A5568',
  homeAboutBtnBg: '#EAF4FB',
  homeAboutBtnText: '#2C3E50',
  homeAboutBtnBorder: '#B8C6DB',
  homeAboutBtnShadow: '#B8C6DB',
  // Home Portfolio section detailed
  homePortfolioBadgeBg: '#EAF4FB',
  homePortfolioBadgeBorder: '#B8C6DB',
  homePortfolioBadgeText: '#2C3E50',
  homePortfolioHeaderText: '#1A202C',
  homePortfolioCardBg: '#FFFFFF',
  homePortfolioCardBorder: '#B8C6DB',
  homePortfolioCardShadow: '#B8C6DB',
  homePortfolioCardHeaderText: '#000000',
  homePortfolioCardContentText: '#FFFFFF',
  homePortfolioTechBadgeBg: '#EAF4FB',
  homePortfolioTechBadgeBorder: '#B8C6DB',
  homePortfolioTechBadgeText: '#2C3E50',
  homePortfolioBtnBg: '#EAF4FB',
  homePortfolioBtnText: '#2C3E50',
  homePortfolioBtnBorder: '#B8C6DB',
  homePortfolioBtnShadow: '#B8C6DB',
  // Home Certifications section detailed
  homeCertBadgeBg: '#EAF4FB',
  homeCertBadgeBorder: '#B8C6DB',
  homeCertBadgeText: '#2C3E50',
  homeCertHeaderText: '#1A202C',
  homeCertCardBg: '#37FF00',
  homeCertCardBorder: '#000000',
  homeCertCardShadow: '#000000',
  homeCertCardHeaderText: '#FFFFFF',
  homeCertCardContentText: '#000000',
  homeCertViewBtnBg: '#0095FF',
  homeCertViewBtnText: '#0080FF',
  homeCertViewBtnBorder: '#B8C6DB',
  homeCertViewBtnShadow: '#B8C6DB',
  homeCertAllBtnBg: '#000000',
  homeCertAllBtnText: '#000000',
  homeCertAllBtnBorder: '#000000',
  homeCertAllBtnShadow: '#000000',
  // Home Experience section detailed
  homeExpBadgeBg: '#EAF4FB',
  homeExpBadgeBorder: '#B8C6DB',
  homeExpBadgeText: '#2C3E50',
  homeExpHeaderText: '#0055FF',
  homeExpCardBg: '#FFFFFF',
  homeExpCardBorder: '#B8C6DB',
  homeExpCardShadow: '#B8C6DB',
  homeExpCardHeaderText: '#FFFFFF',
  homeExpCardContentText: '#FFFFFF',
  homeExpBtnBg: '#EAF4FB',
  homeExpBtnText: '#2C3E50',
  homeExpBtnBorder: '#B8C6DB',
  homeExpBtnShadow: '#B8C6DB',
  // Home Tools section detailed
  homeToolsBadgeBg: '#EAF4FB',
  homeToolsBadgeBorder: '#B8C6DB',
  homeToolsBadgeText: '#2C3E50',
  homeToolsHeaderText: '#000000',
  homeToolsCardBg: '#FFFFFF',
  homeToolsCardBorder: '#B8C6DB',
  homeToolsCardShadow: '#B8C6DB',
  homeToolsCardHeaderText: '#FFFFFF',
  homeToolsToolBadgeBg: '#EAF4FB',
  homeToolsToolBadgeBorder: '#B8C6DB',
  homeToolsToolBadgeText: '#2C3E50',
  homeToolsBtnBg: '#EAF4FB',
  homeToolsBtnText: '#2C3E50',
  homeToolsBtnBorder: '#B8C6DB',
  homeToolsBtnShadow: '#B8C6DB',
  // Home CTA section detailed
  homeCtaHeaderText: '#1A202C',
  homeCtaContentText: '#4A5568',
  homeCtaBtnBg: '#6FA8DC',
  homeCtaBtnText: '#FFFFFF',
  homeCtaBtnBorder: '#B8C6DB',
  homeCtaBtnShadow: '#B8C6DB',
  // Footer section detailed
  footerHeaderText: '#FFFFFF',
  footerContentText: '#E2E8F0',
  footerCopyrightText: '#CBD5E0',
  footerLogoBg: '#FFFFFF',
  footerLogoBorder: '#B8C6DB',
  footerLogoShadow: '#B8C6DB',
  footerSocialBtnBg: '#FFFFFF',
  footerSocialBtnBorder: '#B8C6DB',
  footerSocialBtnText: '#2C3E50',
  footerSocialBtnShadow: '#B8C6DB',
});

const toUpdateDto = () => {
  // Return only the fields that the backend accepts (strip id, updatedAt)
  const { id, updatedAt, ...rest } = form;
  return rest;
};

const isValidHex = (value: string) => /^#([0-9a-fA-F]{6})$/.test(value);

const NON_COLOR_FIELDS = new Set<string>([
  'heroPhotoSize',
  'projectPhotoHeight',
  'homeHeroCardWidth',
  'homeHeroAnotherDesignUrl',
]);

const isValidHttpUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

const buildPartialDto = (fields: Array<keyof PublicSiteSettings>) => {
  const dto: Partial<PublicSiteSettings> = {};
  for (const field of fields) {
    if (field === 'id' || field === 'updatedAt') continue;
    // @ts-expect-error index access
    dto[field] = form[field];
  }
  return dto;
};

const validateFieldsAsColors = (fields: Array<keyof PublicSiteSettings>) => {
  for (const field of fields) {
    if (field === 'id' || field === 'updatedAt') continue;
    if (NON_COLOR_FIELDS.has(String(field))) continue;
    const value = form[field];
    if (typeof value === 'string' && !isValidHex(value)) {
      toast.error(`Invalid color for ${String(field)}. Use #RRGGBB format.`);
      return false;
    }
  }
  return true;
};

const normalizeForm = () => {
  // Deprecated option: Home Hero Photo Card Size no longer supports 2:3.
  // If backend/DB still has 'large', treat it as 'medium (4:3)'.
  if (form.homeHeroCardWidth === 'large') {
    form.homeHeroCardWidth = 'medium';
  }
};

const savePartial = async (sectionId: string, fields: Array<keyof PublicSiteSettings>, successLabel?: string) => {
  if (!validateFieldsAsColors(fields)) return;

  if (fields.includes('homeHeroAnotherDesignUrl')) {
    const raw = String(form.homeHeroAnotherDesignUrl || '').trim();
    if (raw.length > 0 && !isValidHttpUrl(raw)) {
      toast.error('Invalid URL for Another Design. Use http(s)://...');
      return;
    }
  }

  saving.value = true;
  savingSection.value = sectionId;
  try {
    const updated = await apiFetch<PublicSiteSettings>('/public-site-settings', {
      method: 'PUT',
      body: buildPartialDto(fields),
    });
    Object.assign(form, updated);
    normalizeForm();
    pssStore.setSettings(updated, { broadcast: true });
    toast.success(successLabel ? `Saved: ${successLabel}` : 'Settings saved!');
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to save settings');
  } finally {
    saving.value = false;
    savingSection.value = null;
  }
};

const FIELD_GROUPS: Record<string, Array<keyof PublicSiteSettings>> = {
  headerBg: ['headerBgColor', 'headerTextColor', 'headerHoverBg', 'headerHoverText'],
  headerLogo: ['headerLogoBg', 'headerLogoText', 'headerLogoBorder', 'headerLogoShadow'],
  sectionDivider: ['sectionDividerColor'],
  aboutPageBg: ['aboutSectionBg'],
  aboutBadge: ['aboutBadgeBg', 'aboutBadgeBorder', 'aboutBadgeText'],
  aboutTitle: ['aboutTitleBg', 'aboutTitleBorder', 'aboutTitleText', 'aboutTitleShadow'],
  aboutPhoto: ['aboutPhotoBorder', 'aboutPhotoShadow'],
  aboutText: ['aboutTextColor'],
  aboutInfoCard: ['aboutCardBg', 'aboutCardBorder', 'aboutCardShadow'],
  aboutInfoText: ['aboutInfoHeaderText', 'aboutInfoContentText'],
  aboutEducationText: ['aboutEducationHeaderText', 'aboutEducationContentText'],
  aboutSkillsCards: ['aboutSkillsCardBg', 'aboutSkillsCardBorder', 'aboutSkillsCardShadow'],
  aboutSkillBadges: ['aboutSkillBadgeBg', 'aboutSkillBadgeBorder', 'aboutSkillBadgeText'],
  aboutButtons: ['aboutBtnBg', 'aboutBtnText', 'aboutBtnBorder', 'aboutBtnShadow'],
  homeHero: [
    'heroSectionBg',
    'homeHeroCardWidth',
    'homeHeroCardBg',
    'homeHeroCardBorder',
    'homeHeroCardShadow',
    'homeHeroBadgeBg',
    'homeHeroBadgeBorder',
    'homeHeroBadgeText',
    'homeHeroHeaderText',
    'homeHeroContentText',
    'homeHeroExpBadgeBg',
    'homeHeroExpBadgeBorder',
    'homeHeroExpBadgeText',
    'homeHeroExpBadgeShadow',
    'homeHeroBtnBg',
    'homeHeroBtnText',
    'homeHeroBtnBorder',
    'homeHeroBtnShadow',
    'homeHeroAnotherDesignUrl',
  ],
  homeAbout: [
    'aboutSectionBg',
    'homeAboutBadgeBg',
    'homeAboutBadgeBorder',
    'homeAboutBadgeText',
    'homeAboutHeaderText',
    'homeAboutContentText',
    'homeAboutInfoBadgeBg',
    'homeAboutInfoBadgeBorder',
    'homeAboutInfoBadgeText',
    'homeAboutStatCardBg',
    'homeAboutStatCardBorder',
    'homeAboutStatCardShadow',
    'homeAboutStatNumberText',
    'homeAboutStatLabelText',
    'homeAboutBtnBg',
    'homeAboutBtnText',
    'homeAboutBtnBorder',
    'homeAboutBtnShadow',
  ],
  homePortfolio: [
    'projectsSectionBg',
    'homePortfolioBadgeBg',
    'homePortfolioBadgeBorder',
    'homePortfolioBadgeText',
    'homePortfolioHeaderText',
    'homePortfolioCardBg',
    'homePortfolioCardBorder',
    'homePortfolioCardShadow',
    'homePortfolioCardHeaderText',
    'homePortfolioCardContentText',
    'homePortfolioTechBadgeBg',
    'homePortfolioTechBadgeBorder',
    'homePortfolioTechBadgeText',
    'homePortfolioBtnBg',
    'homePortfolioBtnText',
    'homePortfolioBtnBorder',
    'homePortfolioBtnShadow',
  ],
  homeCerts: [
    'certificationsSectionBg',
    'homeCertBadgeBg',
    'homeCertBadgeBorder',
    'homeCertBadgeText',
    'homeCertHeaderText',
    'homeCertCardBg',
    'homeCertCardBorder',
    'homeCertCardShadow',
    'homeCertCardHeaderText',
    'homeCertCardContentText',
    'homeCertViewBtnBg',
    'homeCertViewBtnText',
    'homeCertViewBtnBorder',
    'homeCertViewBtnShadow',
    'homeCertAllBtnBg',
    'homeCertAllBtnText',
    'homeCertAllBtnBorder',
    'homeCertAllBtnShadow',
  ],
  homeExperience: [
    'experienceSectionBg',
    'homeExpBadgeBg',
    'homeExpBadgeBorder',
    'homeExpBadgeText',
    'homeExpHeaderText',
    'homeExpCardBg',
    'homeExpCardBorder',
    'homeExpCardShadow',
    'homeExpCardHeaderText',
    'homeExpCardContentText',
    'homeExpBtnBg',
    'homeExpBtnText',
    'homeExpBtnBorder',
    'homeExpBtnShadow',
  ],
  homeTools: [
    'toolsSectionBg',
    'homeToolsBadgeBg',
    'homeToolsBadgeBorder',
    'homeToolsBadgeText',
    'homeToolsHeaderText',
    'homeToolsCardBg',
    'homeToolsCardBorder',
    'homeToolsCardShadow',
    'homeToolsCardHeaderText',
    'homeToolsToolBadgeBg',
    'homeToolsToolBadgeBorder',
    'homeToolsToolBadgeText',
    'homeToolsBtnBg',
    'homeToolsBtnText',
    'homeToolsBtnBorder',
    'homeToolsBtnShadow',
  ],
  homeCta: [
    'ctaSectionBg',
    'homeCtaHeaderText',
    'homeCtaContentText',
    'homeCtaBtnBg',
    'homeCtaBtnText',
    'homeCtaBtnBorder',
    'homeCtaBtnShadow',
  ],
  projectsPageBg: ['projectsSectionBg'],
  projectsPageBadge: ['projectBadgeBg', 'projectBadgeBorder', 'projectBadgeText'],
  projectsTextAndBadges: [
    'projectsHeaderText',
    'projectsContentText',
    'projectFilterBadgeBg',
    'projectFilterBadgeBorder',
    'projectFilterBadgeText',
    'projectFilterBadgeShadow',
  ],
  projectsCards: ['projectCardBg', 'projectCardBorder', 'projectCardShadow', 'projectPhotoHeight'],
  projectsPopup: ['projectPopupBg', 'projectPopupBorder', 'projectPopupShadow'],
  projectsBtnPrimary: ['projectBtnPrimaryBg', 'projectBtnPrimaryText', 'projectBtnPrimaryBorder', 'projectBtnPrimaryShadow'],
  projectsBtnSecondary: [
    'projectBtnSecondaryBg',
    'projectBtnSecondaryText',
    'projectBtnSecondaryBorder',
    'projectBtnSecondaryShadow',
  ],
  certPageBg: ['certificationsSectionBg'],
  certPageBadge: ['certBadgeBg', 'certBadgeBorder', 'certBadgeText'],
  certYearBadge: ['certYearBadgeBg', 'certYearBadgeBorder', 'certYearBadgeText'],
  certCards: ['certCardBg', 'certCardBorder', 'certCardShadow', 'certCardHeaderText', 'certCardContentText'],
  certViewBtn: ['certBtnBg', 'certBtnText', 'certBtnBorder', 'certBtnHoverText'],
  expPageBg: ['experienceSectionBg'],
  expPageBadge: ['expBadgeBg', 'expBadgeBorder', 'expBadgeText'],
  expPageText: ['experienceSectionHeaderText', 'experienceSectionContentText'],
  expCards: ['expCardBg', 'expCardBorder', 'expCardShadow'],
  expCardBadge: ['expCardBadgeBg', 'expCardBadgeBorder', 'expCardBadgeText'],
  expCardText: ['expCardHeaderText', 'expCardSubHeaderText', 'expCardContentText'],
  expTimeline: ['expTimelineDotBg', 'expTimelineDotBorder', 'expTimelineLineBg'],
  toolsPageBg: ['toolsSectionBg'],
  toolsSectionBadge: ['toolsBadgeBg', 'toolsBadgeBorder', 'toolsBadgeText'],
  toolsSectionText: ['toolsHeaderText', 'toolsContentText'],
  toolsCards: ['toolsCardBg', 'toolsCardBorder', 'toolsCardShadow'],
  toolsTitleDot: ['toolsCategoryDotBg', 'toolsCategoryDotBorder'],
  toolsIcons: ['toolsIconBg', 'toolsIconBorder'],
  toolsCategoryTitleText: ['toolsCategoryTitleText'],
  toolsItemText: ['toolsItemText'],
  toolsText: ['toolsTextColor'],
  contactPageBg: ['contactSectionBg'],
  contactSectionBadge: ['contactBadgeBg', 'contactBadgeBorder', 'contactBadgeText'],
  contactSectionText: ['contactHeaderText', 'contactContentText'],
  contactCard: ['contactCardBg', 'contactCardBorder', 'contactCardShadow'],
  contactCardText: ['contactLabelColor', 'contactInputText'],
  contactDirectText: ['contactDirectText'],
  contactInputs: ['contactInputBg', 'contactInputBorder', 'contactInputText', 'contactLabelColor'],
  contactText: ['contactTextColor', 'contactLabelColor'],
  contactBtn: ['contactBtnBg', 'contactBtnText', 'contactBtnBorder', 'contactBtnShadow'],
  contactSocial: ['contactSocialBtnBg', 'contactSocialBtnText', 'contactSocialBtnBorder', 'contactSocialBtnShadow'],
  footerBg: ['footerBgColor'],
  footerText: ['footerHeaderText', 'footerContentText', 'footerCopyrightText'],
  footerLogo: ['footerLogoBg', 'footerLogoBorder', 'footerLogoShadow'],
  footerSocial: ['footerSocialBtnBg', 'footerSocialBtnBorder', 'footerSocialBtnText', 'footerSocialBtnShadow'],
};

// Live preview
watch(form, () => {
  pssStore.setSettings(toUpdateDto());
}, { deep: true });

const load = async () => {
  try {
    const data = await apiFetch<PublicSiteSettings>('/public-site-settings', {
      signal: AbortSignal.timeout(5000),
    });
    Object.assign(form, data);
    normalizeForm();
    pssStore.setSettings(data);
  } catch {
    // Keep defaults
  } finally {
    loading.value = false;
  }
};

onMounted(load);

const save = async () => {
  const allFields = Object.keys(toUpdateDto()) as Array<keyof PublicSiteSettings>;
  await savePartial('all', allFields, 'All Settings');
};

const resetToDefaults = async () => {
  saving.value = true;
  savingSection.value = 'resetDefaults';
  try {
    const defaults = await apiFetch<PublicSiteSettings>('/public-site-settings/defaults');
    Object.assign(form, defaults);
    pssStore.setSettings(defaults, { broadcast: true });
    toast.success('Reset to default settings');
  } catch {
    toast.error('Failed to load defaults');
  } finally {
    saving.value = false;
    savingSection.value = null;
  }
};
</script>

<style scoped>
.cert-credential-link {
  color: var(--cert-link-text);
  border-color: var(--cert-link-border);
}

.cert-credential-link:hover {
  color: var(--cert-link-hover-text);
  border-color: var(--cert-link-hover-border);
}
</style>
