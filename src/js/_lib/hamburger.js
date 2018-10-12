

/**
 * @name initHamburger
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]");

  btn.addEventListener("click", (ev) => {
    const elem = ev.currentTarget,
      headerElem = $(elem).closest(".header");

    elem.classList.toggle("is-active");

    if(headerElem.hasClass(".header--fixed")) {
      headerElem.removeClass('header--fixed');
    } else {
      headerElem.addClass('header--fixed');
    }

    mobileContainer.classList.toggle("is-open");

    hideScrollContainer.forEach((val, idx) => {
      val.classList.toggle("is-hideScroll");
    });

  });

};