import React from "react";
import Link from "next/link";
import { Metadata } from "next/types";

const Connect = () => {
	return (
		<main className='container mx-auto max-w-screen-md divide-y'>
			<div className='container pattern-head p-2 my-10 max-w-sm'>
				<div className='flex flex-col justify-start w-fit p-2 h-full bg-dark'>
					<h1 className='text-white mb-5 font-bold text-4xl'>Connect with me!</h1>
					<p className='text-white mb-5'>kellenrparker@gmail.com</p>
					<p className='text-white'>
						<Link
							className='text-white  hover:text-primary transition no-underline'
							href='https://github.com/kellenparker/'
							target='_blank'
						>
							Github
						</Link>{" "}
						•{" "}
						<Link
							className='text-white  hover:text-primary transition no-underline'
							href='https://www.linkedin.com/in/kellen-parker/'
							target='_blank'
						>
							LinkedIn
						</Link>
					</p>
				</div>
			</div>
		</main>
	);
};

export const metadata: Metadata = {
	title: "Kellen Parker - Connect",
	description: "Connect with me!",
};

export default Connect;
