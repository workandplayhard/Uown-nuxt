/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(orientation: portrait)" },
        landscape: { raw: "(orientation: landscape)" }
      },
      colors: {
        black: "#1D1D1B",
        softnavy: "#5a6cc0",
        linkcustom: "#007bff",
        yellowcustom: "#ffd008",
        redorange: "#fc4c4c",
        aquamarine: "#71e5bd",
        bluecustom: "#5a6ecc",
        salmon: "#fe8075",
        link: "#007bff",
        light: "#f4f4f4",
        darkgray: "#646363"
      },
      maxHeight: {
        "1/2": "50%",
        unset: "unset",
        "minus-header": "calc(100vh - 3.5rem)"
      },
      flexShrink: {
        "3": 3,
        "2": 2
      },
      minHeight: {
        "minus-header": "calc(100vh - 3.5rem)"
      },
      zIndex: {
        "1": 1,
        "-1": -1
      },
      scale: {
        "175": "1.75"
      },
      opacity: {
        "60": ".6",
        "80": ".8"
      }
    },
    container: {
      center: true,
      padding: "1.5rem"
    },
    inset: {
      "0": 0,
      auto: "auto",
      "1/2": "50%",
      "-1/2": "-50%"
    }
  },
  variants: {
    borderColor: ["hover", "focus"]
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
