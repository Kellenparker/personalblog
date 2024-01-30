import Link from "next/link";
import Image from "next/image";
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import { getRandomPatternClass } from '@/app/_utils/getRandomPatternClass';

const builder = imageUrlBuilder(client);

function formatDate(dateString: string): string {
	const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
	return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
	let viewPath = "/blog/view/";

	return (
		<main className='container mx-auto max-w-screen-md'>
			{posts.map((post) => (
				<div
					key={post._id}
					className={`container mb-5 p-0 relative flex flex-row transition ${getRandomPatternClass()}`}
				>
					<div className='hidden sm:block'>
						{post?.mainImage ? (
							<Link href={viewPath + post.slug.current} className='block relative m-2'>
								<div className='flex items-center justify-center min-h-[150px] min-w-[150px] overflow-hidden border-[3px] border-white dark:border-dark'>
									<Image
										className=''
										src={builder.image(post.mainImage).width(300).height(300).url()}
										width={300}
										height={300}
										alt={post?.mainImage?.alt}
									/>
								</div>
							</Link>
						) : null}
					</div>
					<div className=''>
						<p className='absolute top-0 right-0 bg-white dark:bg-dark p-2 m-2 text-sm leading-3 text-gray-800 dark:text-gray-200 z-10'>
							{post.series ? "Series: " : ""}
							{post.series?.map((series: any) => (
								<Link
									key={series._id}
									href={"/blog/series/" + series.slug.current}
									className='text-gray-600 dark:text-white hover:text-primary'
								>
									{series.title}
								</Link>
							))}
						</p>
						<div className='flex h-full items-center relative p-2'>
							<Link key={post._id} href={viewPath + post.slug.current} className='my-10'>
								<h2 className='bg-white dark:bg-dark px-2 py-4 text-xl sm:text-2xl text-gray-600 dark:text-white hover:text-primary'>
									{post.title}
								</h2>
							</Link>
						</div>

						<p className='absolute bottom-0 right-0 bg-white dark:bg-dark  p-2 m-2 text-sm leading-3 text-gray-800 dark:text-gray-200 z-10'>
							{formatDate(post.publishedAt)}
						</p>
					</div>
				</div>
			))}
		</main>
	);
}

export const dynamic = 'force-dynamic';
