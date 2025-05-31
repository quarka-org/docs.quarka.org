---
sidebar_position: 3
title: FAQs (Getting Started)
---

# Frequently Asked Questions - Getting Started

Common questions and answers for new QA Advisor users.

## Installation Questions

### Q: Is QA Advisor compatible with my WordPress version?

**A:** QA Advisor requires WordPress 5.0 or higher. We recommend always using the latest stable version of WordPress for security and compatibility.

### Q: Can I install QA Advisor on multiple sites?

**A:** 
- **Beta Version**: Can be used on unlimited sites
- **Free Version** (coming soon): Limited to 1 site
- **Pro Version** (coming soon): Multiple site licenses available

### Q: Will QA Advisor slow down my website?

**A:** QA Advisor is optimized for performance:
- Asynchronous script loading
- Minimal impact (typically less than 100ms)
- Smart caching system
- CDN support for assets

Most users see no noticeable performance impact.

### Q: Is QA Advisor compatible with page builders?

**A:** Yes! QA Advisor works with:
- Elementor
- Gutenberg (Block Editor)
- Divi
- Beaver Builder
- WPBakery
- And most other page builders

## Setup Questions

### Q: What data does QA Advisor collect?

**A:** QA Advisor collects:
- Click locations and frequency
- Scroll depth
- Mouse movement patterns
- Page views and session duration
- Device and browser information
- Geographic location (country/city level)

**Not collected:**
- Personal information
- Email addresses
- Form input data (unless specifically enabled)
- Payment information

### Q: How do I exclude my own visits from tracking?

**A:** Several methods:

1. **User Role Exclusion** (Recommended)
   - Go to Settings → QA Advisor → Tracking
   - Uncheck "Administrator" role

2. **IP Exclusion**
   - Settings → QA Advisor → Filters
   - Add your IP address

3. **Cookie Method**
   - Use the "Exclude My Visits" button in dashboard

### Q: What's the difference between heatmaps and recordings?

**A:**
- **Heatmaps**: Aggregated data from all users showing patterns
- **Session Recordings**: Individual user sessions (Premium feature)

Heatmaps are included in all versions, while recordings are a premium feature.

## Data & Privacy Questions

### Q: Is QA Advisor GDPR compliant?

**A:** Yes! QA Advisor includes:
- IP anonymization options
- Cookie consent integration
- Data deletion tools
- Export capabilities
- Privacy-by-design architecture

Enable "GDPR Compliance Mode" in settings for full compliance.

### Q: Where is my data stored?

**A:** 
- **Beta/Self-hosted**: Your WordPress database
- **Cloud Version** (coming): Secure cloud servers with encryption
- All data is encrypted and backed up regularly

### Q: Can visitors opt-out of tracking?

**A:** Yes, multiple ways:
- Respect "Do Not Track" browser setting
- Cookie consent banner integration
- Direct opt-out link
- JavaScript API for custom implementation

## Technical Questions

### Q: What browsers are supported?

**A:** Full support for:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

Limited support:
- Internet Explorer 11 (basic tracking only)
- Older mobile browsers

### Q: Does QA Advisor work with caching plugins?

**A:** Yes! Compatible with:
- WP Rocket
- W3 Total Cache
- WP Super Cache
- LiteSpeed Cache
- Cloudflare

No special configuration needed in most cases.

### Q: Can I track AJAX content?

**A:** Yes! QA Advisor automatically tracks:
- Dynamic content updates
- Single Page Applications (SPA)
- AJAX form submissions
- Infinite scroll content

## Troubleshooting Questions

### Q: Why don't I see any data?

**A:** Check these common issues:

1. **Just Installed**: Wait 5-10 minutes for initial data
2. **Caching**: Clear all caches (browser, plugin, CDN)
3. **Ad Blockers**: May block tracking scripts
4. **JavaScript Errors**: Check browser console
5. **Excluded Role**: Ensure you're not excluding yourself

### Q: Heatmaps are not showing

**A:** Heatmaps require:
- Minimum 10 page interactions
- At least 1 hour of data collection
- JavaScript enabled in visitor browsers
- Correct page selection in dashboard

### Q: Getting "License Invalid" error

**A:** For beta users:
- License not required during beta
- Click "Skip" or "Continue without license"
- Contact support if error persists

## Feature Questions

### Q: What's included in the Beta version?

**A:** Beta includes:
- All heatmap types (click, move, scroll)
- Basic analytics dashboard
- Page-level insights
- Export capabilities
- Email support

**Not included** (coming in Pro):
- Session recordings
- Advanced segments
- A/B testing
- API access
- Priority support

### Q: Can I export my data?

**A:** Yes! Export options:
- CSV format for raw data
- PNG/PDF for heatmap images
- JSON for API integration
- Full database export

### Q: How long is data retained?

**A:** Default retention:
- Beta: 90 days
- Free (coming): 30 days  
- Pro (coming): 365 days
- Enterprise: Unlimited

You can adjust retention in Settings.

## Getting Help

### Q: Where can I get support?

**A:** Support channels:
- **Email**: support@quarka.org
- **Documentation**: You're here!
- **Community Forum**: Coming soon
- **GitHub**: For bug reports

### Q: How do I report a bug?

**A:** 
1. Check if it's already reported on GitHub
2. Gather information:
   - WordPress version
   - PHP version
   - Error messages
   - Steps to reproduce
3. Submit via GitHub Issues or email support

### Q: Are there video tutorials?

**A:** Coming soon! Meanwhile:
- Follow our [YouTube channel](#)
- Check the [blog](https://quarka.org/blog) for tutorials
- Join our [newsletter](https://quarka.org/qa-advisor-newsletter/) for updates

---

Still have questions? Email us at support@quarka.org or [tweet us](https://x.com/QA_Analytics)!
