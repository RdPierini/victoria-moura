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

  // 4. Formulário Inteligente de WhatsApp
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
