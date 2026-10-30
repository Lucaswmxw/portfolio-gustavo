/**
 * PORTFÓLIO PESSOAL — LUCAS FERREIRA
 * Script de Interatividade e Reatividade Nativa (Vanilla JS)
 * Regras: Sem frameworks, sem bibliotecas externas, sem poluição de escopo global.
 */

(function () {
  'use strict';

  // Habilita estilos aprimorados que dependem de JavaScript
  document.documentElement.classList.add('js-enabled');

  // --------------------------------------------------------------------------
  // 1. GERENCIAMENTO DE TEMA (CLARO / ESCURO)
  // --------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'lf_portfolio_theme';
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');

  /**
   * Obtém o tema preferido inicial (Armazenamento local ou Sistema Operacional)
   */
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  /**
   * Aplica o tema na tag <html> e atualiza acessibilidade
   */
  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (themeToggleBtn) {
      const isDark = theme === 'dark';
      themeToggleBtn.setAttribute(
        'aria-label',
        isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro'
      );
      themeToggleBtn.setAttribute(
        'title',
        isDark ? 'Ativar tema claro' : 'Ativar tema escuro'
      );
    }
  }

  // Inicializa o tema no carregamento
  applyTheme(getPreferredTheme());

  // Ouvinte de clique no botão de alternância de tema
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // Escuta alterações na preferência do sistema operacional
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 2. MENU RESPONSIVO MOBILE
  // --------------------------------------------------------------------------
  const menuToggleBtn = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu() {
    if (!siteNav || !menuToggleBtn) return;
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggleBtn.classList.toggle('is-active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    menuToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuToggleBtn.setAttribute(
      'aria-label',
      isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
  }

  function closeMenu() {
    if (!siteNav || !menuToggleBtn) return;
    siteNav.classList.remove('is-open');
    menuToggleBtn.classList.remove('is-active');
    document.body.classList.remove('menu-open');
    menuToggleBtn.setAttribute('aria-expanded', 'false');
    menuToggleBtn.setAttribute('aria-label', 'Abrir menu de navegação');
  }

  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', toggleMenu);
  }

  // Fecha o menu móvel ao clicar em qualquer link de navegação
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Fecha o menu móvel com a tecla 'Escape'
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && siteNav && siteNav.classList.contains('is-open')) {
      closeMenu();
      if (menuToggleBtn) menuToggleBtn.focus();
    }
  });

  // --------------------------------------------------------------------------
  // 3. NAVEGAÇÃO REATIVA E SEÇÃO ATIVA (Emotion Agency)
  // --------------------------------------------------------------------------
  const observedSections = document.querySelectorAll('section[id]');
  
  if ('IntersectionObserver' in window && observedSections.length > 0) {
    const navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              const href = link.getAttribute('href');
              if (href === '#' + currentId) {
                link.classList.add('is-active');
              } else {
                link.classList.remove('is-active');
              }
            });
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    observedSections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  // --------------------------------------------------------------------------
  // 4. BARRA DE PROGRESSO DE ROLAGEM EDITORIAL (requestAnimationFrame)
  // --------------------------------------------------------------------------
  const progressBar = document.getElementById('scroll-progress-bar');
  if (progressBar) {
    let ticking = false;
    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // --------------------------------------------------------------------------
  // 5. ANIMAÇÕES DE ENTRADA SUAVES (Format / Emotion Agency via IntersectionObserver)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    // Fallback gracioso: revela todos imediatamente
    revealElements.forEach(function (element) {
      element.classList.add('is-revealed');
    });
  }

  // --------------------------------------------------------------------------
  // 6. VALIDAÇÃO NATIVA DO FORMULÁRIO DE CONTATO (Acessível & Sem Backend)
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const formFeedback = document.getElementById('form-feedback');

  // Expressão regular padrão para formato básico de e-mail
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldError(input, errorElement, message) {
    if (!input || !errorElement) return;
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    input.setAttribute('aria-invalid', 'true');
    errorElement.textContent = message;
  }

  function clearFieldError(input, errorElement) {
    if (!input || !errorElement) return;
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    input.removeAttribute('aria-invalid');
    errorElement.textContent = '';
  }

  function validateName() {
    if (!nameInput) return false;
    const value = nameInput.value.trim();
    if (!value) {
      setFieldError(nameInput, nameError, 'Por favor, informe seu nome completo.');
      return false;
    }
    if (value.length < 3) {
      setFieldError(nameInput, nameError, 'O nome deve conter pelo menos 3 caracteres.');
      return false;
    }
    clearFieldError(nameInput, nameError);
    return true;
  }

  function validateEmail() {
    if (!emailInput) return false;
    const value = emailInput.value.trim();
    if (!value) {
      setFieldError(emailInput, emailError, 'Por favor, informe seu endereço de e-mail.');
      return false;
    }
    if (!EMAIL_REGEX.test(value)) {
      setFieldError(emailInput, emailError, 'Informe um formato de e-mail válido (ex: nome@dominio.com).');
      return false;
    }
    clearFieldError(emailInput, emailError);
    return true;
  }

  function validateMessage() {
    if (!messageInput) return false;
    const value = messageInput.value.trim();
    if (!value) {
      setFieldError(messageInput, messageError, 'Por favor, escreva uma mensagem.');
      return false;
    }
    if (value.length < 10) {
      setFieldError(messageInput, messageError, 'A mensagem deve conter pelo menos 10 caracteres.');
      return false;
    }
    clearFieldError(messageInput, messageError);
    return true;
  }

  // Validação em tempo real ao digitar / sair do campo
  if (nameInput) {
    nameInput.addEventListener('input', function () {
      if (nameInput.classList.contains('is-invalid')) validateName();
    });
    nameInput.addEventListener('blur', validateName);
  }

  if (emailInput) {
    emailInput.addEventListener('input', function () {
      if (emailInput.classList.contains('is-invalid')) validateEmail();
    });
    emailInput.addEventListener('blur', validateEmail);
  }

  if (messageInput) {
    messageInput.addEventListener('input', function () {
      if (messageInput.classList.contains('is-invalid')) validateMessage();
    });
    messageInput.addEventListener('blur', validateMessage);
  }

  // Manipulador de submissão do formulário
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (formFeedback) {
        formFeedback.className = 'form-feedback';
        formFeedback.textContent = '';
      }

      if (isNameValid && isEmailValid && isMessageValid) {
        // Validação bem-sucedida
        if (formFeedback) {
          formFeedback.classList.add('feedback-success', 'is-visible');
          formFeedback.innerHTML = 
            '<strong>✓ Validação concluída com sucesso!</strong><br>' +
            'Todos os campos atendem aos critérios técnicos. ' +
            '<em>(Nota: este portfólio é um projeto 100% estático sem backend; nenhuma informação foi enviada para servidores externos.)</em>';
        }

        // Limpeza dos campos
        contactForm.reset();
        [nameInput, emailInput, messageInput].forEach(function (input) {
          if (input) input.classList.remove('is-valid');
        });
      } else {
        // Foco acessível no primeiro campo inválido
        if (!isNameValid && nameInput) {
          nameInput.focus();
        } else if (!isEmailValid && emailInput) {
          emailInput.focus();
        } else if (!isMessageValid && messageInput) {
          messageInput.focus();
        }

        if (formFeedback) {
          formFeedback.classList.add('feedback-error', 'is-visible');
          formFeedback.textContent = 'Por favor, preencha corretamente os campos obrigatórios destacados acima.';
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. LOG DE INICIALIZAÇÃO CONTROLADO
  // --------------------------------------------------------------------------
  console.log(
    '%c LF // Lucas Ferreira — Portfólio 2026 %c Pronto ',
    'background: #14171a; color: #00e599; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'background: #00e599; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px;'
  );
})();
