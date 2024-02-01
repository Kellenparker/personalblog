import SyntaxHighlighter from "react-syntax-highlighter";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import { stackoverflowDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Link from "next/link";
const builder = imageUrlBuilder(client);

export const RichTextComponents = {
	types: {
		code: ({ value }: any) => {
			return (
				<div className=''>
					<SyntaxHighlighter
						className='py-0 my-0 font-mono'
						showLineNumbers={true}
						language={value.language}
						style={stackoverflowDark}
						customStyle={{ borderRadius: "0", backgroundColor: "#282b2e" }}
					>
						{value.code}
					</SyntaxHighlighter>
					<p className='text-right text-gray-500 text-bold my-0 py-0'>{value.language}</p>
				</div>
			);
		},
		image: ({ value }: any) => {
			if (!value || !value.asset || !value.asset._ref) {
				return null;
			}
			return (
				<Image
					className='mx-auto'
					src={builder.image(value).width(300).height(300).url()}
					width={300}
					height={300}
					alt={value?.alt}
				/>
			);
		},
	},
	block: {},
	marks: {
		code: ({ children }: any) => {
			return (
				<code className='bg-[#282b2e] text-white dark:border whitespace-nowrap border-gray-500 text-sm p-1 not-prose font-mono'>
					{children}
				</code>
			);
		},
		link: ({ children, value }: any) => {
			return (
				<Link
					href={value.href}
					target={value.blank ? "_blank" : "_self"}
					rel={value.blank ? "noopener noreferrer" : undefined}
					className='text-gray-600 dark:text-white  hover:text-primary transition no-underline italic'
				>
					{children}
				</Link>
			);
		},
	},
};
