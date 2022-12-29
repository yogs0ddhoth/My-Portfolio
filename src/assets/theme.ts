const rootElement = document.getElementById('root') as HTMLElement;

const defaultTheme = {
  breakpoints: {
    values: {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    }
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
  palette: {},
  typography: {
    // fontFamily: 'Lato',
  },
  shape: {
    // borderRadius: 0,
  },
  spacing: 8,
};
export default defaultTheme;
