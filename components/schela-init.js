export default function initSchela() {
// ---- hero headline typewriter ----
(function(){
  const line1 = document.getElementById('heroLine1');
  const startEl = document.getElementById('heroStart');
  const accentEl = document.getElementById('heroAccent');
  if(!line1 || !startEl || !accentEl) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion){
    line1.textContent = 'Stop chasing.';
    startEl.textContent = 'Start ';
    accentEl.textContent = 'hiring.';
    return;
  }

  const cursor = document.createElement('span');
  cursor.className = 'hero-cursor';

  function typeInto(el, text, speed, onDone){
    el.appendChild(cursor);
    let i = 0;
    (function step(){
      if(i < text.length){
        cursor.remove();
        el.textContent += text[i];
        el.appendChild(cursor);
        i++;
        setTimeout(step, speed);
      } else if(onDone){
        onDone();
      }
    })();
  }

  setTimeout(() => {
    typeInto(line1, 'Stop chasing.', 46, () => {
      setTimeout(() => {
        typeInto(startEl, 'Start ', 46, () => {
          typeInto(accentEl, 'hiring.', 46, () => {
            setTimeout(() => { cursor.classList.add('hero-cursor-hide'); }, 1400);
          });
        });
      }, 260);
    });
  }, 300);
})();

// ---- nav scroll state ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
}, {passive:true});

// ---- mobile menu ----
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileCloseBtn = document.getElementById('mobileCloseBtn');
const mobileMenu = document.getElementById('mobileMenu');
function openMenu(){ mobileMenu.classList.add('open'); document.body.classList.add('menu-open'); }
function closeMenu(){ mobileMenu.classList.remove('open'); document.body.classList.remove('menu-open'); }
hamburgerBtn.addEventListener('click', openMenu);
mobileCloseBtn.addEventListener('click', closeMenu);
document.querySelectorAll('.mm-link').forEach(l => l.addEventListener('click', closeMenu));

// ---- marquee duplicate for seamless loop ----
const track = document.getElementById('marqueeTrack');
  if (track && !track.dataset.duplicated) {
    track.innerHTML += track.innerHTML;
    track.dataset.duplicated = 'true';
  }

// ---- IntersectionObserver fade-ups ----
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in-view'); });
}, {threshold:0.15});
document.querySelectorAll('.stat-card').forEach((el,i) => {
  el.style.transitionDelay = (i*60)+'ms';
  io.observe(el);
});
document.querySelectorAll('.integ-card').forEach((el,i) => {
  el.style.transitionDelay = (Math.min(i,6)*45)+'ms';
  io.observe(el);
});
document.querySelectorAll('.faq-item').forEach((el,i) => {
  el.style.transitionDelay = (Math.min(i,6)*50)+'ms';
  io.observe(el);
});

// ---- FAQ accordion ----
document.querySelectorAll('.faq-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
});
document.querySelectorAll('.features-row').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'all 600ms cubic-bezier(0.2,0.8,0.2,1)';
  io.observe(el);
});

// ---- confidence bars animate on scroll ----
const confIo = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      document.querySelectorAll('.conf-fill').forEach(f => f.style.width = f.dataset.w + '%');
      confIo.disconnect();
    }
  });
}, {threshold:0.3});
const confList = document.getElementById('confList');
if(confList) confIo.observe(confList);

// ---- How It Works: scroll-driven step switching + click ----
(function(){
  const scrollEl = document.getElementById('hiwScroll');
  const steps = Array.from(document.querySelectorAll('.hiw-step'));
  const frames = Array.from(document.querySelectorAll('.hiw-frame'));
  const tab = document.getElementById('hiwPanelTab');
  if(!scrollEl || !steps.length) return;

  const tabs = ['01 · add-candidate','02 · reach-out','03 · select-slot','04 · confirm','05 · follow-through'];
  const N = steps.length;
  let current = -1;

  function setStep(idx){
    idx = Math.max(0, Math.min(N-1, idx));
    if(idx === current) return;
    current = idx;
    steps.forEach((s,i)=>s.classList.toggle('active', i===idx));
    frames.forEach((f,i)=>f.classList.toggle('show', i===idx));
    if(tab) tab.textContent = tabs[idx];
  }

  // desktop scroll-driven (only when sticky layout is active)
  function onScroll(){
    if(window.innerWidth <= 1024) return;
    const rect = scrollEl.getBoundingClientRect();
    const total = scrollEl.offsetHeight - window.innerHeight;
    if(total <= 0) return;
    const scrolled = Math.min(Math.max(-rect.top, 0), total);
    const progress = scrolled / total;
    const idx = Math.min(N-1, Math.floor(progress * N));
    setStep(idx);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);

  // ---- autoplay (mobile/tablet only — desktop uses scroll-driven instead) ----
  let autoplayTimer = null;
  function startAutoplay(){
    if(autoplayTimer || window.innerWidth > 1024) return;
    autoplayTimer = setInterval(() => {
      setStep((current + 1) % N);
    }, 3200);
  }
  function stopAutoplay(){
    if(autoplayTimer){ clearInterval(autoplayTimer); autoplayTimer = null; }
  }
  const autoplayIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(window.innerWidth > 1024) return;
      if(e.isIntersecting) startAutoplay(); else stopAutoplay();
    });
  }, {threshold:0.4});
  autoplayIo.observe(scrollEl);
  window.addEventListener('resize', () => {
    if(window.innerWidth > 1024) stopAutoplay();
  });

  // click to jump (desktop scrolls to that phase; mobile switches + restarts autoplay)
  steps.forEach((s,i)=>{
    s.addEventListener('click', ()=>{
      if(window.innerWidth > 1024){
        const total = scrollEl.offsetHeight - window.innerHeight;
        const docTop = scrollEl.getBoundingClientRect().top + window.scrollY;
        const target = docTop + ((i + 0.5)/N) * total;
        window.scrollTo({top:target, behavior:'smooth'});
      } else {
        setStep(i);
        stopAutoplay();
        startAutoplay();
      }
    });
  });

  setStep(0);
  onScroll();
})();

// ---- Time Saved calculator ----
const tscInterviews = document.getElementById('tscInterviews');
const tscCoord = document.getElementById('tscCoord');
const tscResched = document.getElementById('tscResched');
if(tscInterviews && tscCoord && tscResched){
  const tscInterviewsVal = document.getElementById('tscInterviewsVal');
  const tscCoordVal = document.getElementById('tscCoordVal');
  const tscReschedVal = document.getElementById('tscReschedVal');
  const tscHours = document.getElementById('tscHours');
  const tscDays = document.getElementById('tscDays');
  const tscBadge = document.getElementById('tscBadge');

  function updateTSC(){
    const interviews = parseFloat(tscInterviews.value);
    const coord = parseFloat(tscCoord.value);
    const resched = parseFloat(tscResched.value);

    tscInterviewsVal.textContent = interviews;
    tscCoordVal.textContent = coord + 'm';
    tscReschedVal.textContent = resched + '%';

    const manualHours = (interviews * 4.33 * coord / 60) * (1 + resched / 100);
    const savedHours = manualHours * 0.786;
    const workingDays = savedHours / 8;

    tscHours.textContent = savedHours.toFixed(1);
    tscDays.textContent = workingDays.toFixed(1);
    tscBadge.textContent = savedHours.toFixed(1) + 'h saved / month';
  }
  [tscInterviews, tscCoord, tscResched].forEach(el => el.addEventListener('input', updateTSC));
  updateTSC();
}

const askPanel = document.getElementById('askPanel');
const askCycles = [
  {q:"Which candidates haven't responded in 48 hours?", a:"3 candidates: Sanya Seth (WhatsApp, 6h), Arjun Sharma (Email, 51h), Kabir Joshi (WhatsApp, 49h). Want Schela to follow up now?"},
  {q:"What's my average time-to-schedule this month?", a:"1.8 days, down from 4.2 days industry average. Fastest channel: WhatsApp at 0.6 days."},
  {q:"Why did no-shows spike last week?", a:"4 of 5 no-shows were Friday afternoon slots. Consider shifting late-week interviews earlier in the day."}
];
let askIdx = 0;
function typeText(el, text, speed, cb){
  el.textContent = '';
  let i = 0;
  const t = setInterval(() => {
    el.textContent += text[i];
    i++;
    if(i >= text.length){ clearInterval(t); if(cb) cb(); }
  }, speed);
}
function runAskCycle(){
  if(!askPanel) return;
  askPanel.innerHTML = '';
  const cycle = askCycles[askIdx % askCycles.length];
  askIdx++;

  const userMsg = document.createElement('div');
  userMsg.className = 'ask-msg-user';
  askPanel.appendChild(userMsg);
  typeText(userMsg, cycle.q, 18, () => {
    setTimeout(() => {
      const typing = document.createElement('div');
      typing.className = 'ask-typing';
      typing.innerHTML = '<span></span><span></span><span></span>';
      askPanel.appendChild(typing);
      setTimeout(() => {
        typing.remove();
        const aiMsg = document.createElement('div');
        aiMsg.className = 'ask-msg-ai';
        askPanel.appendChild(aiMsg);
        typeText(aiMsg, cycle.a, 14, () => {
          setTimeout(runAskCycle, 3800);
        });
      }, 1100);
    }, 400);
  });
}
const askIo = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){ runAskCycle(); askIo.disconnect(); }
  });
}, {threshold:0.3});
if(askPanel) askIo.observe(askPanel);

// ---- Join Early Access Modal ----
(function(){
  const overlay = document.getElementById('jmOverlay');
  const modal = overlay ? overlay.querySelector('.jm-modal') : null;
  const closeBtn = document.getElementById('jmClose');
  const form = document.getElementById('jmForm');
  const formWrap = document.getElementById('jmFormWrap');
  const success = document.getElementById('jmSuccess');
  const submitBtn = document.getElementById('jmSubmit');
  const nameInput = document.getElementById('jmName');
  const teamSizeGroup = document.getElementById('jmTeamSize');
  const channelsGroup = document.getElementById('jmChannels');
  if(!overlay || !form) return;

  let selectedTeamSize = null;
  const selectedChannels = new Set();
  let lastFocused = null;

  function clearErrors(){
    form.querySelectorAll('.jm-field.error').forEach(f => f.classList.remove('error'));
  }

  function resetForm(){
    form.reset();
    clearErrors();
    selectedTeamSize = null;
    selectedChannels.clear();
    teamSizeGroup.querySelectorAll('.jm-chip').forEach(c => c.classList.remove('active'));
    channelsGroup.querySelectorAll('.jm-chip').forEach(c => c.classList.remove('active'));
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    formWrap.style.display = '';
    success.classList.remove('show');
    const submitError = document.getElementById('jmSubmitError');
    if(submitError){
      submitError.hidden = true;
      submitError.textContent = '';
    }
  }

  window.openModal = function(){
    lastFocused = document.activeElement;
    resetForm();
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    setTimeout(() => { if(nameInput) nameInput.focus(); }, 300);
  };

  window.closeModal = function(){
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    if(lastFocused && lastFocused.focus) lastFocused.focus();
  };

  // open triggers: any "Join Early Access" link across the page
  document.querySelectorAll('a[href="#early-access"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      if(typeof closeMenu === 'function') closeMenu();
      openModal();
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if(e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  // team size — single select
  teamSizeGroup.querySelectorAll('.jm-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      teamSizeGroup.querySelectorAll('.jm-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedTeamSize = chip.dataset.value;
      document.getElementById('jmField-teamsize').classList.remove('error');
    });
  });

  // channels — multi select
  channelsGroup.querySelectorAll('.jm-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.dataset.value;
      if(selectedChannels.has(val)){
        selectedChannels.delete(val);
        chip.classList.remove('active');
      } else {
        selectedChannels.add(val);
        chip.classList.add('active');
      }
      if(selectedChannels.size) document.getElementById('jmField-channels').classList.remove('error');
    });
  });

  function shakeButton(){
    submitBtn.classList.remove('jm-shake');
    void submitBtn.offsetWidth;
    submitBtn.classList.add('jm-shake');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    let firstInvalid = null;

    if(!nameInput.value.trim()){
      document.getElementById('jmField-name').classList.add('error');
      firstInvalid = firstInvalid || nameInput;
    }
    const emailInput = document.getElementById('jmEmail');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailErrorEl = document.getElementById('jmEmailError');
    if(!emailInput.value.trim()){
      emailErrorEl.textContent = 'Please enter your email address.';
      document.getElementById('jmField-email').classList.add('error');
      firstInvalid = firstInvalid || emailInput;
    } else if(!emailPattern.test(emailInput.value.trim())){
      emailErrorEl.textContent = 'Please enter a valid email address.';
      document.getElementById('jmField-email').classList.add('error');
      firstInvalid = firstInvalid || emailInput;
    }
    const roleInput = document.getElementById('jmRole');
    if(!roleInput.value.trim()){
      document.getElementById('jmField-role').classList.add('error');
      firstInvalid = firstInvalid || roleInput;
    }
    if(!selectedTeamSize){
      document.getElementById('jmField-teamsize').classList.add('error');
    }
    if(!selectedChannels.size){
      document.getElementById('jmField-channels').classList.add('error');
    }

    if(form.querySelector('.jm-field.error')){
      shakeButton();
      if(firstInvalid) firstInvalid.focus();
      return;
    }

    const companyInput = document.getElementById('jmCompany');
    const submitError = document.getElementById('jmSubmitError');
    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      role: roleInput.value.trim(),
      company: companyInput && companyInput.value.trim() ? companyInput.value.trim() : undefined,
      teamSize: selectedTeamSize,
      channels: Array.from(selectedChannels),
    };

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    if(submitError){
      submitError.hidden = true;
      submitError.textContent = '';
    }

    fetch('/api/early-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if(!res.ok){
          throw new Error(data.error || 'Something went wrong. Please try again.');
        }
        formWrap.style.display = 'none';
        success.classList.add('show');
      })
      .catch((err) => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        shakeButton();
        if(submitError){
          submitError.textContent = err.message || 'Something went wrong. Please try again.';
          submitError.hidden = false;
        }
      });
  });
})();
}
