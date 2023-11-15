import { SanityDocument } from "@sanity/client";
import { draftMode } from "next/headers";
import Post from "@/app/blog/_components/Post";
import { postPathsQuery, postQuery } from "../../../../../sanity/lib/queries";
import { sanityFetch, token } from "../../../../../sanity/lib/sanityFetch";
import { client } from "../../../../../sanity/lib/client";
import PreviewProvider from "@/app/blog/_components/PreviewProvider";
import PreviewPost from "@/app/blog/_components/PreviewPost";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
	// Important, use the plain Sanity Client here
	const posts = await client.fetch(postPathsQuery);

	return posts;
}

export default async function Page({ params }: { params: any }) {
	const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
	const isDraftMode = draftMode().isEnabled;

	if (isDraftMode && token) {
		return (
			<PreviewProvider token={token}>
				<PreviewPost post={post} />
			</PreviewProvider>
		);
	}

	return <Post post={post} />;
}

// If we are in developement, we don't want to be loading cached posts
const isDynamic = (process.env.STAGE === 'development') ? "force-dynamic" : "auto";
// console.log('isDynamic', isDynamic);
export const dynamic = isDynamic;