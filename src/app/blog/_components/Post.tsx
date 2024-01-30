"use client";

import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "../../../../sanity/lib/client";
import { RichTextComponents } from "./RichTextComponents";
import { getRandomPatternClass } from "@/app/_utils/getRandomPatternClass";

import PostNotFound from "./PostNotFound";

const builder = imageUrlBuilder(client);

function formatDate(dateString: string): string {
	const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
	return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function Post({ post }: { post: SanityDocument }) {
	const randomPattern = getRandomPatternClass();
	// Esnure that post exists, with at least a title
	if (!post || !post.title) {
		// Return a blog post not found page
		return <PostNotFound />;
	}

	return (
		<main className='container mx-auto prose dark:prose-invert prose-lg max-w-screen-md mb-60'>
			<div className={`${randomPattern} p-2 mt-10`}>
				<h1 className='bg-white dark:bg-dark w-fit p-2 m-0'>{post.title}</h1>
				<div className='flex flex-row justify-between'>
					<p className='text-sm bg-white dark:bg-dark w-fit p-2 m-0 mt-2'>
						{formatDate(post.publishedAt)}
					</p>
					{/** TODO: if more than one post per series is desired; change this */}
					<Link
						href={"/blog/series/" + post.series[0].slug.current}
						className='bg-white dark:bg-dark text-sm text-right no-underline text-gray-600 dark:text-white hover:text-primary w-fit p-2 m-0 mt-2'
					>
						{post.series[0].title}
					</Link>
				</div>
			</div>
			{post?.mainImage ? (
				<Image
					className='m-0 mx-auto mb-5 h-auto'
					src={builder.image(post.mainImage).width(800).height(400).url()}
					width={800}
					height={800}
					alt={post?.mainImage?.alt}
				/>
			) : null}
			{post?.body ? <PortableText value={post.body} components={RichTextComponents} /> : null}
		</main>
	);
}

export const dynamic = 'force-dynamic';