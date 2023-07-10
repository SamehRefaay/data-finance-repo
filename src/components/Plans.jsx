import React from 'react';
import Card from './Card';
import { IoIosPerson } from 'react-icons/io';
import { BsPeopleFill } from 'react-icons/bs';
import { TiGroup } from 'react-icons/ti';

const Plans = () => {
	const plans = [
		{
			title: 'Single User',
			price: '$149',
			mostPopular: 'no',
			details: ['500 GB Storage', '1 User Allowed', 'Send up to 2 GB'],
		},
		{
			title: 'Partnership',
			price: '$199',
			mostPopular: 'yes',
			details: ['1 TB Storage', '3 User Allowed', 'Send up to 10 GB'],
		},
		{
			title: 'Group Account',
			price: '$299',
			mostPopular: 'no',
			details: ['5 TB Storage', '10 User Allowed', 'Send up to 20 GB'],
		},
	];
	return (
		<div className="text-black bg-white py-16 md:py-48 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16">
				<Card
					icon={<IoIosPerson className="text-gray-500" size={90} />}
					title={plans[0].title}
					price={plans[0].price}
					details={plans[0].details}
					mostPopular={plans[0].mostPopular}
				/>
				<Card
					icon={<BsPeopleFill className="text-gray-500" size={90} />}
					title={plans[1].title}
					price={plans[1].price}
					details={plans[1].details}
					mostPopular={plans[1].mostPopular}
				/>
				<Card
					icon={<TiGroup className="text-gray-500" size={90} />}
					title={plans[2].title}
					price={plans[2].price}
					details={plans[2].details}
					mostPopular={plans[0].mostPopular}
				/>
			</div>
		</div>
	);
};

export default Plans;
