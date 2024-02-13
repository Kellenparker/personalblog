import { SanityDocument } from "next-sanity";
import Posts from "@/app/blog/_components/PostList";
import { postsQuery } from "../../../sanity/lib/queries";
import { sanityFetch, token } from "../../../sanity/lib/sanityFetch";

export default async function Home() {
	const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

	return (
		<main>
			<div className='container mx-auto max-w-screen-md prose prose-invert my-10'>
				<div className='pattern-head p-2'>
					<h1 className='bg-dark text-white w-fit p-2 m-0'>Blog</h1>
				</div>
			</div>
			<Posts posts={posts} />
		</main>
	);
}

export const dynamic = 'force-dynamic';