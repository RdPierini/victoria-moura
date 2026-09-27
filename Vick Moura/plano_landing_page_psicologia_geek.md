# Plano de Ação & Especificação de Design: Landing Page Psicologia Geek
> **Profissional:** Victória Moura — Psicóloga Clínica e Psicanalista  
> **Registro Profissional:** CRP 06/189042  
> **Contatos Oficiais:**  
> - **WhatsApp:** (12) 98280-0050  
> - **E-mail:** psicovictoriamoura@gmail.com  
> - **Instagram:** [@psicovictoriamoura](https://www.instagram.com/psicovictoriamoura/)  
> - **Modalidades:** Atendimento Online e Presencial (Potim/SP)

---

## 1. Visão Geral e Posicionamento Estratégico

### O Desafio
Equilibrar **descontração (Cultura Geek, narrativas de ficção e fantasia)** com a **seriedade, discrição e rigor ético exigidos pela clínica psicológica e psicanálise**. 

### O Problema da Referência Inicial (Vícios de IA)
A imagem original apresenta clichês visuais comuns de modelos de geração de imagem:
- Ilustrações puramente fantásticas estilo Midjourney (castelos roxos, fadas/magas estereotipadas com cajados cintilantes), que aproximam o site de misticismo, tarô ou RPG infantilizado, afastando a credibilidade de um consultório de saúde mental.
- Molduras decorativas vitorianas repetitivas e excesso de partículas/estrelas brilhantes.
- Paleta monocromática sufocante (filtro roxo aplicado sobre todos os cards e fotos).

### A Solução Proposta: *Geek Editorial & Psicanálise Contemporânea*
- Substituir a estética de "fantasia medieval de IA" por um **design editorial sofisticado e limpo** (estilo publicações e revistas contemporâneas de literatura e design).
- Elementos geek apresentados através de **metáforas conceituais inteligentes** (sistemas narrativos, escolhas morais em jogos, arquétipos em animes/séries, *quest logs* e escrita terapêutica).
- Valorizar a **presença humana real**: fotos profissionais com iluminação aconchegante da psicóloga, humanizando o acolhimento.

---

## 2. Paleta de Cores & Design Tokens

A paleta combina tons noturnos profundos (que remetem ao inconsciente e reflexão) com tons claros e arejados (garantindo legibilidade, clareza e conformidade WCAG AA de contraste).

| Papel Visual | Token / Nome | Hexadecimal | Uso |
| :--- | :--- | :--- | :--- |
| **Fundo Profundo** | `color-bg-nocturne` | `#150F24` | Hero section noturna, footer e blocos de destaque imersivo |
| **Fundo de Transição** | `color-bg-plum` | `#24183E` | Cards escuros, badges e destaques |
| **Fundo Claro (Acolhedor)** | `color-bg-canvas` | `#FAF8FC` | Fundo principal de leitura (seções de conteúdo e blog) |
| **Superfície Clara Secundária** | `color-bg-surface-light` | `#F2ECF8` | Containers, caixas de citação e formulários |
| **Acento Primário (Lavanda)** | `color-accent-lavender` | `#7C4DBF` | Botões de ação, links interativos e ícones |
| **Acento Suave (Iris/Glow)** | `color-accent-light` | `#BFA6E8` | Bordas sutis, marcadores e microdetalhes |
| **Texto de Alto Contraste** | `color-text-main` | `#1A1624` | Tipografia em fundos claros (contraste > 12:1) |
| **Texto Suave / Muted** | `color-text-muted` | `#635B73` | Subtítulos e metadados |
| **Texto em Fundos Escuros** | `color-text-inverse` | `#FDFCFE` | Títulos e parágrafos em seções noturnas |

---

## 3. Tipografia & Hierarquia

- **Títulos & Expressão:** *Cormorant Garamond* ou *Playfair Display* (Google Fonts)  
  *Por que:* Confere o tom literário, refinado e humano da narrativa e da escrita terapêutica, sem parecer kitsch.
- **Corpo & Interface:** *Plus Jakarta Sans* ou *Inter* (Google Fonts)  
  *Por que:* Máxima legibilidade em telas, moderna, limpa, neutra e com acessibilidade garantida.
- **Acentos Tipográficos (Citações / Subtítulos):** *Caveat* ou *Italiana* (aplicado com muita parcimônia para frases de efeito e notas de rodapé).

---

## 4. Arquitetura da Informação (Seções da Landing Page)

```
[ Header Fixo / Acessível ]
  ├─ Logo & Assinatura (Victória Moura | CRP 06/189042)
  ├─ Navegação: Início · Sobre · Psicoterapia · A Jornada · Psicologia Geek · Contato
  └─ CTA Superior: Agendar Conversa (WhatsApp)

[ 01. Hero Section: O Acolhimento ]
  ├─ Headline: "Sua história merece ser escutada em todas as suas linguagens."
  ├─ Subtítulo: Espaço seguro para mulheres e adolescentes, unindo a profundidade da psicanálise com o repertório da cultura geek e da escrita terapêutica.
  ├─ CTAs: [Agendar Primeira Consulta] (Primário) · [Conheça a Abordagem] (Secundário)
  └─ Badges de Autoridade Ética: CRP 06/189042 | Atendimento Online e Presencial (Potim/SP)

[ 02. Sobre Mim: A Profissional e a Abordagem ]
  ├─ Foto Profissional humanizada e autêntica
  ├─ Mini-bio: Formação clínica, fundamentação psicanalítica e a relação ética com o repertório cultural dos pacientes.
  └─ Diferencial: Sem preconceitos com os universos e mídias que te ajudam a se expressar.

[ 03. Metodologia: "A Jornada da Heroína" & Escrita Terapêutica ]
  ├─ Conceito: Inspirado no percurso arquetípico de Maureen Murdock e na psicanálise do feminino.
  ├─ Estrutura do Acompanhamento:
  │   ├─ Sessões de escuta ativa e associação livre
  │   ├─ Exercícios guiados de escrita e registro de narrativas
  │   ├─ "Side Quests" Reflexivas: Pequenos desafios de autopercepção entre sessões
  │   └─ O Caderno da Heroína: Mapeamento de padrões e reescrita da própria trajetória
  └─ Citação de impacto reflexivo sobre autoria e identidade.

[ 04. Conteúdos & Repertório: Psicologia Geek ]
  ├─ Apresentação: Análises de obras como ferramentas de autoconhecimento (Steven Universe, Lapis Lazuli, metáforas de jogos e narrativas).
  ├─ Grid de Cards interativos com animação de hover elegante.
  └─ Botão para ver mais artigos / reflexões.

[ 05. Perguntas Frequentes (FAQ Acordeão Acessível) ]
  ├─ "Como funciona a psicoterapia online?"
  ├─ "Preciso ser 'geek' para me consultar com você?"
  ├─ "Como a cultura pop é usada na terapia? É brincadeira ou coisa séria?"
  ├─ "Como funciona o sigilo e a privacidade clínica?"
  └─ "Quais são as formas de pagamento e agendamento?"

[ 06. Rodapé & Conversão Direta ]
  ├─ Frase final de acolhimento: "Você não precisa carregar essa jornada sozinha."
  ├─ Botões rápidos:
  │   ├─ WhatsApp Oficial: (12) 98280-0050
  │   └─ E-mail: psicovictoriamoura@gmail.com
  ├─ Localização: Potim/SP & Atendimento Nacional Online
  └─ Notas Legais e Éticas: Respeito estrito ao Código de Ética Profissional do Psicólogo (CFP).
```

---

## 5. Diretrizes de Segurança, Qualidade e Código Limpo

Para a construção técnica posterior:

1. **Stack Recomendada:**
   - **Frontend:** Astro ou Next.js (React) com Tailwind CSS para estilização através de design tokens.
   - **Performance:** Imagens servidas em formato WebP/AVIF com `sizes` e `priority` adequados para Core Web Vitals (LCP < 1.8s).
2. **Segurança & Privacidade:**
   - Links externos com atributos `target="_blank" rel="noopener noreferrer"`.
   - Se houver formulário de contato integrado: sanitização estrita de inputs no backend, proteção CSRF e honeypot antispam.
   - Conformidade com a LGPD: Política de privacidade clara sobre os dados coletados para agendamento.
3. **Animações (Microinterações Elegantes):**
   - Transições de cor e opacidade suaves (`duration-300 ease-out`).
   - Uso de `framer-motion` ou CSS Transitions nativas.
   - **Acessibilidade Obrigatória:** Respeitar a preferência do usuário com `@media (prefers-reduced-motion: reduce)`.
4. **Semântica & Acessibilidade (a11y):**
   - Tags HTML5 estruturadas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Navegação completa por teclado com anéis de foco visíveis (`focus-visible`).
   - Textos alternativos (`alt`) descritivos e informativos nas imagens.

---

## 6. Próximos Passos de Execução
1. **Aprovação do Conceito e Conteúdo** pelo solicitante.
2. **Setup do Projeto** com estrutura de pastas e componentes reutilizáveis.
3. **Desenvolvimento dos Componentes de UI** (Hero, Seção Sobre, Cards de Artigos, Acordeão FAQ e Footer).
4. **Integração dos canais de contato** (WhatsApp com mensagem pré-definida amigável e e-mail).
5. **Revisão de acessibilidade e auditoria Lighthouse (100% Performance, SEO, Boas Práticas e Acessibilidade).**
