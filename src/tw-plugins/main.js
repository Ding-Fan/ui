const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addBase, theme }) {
    addBase({
      button: {
        all: "unset",
      },
      html: {
        scrollBehavior: "scroll-smooth",
        maxWidth: "100vw",
        overflowX: "",
      },
      body: {
        scrollBehavior: "scroll-smooth",
        maxWidth: "100vw",
        overflowX: "hidden",
      },
      li: {
        listStyle: "none",
      },
      "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      // to fix blur image on safari
      // doesn't work
      // img: {
      //   transform: "translate3d(0,0,0)",
      // },
    });
  },
  {
    theme: {
      extend: {
        keyframes: {
          slideDown: {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          slideUp: {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
          slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        },
      },
    },
  }
);
