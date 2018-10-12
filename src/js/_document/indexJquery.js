

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


  /**
   * =============================================
   * CALLBACK
   * =============================================
   */
  const initDropDownMenu = () => {
    $(".nav__link > i").on('click', (ev) => {
      const elem = $(ev.currentTarget),
        elemParent = elem.closest('li');

      elem.toggleClass("is-active");
      elemParent.find('.nav__dropdown').slideToggle(300);
    })
  };



  /**
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initWebFontLoader();
    initPreventBehavior();
    // lib
    initHamburger();
    initSwiper();
    // callback
    initDropDownMenu();
  };
  initJquery();
});

