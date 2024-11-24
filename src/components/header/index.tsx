import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<header
			className="grid grid-cols-3 items-center bg-white-fa p-4 md:p-5 lg:p-6 xl:p-8 text-gray-dark rounded-[12px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[24px] mb-6 md:mb-10 lg:mb-15 xl:mb-20">
			<nav className="flex gap-10 font-semibold max-lg:hidden">
				<a>New Drops 🔥</a>
				<a>Men</a>
				<a>Women</a>
			</nav>
			
			<button className="lg:hidden">
				<img src="/menu.png" alt="Menu" />
			</button>
			
			<Link to="/" className="flex justify-center">
				<img src="/logo.svg" alt="Logo" />
			</Link>
			
			<div className="flex items-center justify-end gap-5 lg:gap-10">
				<img src="/User.svg" className="size-4 md:size-5 lg:size-6 xl:size-7" alt='user'/>
				<img src="/Search.svg" className="size-4 md:size-5 max-lg:hidden" alt='search'/>
				
				<span className="size-[30px] md:size-[36px] lg:size-[40px] md:text-lg bg-yellow rounded-full
				flex justify-center items-center font-open font-semibold ">
					0
				</span>
			</div>
		</header>
	);
};

export default Header;
