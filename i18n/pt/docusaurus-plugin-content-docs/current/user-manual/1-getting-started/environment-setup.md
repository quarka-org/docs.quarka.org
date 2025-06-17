---
sidebar_position: 2
title: Configuração do Ambiente
---

# Configuração do Ambiente

Para garantir rastreamento preciso e desempenho suave com o QA Advisor, recomendamos ajustar as seguintes configurações de servidor e plugin.

---

## 1. Compressão e Minificação JavaScript

**Não** comprima, minifique ou combine arquivos JavaScript usados pelo QA Advisor.  
Alguns plugins de otimização ou temas podem interferir com scripts de rastreamento modificando ou atrasando sua execução.

> ✅ Verifique as configurações do seu plugin de cache ou otimização  
> ✅ Desative a minificação JS ou defer/async para scripts do QA Advisor

Para mais informações técnicas, veja [Quando jQuery é Adiado](/docs/user-manual/getting-started/when-defer-jquery).

---

## 2. Limite de Memória PHP e Tempo de Execução

O QA Advisor processa dados de rastreamento durante a agregação diária, que pode ser intensiva em memória em sites maiores.

Recomendamos as seguintes configurações PHP:

- `memory_limit`: **1024M** ou superior  
- `max_execution_time`: **240** segundos ou mais

> 💡 Essas configurações geralmente podem ser ajustadas via `php.ini`, `.htaccess` ou seu painel de controle de hospedagem.  
> Se não tiver certeza, pergunte ao seu provedor de hospedagem.

---

## 3. Compatibilidade de Plugin e Tema

O QA Advisor funciona com a maioria dos principais plugins e temas. No entanto, recomendamos:

- Desativar JavaScript defer/async para scripts críticos
- Garantir que seu plugin de cache permita saída de `qa-heatmap-analytics`
- Evitar duplicação com outras ferramentas de rastreamento que modificam eventos globais

---

## 4. CDN e Migração de Servidor

Se você estiver usando um CDN (ex. Cloudflare) ou migrou recentemente seu servidor:

- Limpe todos os caches (navegador, plugin, CDN)
- Confirme que os scripts do QA Advisor não estão bloqueados ou atrasados
- Certifique-se de que o fuso horário do seu servidor está correto (usado para agrupamento de dados)

---

## 5. Opcional: Confirmar Saída do Script

Para verificar se o script de rastreamento está sendo carregado corretamente:

1. Visite seu site enquanto **não estiver logado**
2. Clique com o botão direito e escolha "Exibir código-fonte da página"
3. Procure no HTML por `qahm` ou `qahmz`

> Se essas strings não forem encontradas, o script pode estar bloqueado ou não carregando.  
> Verifique erros JavaScript ou conflitos de plugins.

---
