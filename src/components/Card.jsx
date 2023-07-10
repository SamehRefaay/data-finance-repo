import React from 'react';

const Card = ({ icon, title, price, details, mostPopular }) => {
	console.log(mostPopular);
	return (
		<div
			className={
				mostPopular === 'yes'
					? 'shadow-xl rounded-lg text-black flex flex-col items-center p-4 border-t bg-gray-100 md:scale-110'
					: 'shadow-xl rounded-lg text-black flex flex-col items-center p-4 border-t'
			}
		>
			<div className="mt-[-65px]">{icon}</div>
			<h2 className="my-6 text-xl md:text-2xl font-medium">{title}</h2>
			<h2 className="my-4 text-4xl md:text-5xl font-bold">{price}</h2>
			<ul className="my-6 w-[90%] text-center">
				{details.map(option => (
					<li className="py-4 text-lg border-t last-of-type:border-b">
						{option}
					</li>
				))}
			</ul>
			<button
				className={
					mostPopular === 'yes'
						? 'my-6 mx-auto py-3 w-[200px] rounded-md bg-black font-medium  text-secondary'
						: 'my-6 mx-auto py-3 w-[200px] rounded-md bg-secondary font-medium  text-black'
				}
			>
				Start Trial
			</button>
		</div>
	);
};

export default Card;
