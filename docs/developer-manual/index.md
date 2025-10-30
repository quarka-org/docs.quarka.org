---
sidebar_position: 1
---

# Developer Manual

Welcome to the QA Assistant Developer Manual. Here you'll discover how to unlock the full potential of your data-driven assistant through programmatic access.

---

## The Future of Analytics: Talk to Your Data

Imagine asking your website's data questions in natural language:

> "Show me the top 10 pages visited by mobile users last week"

Instead of clicking through dashboards, you simply **query** your data. This is the vision of QA Assistant as a **data-driven assistant** — where analytics becomes a conversation, not a report.

---

## Introducing QA Assistant API (Preview)

We're developing a REST API that gives you programmatic access to all your analytics data. Whether you're building custom dashboards, integrating with AI tools, or automating reports, the API will be your gateway.

### Why This Matters

**For Developers:**
- Build custom analytics into your apps
- Automate data exports and reports
- Create personalized dashboards for clients

**For AI Enthusiasts:**
- Connect QA Assistant to Claude, ChatGPT, or other AI tools
- Let AI analyze your traffic patterns and suggest improvements
- Build intelligent agents that understand your website's behavior

**For Power Users:**
- Query data programmatically without the UI
- Combine QA Assistant data with other sources
- Schedule automated reports via scripts

---

## Meet QAL: Query Analytics Language

At the heart of the API is **QAL** (Query Analytics Language) — a simple, structured way to ask for analytics data.

### A Glimpse of QAL

Here's how you might request page view data:

```json
{
  "tracking_id": "your-site",
  "materials": [{"name": "allpv"}],
  "time": {
    "start": "2025-10-01T00:00:00",
    "end": "2025-10-30T00:00:00",
    "tz": "Asia/Tokyo"
  },
  "make": {
    "top_pages": {
      "from": ["allpv"],
      "keep": ["allpv.url", "allpv.title", "allpv.device_type"]
    }
  },
  "result": {
    "use": "top_pages",
    "limit": 10
  }
}
```

**What makes QAL special:**

- **Human-readable**: Easy to understand, even for non-programmers
- **AI-friendly**: Designed to be generated and modified by AI tools
- **Structured**: Clear, unambiguous queries with predictable results
- **Composable**: Build complex queries from simple building blocks

---

## Real-World Use Cases

### 1. Custom Dashboards

Build a real-time dashboard that shows exactly the metrics you care about:

```javascript
// Fetch today's mobile traffic
const mobileTraffic = await qaAssistant.query({
  material: 'allpv',
  timeRange: 'today',
  filter: { device_type: 'mobile' },
  aggregate: { by: 'hour' }
});
```

### 2. AI-Powered Insights

Connect QA Assistant to Claude via MCP (Model Context Protocol):

```
You: @qa-assistant Show me which blog posts are getting the most organic traffic this month
Claude: [Queries your data] Your top 5 posts by organic traffic are...
```

### 3. Automated Reports

Schedule weekly reports via a simple script:

```python
# Weekly top pages report
data = qa_assistant.query(
    material='allpv',
    time_range='last_7_days',
    group_by='url',
    order_by='pageviews'
)
send_email(to='team@example.com', report=data)
```

---

## What's Available

The API will provide access to:

**📊 Page View Data (`allpv`)**
- URL, title, referrer
- Device type, browser, OS
- UTM parameters
- Session information
- Timestamps

**🔍 Search Console Data (`gsc`)**
- Keywords and queries
- Clicks, impressions, CTR
- Search appearance
- Rankings over time

**🎯 Custom Data**
- Site-specific goals and events
- Custom dimensions you've defined

---

## The Vision: Data-Driven Assistance

This isn't just an API — it's a step toward **true data-driven assistance**.

**Today:** You check reports to understand what happened.

**Tomorrow:** Your assistant proactively tells you what's happening and why.

**Future:** Your assistant predicts what will happen and suggests actions.

The API is the foundation that makes this future possible. By opening up programmatic access to your data, we enable:

- **AI integration**: Let language models analyze your analytics
- **Automation**: Build workflows that respond to data patterns
- **Customization**: Create experiences tailored to your exact needs
- **Innovation**: Build tools we haven't even imagined yet

---

## When Can I Use This?

The API is currently in **active development**. We're refining the design, testing with early users, and preparing comprehensive documentation.

**What's happening now:**
- ✅ Core API design completed
- ✅ QAL specification finalized
- 🚧 Developer documentation in progress
- 🚧 Client libraries and examples being created
- 🚧 MCP server for AI integration under development

**Want early access?**

If you're interested in being an early tester or have specific use cases in mind, we'd love to hear from you. Reach out to us through [GitHub Issues](https://github.com/quarka-org) or your preferred support channel.

---

## A Peek at the Possibilities

Imagine building:

- **An AI-powered content assistant** that suggests which topics to write about based on search trends
- **A custom analytics widget** for your mobile app
- **Automated A/B testing reports** that email you when results are significant
- **A conversational interface** where you chat with your analytics
- **Cross-platform dashboards** that combine QA Assistant data with sales, CRM, or other sources

The API makes all of this possible — and we can't wait to see what you'll build.

---

## Stay Updated

This section will be regularly updated as development progresses. Bookmark this page and check back for:

- API design updates
- Code examples and tutorials
- Early access announcements
- Integration guides

The future of analytics is conversational, programmable, and powered by AI. The QA Assistant API is how we get there.

**Questions or ideas?** Share them with the community. Your feedback helps shape the API's future.
