# Devin Instructions: Add French Language Support to QA Advisor Documentation

## 🎯 Task Overview

あなたは QA Advisor ドキュメントサイトにフランス語（fr）サポートを追加する作業を担当します。現在の英語コンテンツをそのまま翻訳し、スペイン語対応と同様の多言語化を実装してください。

## 📋 Related Information

- **Issue**: #20
- **Branch**: `issue-20/add-french-language-support`
- **Repository**: https://github.com/quarka-org/docs.quarka.org
- **Reference PRs**: 
  - Spanish support PR #19: https://github.com/quarka-org/docs.quarka.org/pull/19
  - Japanese support PR #12: https://github.com/quarka-org/docs.quarka.org/pull/12

## 🔧 Technical Implementation

### Phase 1: Configuration Setup

1. **Update docusaurus.config.js**
   - Add 'fr' to the locales array: `locales: ['en', 'ja', 'es', 'fr']`
   - Add French locale configuration:
   ```javascript
   fr: {
     htmlLang: 'fr',
     label: 'Français',
   }
   ```
   - Update search plugin languages: `languages: ['en', 'ja', 'es', 'fr']`

### Phase 2: UI Translation Files

Create the following French translation files following the existing Spanish/Japanese patterns:

1. **`i18n/fr/code.json`** - Homepage and general UI translations
2. **`i18n/fr/docusaurus-theme-classic/navbar.json`** - Navigation menu
3. **`i18n/fr/docusaurus-theme-classic/footer.json`** - Footer sections
4. **`i18n/fr/docusaurus-plugin-content-docs/current.json`** - Documentation structure
5. **`i18n/fr/docusaurus-plugin-content-blog/options.json`** - Blog section

### Phase 3: Documentation Content Translation

Translate all English markdown content to French:

#### User Manual (18 files)
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/index.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/index.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/installation.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/when-defer-jquery.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/set-data-limit-wpconfig.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/index.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/01-dashboard.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/02-brains.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/03-realtime.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/04-audience.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/05-acquisition.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/06-landing-pages.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/07-top-growing.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/08-all-pages.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/09-goals.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/10-license-activation.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/11-settings.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/12-help.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/heatmaps.md`

#### Other Content (5 files)
- `i18n/fr/docusaurus-plugin-content-docs/current/developer-manual/index.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/faq/index.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/release-notes/index.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/release-notes/2025/qa-advisor-beta-4-9-0.md`
- `i18n/fr/docusaurus-plugin-content-blog/2025-05-25-welcome.md`

## 🎨 French Translation Guidelines

### Language Style Requirements
- **Formality**: Use formal "vous" form throughout all translations
- **WordPress Standards**: Follow WordPress official French translation standards
- **Regional Neutrality**: Use standard French suitable for France, Canada, Belgium, and other French-speaking regions
- **Technical Terms**: Use English-French bilingual approach (e.g., "Heatmap (carte de chaleur)")

### Translation Quality Standards
- **Semantic Translation**: Preserve meaning over literal translation
- **Technical Accuracy**: Maintain accuracy for all code examples and procedures
- **Markdown Structure**: Preserve all links, formatting, and metadata
- **Cultural Adaptation**: Adapt content for French-speaking WordPress community

### Common WordPress French Terms
- Plugin → Extension
- Dashboard → Tableau de bord
- Settings → Paramètres
- Analytics → Analyses
- Heatmap → Carte de chaleur
- Real-time → Temps réel
- Installation → Installation
- Configuration → Configuration

## 🔍 Reference Sources

### Examine Existing Translations
Before starting, examine the existing Spanish translations to understand the structure and patterns:

1. **Spanish UI files**: Look at `i18n/es/` directory structure
2. **Spanish content**: Examine `i18n/es/docusaurus-plugin-content-docs/current/` for content translation patterns
3. **Japanese translations**: Reference `i18n/ja/` for additional patterns

### English Source Files
Translate from these English source files in the `docs/` directory:
- `docs/user-manual/`
- `docs/developer-manual/`
- `docs/faq/`
- `docs/release-notes/`
- `blog/2025-05-25-welcome.md`

## ✅ Testing Requirements

### Local Testing
1. **Build Test**: `npm run build` must complete without errors
2. **Development Server**: `npm run start -- --locale fr` must work properly
3. **French Site Access**: Verify French site is accessible at `http://localhost:3000/fr/`
4. **Language Switching**: Confirm language dropdown includes "Français" and switching works
5. **Navigation**: Test all French navigation links work correctly
6. **Content Display**: Verify all translated content displays properly

### Content Verification
- [ ] All 23 files translated completely
- [ ] No English text remaining in French pages
- [ ] All internal links functional
- [ ] Code examples and formatting preserved
- [ ] Metadata and frontmatter correctly translated

## 📤 Deliverables

### Pull Request Requirements
Create a comprehensive PR with:

1. **Title**: "Add comprehensive French translations for QA Advisor documentation"

2. **Description**: Include:
   - Overview of changes
   - Translation approach and standards used
   - Testing results
   - File count and structure
   - Screenshots of French site

3. **Files Changed**: All French translation files (approximately 28 files)

4. **Commit Strategy**: Use logical commits:
   - Configuration updates
   - UI translation files
   - Documentation content translation

## 🚨 Important Notes

### Critical Requirements
- **No Independent Content**: Only translate existing English content, do not create new content
- **Preserve Structure**: Maintain exact same file structure and organization
- **Consistent Terminology**: Use consistent French technical terms throughout
- **Quality Focus**: High-quality, professional French suitable for technical documentation

### Success Criteria
- French site builds and runs without errors
- All navigation and UI elements in French
- Complete content translation with proper formatting
- Language switching functionality works
- Professional French quality suitable for WordPress community

## 🎯 Final Goal

The successful completion of this task will provide French-speaking WordPress users with complete access to QA Advisor documentation in their native language, matching the quality and completeness of the existing English, Japanese, and Spanish versions.

---

**Estimated Time**: 3-4 hours  
**Complexity**: Medium (following established patterns)  
**Priority**: High
