"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className='container mx-auto max-w-screen-md prose mt-5'>
			<div className='pattern-head p-2'>
				<h1 className='bg-white w-fit p-2 m-0'>Welcome!</h1>
			</div>
			<h3>Embark on a Coding Odyssey</h3>
			<p>
				Hello World! I'm [Your Name], and this is where my thoughts unfold into code. As a fervent developer and
				lifelong learner, my blog is a tapestry of my adventures in coding—from the initial spark of an idea to
				the final semicolon. It's a chronicle of trials and triumphs, where each post is a peek into the
				methodologies and musings behind my projects. Join me on this quest for knowledge as we decode the
				intricacies of technology together.
			</p>
			<h3>A Diary of Development</h3>
			<p>
				Think of this space as my open-source diary, where I document my journey through new frameworks, dissect
				algorithms, and share ah-ha moments that happen along the way. Whether I'm wrestling with React bugs at
				midnight or celebrating a breakthrough in Python, you'll get the unfiltered view. If you're curious
				about the 'why' and 'how' of coding, you've come to the right place. Let's navigate the ever-evolving
				world of software development and maybe learn something new along the way. Ready to dive in? Let's code!
			</p>
			<div className='flex w-full h-fit items-center'>
				<Link className='mx-auto pattern-diamond no-underline p-2' href='/blog'>
					<p className='bg-white p-2 m-0 text-2xl text-pattern-three-one font-extrabold'>
						View the blog!
					</p>
				</Link>
			</div>
		</main>
	);
}
