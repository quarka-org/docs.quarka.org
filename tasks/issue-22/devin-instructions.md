# Devin Instructions: Add German Language Support to QA Advisor Documentation

## 🎯 Task Overview

あなたは QA Advisor ドキュメントサイトにドイツ語（de）サポートを追加する作業を担当します。現在の英語コンテンツをそのまま翻訳し、フランス語・スペイン語対応と同様の多言語化を実装してください。

## 📋 Related Information

- **Issue**: #22
- **Branch**: `issue-22/add-german-language-support`
- **Repository**: https://github.com/quarka-org/docs.quarka.org
- **Reference PRs**: 
  - French support Issue #20: https://github.com/quarka-org/docs.quarka.org/issues/20
  - Spanish support PR #19: https://github.com/quarka-org/docs.quarka.org/pull/19
  - Japanese support PR #12: https://github.com/quarka-org/docs.quarka.org/pull/12

## 🔧 Technical Implementation

### Phase 1: Configuration Setup

1. **Update docusaurus.config.js**
   - Add 'de' to the locales array: `locales: ['en', 'ja', 'es', 'fr', 'de']`
   - Add German locale configuration:
   ```javascript
   de: {
     htmlLang: 'de',
     label: 'Deutsch',
   }
   ```
   - Update search plugin languages: `languages: ['en', 'ja', 'es', 'fr', 'de']`

### Phase 2: UI Translation Files

Create the following German translation files following the existing French/Spanish/Japanese patterns:

1. **`i18n/de/code.json`** - Homepage and general UI translations
2. **`i18n/de/docusaurus-theme-classic/navbar.json`** - Navigation menu
3. **`i18n/de/docusaurus-theme-classic/footer.json`** - Footer sections
4. **`i18n/de/docusaurus-plugin-content-docs/current.json`** - Documentation structure
5. **`i18n/de/docusaurus-plugin-content-blog/options.json`** - Blog section

### Phase 3: Documentation Content Translation

Translate all English markdown content to German:

#### User Manual (18 files)
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/index.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/index.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/installation.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/when-defer-jquery.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/set-data-limit-wpconfig.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/index.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/01-dashboard.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/02-brains.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/03-realtime.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/04-audience.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/05-acquisition.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/06-landing-pages.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/07-top-growing.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/08-all-pages.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/09-goals.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/10-license-activation.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/11-settings.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/12-help.md`
- `i18n/de/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/heatmaps.md`

#### Other Content (5 files)
- `i18n/de/docusaurus-plugin-content-docs/current/developer-manual/index.md`
- `i18n/de/docusaurus-plugin-content-docs/current/faq/index.md`
- `i18n/de/docusaurus-plugin-content-docs/current/release-notes/index.md`
- `i18n/de/docusaurus-plugin-content-docs/current/release-notes/2025/qa-advisor-beta-4-9-0.md`
- `i18n/de/docusaurus-plugin-content-blog/2025-05-25-welcome.md`

## 🎨 German Translation Guidelines

### Language Style Requirements
- **Formality**: Use formal "Sie" form throughout all translations
- **WordPress Standards**: Follow WordPress official German translation standards
- **Regional Neutrality**: Use standard German suitable for Germany, Austria, Switzerland, and other German-speaking regions
- **Technical Terms**: Use English-German bilingual approach (e.g., "Heatmap (Wärmekarte)")

### Translation Quality Standards
- **Semantic Translation**: Preserve meaning over literal translation
- **Technical Accuracy**: Maintain accuracy for all code examples and procedures
- **Markdown Structure**: Preserve all links, formatting, and metadata
- **Cultural Adaptation**: Adapt content for German-speaking WordPress community

### Common WordPress German Terms
- Plugin → Plugin (or Erweiterung)
- Dashboard → Dashboard (or Übersicht)
- Settings → Einstellungen
- Analytics → Analysen
- Heatmap → Wärmekarte
- Real-time → Echtzeit
- Installation → Installation
- Configuration → Konfiguration

## 🔍 Reference Sources

### Examine Existing Translations
Before starting, examine the existing translations to understand the structure and patterns:

1. **French UI files**: Look at `i18n/fr/` directory structure (most recent reference)
2. **Spanish translations**: Examine `i18n/es/` for additional patterns
3. **Japanese translations**: Reference `i18n/ja/` for structural consistency

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
2. **Development Server**: `npm run start -- --locale de` must work properly
3. **German Site Access**: Verify German site is accessible at `http://localhost:3000/de/`
4. **Language Switching**: Confirm language dropdown includes "Deutsch" and switching works
5. **Navigation**: Test all German navigation links work correctly
6. **Content Display**: Verify all translated content displays properly

### Content Verification
- [ ] All 23 files translated completely
- [ ] No English text remaining in German pages
- [ ] All internal links functional
- [ ] Code examples and formatting preserved
- [ ] Metadata and frontmatter correctly translated

## 📤 Deliverables

### Pull Request Requirements
Create a comprehensive PR with:

1. **Title**: "Add comprehensive German translations for QA Advisor documentation"

2. **Description**: Include:
   - Overview of changes
   - Translation approach and standards used
   - Testing results
   - File count and structure
   - Screenshots of German site

3. **Files Changed**: All German translation files (approximately 28 files)

4. **Commit Strategy**: Use logical commits:
   - Configuration updates
   - UI translation files
   - Documentation content translation

## 🚨 Important Notes

### Critical Requirements
- **No Independent Content**: Only translate existing English content, do not create new content
- **Preserve Structure**: Maintain exact same file structure and organization
- **Consistent Terminology**: Use consistent German technical terms throughout
- **Quality Focus**: High-quality, professional German suitable for technical documentation

### Success Criteria
- German site builds and runs without errors
- All navigation and UI elements in German
- Complete content translation with proper formatting
- Language switching functionality works
- Professional German quality suitable for WordPress community

## 🎯 Final Goal

The successful completion of this task will provide German-speaking WordPress users with complete access to QA Advisor documentation in their native language, completing the 5-language support (English, Japanese, Spanish, French, German) for QA Advisor's global expansion.

---

**Estimated Time**: 3-4 hours  
**Complexity**: Medium (following established patterns)  
**Priority**: High
