import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Nunito_Sans } from "next/font/google";

const global = Nunito_Sans({
	subsets: ["latin"],
});

import "./globals.css";

import Header from "./_components/Header";

export const metadata: Metadata = {
	title: 'Kellen Parker - Blog',
	description: "Kellen Parker's personal blog",

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className="bg-dark-darker">
			<body className={`${global.className}`}>
				<Header />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
