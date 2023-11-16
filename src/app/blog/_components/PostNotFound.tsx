import Link from "next/link";
import React from "react";

const PostNotFound = () => {
	return (
		<main className="container mx-auto prose prose-lg max-w-screen-md py-4">
      <h1>Post not found</h1>
			<p>Sorry, we couldn&apos;t find that post.</p>
      <Link className='text-gray-600 hover:text-primary transition flex items-center' href="/blog">Return to blog</Link>
		</main>
	);
};

export default PostNotFound;
