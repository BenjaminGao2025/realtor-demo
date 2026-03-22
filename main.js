/* ============================================================
   Benjamin Gao Realtor — main.js
   Navigation, Theme Toggle, Scroll Reveal, FAQ, Chat Bubble,
   Newsletter Form, Mobile Nav
   ============================================================ */

(function () {
  'use strict';

  // === THEME TOGGLE ===
  const themeToggleDesktop = document.querySelector('[data-theme-toggle]');
  const themeToggleMobile = document.querySelector('[data-theme-toggle-mobile]');
  const root = document.documentElement;
  let currentTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', currentTheme);

  const sunIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const moonIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function updateThemeIcons() {
    const icon = currentTheme === 'dark' ? sunIcon : moonIcon;
    if (themeToggleDesktop) themeToggleDesktop.innerHTML = icon;
    if (themeToggleMobile) themeToggleMobile.innerHTML = icon;
  }

  function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', currentTheme);
    updateThemeIcons();
  }

  if (themeToggleDesktop) themeToggleDesktop.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
  updateThemeIcons();

  // === SCROLL-AWARE NAV ===
  const nav = document.querySelector('.nav');
  let lastScrollY = 0;
  let ticking = false;

  function onScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    if (scrollY > lastScrollY && scrollY > 200) {
      nav.classList.add('nav--hidden');
    } else {
      nav.classList.remove('nav--hidden');
    }
    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  });

  // === MOBILE NAV ===
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('nav__hamburger--active');
      mobileNav.classList.toggle('nav__mobile--open');
      document.body.style.overflow = mobileNav.classList.contains('nav__mobile--open') ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('nav__hamburger--active');
        mobileNav.classList.remove('nav__mobile--open');
        document.body.style.overflow = '';
      });
    });

    // Mobile dropdown toggle
    const mobileDropdowns = mobileNav.querySelectorAll('.nav__mobile-dropdown-trigger');
    mobileDropdowns.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        const sub = trigger.nextElementSibling;
        if (sub) sub.classList.toggle('nav__mobile-sub--open');
        trigger.classList.toggle('nav__mobile-link--open');
      });
    });
  }

  // === SCROLL REVEAL ===
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // === FAQ ACCORDION ===
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');
    if (question && answer) {
      question.addEventListener('click', function () {
        const isOpen = item.classList.contains('faq-item--open');
        // Close all
        faqItems.forEach(function (other) {
          other.classList.remove('faq-item--open');
          const otherAnswer = other.querySelector('.faq-item__answer');
          if (otherAnswer) otherAnswer.style.maxHeight = '0';
        });
        // Open clicked
        if (!isOpen) {
          item.classList.add('faq-item--open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // === CHAT BUBBLE ===
  const chatBubbleBtn = document.querySelector('.chat-bubble__btn');
  const chatWindow = document.querySelector('.chat-window');
  const chatClose = document.querySelector('.chat-window__close');
  const chatInput = document.querySelector('.chat-window__input input');
  const chatSend = document.querySelector('.chat-window__send');
  const chatBody = document.querySelector('.chat-window__body');
  const chatQuickBtns = document.querySelectorAll('.chat-quick-btn');

  if (chatBubbleBtn && chatWindow) {
    chatBubbleBtn.addEventListener('click', function () {
      chatWindow.classList.toggle('chat-window--open');
    });

    if (chatClose) {
      chatClose.addEventListener('click', function () {
        chatWindow.classList.remove('chat-window--open');
      });
    }

    // Quick action buttons
    chatQuickBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const text = btn.textContent.trim();
        addUserMessage(text);
        addBotReply(text);
      });
    });

    // Send message
    function sendMessage() {
      if (!chatInput) return;
      const text = chatInput.value.trim();
      if (!text) return;
      addUserMessage(text);
      chatInput.value = '';
      addBotReply(text);
    }

    if (chatSend) chatSend.addEventListener('click', sendMessage);
    if (chatInput) {
      chatInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') sendMessage();
      });
    }
  }

  function addUserMessage(text) {
    if (!chatBody) return;
    const msg = document.createElement('div');
    msg.className = 'chat-message chat-message--user';
    msg.innerHTML = '<div class="chat-message__bubble">' + escapeHtml(text) + '</div>';
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function addBotReply(userText) {
    if (!chatBody) return;
    setTimeout(function () {
      const msg = document.createElement('div');
      msg.className = 'chat-message chat-message--bot';
      const reply = getBotReply(userText);
      msg.innerHTML = '<div class="chat-message__bubble">' + reply + '</div>';
      chatBody.appendChild(msg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 800);
  }

  function getBotReply(text) {
    const lower = text.toLowerCase();
    if (lower.includes('condo') || lower.includes('price')) {
      return 'UBC condos typically range from $550K for a studio to $1.3M for a 2-bedroom. Want me to have Benjamin send you current listings?';
    }
    if (lower.includes('school')) {
      return 'UBC has excellent schools including Norma Rose Point Elementary and University Hill Secondary. The catchment area significantly impacts property values.';
    }
    if (lower.includes('book') || lower.includes('consult')) {
      return 'I\'d love to set up a consultation for you! You can book directly at <a href="https://cal.com/example" target="_blank" style="color:var(--color-gold)">cal.com/example</a> or call Benjamin at 236-966-7384.';
    }
    if (lower.includes('sell')) {
      return 'Benjamin can provide a free market evaluation of your home. His listings average just 12 days on market! Would you like to schedule a home evaluation?';
    }
    return 'Thanks for your message! Benjamin will get back to you within the hour. In the meantime, feel free to browse our <a href="listings.html" style="color:var(--color-gold)">current listings</a> or <a href="communities/ubc.html" style="color:var(--color-gold)">neighborhood guides</a>.';
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  // === NEWSLETTER FORM ===
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button');
      if (input && input.value) {
        btn.textContent = 'Subscribed!';
        btn.disabled = true;
        input.disabled = true;
        setTimeout(function () {
          btn.textContent = 'Subscribe';
          btn.disabled = false;
          input.disabled = false;
          input.value = '';
        }, 3000);
      }
    });
  });

  // === CONTACT FORM ===
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent!';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'Send Message';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // === LEAD CAPTURE FORM (Sell page) ===
  const leadForm = document.querySelector('#lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = leadForm.querySelector('button[type="submit"]');
      btn.textContent = 'Request Sent!';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'Get Free Evaluation';
        btn.disabled = false;
        leadForm.reset();
      }, 3000);
    });
  }

  // === SMOOTH SCROLL FOR ANCHOR LINKS ===
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

})();
