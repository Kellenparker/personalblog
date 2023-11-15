import React from "react";
import "../globals.css";
import Link from "next/link";

const Header = () => {
	return (
		<header className='bg-white border-b border-gray-300 py-3'>
			<div className='container max-w-screen-md mx-auto flex items-stretch justify-between'>
				{/* Name with vertical line */}
				<div className="flex py-0 ml-2 justify-center relative before:content-[''] before:block before:bg-pattern-three-two before:w-1 before:h-full before:absolute before:left-[-20px] flex-col">
					<h1 className='text-black text-4xl py-0 font-bold select-none'>Kellen</h1>
					<h2 className='text-black text-4xl py-0 font-bold select-none'>Parker</h2>
				</div>

				{/* Navigation links with vertical line */}
				<div className="flex py-0 mr-2 items-center justify-between sm:justify-center relative after:content-[''] after:block after:bg-pattern-three-four after:w-1 after:h-full after:absolute after:right-[-20px]">
					<nav className='flex flex-col sm:flex-row space-x-0 sm:space-x-4 items-end'>
						<Link className='text-gray-600 hover:text-primary transition flex items-center' href="/">Home</Link>
						<span className='hidden sm:block mx-2 items-center select-none'>·</span>{" "}
						{/* Dot separator for larger screens */}
						<Link className='text-gray-600 hover:text-primary transition flex items-center' href="/blog">Blog</Link>
						<span className='hidden sm:block mx-2 items-center select-none'>·</span>{" "}
						{/* Dot separator for larger screens */}
						<Link className='text-gray-600 hover:text-primary transition flex items-center' href="/connect">Connect</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
