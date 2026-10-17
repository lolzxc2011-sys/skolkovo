const header = document.querySelector(".site-header");
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const form = document.querySelector("#lead-form");
const formNote = document.querySelector("#form-note");

const onScroll = () => {
  header?.classList.toggle("scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

menuBtn?.addEventListener("click", () => {
  const open = mobileNav?.hasAttribute("hidden") ?? true;
  if (!mobileNav) return;
  if (open) {
    mobileNav.removeAttribute("hidden");
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    mobileNav.setAttribute("hidden", "");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.setAttribute("hidden", "");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

const formatNumber = (value) =>
  new Intl.NumberFormat("ru-RU").format(Math.round(value));

const animateCount = (el) => {
  const target = Number(el.dataset.count || 0);
  const suffix = el.dataset.suffix || "";
  const prefix = el.dataset.prefix || "";
  const valueEl = el.querySelector(".stat-value");
  if (!valueEl) return;

  const duration = 1400;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    valueEl.textContent = `${prefix}${formatNumber(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      if (entry.target.classList.contains("stat") && !entry.target.dataset.counted) {
        entry.target.dataset.counted = "true";
        animateCount(entry.target);
      }
      if (entry.target.matches(".format-list li")) {
        entry.target.classList.add("show");
      }
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll(".year-card, .stat, .format-list li").forEach((el) => {
  revealObserver.observe(el);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  if (formNote) {
    formNote.hidden = false;
  }
});

const slots = document.querySelectorAll(".slot.spinning");
const symbols = ["7", "A", "◆", "K", "?"];
let slotIndex = 0;

setInterval(() => {
  slots.forEach((slot) => {
    slot.textContent = symbols[slotIndex % symbols.length];
  });
  slotIndex += 1;
}, 420);

const parallaxRoulette = document.querySelector(".roulette");
window.addEventListener(
  "pointermove",
  (event) => {
    if (!parallaxRoulette || window.matchMedia("(max-width: 719px)").matches) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 12;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    parallaxRoulette.style.transform = `translate(${x}px, ${y}px)`;
  },
  { passive: true }
);
