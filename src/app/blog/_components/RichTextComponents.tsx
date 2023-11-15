import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
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
						style={docco}
						customStyle={{ borderRadius: "0" }}
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
				<img
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
};
