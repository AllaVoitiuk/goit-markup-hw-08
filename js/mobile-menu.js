//  (() => {
//      const refs = {
//        openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
//        closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
//        mobileMenu: document.querySelector("[data-mobile]"),
//      };
  
//      refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
//      refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  
//      function toggleMobileMenu() {
//        document.body.classList.toggle("modal-open");
//        refs.mobileMenu.classList.toggle("is-hidden");
//      }
//    })();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();
  