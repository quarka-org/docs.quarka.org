---
sidebar_position: 2
title: Configuração do Ambiente
---

# Configuração do Ambiente

Para garantir rastreamento preciso e desempenho otimizado com QA Advisor, recomendamos configurar adequadamente seu ambiente WordPress. Este guia abrange configurações de servidor, WordPress e plugins para desempenho ideal.

## Requisitos do Sistema

### Requisitos Mínimos
- **WordPress**: Versão 5.9 ou superior
- **PHP**: Versão 7.4 ou superior
- **MySQL**: Versão 5.7 ou superior (ou MariaDB 10.2+)
- **Memória**: Pelo menos 128MB de limite de memória PHP
- **Espaço em Disco**: 50MB de espaço disponível

### Especificações Recomendadas
- **WordPress**: Última versão estável
- **PHP**: Versão 8.0 ou superior
- **MySQL**: Versão 8.0 ou superior
- **Memória**: 256MB ou mais de limite de memória PHP
- **Espaço em Disco**: 200MB ou mais de espaço disponível

## Configuração do Servidor

### Configurações PHP

Para desempenho otimizado, configure estas configurações PHP:

```php
memory_limit = 256M
max_execution_time = 300
max_input_vars = 3000
post_max_size = 64M
upload_max_filesize = 64M
```

### Compressão e Minificação JavaScript

**Não** comprima, minifique ou combine arquivos JavaScript usados pelo QA Advisor.  
Alguns plugins de otimização ou temas podem interferir com scripts de rastreamento modificando ou atrasando sua execução.

> ✅ Verifique as configurações do seu plugin de cache ou otimização  
> ✅ Desative a minificação JS ou defer/async para scripts do QA Advisor

Para mais informações técnicas, veja [Quando jQuery é Adiado](/docs/user-manual/getting-started/when-defer-jquery).

### Otimização de Banco de Dados

Para melhor desempenho do banco de dados:

```sql
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## Configuração do WordPress

### Configurações wp-config.php

Adicione estas configurações ao seu arquivo `wp-config.php`:

```php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

define('WP_CACHE', true);

define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_LIMIT_SESSION_MONTH', 5000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

## Compatibilidade de Plugins e Temas

QA Advisor funciona com a maioria dos principais plugins e temas. No entanto, recomendamos:

- Desativar JavaScript defer/async para scripts críticos
- Garantir que seu plugin de cache permita saída de `qa-heatmap-analytics`
- Evitar duplicação com outras ferramentas de rastreamento que modificam eventos globais

### Configuração de Plugins de Cache

**WP Rocket**: Excluir scripts do QA Advisor da otimização
```
/wp-content/plugins/qa-heatmap-analytics/js/qahm
/wp-content/plugins/qa-heatmap-analytics/js/qahmz
```

**W3 Total Cache**: Adicionar às exclusões JavaScript  
**WP Super Cache**: Compatível sem configuração adicional

## CDN e Migração de Servidor

Se você está usando um CDN (ex. Cloudflare) ou migrou recentemente seu servidor:

- Limpe todos os caches (navegador, plugin, CDN)
- Confirme que os scripts do QA Advisor não estão bloqueados ou atrasados
- Certifique-se de que o fuso horário do servidor está correto (usado para agrupamento de dados)

### Configuração Cloudflare

```
URL: *seusite.com/wp-content/plugins/qa-heatmap-analytics/*
Configurações:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 mês
```

## Configuração de Segurança

### Permissões de Arquivos

Defina permissões de arquivos apropriadas:

```bash
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

### Configurações de Firewall

Certifique-se de que estes endpoints estão acessíveis:
- `/wp-admin/admin-ajax.php` (para requisições AJAX)
- `/wp-content/plugins/qa-heatmap-analytics/assets/` (para arquivos estáticos)

## Monitoramento de Desempenho

### Métricas Principais para Monitorar

- **Uso de Memória**: Manter abaixo de 80% do limite
- **Tempo de Carregamento da Página**: Meta < 3 segundos
- **Consultas do Banco de Dados**: Monitorar consultas lentas
- **Espaço em Disco**: Verificar crescimento de dados do QA Advisor

### Ferramentas de Monitoramento

- **Query Monitor** - Plugin WordPress para depuração
- **New Relic** - Monitoramento APM
- **GTmetrix** - Testes de desempenho frontend

## Solução de Problemas

### Problemas Comuns

**Erros de Memória**:
```php
ini_set('memory_limit', '512M');
```

**Problemas de Timeout**:
```php
set_time_limit(300);
```

**Problemas de Carregamento de Scripts**:
1. Verificar console do navegador para erros JavaScript
2. Verificar exclusões do plugin de cache
3. Confirmar configurações do firewall

### Verificação de Scripts

Para verificar se o script de rastreamento está sendo carregado corretamente:

1. Visite seu site enquanto **não estiver logado**
2. Clique com o botão direito e escolha "Ver código-fonte da página"
3. Procure no HTML por `qahm` ou `qahmz`

> Se essas strings não forem encontradas, o script pode estar bloqueado ou não carregando.  
> Verifique erros JavaScript ou conflitos de plugins.

## Próximos Passos

Após a configuração do ambiente:

1. [Configurar Limites de Dados](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [Lidar com Conflitos jQuery](/docs/user-manual/getting-started/when-defer-jquery)
3. [Explorar o Dashboard](/docs/user-manual/screens-and-operations/dashboard)

---
