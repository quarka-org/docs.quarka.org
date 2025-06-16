---
sidebar_position: 1
---

# Instalação

Este guia irá orientá-lo através do processo de instalação do QA Advisor em seu site WordPress.

## Requisitos do Sistema

Antes de instalar o QA Advisor, certifique-se de que seu sistema atende aos seguintes requisitos:

### Requisitos Mínimos
- **WordPress**: Versão 5.0 ou superior
- **PHP**: Versão 7.4 ou superior (recomendado: PHP 8.0+)
- **MySQL**: Versão 5.6 ou superior
- **Memória**: Mínimo 128MB (recomendado: 256MB+)
- **Espaço em Disco**: 50MB de espaço livre

### Requisitos Recomendados
- **WordPress**: Versão mais recente
- **PHP**: Versão 8.1 ou superior
- **MySQL**: Versão 8.0 ou superior
- **Memória**: 512MB ou mais
- **HTTPS**: SSL habilitado para melhor segurança

## Métodos de Instalação

### Método 1: Instalação via Admin do WordPress (Recomendado)

1. **Acesse o Admin do WordPress**
   - Faça login no painel administrativo do WordPress
   - Navegue para `Plugins > Adicionar Novo`

2. **Procure pelo QA Advisor**
   - Digite "QA Advisor" na barra de pesquisa
   - Localize o plugin oficial do QA Advisor

3. **Instale o Plugin**
   - Clique no botão "Instalar Agora"
   - Aguarde a conclusão da instalação

4. **Ative o Plugin**
   - Clique em "Ativar" após a instalação
   - Você será redirecionado para a página de configuração

### Método 2: Upload Manual

1. **Baixe o Plugin**
   - Baixe o arquivo ZIP do QA Advisor
   - Salve o arquivo em seu computador

2. **Faça Upload via Admin**
   - Vá para `Plugins > Adicionar Novo`
   - Clique em "Fazer Upload do Plugin"
   - Selecione o arquivo ZIP baixado
   - Clique em "Instalar Agora"

3. **Ative o Plugin**
   - Após a instalação, clique em "Ativar Plugin"

### Método 3: Instalação via FTP

1. **Extraia o Arquivo**
   - Extraia o arquivo ZIP do QA Advisor
   - Você terá uma pasta chamada `qa-heatmap-analytics`

2. **Upload via FTP**
   - Conecte-se ao seu servidor via FTP
   - Navegue para `/wp-content/plugins/`
   - Faça upload da pasta `qa-heatmap-analytics`

3. **Ative via Admin**
   - Vá para `Plugins > Plugins Instalados`
   - Encontre "QA Advisor" e clique em "Ativar"

## Configuração Inicial

### Assistente de Configuração

Após a ativação, o QA Advisor iniciará automaticamente o assistente de configuração:

1. **Bem-vindo**
   - Leia a mensagem de boas-vindas
   - Clique em "Começar Configuração"

2. **Configurações Básicas**
   - **Nome do Site**: Confirme o nome do seu site
   - **Fuso Horário**: Verifique se está correto
   - **Moeda**: Selecione sua moeda (se aplicável)

3. **Configurações de Rastreamento**
   - **Rastreamento de Visitantes**: Ative/desative conforme necessário
   - **Heatmaps**: Configure a coleta de dados de heatmap
   - **Sessões**: Defina configurações de rastreamento de sessão

4. **Configurações de Privacidade**
   - **GDPR**: Configure conformidade com GDPR se necessário
   - **Anonimização de IP**: Recomendado para privacidade
   - **Cookies**: Configure política de cookies

5. **Finalização**
   - Revise todas as configurações
   - Clique em "Concluir Configuração"

### Verificação da Instalação

Para verificar se o QA Advisor foi instalado corretamente:

1. **Verifique o Menu**
   - Procure por "QA Advisor" no menu lateral do admin
   - Deve aparecer com um ícone de gráfico

2. **Teste o Dashboard**
   - Clique em "QA Advisor" no menu
   - Você deve ver o dashboard principal
   - Verifique se não há mensagens de erro

3. **Verifique o Rastreamento**
   - Visite seu site em uma nova aba/janela
   - Retorne ao dashboard do QA Advisor
   - Verifique se a atividade está sendo registrada

## Configurações Avançadas

### Modo Avançado

Para usuários experientes, o QA Advisor oferece um "Modo Avançado" com recursos adicionais:

1. **Ativar Modo Avançado**
   - Vá para `QA Advisor > Configurações`
   - Encontre a seção "Modo Avançado"
   - Marque a caixa "Ativar Modo Avançado"

2. **Recursos Adicionais Disponíveis**
   - Análises de audiência detalhadas
   - Rastreamento de metas avançado
   - Integrações com terceiros
   - Configurações de API

### Configurações de Performance

Para sites de alto tráfego, considere estas configurações:

```php
// Adicione ao wp-config.php
define('QAHM_LIMIT_PV_MONTH', 100000);
define('QAHM_LIMIT_SESSION_MONTH', 10000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

## Solução de Problemas

### Problemas Comuns

**Plugin não aparece após ativação:**
- Verifique se não há conflitos com outros plugins
- Desative temporariamente outros plugins de análise
- Verifique os logs de erro do WordPress

**Dados não estão sendo coletados:**
- Verifique se o JavaScript está carregando
- Confirme que não há bloqueadores de anúncios interferindo
- Verifique as configurações de cache

**Problemas de performance:**
- Configure limites de dados apropriados
- Considere usar cache de objeto
- Otimize configurações de banco de dados

### Logs de Erro

Para diagnosticar problemas:

1. **Ative Debug do WordPress**
   ```php
   // wp-config.php
   define('WP_DEBUG', true);
   define('WP_DEBUG_LOG', true);
   ```

2. **Verifique Logs**
   - Logs estão em `/wp-content/debug.log`
   - Procure por mensagens relacionadas ao QA Advisor

### Suporte

Se você encontrar problemas:

- **Documentação**: Consulte nossa [FAQ](/docs/faq)
- **Comunidade**: Participe do fórum de suporte
- **Suporte Premium**: Disponível para licenças pagas

## Próximos Passos

Após a instalação bem-sucedida:

1. **Configure seu Ambiente**: [Configuração do Ambiente](/docs/user-manual/getting-started/environment-setup)
2. **Explore o Dashboard**: [Dashboard](/docs/user-manual/screens-and-operations/dashboard)
3. **Configure Heatmaps**: [Heatmaps](/docs/user-manual/screens-and-operations/heatmaps)

---

*Parabéns! Você instalou com sucesso o QA Advisor. Agora você está pronto para começar a coletar insights valiosos sobre seu site WordPress.*
