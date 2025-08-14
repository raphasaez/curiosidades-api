const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Array de curiosidades
const curiosidades = [
  "Cross-Site Scripting (XSS) permite que atacantes injetem scripts maliciosos em páginas confiáveis, afetando usuários finais.",
  "SQL Injection ainda é uma das vulnerabilidades mais exploradas em aplicações web mal protegidas.",
  "Vulnerabilidades de deserialização insegura podem permitir execução remota de código no servidor.",
  "CSP (Content Security Policy) é uma camada importante de defesa contra ataques XSS.",
  "Ataques SSRF (Server-Side Request Forgery) podem permitir que um invasor acesse recursos internos da rede.",
  "Erro de configuração de CORS pode expor dados sensíveis para domínios não autorizados.",
  "Exposição de informações em logs e mensagens de erro pode fornecer pistas críticas para atacantes.",
  "Session fixation e hijacking ainda ocorrem quando cookies de sessão não são configurados corretamente.",
  "Injeção de comandos no sistema operacional via input não sanitizado é uma vulnerabilidade perigosa em aplicações web.",
  "Ataques de força bruta podem ser mitigados com rate limiting, captcha e autenticação multifator.",
  "Falhas em frameworks populares (como Django, Rails ou Express) são frequentemente exploradas quando não atualizados.",
  "Headers HTTP de segurança (HSTS, X-Frame-Options, X-Content-Type-Options) ajudam a proteger contra vários tipos de ataques.",
  "Injeções de template (como em Jinja2 ou Thymeleaf) podem permitir execução de código no servidor se não forem sanitizadas.",
  "Exposição de endpoints de API sem autenticação adequada pode vazar dados críticos.",
  "Vulnerabilidades em dependências de terceiros podem comprometer sua aplicação mesmo que o seu código seja seguro."
];

// Rota para retornar curiosidade aleatória
app.get('/curiosidade', (req, res) => {
  const index = Math.floor(Math.random() * curiosidades.length);
  res.json({ curiosidade: curiosidades[index] });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
