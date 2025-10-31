---
sidebar_position: 1
---

# Developer Manual

Welcome to the QA Assistant Developer Manual. Here you'll discover how to unlock the full potential of your data-driven assistant through QAL (Query Assistant Language).

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
- Create data-driven assistants (extensible via plugins)
- Automate data exports and reports
- Build personalized dashboards for clients

**For AI Enthusiasts:**
- Connect QA Assistant to Claude, ChatGPT, or other AI tools
- Let AI analyze your traffic patterns and suggest improvements
- Build AI-powered data-driven assistants that understand your website's behavior and operate autonomously

**For Power Users:**
- Connect to BigQuery or Looker Studio
- Combine QA Assistant data with other sources
- Schedule automated reports via scripts

---

## What is QAL (Query Assistant Language)?

At the heart of the API is **QAL** (Query Assistant Language) — a language that empowers data-driven assistants to freely manipulate data. QAL is not a flexible language like SQL; it's specifically designed for QA's column-oriented structure.

**QAL Design Philosophy:**
- **Explicit Paths**: Clearly describe the data reference path (Material → View → Result)
- **Deterministic**: The same query always returns the same result
- **Minimal Specification**: Minimal syntax that neither AI nor humans can misunderstand

### QAL Basic Structure

A QAL query consists of four elements:

1. **materials**: Specify the source data (materials)
2. **time**: Explicitly specify the analysis period (relative specifications not allowed)
3. **make**: Build intermediate views step by step from materials
4. **result**: Specify the final view to return

### A QAL Example

Here's how you request page view aggregation for blog pages:

```json
{
  "tracking_id": "your-site-id",
  "materials": [
    { "name": "qa_pv_log" }
  ],
  "time": {
    "start": "2025-10-01T00:00:00",
    "end": "2025-10-31T00:00:00",
    "tz": "Asia/Tokyo"
  },
  "make": {
    "blog_pages": {
      "from": ["qa_pv_log"],
      "filter": {
        "and": [
          { "like": { "col": "qa_pv_log.url", "val": "%/blog/%" } },
          { "eq": { "col": "qa_pv_log.device_type", "val": "smp" } }
        ]
      },
      "keep": ["qa_pv_log.url", "qa_pv_log.title"],
      "calc": {
        "pageviews": "COUNT(qa_pv_log.pv_id)",
        "sessions": "COUNTUNIQUE(qa_pv_log.reader_id)"
      }
    }
  },
  "result": {
    "use": "blog_pages",
    "sort": [{ "by": "pageviews", "dir": "desc" }],
    "limit": 10
  }
}
```

**How This Query Works:**
1. Retrieve data from October 2025 using the `qa_pv_log` material
2. Filter for data where URL contains "/blog/" and device type is mobile (smp)
3. Aggregate page views and sessions by URL
4. Return top 10 results sorted by page views in descending order

---

## QAL Features

### 1. Explicit Time Specification

QAL does not allow relative time specifications (like "yesterday" or "last week"). You must always specify concrete dates and times:

```json
"time": {
  "start": "2025-10-01T00:00:00",
  "end": "2025-10-31T00:00:00",
  "tz": "Asia/Tokyo"
}
```

This ensures that the same results are always obtained regardless of when the query is executed.

### 2. Explicit Data Paths

In QAL, you build the data flow step by step:

```json
"make": {
  "step1": {
    "from": ["qa_pv_log"],
    "keep": ["qa_pv_log.url", "qa_pv_log.reader_id"],
    "filter": {
      "and": [
        { "like": { "col": "qa_pv_log.url", "val": "%/blog/%" } }
      ]
    }
  },
  "step2": {
    "from": ["step1"],
    "keep": ["step1.url"],
    "calc": {
      "sessions": "COUNTUNIQUE(step1.reader_id)"
    }
  }
}
```

### 3. Limited Aggregation Functions

QAL supports only the following six aggregation functions:

- `COUNT(column)` - Count rows
- `COUNTUNIQUE(column)` - Count unique values
- `SUM(column)` - Calculate sum
- `AVERAGE(column)` - Calculate average
- `MIN(column)` - Get minimum value
- `MAX(column)` - Get maximum value

### 4. Fully Qualified Names

Column names must always be specified in the format `<material_name>.<column_name>` or `<view_name>.<column_name>`:

```json
"keep": ["qa_pv_log.url", "qa_pv_log.title"],
"calc": {
  "pageviews": "COUNT(qa_pv_log.pv_id)"
}
```

---

## Real-World Use Cases

### 1. Device Traffic Analysis

Compare mobile and desktop traffic:

```json
{
  "tracking_id": "your-site-id",
  "materials": [{ "name": "qa_pv_log" }],
  "time": {
    "start": "2025-10-01T00:00:00",
    "end": "2025-10-31T00:00:00",
    "tz": "Asia/Tokyo"
  },
  "make": {
    "device_stats": {
      "from": ["qa_pv_log"],
      "keep": ["qa_pv_log.device_type"],
      "calc": {
        "sessions": "COUNTUNIQUE(qa_pv_log.reader_id)",
        "pageviews": "COUNT(qa_pv_log.pv_id)",
        "avg_time": "AVERAGE(qa_pv_log.page_msec)"
      }
    }
  },
  "result": { "use": "device_stats" }
}
```

### 2. Campaign Performance Measurement

Analyze performance by UTM campaign:

```json
{
  "tracking_id": "your-site-id",
  "materials": [
    { "name": "qa_pv_log" },
    { "name": "qa_utm_campaigns" }
  ],
  "time": {
    "start": "2025-10-01T00:00:00",
    "end": "2025-10-31T00:00:00",
    "tz": "Asia/Tokyo"
  },
  "make": {
    "campaign_performance": {
      "from": ["qa_pv_log"],
      "join": {
        "with": "qa_utm_campaigns",
        "on": [
          {
            "left": "qa_pv_log.campaign_id",
            "right": "qa_utm_campaigns.campaign_id"
          }
        ],
        "if not match": "keep-left"
      },
      "keep": ["qa_utm_campaigns.utm_campaign", "qa_utm_campaigns.utm_source"],
      "calc": {
        "sessions": "COUNTUNIQUE(qa_pv_log.reader_id)",
        "pageviews": "COUNT(qa_pv_log.pv_id)"
      }
    }
  },
  "result": {
    "use": "campaign_performance",
    "sort": [{ "by": "sessions", "dir": "desc" }],
    "limit": 20
  }
}
```

### 3. AI-Powered Insights

By connecting QA Assistant to Claude via MCP (Model Context Protocol), you can analyze data in natural language:

```
You: Show me the blog posts that are getting the most organic traffic this month
Claude: [Generates and executes QAL query]
        The top 5 posts by organic traffic are...
```

The AI assistant generates QAL and explains the results in natural language.

---

## Available Materials (Data Sources)

Main materials accessible in QAL:

### 📊 Page View Log (`qa_pv_log`)

Basic page view data:
- URL, title, referrer
- Device type, browser, OS
- Session information, reader ID
- Page dwell time
- Timestamps

### 🎯 UTM Campaigns (`qa_utm_campaigns`)

Marketing campaign data:
- UTM parameters (source, medium, campaign)
- Campaign ID
- Traffic source information

### 🔍 Search Console Data (`gsc`)

Search performance data:
- Keywords and queries
- Clicks, impressions, CTR
- Search appearance
- Rankings over time

These are the materials accessible in the initial release, but more data will become available over time, such as user confusion scores on pages and reading depth. QA Assistant holds a wealth of data useful for page improvement while respecting privacy.

---

## The Future of Data-Driven Assistance

The future that QA Assistant and QAL will realize:

**Today:** You check reports to understand what happened

**Tomorrow:** Your assistant proactively tells you what's happening and why

**Future:** Your assistant predicts what will happen and suggests actions

### Extensible via Plugins

QA Assistant allows you to freely add assistants through plugins. This enables you to easily complete report work that was previously time-consuming through conversational interfaces.

**What QAL and the API Enable:**

- **AI Integration**: Let language models analyze your analytics
- **Automation**: Build workflows that respond to data patterns
- **Customization**: Create experiences tailored to your exact needs
- **Innovation**: Build tools we haven't even imagined yet

---

## Response Formats

The QAL API offers flexible data return formats:

### JSON Format (Inline)

For small datasets (up to 50,000 rows):

```json
{
  "data": [
    {
      "url": "/blog/article-1",
      "pageviews": 1250,
      "sessions": 890
    },
    {
      "url": "/blog/article-2",
      "pageviews": 980,
      "sessions": 720
    }
  ],
  "meta": {
    "truncated": false,
    "row_count": 2
  }
}
```

### File Format (CSV/Parquet)

For large datasets, a file URL is returned:

```json
{
  "data_url": "https://api.qa-assistant.com/results/abc123.csv",
  "meta": {
    "truncated": false,
    "row_count": 125000,
    "format": "csv"
  }
}
```

Specify format in the `result` section:

```json
"result": {
  "use": "my_view",
  "return": {
    "mode": "FILE",
    "format": "CSV"
  }
}
```

---

## When Can I Use This?

The API is currently in **active development**. We're refining the design, testing with early users, and preparing comprehensive documentation.

**Current Progress:**
- ✅ Core API design completed
- ✅ QAL specification finalized
- 🚧 Developer documentation in progress
- 🚧 Client libraries and examples being created
- 🚧 MCP server for AI integration under development

**Want early access?**

If you're interested in being an early tester or have specific use cases in mind, please let us know. Join us on [GitHub Issues](https://github.com/quarka-org) or [QA Assistant Meetup](https://www.meetup.com/ja-jp/qa-analytics-meetup/).

---

## Stay Updated

This developer manual will be regularly updated as development progresses. Bookmark this page and check back for:

- QAL specification updates and best practices
- Code examples and tutorials
- Early access announcements
- Integration guides and MCP server information

**Questions or ideas?** Share them on [GitHub Issues](https://github.com/quarka-org) or [QA Assistant Meetup](https://www.meetup.com/ja-jp/qa-analytics-meetup/). Your feedback helps shape the future of data-driven assistance.
