import {
	useState
} from 'react';

import {
	CiMenuFries
} from 'react-icons/ci';
import {
	IoClose
} from 'react-icons/io5';

export default function Header( {
	toggleBtnMenu, show, scroll
}) {


	return (
		<header className="relative max-w-screen-lg mx-auto">
			<div className="bg-white px-2 fixed top-0 md:bg-white w-full z-20 max-w-screen-lg grid grid-cols-3 py-5 justify-between items-center">


				<h1 className="text-2xl font-bold">MRStudio</h1>
				<div className={`
				md:relative
				col-span-2
				w-full
				fixed
				top-0
				left-0
				p-10
				md:p-0
				bg-white
				z-10
				flex-col
				md:flex-row
				md:flex
				md:gap-10
				justify-around
				md:justify-end
				md:items-center
				${show? 'flex h-screen': 'hidden'}
				`}>
				<NavBar />
				<LoginBtn />
				</div>
				<BtnMenu toggleBtnMenu={toggleBtnMenu} show={show} />
				</div>
				</header>
				)
				}

				const NavBar = ()=> {
				return (<nav className="
				bg-white
				flex
				flex-col
				md:flex-row
				gap-4
				font-semibold
				list-none ">
				<li>Home</li>
				<li>About</li>
				<li>Type of house</li>
				<li>Contact</li>
				</nav>
				)
				}

				const LoginBtn = ()=> {
				return <button className="py-1.5 px-8 font-bold rounded-lg border border-black">Login</button>
				}

				const BtnMenu = ({
				toggleBtnMenu, show
				})=> {
				return (
				<button onClick={toggleBtnMenu} className={`col-start-3 flex justify-end items-center p-2 text-2xl md:hidden z-20 `}>
				{!show? (<CiMenuFries />): (<IoClose />)}
				</button>
				)
				}