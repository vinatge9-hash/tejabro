/* Main JS for Roast & Ritual website */
(function () {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      if (mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden');
        mobileNav.classList.add('block');
      } else {
        mobileNav.classList.add('hidden');
      }
    });
  }

  // Menu filtering
  const filterBtns = Array.from(document.querySelectorAll('.filterBtn'));
  const menuCards = Array.from(document.querySelectorAll('.menuCard'));

  function setActiveFilter(btn) {
    filterBtns.forEach(b => b.classList.remove('bg-coffee', 'text-cream'));
    btn.classList.add('bg-coffee', 'text-cream');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      setActiveFilter(btn);
      menuCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
          card.classList.add('block');
        } else {
          card.classList.remove('block');
          card.classList.add('hidden');
        }
      });
    });
  });

  // Modal logic
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  document.addEventListener('click', (e) => {
    const actionBtn = e.target.closest('[data-action="view"]');
    if (actionBtn) {
      const card = actionBtn.closest('.menuCard');
      if (!card) return;
      const title = card.querySelector('h3')?.textContent || 'Item';
      const img = card.querySelector('img')?.getAttribute('src') || '';
      const desc = card.querySelector('p')?.textContent || '';
      const price = card.querySelector('.font-semibold')?.textContent || '';

      modalTitle.textContent = title + (price ? ` — ${price}` : '');
      modalContent.innerHTML = `\n        <div class=\"p-2\">\n          <img src=\"${img}\" alt=\"${title}\" class=\"w-full h-64 object-cover rounded\" />\n          <p class=\"mt-3 text-coffee/80\">${desc}</p>\n          <div class=\"mt-4\">\n            <button id=\"addCart\" class=\"px-4 py-2 bg-coffee text-cream rounded hover:scale-105 transition\">Add to Order</button>\n            <button id=\"close2\" class=\"ml-3 px-4 py-2 border border-coffee rounded hover:bg-coffee hover:text-cream transition\">Close</button>\n          </div>\n        </div>\n      `;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    });
  }

  // Close modal when clicking outside
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
      }
    });
  }

  // Delegate clicks inside modal for close/add
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'close2') {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }
    if (e.target && e.target.id === 'addCart') {
      // lightweight toast
      showToast('Added to your order');
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }
  });

  // Simple toast
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 bg-coffee text-cream px-4 py-2 rounded shadow-lg animate-bounce';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 1800);
  }

  // Contact form validation and pseudo-submit
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const msgEl = document.getElementById('formMsg');
      msgEl.textContent = '';

      if (!name || !email || !message) {
        msgEl.textContent = 'Please complete all fields.';
        msgEl.className = 'text-sm text-red-600';
        return;
      }

      if (!validateEmail(email)) {
        msgEl.textContent = 'Please enter a valid email.';
        msgEl.className = 'text-sm text-red-600';
        return;
      }

      // Simulate async submit
      msgEl.textContent = 'Sending...';
      msgEl.className = 'text-sm text-coffee/80';
      setTimeout(() => {
        msgEl.textContent = 'Thanks! We will get back to you shortly.';
        msgEl.className = 'text-sm text-green-700';
        contactForm.reset();
      }, 1000);
    });
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Make first filter active by default if present
  if (filterBtns && filterBtns.length) {
    setActiveFilter(filterBtns[0]);
  }

})();
