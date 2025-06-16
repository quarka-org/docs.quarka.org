---
sidebar_position: 15
---

# Documentazione API

## Panoramica
La Documentazione API di QA Advisor fornisce accesso completo alle API REST e GraphQL per integrare i dati analytics con sistemi esterni, creare dashboard personalizzati e automatizzare flussi di lavoro. Questa sezione include endpoint, autenticazione, esempi di codice e best practices.

## Accesso alla Documentazione
1. Accedi al pannello admin di WordPress
2. Naviga nel menu della barra laterale sinistra
3. Clicca su "QA Advisor"
4. Seleziona "Documentazione API" dal sottomenu

## Panoramica API

### API REST
- **Base URL**: `https://tuosito.com/wp-json/qahm/v1/`
- **Formato**: JSON
- **Autenticazione**: API Key, OAuth 2.0, JWT
- **Rate Limiting**: 1000 richieste/ora (Pro), 10000/ora (Enterprise)

### API GraphQL
- **Endpoint**: `https://tuosito.com/wp-json/qahm/graphql`
- **Schema**: Introspection abilitata
- **Playground**: Interfaccia test integrata
- **Subscriptions**: Real-time data updates

### Versioning
- **Versione Corrente**: v1
- **Compatibilità**: Backward compatibility garantita
- **Deprecation**: Preavviso 6 mesi per modifiche breaking
- **Changelog**: Documentazione modifiche dettagliata

## Autenticazione

### API Key
```http
GET /wp-json/qahm/v1/analytics/dashboard
Authorization: Bearer YOUR_API_KEY
```

### OAuth 2.0
```http
POST /wp-json/qahm/v1/oauth/token
Content-Type: application/json

{
  "grant_type": "client_credentials",
  "client_id": "your_client_id",
  "client_secret": "your_client_secret"
}
```

### JWT Token
```http
POST /wp-json/qahm/v1/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "password"
}
```

## Endpoint Principali

### Analytics Dashboard
```http
GET /wp-json/qahm/v1/analytics/dashboard
```

**Parametri:**
- `date_from` (string): Data inizio (YYYY-MM-DD)
- `date_to` (string): Data fine (YYYY-MM-DD)
- `metrics` (array): Metriche richieste
- `filters` (object): Filtri applicazione

**Risposta:**
```json
{
  "status": "success",
  "data": {
    "visitors": 1234,
    "pageviews": 5678,
    "bounce_rate": 45.2,
    "avg_session_duration": 180,
    "conversion_rate": 2.3
  },
  "meta": {
    "date_range": "2025-06-01 to 2025-06-16",
    "total_records": 1234
  }
}
```

### Real-time Data
```http
GET /wp-json/qahm/v1/realtime/visitors
```

**Risposta:**
```json
{
  "active_visitors": 23,
  "top_pages": [
    {
      "url": "/homepage",
      "visitors": 8,
      "title": "Homepage"
    }
  ],
  "traffic_sources": {
    "organic": 12,
    "direct": 7,
    "social": 4
  }
}
```

### Heatmap Data
```http
GET /wp-json/qahm/v1/heatmap/{page_id}
```

**Parametri:**
- `type` (string): click, scroll, move, attention
- `device` (string): desktop, mobile, tablet
- `date_range` (string): Periodo dati

**Risposta:**
```json
{
  "heatmap_data": {
    "clicks": [
      {
        "x": 150,
        "y": 300,
        "intensity": 0.8,
        "element": "button.cta"
      }
    ],
    "scroll_depth": {
      "25%": 0.9,
      "50%": 0.7,
      "75%": 0.4,
      "100%": 0.2
    }
  }
}
```

### Goals and Conversions
```http
GET /wp-json/qahm/v1/goals
POST /wp-json/qahm/v1/goals
PUT /wp-json/qahm/v1/goals/{goal_id}
DELETE /wp-json/qahm/v1/goals/{goal_id}
```

**Creazione Goal:**
```json
{
  "name": "Newsletter Signup",
  "type": "event",
  "conditions": {
    "event_action": "submit",
    "event_category": "form",
    "event_label": "newsletter"
  },
  "value": 5.00
}
```

## Esempi di Integrazione

### JavaScript/Node.js
```javascript
const axios = require('axios');

class QAAdvisorAPI {
  constructor(apiKey, baseURL) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async getDashboardData(dateFrom, dateTo) {
    try {
      const response = await this.client.get('/analytics/dashboard', {
        params: { date_from: dateFrom, date_to: dateTo }
      });
      return response.data;
    } catch (error) {
      console.error('API Error:', error.response.data);
      throw error;
    }
  }

  async getRealtimeVisitors() {
    const response = await this.client.get('/realtime/visitors');
    return response.data;
  }
}

// Utilizzo
const api = new QAAdvisorAPI('your-api-key', 'https://tuosito.com/wp-json/qahm/v1');
const dashboardData = await api.getDashboardData('2025-06-01', '2025-06-16');
```

### Python
```python
import requests
import json

class QAAdvisorAPI:
    def __init__(self, api_key, base_url):
        self.api_key = api_key
        self.base_url = base_url
        self.headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
    
    def get_dashboard_data(self, date_from, date_to):
        url = f"{self.base_url}/analytics/dashboard"
        params = {
            'date_from': date_from,
            'date_to': date_to
        }
        
        response = requests.get(url, headers=self.headers, params=params)
        response.raise_for_status()
        return response.json()
    
    def get_heatmap_data(self, page_id, heatmap_type='click'):
        url = f"{self.base_url}/heatmap/{page_id}"
        params = {'type': heatmap_type}
        
        response = requests.get(url, headers=self.headers, params=params)
        return response.json()

# Utilizzo
api = QAAdvisorAPI('your-api-key', 'https://tuosito.com/wp-json/qahm/v1')
dashboard = api.get_dashboard_data('2025-06-01', '2025-06-16')
```

### PHP
```php
<?php
class QAAdvisorAPI {
    private $apiKey;
    private $baseURL;
    
    public function __construct($apiKey, $baseURL) {
        $this->apiKey = $apiKey;
        $this->baseURL = $baseURL;
    }
    
    private function makeRequest($endpoint, $params = []) {
        $url = $this->baseURL . $endpoint;
        if (!empty($params)) {
            $url .= '?' . http_build_query($params);
        }
        
        $context = stream_context_create([
            'http' => [
                'method' => 'GET',
                'header' => [
                    'Authorization: Bearer ' . $this->apiKey,
                    'Content-Type: application/json'
                ]
            ]
        ]);
        
        $response = file_get_contents($url, false, $context);
        return json_decode($response, true);
    }
    
    public function getDashboardData($dateFrom, $dateTo) {
        return $this->makeRequest('/analytics/dashboard', [
            'date_from' => $dateFrom,
            'date_to' => $dateTo
        ]);
    }
}

// Utilizzo
$api = new QAAdvisorAPI('your-api-key', 'https://tuosito.com/wp-json/qahm/v1');
$dashboard = $api->getDashboardData('2025-06-01', '2025-06-16');
?>
```

## GraphQL Schema

### Query Principali
```graphql
type Query {
  analytics(
    dateFrom: String!
    dateTo: String!
    filters: AnalyticsFilters
  ): AnalyticsData
  
  realtimeVisitors: RealtimeData
  
  heatmap(
    pageId: ID!
    type: HeatmapType!
    device: DeviceType
  ): HeatmapData
  
  goals: [Goal]
  
  pages(
    limit: Int
    offset: Int
    orderBy: PageOrderBy
  ): PageConnection
}

type AnalyticsData {
  visitors: Int
  pageviews: Int
  bounceRate: Float
  avgSessionDuration: Int
  conversionRate: Float
  topPages: [PageStats]
  trafficSources: [TrafficSource]
}

type HeatmapData {
  clicks: [ClickPoint]
  scrollDepth: ScrollDepthData
  attention: [AttentionPoint]
}
```

### Mutations
```graphql
type Mutation {
  createGoal(input: GoalInput!): Goal
  updateGoal(id: ID!, input: GoalInput!): Goal
  deleteGoal(id: ID!): Boolean
  
  trackEvent(input: EventInput!): Boolean
}

input GoalInput {
  name: String!
  type: GoalType!
  conditions: GoalConditions!
  value: Float
}
```

### Subscriptions
```graphql
type Subscription {
  realtimeVisitors: RealtimeData
  newConversion(goalId: ID): Conversion
  alertTriggered: Alert
}
```

## Rate Limiting

### Limiti per Piano
- **Gratuito**: 100 richieste/ora
- **Pro**: 1,000 richieste/ora
- **Enterprise**: 10,000 richieste/ora
- **Custom**: Limiti personalizzati

### Headers Risposta
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

### Gestione Rate Limiting
```javascript
// Esempio gestione rate limiting
async function makeAPICall(endpoint) {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    if (error.response.status === 429) {
      const resetTime = error.response.headers['x-ratelimit-reset'];
      const waitTime = resetTime - Math.floor(Date.now() / 1000);
      
      console.log(`Rate limit exceeded. Waiting ${waitTime} seconds...`);
      await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
      
      // Retry request
      return makeAPICall(endpoint);
    }
    throw error;
  }
}
```

## Webhook

### Configurazione
```http
POST /wp-json/qahm/v1/webhooks
Content-Type: application/json

{
  "url": "https://tuoserver.com/webhook",
  "events": ["goal.completed", "visitor.new", "alert.triggered"],
  "secret": "webhook-secret-key"
}
```

### Payload Esempio
```json
{
  "event": "goal.completed",
  "timestamp": "2025-06-16T10:30:00Z",
  "data": {
    "goal_id": 123,
    "goal_name": "Newsletter Signup",
    "visitor_id": "abc123",
    "value": 5.00,
    "page_url": "/signup"
  },
  "signature": "sha256=..."
}
```

### Verifica Signature
```javascript
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return `sha256=${expectedSignature}` === signature;
}
```

## Error Handling

### Codici Errore
- **400**: Bad Request - Parametri invalidi
- **401**: Unauthorized - Autenticazione fallita
- **403**: Forbidden - Permessi insufficienti
- **404**: Not Found - Risorsa non trovata
- **429**: Too Many Requests - Rate limit superato
- **500**: Internal Server Error - Errore server

### Formato Errori
```json
{
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "The 'date_from' parameter is required",
    "details": {
      "parameter": "date_from",
      "expected": "YYYY-MM-DD format"
    }
  }
}
```

## Best Practices

### Performance
- **Caching**: Implementa cache per richieste frequenti
- **Batch Requests**: Raggruppa richieste multiple
- **Pagination**: Usa paginazione per dataset grandi
- **Compression**: Abilita compressione gzip

### Sicurezza
- **HTTPS**: Usa sempre connessioni sicure
- **API Keys**: Proteggi chiavi API
- **Validation**: Valida tutti gli input
- **Monitoring**: Monitora utilizzo API

### Monitoring
- **Logging**: Registra tutte le richieste API
- **Metrics**: Monitora performance e errori
- **Alerting**: Imposta avvisi per anomalie
- **Documentation**: Mantieni documentazione aggiornata

## Prossimi Passi

Dalla Documentazione API puoi:

1. **[Impostazioni](./11-settings.md)** - Configurare accesso API
2. **[Dashboard](./01-dashboard.md)** - Visualizzare dati via API
3. **[Aiuto](./12-help.md)** - Supporto tecnico API
4. **Playground** - Testare API in tempo reale

La Documentazione API di QA Advisor ti fornisce tutti gli strumenti per integrare potenti analytics nel tuo ecosistema tecnologico!
