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
				dark: {
					DEFAULT: "#252729",
					darker: "#1C1D1E",
				},
				pattern: {
					one: {
						one: "#19415E",
						two: "#132C40",
						three: "#09131C",
						four: "#0A1724",
						five: "#0B1E28",
					},
					two: {
						one: "#E9F2F5",
						two: "#EDF6F7",
						three: "#EBEDF0",
						four: "#E6E3E5",
						five: "#DEDDDC",
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
