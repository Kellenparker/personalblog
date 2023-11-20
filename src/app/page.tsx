import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next/types";

export default function Home() {
	return (
		<main className='container mx-auto max-w-screen-md prose dark:prose-invert my-10'>
			<div className='pattern-head p-2'>
				<h1 className='bg-white dark:bg-dark w-fit p-2 m-0'>Welcome!</h1>
			</div>
			<h3>Hello World!</h3>
			<p>
				Welcome to my blog! My name is Kellen Parker and I am a software developer based in Texas. My passions,
				which will be expressed through the blog, include web developement, simulation, and system design. This
				blog is my way of organizing and articulating my thoughts on these topics.
			</p>
			<h3>Blog Specs</h3>
			<p>
				As a developer, I&apos;m always looking for ways to improve my craft. This blog is no exception.
				I&apos;m continually adding new features and functionality to enhance the user experience. Here are some
				of the technologies that this blog currently uses:
			</p>
			<ul>
				<li>Next.js 14</li>
				<li>Sanity.io</li>
				<li>Typescript</li>
				<li>React</li>
				<li>Tailwind CSS</li>
			</ul>
			<p>
				If you are interested in the source code of this blog,{" "}
				<Link
					className='text-gray-600 dark:text-white  hover:text-primary transition no-underline'
					href='https://github.com/Kellenparker/personalblog'
					target="_blank"
				>
					here is a link to the repository
				</Link>
				.
			</p>
			<div className='flex w-full h-fit items-center'>
				<Link className='mx-auto pattern-diamond no-underline p-2' href='/blog'>
					<p className='bg-white p-2 m-0 text-2xl text-pattern-three-one font-extrabold'>View the blog!</p>
				</Link>
			</div>
		</main>
	);
}

export const metadata: Metadata = {
	title: "Kellen Parker - Home",
	description: "Welcome to the Kellen Parker blog!",
};
