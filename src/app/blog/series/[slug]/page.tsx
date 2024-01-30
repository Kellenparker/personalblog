import { SanityDocument } from "next-sanity";
import Posts from "@/app/blog/_components/PostList";
import { postsBySeriesQuery, seriesQuery } from "../../../../../sanity/lib/queries";
import { sanityFetch, token } from "../../../../../sanity/lib/sanityFetch";

export default async function Home({ params }: { params: { slug: string } }) {
	const posts = await sanityFetch<SanityDocument[]>({ query: postsBySeriesQuery, params });
	const series = await sanityFetch<SanityDocument>({ query: seriesQuery, params });

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

export const dynamic = 'force-dynamic';