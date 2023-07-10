import React from 'react';
import analyticsImage from '../images/analytics.jpg';

const Analytics = () => {
	return (
		<div className="text-black bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img
					className="w-[500px] mx-auto py-4"
					src={analyticsImage}
					alt="analytics"
				/>
				<div className="flex flex-col justify-center text-center md:text-left">
					<p className="uppercase text-secondary font-bold md:text-xl">
						data analaytic dashboard
					</p>
					<h2 className="text-2xl font-bold sm:text-3xl md:text-4xl my-2">
						Manage Data Analytics Centerally
					</h2>
					<p className="text-gray-500 leading-relaxed">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
						deserunt quis, recusandae asperiores ducimus porro laboriosam iure
						est! Dolorem error deserunt neque modi repellendus, doloribus sed
						delectus dolorum. Vel, quo.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
