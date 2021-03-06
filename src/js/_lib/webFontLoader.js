

/**
 * @name initWebFontLoader
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
const initWebFontLoader = () => {

  WebFont.load({
    google: {
      families: [
        'Lato:300,400,700',
        'Playfair+Display:400,700,900',
      ]
    }
  });

  // const WebFontConfig = {
  //   custom: {
  //     families: [
  //       'Lato:n1,n3,n4,n5,n6,n7,n9'
  //     ]
  //   }
  // };

};