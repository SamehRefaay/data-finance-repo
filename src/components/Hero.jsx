import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
	return (
		<div className="text-white">
			<div className="max-w-[800px] mt-[-96px] h-screen mx-auto flex flex-col justify-center text-center">
				<p className="uppercase p-2 font-bold text-secondary md:text-xl ">
					Growing with data analytics
				</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl md:mt-6">
					Grow with data.
				</h1>
				<div className="my-3 flex justify-center items-center">
					<p className="font-bold md:text-5xl sm:text-4xl text-xl md:py-4">
						fast, flexible financing for
					</p>
					<Typed
						className="font-bold md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2 text-gray-500"
						strings={['BTB', 'BTC', 'SASS']}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
				<p className="md:text-2xl text-xl p-2 font-bold text-gray-500">
					Monitor your data analytics to increase revenue for BTB, BTC & SASS
					platforms.
				</p>
				<button className="my-6 mx-auto py-3 w-[200px] rounded-md bg-secondary font-medium  text-black">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Hero;
