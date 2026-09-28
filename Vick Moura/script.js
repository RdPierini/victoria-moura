/**
 * Script Interativo - Landing Page Victória Moura Psicologia
 * CRP: 06/189042
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Fixo com Sombra Dinâmica
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', window.scrollY > 20);
    }
  }, { passive: true });

  // 2. Menu Mobile Acessível
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-item');

  const navCloseBtn = document.getElementById('nav-close-btn');

  if (menuToggle && mainNav) {
    const toggleMenu = (state) => {
      const isOpen = state !== undefined ? state : !mainNav.classList.contains('is-open');
      mainNav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    menuToggle.addEventListener('click', () => toggleMenu());
    if (navCloseBtn) {
      navCloseBtn.addEventListener('click', () => toggleMenu(false));
    }

    navLinks.forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Fechar ao clicar fora dos links na área escurecida do menu
    mainNav.addEventListener('click', (e) => {
      if (e.target === mainNav) {
        toggleMenu(false);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  }

  // 3. Destacar Link Ativo ao Rolar
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });

    sections.forEach((sec) => observer.observe(sec));
  }

  // 4. Conteúdos Interativos dos Cards da Psicologia Geek (Modal)
  const articlesData = {
    steven: {
      title: "O que o Steven Universe pode nos ensinar sobre independência emocional",
      tag: "Animação & Psicanálise",
      img: "assets/images/card-steven-universe.jpg",
      text: `
        <p>Ao longo da série, vemos Steven carregar o fardo de ser o "curador" de todos ao seu redor. Ele herda os conflitos não resolvidos da mãe e assume para si a responsabilidade de manter todos felizes, seguros e pacificados.</p>
        <p>Em <em>Steven Universe Future</em>, o preço psíquico dessa sobrecarga é revelado: crises de ansiedade, perda de identidade e a incapacidade de pedir ajuda para si mesmo. Na clínica psicológica, essa dinâmica é muito comum em pessoas que cresceram exercendo o papel de cuidadoras precoces da própria família.</p>
        <p>Aprender sobre independência emocional é entender que o seu valor não depende de consertar os outros, mas da coragem de habitar a própria vulnerabilidade.</p>
      `
    },
    lapis: {
      title: "O que a Lapis Lazuli pode nos fazer pensar sobre permanecer?",
      tag: "Vínculos & Trauma",
      img: "assets/images/card-lapis-lazuli.jpg",
      text: `
        <p>A trajetória de Lapis Lazuli é uma das metáforas mais densas sobre relacionamentos abusivos e dissociação na animação moderna. Aprisionada por milênios em um espelho e posteriormente em uma fusão destrutiva no fundo do mar, Lapis vive o dilema entre fugir para o isolamento ou arriscar construir um lar.</p>
        <p>Quando alguém passa por traumas relacionais intensos, a sensação de que "qualquer aproximação é uma ameaça" se torna a defesa primária. Permanecer dói, porque permanecer exige confiar.</p>
        <p>Na psicoterapia, trabalhamos a reconstrução desse afeto seguro passo a passo, sem forçar um ritmo que a psique ainda não pode suportar.</p>
      `
    },
    backrooms: {
      title: "Backrooms como metáfora do inconsciente",
      tag: "Espaços Liminares & O Estranho",
      img: "assets/images/card-backrooms.jpg",
      text: `
        <p>O fenômeno das <em>Backrooms</em> — labirintos intermináveis de salas acarpetadas em amarelo sob luzes fluorescentes zumbindo — ressoa profundamente com o conceito freudiano do <em>Unheimlich</em> (o Estranho-Familiar).</p>
        <p>É um lugar que parece conhecido, mas onde nada está no lugar certo; não há portas de saída evidentes e a sensação de vigilância é constante. Esse é o exato sentimento de quem atravessa crises de despersonalização ou pensamentos obsessivos repetitivos.</p>
        <p>Explorar o inconsciente na análise não é ficar preso nas Backrooms, mas encontrar os pontos de ancoragem na realidade que nos devolvem a sensação de pertencimento e controle sobre o próprio espaço interno.</p>
      `
    },
    vespa: {
      title: "O que a Vespa pode nos ensinar sobre escolhas e renúncias",
      tag: "Heroínas & Desejo",
      img: "assets/images/card-vespa.jpg",
      text: `
        <p>Personagens que equilibram poderes excepcionais com responsabilidades cotidianas trazem à tona o conflito clássico entre o dever e o desejo autêntico. Janet van Dyne e suas contrapartes nos lembram que a maturidade emocional não consiste em ter tudo ao mesmo tempo.</p>
        <p>Escolher um caminho inevitavelmente implica em fazer o luto daquilo que foi deixado de lado. A angústia diante das escolhas muitas vezes paralisa mulheres jovens que sentem a pressão social de serem impecáveis em todas as esferas.</p>
        <p>Na escuta psicanalítica, damos nome a esse medo e resgatamos a autorização interna para bancar as próprias escolhas com serenidade.</p>
      `
    }
  };

  const modal = document.getElementById('article-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalImg = document.getElementById('modal-img');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');

  document.querySelectorAll('.card-read-more').forEach((btn) => {
    btn.addEventListener('click', () => {
      const articleKey = btn.getAttribute('data-article');
      const data = articlesData[articleKey];
      if (data && modal) {
        modalImg.src = data.img;
        modalTag.textContent = data.tag;
        modalTitle.textContent = data.title;
        modalText.innerHTML = data.text;
        if (typeof modal.showModal === 'function') {
          modal.showModal();
        } else {
          modal.setAttribute('open', '');
        }
      }
    });
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.close();
      }
    });
  }

  // 5. Formulário Inteligente de WhatsApp
  const appointmentForm = document.getElementById('appointment-form');
  const nameInput = document.getElementById('client-name');
  const ageInput = document.getElementById('client-age');
  const modalitySelect = document.getElementById('client-modality');
  const shiftSelect = document.getElementById('client-shift');
  const interestSelect = document.getElementById('client-interest');
  const messageInput = document.getElementById('client-message');

  const nameError = document.getElementById('name-error');
  const ageError = document.getElementById('age-error');
  const interestError = document.getElementById('interest-error');
  const messageError = document.getElementById('message-error');

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      const name = nameInput ? nameInput.value.trim() : '';
      if (!name) {
        if (nameError) nameError.textContent = 'Por favor, informe seu nome ou como prefere ser chamada(o).';
        if (nameInput) nameInput.style.borderColor = '#D32F2F';
        if (!hasError && nameInput) { nameInput.focus(); hasError = true; }
      }

      const age = ageInput ? ageInput.value.trim() : '';
      if (!age) {
        if (ageError) ageError.textContent = 'Por favor, informe sua idade.';
        if (ageInput) ageInput.style.borderColor = '#D32F2F';
        if (!hasError && ageInput) { ageInput.focus(); hasError = true; }
      }

      const interest = interestSelect ? interestSelect.value : '';
      if (!interest) {
        if (interestError) interestError.textContent = 'Por favor, selecione o que te traz à psicoterapia.';
        if (interestSelect) interestSelect.style.borderColor = '#D32F2F';
        if (!hasError && interestSelect) { interestSelect.focus(); hasError = true; }
      }

      const customMessage = messageInput ? messageInput.value.trim() : '';
      if (!customMessage) {
        if (messageError) messageError.textContent = 'Por favor, escreva uma breve mensagem ou observação.';
        if (messageInput) messageInput.style.borderColor = '#D32F2F';
        if (!hasError && messageInput) { messageInput.focus(); hasError = true; }
      }

      if (hasError) return;

      const modality = modalitySelect ? modalitySelect.value : 'O Despertar da Heroína (psicoterapia tradicional)';
      const shift = shiftSelect ? shiftSelect.value : 'Flexível';

      let msg = `Olá, Victória! Tudo bem?\n\n`;
      msg += `Meu nome é *${name}* (${age} anos) e gostaria de agendar uma conversa sobre psicoterapia.\n\n`;
      msg += `📌 *Modalidade:* ${modality}\n`;
      msg += `⏰ *Melhor período:* ${shift}\n`;
      msg += `🎯 *O que me traz à terapia:* ${interest}\n`;
      msg += `💬 *Mensagem/Observação:* ${customMessage}\n\n`;
      msg += `Poderia me informar sobre valores e próximos horários disponíveis? Muito obrigada(o)!`;

      const whatsappUrl = `https://wa.me/5512982800050?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });

    const fieldsToValidate = [
      { el: nameInput, err: nameError },
      { el: ageInput, err: ageError },
      { el: interestSelect, err: interestError },
      { el: messageInput, err: messageError }
    ];

    fieldsToValidate.forEach(({ el, err }) => {
      if (el) {
        const evt = el.tagName === 'SELECT' ? 'change' : 'input';
        el.addEventListener(evt, () => {
          if (err) err.textContent = '';
          el.style.borderColor = '';
        });
      }
    });
  }

  // 6. Tooltip do WhatsApp
  const tooltip = document.getElementById('whatsapp-tooltip');
  const closeTooltip = document.getElementById('close-tooltip');
  if (tooltip && closeTooltip) {
    if (sessionStorage.getItem('wa_tooltip_dismissed')) {
      tooltip.style.display = 'none';
    }
    closeTooltip.addEventListener('click', (e) => {
      e.stopPropagation();
      tooltip.style.display = 'none';
      sessionStorage.setItem('wa_tooltip_dismissed', 'true');
    });
  }
});
