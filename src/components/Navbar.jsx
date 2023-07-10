import { React, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [leftNav, setLeftNav] = useState(false);

	const handleSetLeftNav = () => {
		setLeftNav(!leftNav);
	};
	return (
		<div className="navbar max-w-[1240px] h-24 mx-auto px-4 py-2 flex justify-between items-center text-white">
			<h1 className="text-3xl text-secondary z-10">React.</h1>
			<ul
				className={
					leftNav
						? 'pt-20 px-4 pb-4 fixed left-0 top-0 w-[60%] h-screen uppercase border-r border-gray-900 ease-in-out duration-500 bg-primary' //md:p-6 md:flex md:flex-row md:right-0
						: 'pt-20 px-4 pb-4 fixed top-0 left-[-100%] h-screen md:pt-4 md:h-24 md:static md:flex md:flex-row ease-in-out duration-500 bg-primary '
				}
			>
				<li
					className={
						leftNav
							? 'p-4 hover:text-secondary border-b border-gray-600'
							: 'p-4 hover:text-secondary'
					}
				>
					Home
				</li>
				<li
					className={
						leftNav
							? 'p-4 hover:text-secondary border-b border-gray-600'
							: 'p-4 hover:text-secondary'
					}
				>
					Company
				</li>
				<li
					className={
						leftNav
							? 'p-4 hover:text-secondary border-b border-gray-600'
							: 'p-4 hover:text-secondary'
					}
				>
					Resources
				</li>
				<li
					className={
						leftNav
							? 'p-4 hover:text-secondary border-b border-gray-600'
							: 'p-4 hover:text-secondary'
					}
				>
					About
				</li>
				<li className="p-4 hover:text-secondary">Contact</li>
			</ul>
			{leftNav ? (
				<AiOutlineClose
					size={20}
					className="md:hidden"
					onClick={handleSetLeftNav}
				/>
			) : (
				<AiOutlineMenu
					size={20}
					className="md:hidden"
					onClick={handleSetLeftNav}
				/>
			)}
		</div>
	);
};

export default Navbar;
