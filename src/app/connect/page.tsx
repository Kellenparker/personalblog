import React from "react";
import Link from "next/link";
import Image from "next/image";

const Connect = () => {
	return (
		<main className='container mx-auto max-w-screen-md divide-y'>
			<div className='container pattern-head p-2 my-5 max-w-sm'>
				<div className='flex flex-col justify-start w-fit p-2 h-full bg-white'>
					<h1 className='mb-5 font-bold text-4xl'>Connect with me!</h1>
					<p className='mb-5'>kellenrparker@gmail.com</p>
					<p className=''>
						<Link
							className='text-gray-600 hover:text-primary transition'
							href='https://github.com/kellenparker/'
						>
							Github
						</Link>{" "}
						•{" "}
						<Link
							className='text-gray-600 hover:text-primary transition'
							href='https://www.linkedin.com/in/kellen-parker/'
						>
							LinkedIn
						</Link>
					</p>
				</div>
			</div>
		</main>
	);
};

export default Connect;
