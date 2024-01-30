import { SanityDocument } from "@sanity/client";
import { unstable_noStore as noStore } from "next/cache";
import Post from "@/app/blog/_components/Post";
import { postPathsQuery, postQuery } from "../../../../../sanity/lib/queries";
import { sanityFetch, token } from "../../../../../sanity/lib/sanityFetch";
import { client } from "../../../../../sanity/lib/client";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
	// Important, use the plain Sanity Client here
	const posts = await client.fetch(postPathsQuery);

	return posts;
}

export default async function Page({ params }: { params: any }) {
	noStore();

	const post = await sanityFetch<SanityDocument>({ query: postQuery, params });

	return <Post post={post} />;
}

export const dynamic = 'force-dynamic';