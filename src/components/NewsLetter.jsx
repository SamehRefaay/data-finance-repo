import React from 'react';

const NewsLetter = () => {
	return (
		<div className="text-white py-16 px-4">
			<div className=" max-w-[1240px] mx-auto grid md:grid-cols-3">
				<div className="md:col-span-2">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
						Want tips & tricks to optimize your flow?
					</h2>
					<p className="my-3">Sign up to our newsletter and stay up to date.</p>
				</div>
				<div>
					<div className="flex justify-between items-center">
						<input
							className="my-6 py-3 px-3 rounded-md w-[65%]"
							type="email"
							placeholder="Enter your email"
						/>
						<button className="my-6 py-3 w-[30%] rounded-md bg-secondary font-medium  text-black">
							Notify me
						</button>
					</div>
					<p>
						We care about the protection of your data. Read our
						<a className="text-secondary ml-1 underline" href="/">
							Privacy Policy.
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
