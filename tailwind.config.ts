import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Nunito Sans",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Oxygen",
					"Ubuntu",
					"Cantarell",
					"Fira Sans",
					"Droid Sans",
					"Helvetica Neue",
					"sans-serif",
				],
				mono: ["Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
			},
			colors: {
				primary: {
					DEFAULT: "#44BBA4",
				},
				pattern: {
					one: {
						one: "#AAE2DB",
						two: "#AAC3B6",
						three: "#EBE4EC",
						four: "#E5EDF8",
						five: "#C6D4DF",
					},
					two: {
						one: "#D4AFB9",
						two: "#D1CFE2",
						three: "#9CADCE",
						four: "#7EC4CF",
						five: "#52B2CF",
					},
          three: {
            one: "#393E41",
            two: "#D3D0CB",
            three: "#E7E5DF",
            four: "#44BBA4",
            five: "#E7BB41",
          },
				},
				secondary: "#YOUR_SECONDARY_COLOR",
			},
		},
		container: {
			center: true,
			padding: "1rem",
			screens: {
				sm: "100%",
				md: "100%",
				lg: "1024px",
				xl: "1280px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
