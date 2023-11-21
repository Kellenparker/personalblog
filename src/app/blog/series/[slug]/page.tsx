import { SanityDocument } from "next-sanity";
import Posts from "@/app/blog/_components/PostList";
import { postsBySeriesQuery, seriesQuery } from "../../../../../sanity/lib/queries";
import { sanityFetch, token } from "../../../../../sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewPosts from "@/app/blog/_components/PreviewPosts";
import PreviewProvider from "@/app/blog/_components/PreviewProvider";

export default async function Home({ params }: { params: { slug: string } }) {
	const posts = await sanityFetch<SanityDocument[]>({ query: postsBySeriesQuery, params });
	const series = await sanityFetch<SanityDocument>({ query: seriesQuery, params });
	const isDraftMode = draftMode().isEnabled;
	if (isDraftMode && token) {
		return (
			<PreviewProvider token={token}>
				<PreviewPosts posts={posts} />
			</PreviewProvider>
		);
	}

	return (
		<main>
			<div className='container mx-auto max-w-screen-md prose dark:prose-invert my-10'>
				<div className='pattern-tri p-2'>
					<h1 className='bg-white  dark:bg-dark dark:text-white w-fit p-2 m-0'>{series.title}</h1>
					<p className='bg-white  dark:bg-dark dark:text-white w-fit p-2 m-0 mt-2'>{series.description}</p>
				</div>
			</div>
			<Posts posts={posts} />
		</main>
	);
}

// If we are in developement, we don't want to be loading cached posts
export const dynamic = "force-dynamic";
