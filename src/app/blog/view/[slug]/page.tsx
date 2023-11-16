import { SanityDocument } from "@sanity/client";
import { draftMode } from "next/headers";
import { unstable_noStore as noStore } from "next/cache";
import Post from "@/app/blog/_components/Post";
import { postPathsQuery, postQuery } from "../../../../../sanity/lib/queries";
import { sanityFetch, token } from "../../../../../sanity/lib/sanityFetch";
import { client } from "../../../../../sanity/lib/client";
import PreviewProvider from "@/app/blog/_components/PreviewProvider";
import PreviewPost from "@/app/blog/_components/PreviewPost";
import { Fascinate_Inline } from "next/font/google";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
	// Important, use the plain Sanity Client here
	const posts = await client.fetch(postPathsQuery);

	return posts;
}

export default async function Page({ params }: { params: any }) {
	if(process.env.STAGE === 'development') {
		noStore();
	}

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