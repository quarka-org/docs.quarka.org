---
sidebar_position: 10
---

# Ativação de Licença

A seção Ativação de Licença permite gerenciar sua licença do QA Advisor, ativar recursos premium e monitorar o status da sua assinatura.

## Visão Geral

O sistema de licenciamento do QA Advisor oferece diferentes planos para atender às necessidades de sites de todos os tamanhos, desde blogs pessoais até grandes empresas.

## Tipos de Licença

### Licença Gratuita

**Recursos Incluídos**
```
✅ Analytics básico
✅ Heatmaps limitados (1,000 visualizações/mês)
✅ 1 site
✅ Retenção de dados: 30 dias
✅ Suporte da comunidade
```

**Limitações**
- Máximo 10,000 page views/mês
- Recursos de IA limitados
- Sem integrações premium
- Relatórios básicos

### Licença Professional

**Recursos Incluídos**
```
✅ Todos os recursos gratuitos
✅ Heatmaps ilimitados
✅ Até 5 sites
✅ Retenção de dados: 12 meses
✅ Módulos de IA completos
✅ Integrações avançadas
✅ Suporte prioritário
✅ Relatórios avançados
```

**Preço**: R$ 29/mês ou R$ 290/ano (economia de 17%)

### Licença Enterprise

**Recursos Incluídos**
```
✅ Todos os recursos Professional
✅ Sites ilimitados
✅ Retenção de dados: Ilimitada
✅ White-label disponível
✅ API completa
✅ Suporte dedicado
✅ Treinamento personalizado
✅ SLA garantido
```

**Preço**: Sob consulta (a partir de R$ 199/mês)

## Processo de Ativação

### Ativação Online

**Passo a Passo**
1. Acesse `QA Advisor > Ativação de Licença`
2. Insira sua chave de licença
3. Clique em "Ativar Licença"
4. Aguarde confirmação
5. Recursos premium são ativados automaticamente

**Exemplo de Chave**
```
Formato: QAHM-XXXX-XXXX-XXXX-XXXX
Exemplo: QAHM-A1B2-C3D4-E5F6-G7H8
```

### Ativação Offline

**Para Ambientes Restritos**
1. Gere arquivo de solicitação
2. Envie para suporte@qaadvisor.com
3. Receba arquivo de ativação
4. Importe arquivo no plugin
5. Licença ativada localmente

## Status da Licença

### Informações Exibidas

**Dashboard de Licença**
```
📋 Status da Licença:
Plano: Professional
Status: ✅ Ativa
Expira em: 15/03/2026
Sites utilizados: 3/5
Renovação automática: Ativada
```

### Monitoramento de Uso

**Métricas de Consumo**
```
📊 Uso Atual:
Page Views: 45,000/100,000 (45%)
Heatmaps: Ilimitado
Armazenamento: 2.3GB/10GB
API Calls: 1,250/5,000
```

## Gerenciamento de Sites

### Adicionar Novo Site

**Processo de Adição**
1. Acesse painel de licença
2. Clique em "Adicionar Site"
3. Insira URL do site
4. Confirme propriedade
5. Site adicionado à licença

### Remover Site

**Liberação de Slot**
1. Selecione site a remover
2. Confirme remoção
3. Slot liberado para novo site
4. Dados do site removido (opcional)

## Renovação e Pagamento

### Renovação Automática

**Configuração**
```
💳 Renovação Automática:
Status: ✅ Ativada
Método: Cartão terminado em 1234
Próxima cobrança: 15/03/2025
Valor: R$ 29,00
```

### Renovação Manual

**Processo Manual**
1. Receba notificação de expiração
2. Acesse painel de renovação
3. Selecione período de renovação
4. Efetue pagamento
5. Licença renovada automaticamente

### Métodos de Pagamento

**Opções Disponíveis**
- Cartão de crédito
- PIX (Brasil)
- Boleto bancário
- PayPal
- Transferência bancária (Enterprise)

## Upgrade e Downgrade

### Upgrade de Plano

**Processo de Upgrade**
```
Gratuito → Professional:
- Pagamento proporcional
- Ativação imediata
- Recursos liberados
- Dados preservados
```

### Downgrade de Plano

**Considerações**
- Recursos premium desativados
- Dados podem ser limitados
- Sites extras removidos
- Período de carência de 30 dias

## Solução de Problemas

### Problemas Comuns

**Licença Não Ativa**
```
Possíveis Causas:
❌ Chave de licença inválida
❌ Limite de sites excedido
❌ Licença expirada
❌ Problemas de conectividade
```

**Soluções**
1. Verificar chave de licença
2. Confirmar conectividade
3. Validar domínio do site
4. Contatar suporte se necessário

### Códigos de Erro

**Erros Frequentes**
```
ERROR_001: Chave inválida
ERROR_002: Limite excedido
ERROR_003: Licença expirada
ERROR_004: Domínio não autorizado
ERROR_005: Conectividade
```

## Suporte e Assistência

### Canais de Suporte

**Por Tipo de Licença**
```
Gratuita: Fórum da comunidade
Professional: Email + Chat
Enterprise: Suporte dedicado + Telefone
```

### Documentação

**Recursos Disponíveis**
- Base de conhecimento
- Vídeos tutoriais
- FAQ de licenciamento
- Guias de solução de problemas

## Conformidade e Segurança

### Proteção de Dados

**Medidas de Segurança**
- Criptografia de chaves
- Validação de domínio
- Logs de ativação
- Monitoramento de uso

### Conformidade Legal

**Regulamentações**
- LGPD (Brasil)
- GDPR (Europa)
- CCPA (Califórnia)
- Termos de uso claros

## API de Licenciamento

### Endpoints Disponíveis

**Para Desenvolvedores**
```php
// Verificar status da licença
GET /api/license/status

// Informações de uso
GET /api/license/usage

// Histórico de ativações
GET /api/license/history
```

### Webhooks

**Notificações Automáticas**
```php
// Webhook para expiração próxima
add_action('qahm_license_expiring', function($days_left) {
    // Notificar administrador
    send_expiration_notice($days_left);
});
```

## Próximos Passos

Após ativar sua licença:

1. **Configure o Plugin**: [Configurações](/docs/user-manual/screens-and-operations/settings)
2. **Acesse Ajuda**: [Ajuda](/docs/user-manual/screens-and-operations/help)
3. **Explore Heatmaps**: [Heatmaps](/docs/user-manual/screens-and-operations/heatmaps)

---

*Uma licença ativa garante acesso a todos os recursos premium do QA Advisor. Mantenha sua licença atualizada para aproveitar ao máximo o plugin.*
