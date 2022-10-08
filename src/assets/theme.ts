const rootElement = document.getElementById('root') as HTMLElement;

export default {
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
 