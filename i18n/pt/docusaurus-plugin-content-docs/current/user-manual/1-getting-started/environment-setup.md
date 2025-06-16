---
sidebar_position: 2
---

# Configuração do Ambiente

Este guia ajudará você a configurar seu ambiente WordPress para uso otimizado do QA Advisor, garantindo melhor performance e compatibilidade.

## Visão Geral

A configuração adequada do ambiente é crucial para o funcionamento otimizado do QA Advisor. Este guia aborda configurações de servidor, WordPress e plugin para garantir a melhor experiência possível.

## Configurações do Servidor

### Requisitos de PHP

**Versão do PHP:**
```php
// Versão mínima: PHP 7.4
// Recomendado: PHP 8.1 ou superior
```

**Extensões PHP Necessárias:**
- `mysqli` ou `pdo_mysql` - Para conexão com banco de dados
- `json` - Para processamento de dados JSON
- `curl` - Para requisições HTTP
- `gd` ou `imagick` - Para processamento de imagens
- `zip` - Para manipulação de arquivos compactados

**Configurações PHP Recomendadas:**
```ini
; php.ini
memory_limit = 256M
max_execution_time = 300
max_input_vars = 3000
post_max_size = 64M
upload_max_filesize = 64M
```

### Configurações do MySQL

**Versão Recomendada:**
- MySQL 8.0+ ou MariaDB 10.5+

**Configurações Otimizadas:**
```sql
-- my.cnf
[mysqld]
innodb_buffer_pool_size = 256M
innodb_log_file_size = 64M
max_connections = 200
query_cache_size = 32M
```

### Configurações do Servidor Web

**Apache (.htaccess):**
```apache
# Otimizações para QA Advisor
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
</IfModule>

<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
</IfModule>
```

**Nginx:**
```nginx
# Configurações para QA Advisor
location ~* \.(js|css)$ {
    expires 1M;
    add_header Cache-Control "public, immutable";
}

gzip on;
gzip_types text/css application/javascript;
```

## Configurações do WordPress

### wp-config.php

**Configurações Básicas:**
```php
// wp-config.php

// Configurações de memória
define('WP_MEMORY_LIMIT', '256M');

// Configurações de debug (apenas para desenvolvimento)
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);

// Configurações de cache
define('WP_CACHE', true);

// Configurações específicas do QA Advisor
define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_LIMIT_SESSION_MONTH', 5000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

**Configurações de Segurança:**
```php
// Chaves de segurança (gere novas em https://api.wordpress.org/secret-key/1.1/salt/)
define('AUTH_KEY',         'sua-chave-unica-aqui');
define('SECURE_AUTH_KEY',  'sua-chave-unica-aqui');
define('LOGGED_IN_KEY',    'sua-chave-unica-aqui');
define('NONCE_KEY',        'sua-chave-unica-aqui');

// Configurações SSL
define('FORCE_SSL_ADMIN', true);
```

### Configurações de Banco de Dados

**Otimizações de Tabela:**
```sql
-- Otimizar tabelas do QA Advisor
OPTIMIZE TABLE wp_qa_heatmap_data;
OPTIMIZE TABLE wp_qa_session_data;
OPTIMIZE TABLE wp_qa_page_views;
```

**Índices Recomendados:**
```sql
-- Adicionar índices para melhor performance
ALTER TABLE wp_qa_heatmap_data ADD INDEX idx_page_id (page_id);
ALTER TABLE wp_qa_session_data ADD INDEX idx_session_date (session_date);
```

## Configurações de Cache

### Cache de Objeto

**Redis (Recomendado):**
```php
// wp-config.php
define('WP_REDIS_HOST', '127.0.0.1');
define('WP_REDIS_PORT', 6379);
define('WP_REDIS_TIMEOUT', 1);
define('WP_REDIS_READ_TIMEOUT', 1);
define('WP_REDIS_DATABASE', 0);
```

**Memcached:**
```php
// wp-config.php
$memcached_servers = array(
    'default' => array(
        '127.0.0.1:11211',
    ),
);
```

### Cache de Página

**Configurações para Plugins de Cache:**

**WP Rocket:**
```php
// Excluir páginas do QA Advisor do cache
// Adicione estas URLs na configuração:
/wp-admin/admin-ajax.php?action=qahm_*
/wp-json/qahm/v1/*
```

**W3 Total Cache:**
```php
// Configurações recomendadas
Page Cache: Enabled
Object Cache: Enabled (Redis/Memcached)
Browser Cache: Enabled
```

## Configurações de CDN

### Configuração com CloudFlare

**Regras de Página:**
```
URL: *exemplo.com/wp-content/plugins/qa-heatmap-analytics/*
Configurações:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 month
```

**Configurações de Segurança:**
```
Security Level: Medium
Challenge Passage: 30 minutes
Browser Integrity Check: On
```

### Configuração com MaxCDN/StackPath

**Configurações de Cache:**
```
Cache-Control: public, max-age=2592000
Expires: 30 days
Gzip Compression: Enabled
```

## Configurações de Segurança

### Firewall de Aplicação Web (WAF)

**Regras Recomendadas:**
```
# Permitir requisições AJAX do QA Advisor
Allow: /wp-admin/admin-ajax.php?action=qahm_*
Allow: /wp-json/qahm/v1/*

# Bloquear acesso direto a arquivos de dados
Deny: /wp-content/uploads/qa-heatmap-analytics/*
```

### Configurações de CORS

**Para APIs do QA Advisor:**
```php
// functions.php
add_action('init', function() {
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
    }
});
```

## Monitoramento e Logs

### Configuração de Logs

**Logs do QA Advisor:**
```php
// wp-config.php
define('QAHM_DEBUG_LOG', true);
define('QAHM_LOG_LEVEL', 'INFO'); // DEBUG, INFO, WARNING, ERROR
```

**Rotação de Logs:**
```bash
# logrotate.conf
/var/log/qa-advisor/*.log {
    daily
    missingok
    rotate 30
    compress
    notifempty
    create 644 www-data www-data
}
```

### Monitoramento de Performance

**Métricas Importantes:**
- Tempo de resposta das páginas
- Uso de memória PHP
- Consultas de banco de dados
- Tamanho dos arquivos de cache

**Ferramentas Recomendadas:**
- New Relic
- GTmetrix
- Pingdom
- Query Monitor (plugin WordPress)

## Configurações de Backup

### Backup de Dados do QA Advisor

**Script de Backup:**
```bash
#!/bin/bash
# backup-qa-advisor.sh

# Backup das tabelas do QA Advisor
mysqldump -u usuario -p senha database_name \
  wp_qa_heatmap_data \
  wp_qa_session_data \
  wp_qa_page_views \
  > qa_advisor_backup_$(date +%Y%m%d).sql

# Backup dos arquivos de configuração
tar -czf qa_advisor_files_$(date +%Y%m%d).tar.gz \
  /wp-content/plugins/qa-heatmap-analytics/ \
  /wp-content/uploads/qa-heatmap-analytics/
```

### Configuração de Backup Automático

**Cron Job:**
```bash
# Executar backup diário às 2:00 AM
0 2 * * * /path/to/backup-qa-advisor.sh
```

## Solução de Problemas

### Problemas Comuns de Ambiente

**Erro de Memória:**
```php
// Aumentar limite de memória
ini_set('memory_limit', '512M');
```

**Timeout de Execução:**
```php
// Aumentar tempo limite
ini_set('max_execution_time', 600);
```

**Problemas de Permissão:**
```bash
# Definir permissões corretas
chmod 755 /wp-content/plugins/qa-heatmap-analytics/
chmod 644 /wp-content/plugins/qa-heatmap-analytics/*.php
```

### Verificação de Saúde do Sistema

**Script de Verificação:**
```php
// health-check.php
function qa_advisor_health_check() {
    $checks = array(
        'PHP Version' => version_compare(PHP_VERSION, '7.4.0', '>='),
        'MySQL Version' => version_compare(mysql_get_server_info(), '5.6.0', '>='),
        'Memory Limit' => (int)ini_get('memory_limit') >= 256,
        'Max Execution Time' => (int)ini_get('max_execution_time') >= 300,
    );
    
    foreach ($checks as $check => $status) {
        echo $check . ': ' . ($status ? 'OK' : 'FAIL') . "\n";
    }
}
```

## Próximos Passos

Após configurar seu ambiente:

1. **Configure Limites de Dados**: [Configurar Limites de Dados](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. **Explore o Dashboard**: [Dashboard](/docs/user-manual/screens-and-operations/dashboard)
3. **Configure Heatmaps**: [Heatmaps](/docs/user-manual/screens-and-operations/heatmaps)

---

*Com seu ambiente adequadamente configurado, o QA Advisor funcionará de forma otimizada e confiável em seu site WordPress.*
