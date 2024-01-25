import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const utilities = {
        ".bg-radial-gradient-panther": {
          backgroundImage:
            "radial-gradient(81.15% 81.15% at 50% 18.85%, #34387F 0%, #171717 100%)",
        },
        ".bg-radial-gradient-spider ": {
          backgroundImage:
            "radial-gradient(81.15% 81.15% at 50% 18.85%, #600404 0%, #171717 100%)",
        },
        ".bg-radial-gradient-hulk": {
          backgroundImage:
            "radial-gradient(81.15% 81.15% at 50% 18.85%, #5B7F3C 0%, #171717 100%)",
        },
      };
      addUtilities(utilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
