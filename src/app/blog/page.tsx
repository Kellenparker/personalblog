import { SanityDocument } from "next-sanity";
import Posts from "@/app/blog/_components/PostList";
import { postsQuery } from "../../../sanity/lib/queries";
import { sanityFetch, token } from "../../../sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewPosts from "@/app/blog/_components/PreviewPosts";
import PreviewProvider from "@/app/blog/_components/PreviewProvider";
import { unstable_noStore as noStore } from "next/cache";

export default async function Home() {
	if(process.env.STAGE === 'development') {
		noStore();
	}

	const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
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
			<div className='container mx-auto max-w-screen-md prose my-10'>
				<div className='pattern-head p-2'>
					<h1 className='bg-white dark:bg-dark dark:text-white w-fit p-2 m-0'>Blog</h1>
				</div>
			</div>
			<Posts posts={posts} />
		</main>
	);
}