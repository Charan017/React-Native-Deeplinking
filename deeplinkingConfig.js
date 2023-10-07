export const deeplinkingConfig = {
  prefixes: ['deeplink://'],
  config: {
    // screens: {
    //   Home: 'Home',
    //   Details: 'Details',         /** single stack */
    //   Settings: 'Settings',
    // },

    screens: {
      Tab1: {
        screens: {
          Tab1Screen1: 'Tab1Screen1',
          Tab1Screen2: 'Tab1Screen2',
          Tab1Screen3: 'Tab1Screen3', // Nested navigator
        },
      },
      Tab2: {
        screens: {
          Tab2Screen1: 'Tab2Screen1',
          Tab2Screen2: 'Tab2Screen2',
          Tab2Screen3: 'Tab2Screen3',
        },
      },
    },
  },
};
