/* =========================================================
   Tanishq Gola — Portfolio
   ========================================================= */
(() => {
  'use strict';
emailjs.init({
  publicKey: "gkfC-ZdKoIw-qw6F5"
});
  /* ---------------------------------------------------------
     CONFIG — fill these in once you have the real URLs.
     Leave a value as "" and the matching button shows a
     friendly "link coming soon" message instead of a fake link.
     --------------------------------------------------------- */
  const CONFIG = {
   github: 'https://github.com/taniishqgola-del',
    linkedin: '',  // e.g. 'https://www.linkedin.com/in/your-profile'
    email: ''      // full address, e.g. 'name@example.com' (the prompt gave an incomplete one)
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------------------------------------------------------
     PROJECT DATA
     repo / demo: add real URLs per project. Empty = placeholder.
     --------------------------------------------------------- */
  const FILTERS = [
    ['all', 'All'],
    ['ai', 'AI / ML'],
    ['web', 'Web Development'],
    ['game', 'Game Development'],
    ['security', 'Cybersecurity'],
    ['tools', 'Developer Tools'],
    ['systems', 'Systems']
  ];

  const PROJECTS = [
    {
      id: 'airgorah', name: 'WiFi Security Auditing — Airgorah', category: 'Cybersecurity / Security', filter: 'security',
      repo: 'https://github.com/taniishqgola-del/airgorah',
      desc: 'A WiFi security auditing project focused on wireless network security testing and analysis.',
      tags: ['Python', 'Cybersecurity', 'Wireless Security'], snippet: 'audit --scope=authorized',
      overview: 'A WiFi security auditing project focused on wireless network security testing and analysis, approached as a learning exercise in how wireless networks are assessed and protected.',
      problem: 'Wireless networks are a common entry point for security weaknesses, and understanding how they are assessed is a core part of learning defensive security.',
      solution: 'This project explores wireless security testing and analysis in an educational context, building understanding of how networks can be evaluated and hardened.',
      features: ['Focus on wireless network security testing and analysis', 'Built around Python and cybersecurity concepts', 'Educational / authorized-testing mindset'],
      notice: 'Educational project. Security testing should only ever be performed on networks you own or have explicit written permission to assess.'
    },
    {
      id: 'house-price', name: 'House Price Prediction', category: 'Machine Learning', filter: 'ai',
      repo: 'https://github.com/taniishqgola-del/YOUR-REPO-NAME',
      desc: 'A machine learning project that predicts house prices using property-related features such as area, bedrooms, bathrooms and other attributes.',
      tags: ['Python', 'Machine Learning', 'Regression', 'Scikit-learn'], snippet: 'model.predict(features)',
      overview: 'A machine learning project that predicts house prices from property-related features such as area, number of bedrooms, bathrooms and other attributes.',
      problem: 'Property prices depend on many factors at once, which makes manual estimation inconsistent and hard to reason about.',
      solution: 'A regression model trained on property attributes learns the relationship between those features and price, then predicts a price for new inputs.',
      features: ['Uses property features such as area, bedrooms and bathrooms', 'Regression-based price prediction', 'Built with Python and Scikit-learn']
    },
    {
      id: 'spam-classifier', name: 'Email Spam Classifier', category: 'Machine Learning / NLP', filter: 'ai',
      repo: 'https://github.com/taniishqgola-del/Email-Spam-Classifier',
      desc: 'A machine learning application that analyzes email text and classifies messages as spam or legitimate.',
      tags: ['Python', 'NLP', 'TF-IDF', 'Machine Learning'], snippet: 'tfidf.fit_transform(text)',
      overview: 'A machine learning application that analyzes email text and classifies messages as spam or legitimate.',
      problem: 'Unwanted and unsafe emails clutter inboxes, and filtering them by hand does not scale.',
      solution: 'Email text is converted into numerical features using TF-IDF, and a classifier learns to separate spam from legitimate messages.',
      features: ['Text analysis using NLP techniques', 'TF-IDF feature extraction', 'Binary classification: spam vs. legitimate']
    },
    {
      id: 'iris', name: 'Iris Flower Classification', category: 'Machine Learning', filter: 'ai',
      repo: 'https://github.com/taniishqgola-del/CodTech-Iris-Flower-Classification', 
      desc: 'A classic supervised machine learning project that predicts iris flower species from flower measurements.',
      tags: ['Python', 'Classification', 'Scikit-learn'], snippet: 'clf.fit(X_train, y_train)',
      overview: 'A classic supervised machine learning project that predicts iris flower species from flower measurements.',
      problem: 'Identifying a species from raw measurements is a foundational classification task for learning how supervised models work.',
      solution: 'A classification model is trained on labelled flower measurements and then predicts the species for unseen samples.',
      features: ['Supervised classification workflow', 'Predicts species from flower measurements', 'Built with Python and Scikit-learn']
    },
    {
      id: 'titanic', name: 'Titanic Survival Prediction', category: 'Machine Learning', filter: 'ai',
      repo: 'https://github.com/taniishqgola-del/titanic-survival-prediction-main', 
      desc: 'A machine learning model that predicts passenger survival based on passenger-related features from the Titanic dataset.',
      tags: ['Python', 'Machine Learning', 'Classification'], snippet: 'predict(passenger)',
      overview: 'A machine learning model that predicts passenger survival using passenger-related features from the Titanic dataset.',
      problem: 'Survival outcomes depended on a mix of passenger attributes, making it a well-known dataset for practising data preparation and classification.',
      solution: 'Passenger features are prepared and used to train a classification model that predicts whether a passenger survived.',
      features: ['Uses the Titanic dataset', 'Classification of survival outcome', 'Built with Python']
    },
    {
      id: 'markitdown', name: 'MarkItDown', category: 'Python / Developer Tool', filter: 'tools',
      repo: 'https://github.com/taniishqgola-del/markitdown', 
      desc: 'A Python-based utility for converting documents and files into Markdown, designed to simplify document conversion workflows.',
      tags: ['Python', 'Automation', 'Markdown', 'Developer Tools'], snippet: 'convert(file) -> .md',
      overview: 'A Python-based utility for converting documents and files into Markdown, designed to simplify document conversion workflows.',
      problem: 'Content often lives in different document formats, and moving it into clean Markdown by hand is repetitive.',
      solution: 'A Python utility automates converting documents and files into Markdown so the workflow is faster and more consistent.',
      features: ['Converts documents and files into Markdown', 'Automation-oriented developer tool', 'Written in Python']
    },
    {
      id: 'bareiron', name: 'BareIron', category: 'Systems / Experimental', filter: 'systems',
      repo: 'https://github.com/taniishqgola-del/bareiron', 
      desc: 'A minimalist Minecraft server concept designed for lightweight, memory-constrained environments.',
      tags: ['Systems', 'Performance', 'Lightweight Computing'], snippet: 'mem --limit=minimal',
      overview: 'A minimalist Minecraft server concept designed for lightweight, memory-constrained environments.',
      problem: 'Typical game servers can be heavy, which makes them hard to run on devices with very limited memory.',
      solution: 'The project explores a minimal server design that prioritises a small footprint and low resource usage.',
      features: ['Minimalist server concept', 'Designed for memory-constrained environments', 'Focus on performance and lightweight computing']
    },
    {
      id: 'smartfood', name: 'SmartFoodOrdering', category: 'Application Development', filter: 'web',
      repo: 'https://github.com/taniishqgola-del/SmartFoodOrdering', 
      desc: 'A food ordering project focused on creating a digital ordering experience.',
      tags: ['Application Development', 'UI', 'Web'], snippet: 'order.place(items)',
      overview: 'A food ordering project focused on creating a digital ordering experience.',
      problem: 'Ordering food through manual or fragmented processes can be slow and confusing for users.',
      solution: 'The project builds a digital ordering experience with a focus on a clear, usable interface.',
      features: ['Digital food ordering experience', 'UI-focused application', 'More details coming soon']
    },
    {
      id: 'ecommerce', name: 'Tanishq E-Commerce', category: 'Web Development', filter: 'web', demo: true,
      repo: 'https://github.com/taniishqgola-del/tanishq',
      desc: 'An e-commerce interface inspired by a jewellery shopping experience, featuring product browsing, search, filtering and sorting.',
      tags: ['HTML', 'CSS', 'JavaScript', 'E-Commerce UI'], snippet: 'products.filter(sort)',
      overview: 'An e-commerce interface inspired by a jewellery shopping experience, featuring product browsing, search, filtering and sorting.',
      problem: 'Online shoppers need to find products quickly in a catalogue without being overwhelmed.',
      solution: 'A front-end shopping interface that lets users browse products and narrow them down with search, filtering and sorting.',
      features: ['Product browsing', 'Search', 'Filtering and sorting', 'Built with HTML, CSS and JavaScript']
    },
    {
      id: 'bike-rush', name: 'Bike Rush', category: 'Game Development', filter: 'game', demo: true,
      demoUrl: 'https://taniishqgola-del.github.io/bike-rush-game-/', 
      repo: 'https://github.com/taniishqgola-del/bike-rush-game-', 
      desc: 'A bike racing game project focused on interactive gameplay and arcade-style racing.',
      tags: ['Game Development', 'JavaScript / Web'], snippet: 'requestAnimationFrame(loop)',
      overview: 'A bike racing game project focused on interactive gameplay and arcade-style racing.',
      problem: 'Building a game is a hands-on way to practise real-time logic, input handling and interaction design.',
      solution: 'An arcade-style bike racing game that puts interactive gameplay at the centre.',
      features: ['Arcade-style racing gameplay', 'Interactive controls', 'JavaScript / web-based']
    },
    {
      id: 'space-shooter', name: 'Space Shooting Game', category: 'Game Development', filter: 'game', demo: true,
      demoUrl: 'https://taniishqgola-del.github.io/space-shooting-game-/', 
      repo: 'https://github.com/taniishqgola-del/space-shooting-game-', 
      desc: 'A browser-based space shooting game with interactive gameplay and visual elements.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Game Development'], snippet: 'ship.fire(bullet)',
      overview: 'A browser-based space shooting game with interactive gameplay and visual elements.',
      problem: 'Real-time games require careful handling of movement, input and on-screen elements.',
      solution: 'A space shooter that runs in the browser using HTML, CSS and JavaScript.',
      features: ['Browser-based gameplay', 'Interactive controls and visual elements', 'Built with HTML, CSS and JavaScript']
    },
    {
      id: 'kbc', name: 'KBC Quiz Game', category: 'Game / Interactive Application', filter: 'game', demo: true,
      demoUrl: 'https://taniishqgola-del.github.io/KBC-kaun-banega-crorepati-/',
      repo: 'https://github.com/taniishqgola-del/KBC-kaun-banega-crorepati-', 
      desc: 'A quiz game inspired by the popular Indian game-show format, featuring questions, answer selection and lifeline mechanics.',
      tags: ['Game Development', 'JavaScript', 'Interactive UI'], snippet: 'lifeline.use("50-50")',
      overview: 'A quiz game inspired by the popular Indian game-show format, featuring questions, answer selection and lifeline mechanics.',
      problem: 'Quiz formats combine state, scoring and user choices, making them a good exercise in interactive application logic.',
      solution: 'An interactive quiz where players pick answers and can use lifeline mechanics as they progress.',
      features: ['Questions with answer selection', 'Lifeline mechanics', 'Interactive UI built with JavaScript']
    },
    {
      id: 'student-report', name: 'Student Report', category: 'Application Development', filter: 'web',
      repo: 'https://github.com/taniishqgola-del/student-report',
      desc: 'A student-focused application for managing or presenting academic information and reports.',
      tags: ['Application Development', 'Student Management'], snippet: 'report.generate(student)',
      overview: 'A student-focused application for managing or presenting academic information and reports.',
      problem: 'Academic information is easier to review when it is organised and presented clearly.',
      solution: 'An application that manages or presents student information and reports.',
      features: ['Student-focused workflow', 'Academic information and reports', 'More details coming soon']
    },
    {
      id: 'powershell', name: 'PowerShell', category: 'System / Automation', filter: 'systems',
      repo: 'https://github.com/taniishqgola-del/PowerShell', 
      desc: 'A repository containing PowerShell-based experiments, scripts or utilities.',
      tags: ['PowerShell', 'Automation', 'System Tools'], snippet: 'Get-Process | Sort CPU',
      overview: 'A repository containing PowerShell-based experiments, scripts or utilities.',
      problem: 'Repetitive system tasks are good candidates for scripting and automation.',
      solution: 'A collection of PowerShell experiments, scripts and utilities for system-level tasks.',
      features: ['PowerShell scripts and experiments', 'Automation and system tools', 'More details coming soon']
    },
    ];
  const FEATURED_IDS = ['airgorah', 'house-price', 'spam-classifier'];

  /* ---------- Icons by category ---------- */
  const S = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
  const ICONS = {
    ai: `<svg ${S}><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="12" r="2.4"/><circle cx="19" cy="7" r="2"/><circle cx="19" cy="17" r="2"/><path d="M7 7l3.2 3.6M7 17l3.2-3.6M14.2 11l3-3M14.2 13l3 3"/></svg>`,
    web: `<svg ${S}><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 14l-2 2 2 2M16 14l2 2-2 2"/></svg>`,
    game: `<svg ${S}><rect x="2.5" y="7" width="19" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4M16 11.5h.01M18 13.5h.01"/></svg>`,
    security: `<svg ${S}><path d="M12 3l7 3v5.5c0 4.4-3 7.8-7 9.5-4-1.7-7-5.1-7-9.5V6l7-3z"/><path d="M9 12l2.2 2.2L15.5 10"/></svg>`,
    tools: `<svg ${S}><path d="M14.5 6.5a4 4 0 005 5l-8.8 8.8a2.1 2.1 0 01-3-3L16.5 8.5"/><path d="M14.5 6.5l3-3 3 3-3 3"/></svg>`,
    systems: `<svg ${S}><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/></svg>`
  };

  /* ---------- Helpers ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const arrow = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>';

  function linkBtn(url, label, what, cls = 'btn-ghost btn-sm') {
    return url
      ? `<a class="btn ${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label} ${arrow}</a>`
      : `<button type="button" class="btn ${cls} is-pending" data-pending="${esc(what)}">${label}</button>`;
  }

  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  /* ---------- Cards ---------- */
  function cardHTML(p) {
    const repo = linkBtn(p.repo, 'GitHub', `${p.name}: GitHub link coming soon`);
    const demo = p.demo ? linkBtn(p.demoUrl, 'Live Demo', `${p.name}: live demo link coming soon`) : '';
    return `
      <article class="card glass" data-id="${p.id}" data-cat="${p.filter}">
        <div class="card-visual" aria-hidden="true">${ICONS[p.filter]}<span class="card-code">${esc(p.snippet)}</span></div>
        <div class="card-body">
          <p class="card-cat">${esc(p.category)}</p>
          <h3><button type="button" class="card-title" data-open="${p.id}">${esc(p.name)}</button></h3>
          <p class="card-desc">${esc(p.desc)}</p>
          <ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
          <div class="card-actions">
            ${repo}${demo}
            <button type="button" class="btn btn-ghost btn-sm" data-open="${p.id}">Details</button>
          </div>
        </div>
      </article>`;
  }

  function renderFeatured() {
    const grid = $('#featured-grid');
    grid.innerHTML = FEATURED_IDS.map(id => cardHTML(PROJECTS.find(p => p.id === id))).join('');
    $$('.card', grid).forEach((c, i) => { c.classList.add('reveal'); c.style.setProperty('--d', `${i * 0.1}s`); });
  }

  /* ---------- Explorer: filter + search ---------- */
  const state = { cat: 'all', q: '' };

  function renderFilters() {
    const wrap = $('#filters');
    wrap.innerHTML = FILTERS.map(([k, label]) =>
      `<button type="button" class="filter-btn" data-filter="${k}" aria-pressed="${k === 'all'}">${label}</button>`).join('');
    wrap.addEventListener('click', e => {
      const b = e.target.closest('[data-filter]');
      if (!b) return;
      state.cat = b.dataset.filter;
      $$('.filter-btn', wrap).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      applyFilters();
    });
  }

  function matches(p) {
    const catOk = state.cat === 'all' || p.filter === state.cat;
    if (!catOk) return false;
    if (!state.q) return true;
    const hay = [p.name, p.category, p.desc, ...p.tags].join(' ').toLowerCase();
    return state.q.split(/\s+/).every(w => hay.includes(w));
  }

  function renderGrid() {
    $('#project-grid').innerHTML = PROJECTS.map(cardHTML).join('');
  }

  let filterTimer;
  function applyFilters(initial = false) {
    const cards = $$('#project-grid .card');
    const visible = new Set(PROJECTS.filter(matches).map(p => p.id));

    const commit = () => {
      let n = 0;
      cards.forEach(c => {
        const show = visible.has(c.dataset.id);
        c.hidden = !show;
        c.classList.remove('is-out', 'is-in');
        if (show) {
          c.style.setProperty('--i', n++);
          if (!initial && !reduceMotion) { void c.offsetWidth; c.classList.add('is-in'); }
        }
      });
      $('#empty').hidden = n > 0;
      $('#result-count').textContent = `${n} of ${PROJECTS.length} projects`;
    };

    if (initial || reduceMotion) { commit(); return; }
    cards.forEach(c => { if (!c.hidden) c.classList.add('is-out'); });
    clearTimeout(filterTimer);
    filterTimer = setTimeout(commit, 220);
  }

  /* ---------- Modal ---------- */
  const modal = $('#modal');
  function openProject(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    const repo = linkBtn(p.repo, 'View on GitHub', `${p.name}: GitHub link coming soon`, 'btn-primary btn-sm');
    const demo = p.demo
      ? linkBtn(p.demoUrl, 'Live Demo', `${p.name}: live demo link coming soon`, 'btn-ghost btn-sm')
      : '';
    $('#modal-content').innerHTML = `
      <p class="m-cat">${esc(p.category)}</p>
      <h3 class="m-title" id="modal-title">${esc(p.name)}</h3>
      <ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      <div class="m-block"><h4>Overview</h4><p>${esc(p.overview)}</p></div>
      <div class="m-block"><h4>Problem</h4><p>${esc(p.problem)}</p></div>
      <div class="m-block"><h4>Solution</h4><p>${esc(p.solution)}</p></div>
      <div class="m-block"><h4>Technologies</h4><ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div>
      <div class="m-block"><h4>Key features</h4><ul class="m-list">${p.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul></div>
      ${p.notice ? `<p class="m-notice">${esc(p.notice)}</p>` : ''}
      <div class="m-actions">${repo}${demo}</div>`;
    if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
    document.body.classList.add('modal-open');
    $('.modal-panel', modal).scrollTop = 0;
  }
  function closeModal() {
    if (modal.open) modal.close();
  }
  modal.addEventListener('close', () => document.body.classList.remove('modal-open'));
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  $('#modal-close').addEventListener('click', closeModal);

  /* ---------- Global click delegation ---------- */
  document.addEventListener('click', e => {
    const pending = e.target.closest('[data-pending]');
    if (pending) { toast(pending.dataset.pending); return; }

    const ext = e.target.closest('[data-link]');
    if (ext) {
      const url = CONFIG[ext.dataset.link];
      if (url) {
        if (ext.dataset.link === 'email') { ext.href = `mailto:${url}`; return; }
        ext.href = url; ext.target = '_blank'; ext.rel = 'noopener noreferrer';
        return;
      }
      e.preventDefault();
      toast(`${ext.dataset.link === 'github' ? 'GitHub' : ext.dataset.link === 'linkedin' ? 'LinkedIn' : 'Email'} link coming soon`);
      return;
    }

    const opener = e.target.closest('[data-open]');
    if (opener) { openProject(opener.dataset.open); return; }

    // whole card clickable (but not its action buttons/links)
    const card = e.target.closest('.card');
    if (card && !e.target.closest('a, button')) openProject(card.dataset.id);
  });

  $('#search').addEventListener('input', e => {
    state.q = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  /* ---------- GitHub area bars (derived from the real project list) ---------- */
  function renderBars() {
    const rows = FILTERS.filter(([k]) => k !== 'all').map(([k, label]) => [label, PROJECTS.filter(p => p.filter === k).length]);
    const max = Math.max(...rows.map(r => r[1]));
    $('#gh-total').textContent = `${PROJECTS.length} projects listed`;
    $('#gh-bars').innerHTML = rows.map(([label, n]) =>
      `<li class="gh-row"><span>${label}</span><span class="gh-track"><span class="gh-fill" data-w="${(n / max) * 100}"></span></span><b>${n}</b></li>`).join('');
  }

  /* ---------- Navbar ---------- */
  const nav = $('#nav');
  const burger = $('#burger');
  const menu = $('#nav-menu');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
  }
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  $$('.nav-link', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) setMenu(false); });

  // Scroll state: navbar style + progress bar
  const bar = $('.scroll-progress');
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? Math.min(y / h, 1) : 0})`;
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll-spy
  const spyMap = { home: 'home', about: 'about', skills: 'skills', projects: 'projects', explorer: 'projects', education: 'education', github: 'education', contact: 'contact' };
  const links = $$('.nav-link');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const target = spyMap[en.target.id];
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${target}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));

  /* ---------- Reveal, counters, skill + bar animation ---------- */
  function countUp(el) {
    const end = +el.dataset.count;
    if (reduceMotion) { el.textContent = end; return; }
    const dur = 1400, t0 = performance.now();
    (function step(t) {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  function setupObservers() {
    $$('.skill-tags li').forEach((li, i, all) => li.style.setProperty('--i', [...li.parentElement.children].indexOf(li)));
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target;
        el.classList.add('in');
        $$('[data-count]', el).forEach(countUp);
        if (el.matches('[data-count]')) countUp(el);
        $$('.gh-fill', el).forEach(f => { f.style.width = f.dataset.w + '%'; });
        // once revealed, drop the reveal transition so hover effects aren't delayed
        setTimeout(() => el.classList.remove('reveal'), 1600);
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal, .skill-card').forEach(el => io.observe(el));
  }

  /* ---------- Hero terminal typing ---------- */
  function terminal() {
    const el = $('#terminal');
    if (!el) return;
    const lines = [
      [['t-prompt', '$ '], ['', 'whoami']],
      [['t-str', 'tanishq_gola'], ['t-dim', '  # B.Tech AI & ML @ MRIIRS']],
      [['', '']],
      [['t-prompt', '$ '], ['', 'ls interests/']],
      [['t-key', 'machine-learning/  web-dev/  games/']],
      [['t-key', 'security/  python/  systems/']],
      [['', '']],
      [['t-prompt', '$ '], ['', 'python build.py --idea']],
      [['t-str', '> turning ideas into working software...']],
      [['t-dim', '> status: still learning, always building']]
    ];
    const flat = lines.map(l => l.map(([c, t]) => `<span class="${c}">${esc(t)}</span>`).join(''));

    if (reduceMotion) { el.innerHTML = flat.join('\n'); return; }

    // type line-by-line, char-by-char for plain text length
    let li = 0, out = '';
    const caret = '<span class="caret"></span>';
    function nextLine() {
      if (li >= lines.length) { el.innerHTML = out + caret; return; }
      const segs = lines[li];
      const total = segs.reduce((n, [, t]) => n + t.length, 0);
      let n = 0;
      (function tick() {
        n += 2;
        let left = n, html = '';
        for (const [c, t] of segs) {
          const take = Math.max(0, Math.min(left, t.length));
          html += `<span class="${c}">${esc(t.slice(0, take))}</span>`;
          left -= take;
        }
        el.innerHTML = out + html + caret;
        if (n < total) setTimeout(tick, 22);
        else { out += flat[li] + '\n'; li++; setTimeout(nextLine, total ? 220 : 60); }
      })();
    }
    setTimeout(nextLine, 600);
  }

  /* ---------- Cursor spotlight on glass ---------- */
  document.addEventListener('pointermove', e => {
    const g = e.target.closest && e.target.closest('.glass');
    if (!g) return;
    const r = g.getBoundingClientRect();
    g.style.setProperty('--mx', `${e.clientX - r.left}px`);
    g.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });

  /* ---------- Background network canvas ---------- */
  function background() {
    const cv = $('#bg-canvas');
    const ctx = cv.getContext('2d');
    let w, h, dpr, pts = [], raf, running = true;
    const maxDist = 140;

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(24, Math.min(70, Math.floor((w * h) / 22000)));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
        r: Math.random() * 1.3 + .5
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (!reduceMotion) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(120,170,255,.55)';
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
          if (d < maxDist * maxDist) {
            ctx.strokeStyle = `rgba(100,150,255,${(1 - Math.sqrt(d) / maxDist) * .18})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }
      if (!reduceMotion && running) raf = requestAnimationFrame(draw);
    }

    size(); draw();
    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { size(); if (reduceMotion) draw(); }, 200); });
    document.addEventListener('visibilitychange', () => {
      running = !document.hidden;
      if (running && !reduceMotion) { cancelAnimationFrame(raf); draw(); }
    });
  }

  /* ---------- Contact form (validation only — no backend) ---------- */
  function form() {
    const f = $('#contact-form');
    const status = $('#form-status');
    const rules = {
      name: v => v.trim().length >= 2 ? '' : 'Please enter your name (at least 2 characters).',
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.',
      message: v => v.trim().length >= 10 ? '' : 'Please write a message (at least 10 characters).'
    };
    function check(name) {
      const input = f.elements[name];
      const msg = rules[name](input.value);
      const field = input.closest('.field');
      field.classList.toggle('invalid', !!msg);
      input.setAttribute('aria-invalid', String(!!msg));
      $(`#${name}-err`).textContent = msg;
      return !msg;
    }
    Object.keys(rules).forEach(n => {
      f.elements[n].addEventListener('blur', () => check(n));
      f.elements[n].addEventListener('input', () => { if (f.elements[n].closest('.field').classList.contains('invalid')) check(n); });
    });
    f.addEventListener('submit', async e => {
      e.preventDefault();
      status.className = 'form-status';
      const ok = Object.keys(rules).map(check).every(Boolean);
      if (!ok) {
        status.textContent = 'Please fix the highlighted fields.';
        const bad = $('.field.invalid input, .field.invalid textarea', f);
        if (bad) bad.focus();
        return;
      }
           status.textContent = 'Sending...';

      try {
        await emailjs.sendForm(
          'service_b816anh',
          'template_higoicm',
          f
        );

        status.textContent = 'Message sent successfully! I’ll get back to you soon.';
        status.classList.add('ok');
        f.reset();

      } catch (error) {
        console.error('EmailJS error:', error);
        status.className = 'form-status';
        status.textContent = 'Something went wrong. Please try again.';
      }
    });
  }

  /* ---------- Init ---------- */
  renderFeatured();
  renderFilters();
  renderGrid();
  renderBars();
  applyFilters(true);
  setupObservers();
  terminal();
  background();
  form();
})();
