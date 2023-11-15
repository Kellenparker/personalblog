import { SanityDocument } from "next-sanity";
import Posts from "@/app/blog/_components/PostList";
import { postsQuery } from "../../../sanity/lib/queries";
import { sanityFetch, token } from "../../../sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewPosts from "@/app/blog/_components/PreviewPosts";
import PreviewProvider from "@/app/blog/_components/PreviewProvider";

export default async function Home() {
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
			<div className='container mx-auto max-w-screen-md prose mt-5 mb-10'>
				<div className='pattern-head p-2'>
					<h1 className='bg-white w-fit p-2 m-0'>Blog</h1>
				</div>
			</div>
			<Posts posts={posts} />
		</main>
	);
}

// If we are in developement, we don't want to be loading cached posts
const isDynamic = process.env.STAGE === "development" ? "force-dynamic" : "auto";
//console.log('isDynamic', isDynamic);
export const dynamic = isDynamic;
