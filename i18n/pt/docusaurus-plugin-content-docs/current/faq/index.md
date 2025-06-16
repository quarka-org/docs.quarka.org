---
sidebar_position: 1
---

# Perguntas Frequentes (FAQ)

Encontre respostas rápidas para as perguntas mais comuns sobre o QA Advisor WordPress Analytics Plugin.

## Instalação e Configuração

### Como instalar o QA Advisor?

**Método Recomendado:**
1. Acesse `Plugins > Adicionar Novo` no WordPress
2. Pesquise por "QA Advisor"
3. Clique em "Instalar Agora"
4. Ative o plugin
5. Siga o assistente de configuração

**Método Manual:**
1. Baixe o arquivo ZIP do plugin
2. Vá para `Plugins > Adicionar Novo > Fazer Upload`
3. Selecione o arquivo e instale
4. Ative o plugin

### O QA Advisor é compatível com minha versão do WordPress?

O QA Advisor é compatível com:
- **WordPress**: 5.0 ou superior (recomendado: versão mais recente)
- **PHP**: 7.4 ou superior (recomendado: 8.1+)
- **MySQL**: 5.6 ou superior

### Como configurar o plugin após a instalação?

Após a ativação, o QA Advisor iniciará automaticamente o assistente de configuração que irá guiá-lo através de:
- Configurações básicas de rastreamento
- Configurações de privacidade (GDPR/LGPD)
- Configuração de heatmaps
- Definição de metas iniciais

## Funcionalidades e Recursos

### Quais dados o QA Advisor coleta?

**Dados Coletados:**
- Páginas visitadas e tempo na página
- Cliques e interações (para heatmaps)
- Informações de dispositivo e navegador
- Localização geográfica (país/cidade)
- Padrões de navegação

**Dados NÃO Coletados:**
- Informações pessoais identificáveis
- Conteúdo de formulários
- Senhas ou dados sensíveis
- Endereços IP completos (anonimizados)

### Como funcionam os heatmaps?

Os heatmaps coletam dados anônimos de interação dos usuários e criam visualizações coloridas mostrando:
- **Áreas Quentes (Vermelho)**: Muita atividade
- **Áreas Mornas (Amarelo/Verde)**: Atividade moderada  
- **Áreas Frias (Azul)**: Pouca atividade

### O que são os módulos "Brains"?

Os Brains são módulos de IA que analisam automaticamente seus dados e fornecem:
- Insights sobre performance do site
- Recomendações de otimização
- Identificação de oportunidades
- Análises preditivas

## Performance e Compatibilidade

### O QA Advisor afeta a velocidade do meu site?

O QA Advisor é otimizado para performance mínima:
- Scripts carregados de forma assíncrona
- Dados processados em background
- Cache inteligente implementado
- Impacto típico: menos de 0.1s no tempo de carregamento

### É compatível com plugins de cache?

**Compatível com:**
- WP Rocket
- W3 Total Cache
- WP Super Cache
- LiteSpeed Cache
- Autoptimize

**Configuração Recomendada:**
- Excluir scripts do QA Advisor da minificação
- Permitir carregamento assíncrono
- Configurar cache de objeto se disponível

### Funciona com page builders?

**Totalmente Compatível:**
- Elementor
- Divi Builder
- Beaver Builder
- Gutenberg
- Visual Composer

## Privacidade e Conformidade

### O QA Advisor é compatível com GDPR/LGPD?

**Sim, totalmente compatível:**
- Anonimização automática de IPs
- Dados armazenados localmente
- Sem cookies de rastreamento obrigatórios
- Opções de opt-out para usuários
- Período de retenção configurável

### Onde os dados são armazenados?

Todos os dados são armazenados:
- **Localmente**: Na sua base de dados WordPress
- **Sem serviços externos**: Nenhum dado enviado para terceiros
- **Controle total**: Você possui todos os seus dados
- **Backup**: Incluído nos backups regulares do WordPress

### Como configurar conformidade com LGPD?

1. Acesse `QA Advisor > Configurações > Privacidade`
2. Ative "Conformidade LGPD"
3. Configure período de retenção (recomendado: 90 dias)
4. Ative anonimização de IP
5. Configure banner de consentimento se necessário

## Licenciamento e Planos

### Qual a diferença entre os planos?

**Gratuito:**
- Analytics básico
- Heatmaps limitados (1,000 views/mês)
- 1 site
- Suporte da comunidade

**Professional (R$ 29/mês):**
- Heatmaps ilimitados
- Até 5 sites
- Módulos de IA completos
- Suporte prioritário

**Enterprise (Sob consulta):**
- Sites ilimitados
- White-label
- API completa
- Suporte dedicado

### Como ativar minha licença?

1. Vá para `QA Advisor > Ativação de Licença`
2. Insira sua chave de licença
3. Clique em "Ativar"
4. Recursos premium são liberados automaticamente

### Posso usar em múltiplos sites?

Depende do seu plano:
- **Gratuito**: 1 site
- **Professional**: Até 5 sites
- **Enterprise**: Sites ilimitados

## Solução de Problemas

### Os dados não estão aparecendo no dashboard

**Possíveis Causas e Soluções:**

1. **Plugin recém-instalado**
   - Aguarde 24-48 horas para coleta inicial de dados

2. **JavaScript bloqueado**
   - Verifique console do navegador (F12)
   - Desative bloqueadores de anúncios temporariamente
   - Teste em modo incógnito

3. **Cache muito agressivo**
   - Limpe cache do site
   - Configure exclusões para scripts do QA Advisor

4. **Conflito com outros plugins**
   - Desative outros plugins de analytics temporariamente
   - Teste com tema padrão

### Heatmaps não estão sendo gerados

**Verificações:**

1. **Tráfego suficiente**
   - Mínimo de 100 sessões necessárias
   - Aguarde mais tempo para coleta

2. **Configurações corretas**
   - Verifique se páginas estão incluídas
   - Confirme taxa de amostragem

3. **Problemas técnicos**
   - Verifique logs de erro
   - Teste em diferentes dispositivos

### Performance lenta após instalação

**Otimizações:**

1. **Configurar limites de dados**
   ```php
   define('QAHM_LIMIT_PV_MONTH', 10000);
   define('QAHM_DATA_RETENTION_DAYS', 30);
   ```

2. **Otimizar servidor**
   - Aumentar memória PHP para 256MB
   - Configurar cache de objeto
   - Otimizar banco de dados

3. **Configurações do plugin**
   - Reduzir frequência de coleta
   - Limitar páginas rastreadas
   - Ativar compressão de dados

## Recursos Avançados

### Como usar a API do QA Advisor?

**Para desenvolvedores:**

1. Ative a API em `Configurações > Avançado`
2. Gere uma chave de API
3. Use endpoints disponíveis:
   ```
   GET /wp-json/qahm/v1/stats
   GET /wp-json/qahm/v1/heatmaps
   POST /wp-json/qahm/v1/events
   ```

### Como criar relatórios personalizados?

1. Acesse `QA Advisor > Relatórios`
2. Clique em "Novo Relatório"
3. Selecione métricas desejadas
4. Configure filtros e período
5. Salve e agende envio automático

### Posso integrar com Google Analytics?

**Sim, integração disponível:**
1. Vá para `Configurações > Integrações`
2. Conecte sua conta Google Analytics
3. Configure importação de dados
4. Visualize dados combinados no dashboard

## Suporte e Recursos

### Onde encontrar mais ajuda?

**Recursos Disponíveis:**
- **Documentação**: [docs.quarka.org](https://docs.quarka.org)
- **Fórum da Comunidade**: Suporte gratuito
- **Email**: suporte@qaadvisor.com (licenças pagas)
- **Chat**: Disponível no site oficial

### Como reportar bugs ou sugerir recursos?

1. **GitHub**: Para desenvolvedores e bugs técnicos
2. **Fórum**: Para discussões da comunidade
3. **Email**: Para suporte direto (licenças pagas)
4. **Formulário de Feedback**: Dentro do plugin

### Existe treinamento disponível?

**Recursos de Aprendizado:**
- Tutoriais em vídeo no YouTube
- Webinars mensais gratuitos
- Documentação completa
- Programa de certificação (em breve)

---

**Não encontrou sua pergunta?** Entre em contato conosco através dos canais de suporte ou consulte nossa [documentação completa](/docs/user-manual).
