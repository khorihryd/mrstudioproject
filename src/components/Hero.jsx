import {
	FaUnlockAlt
} from 'react-icons/fa';

import HeroImage from '../assets/img/heroimg.jpg'


export default function Hero() {
	return (
		<section className="max-w-screen-lg md:mt-20 mx-auto md:px-2">
			<MainHero />
		</section>
	)
}

	const MainHero = ()=> {
		return (
			<div className="
				relative
				pt-12
				md:pt-0
				px-2
				md:text-left
				w-full
				h-[30rem]
				md:rounded-3xl
				grid
				grid-cols-1
				overflow-hidden
				md:bg-gradient-to-r
				from-emerald-200
				from-0%
				via-cyan-400
				via-40%
				to-transparent
				to-70%
				md:grid-cols-[1fr_1fr]
				md:before:block
				before:content-['']
				before:absolute
				before:w-full
				before:h-full
				md:before:bg-[url('/heroimg.jpg')]
				before:bg-fill
				before:bg-right
				before:z-[-1]
				before:bg-no-repeat"
				>
				<div className="pt-16 pb-32 md:pl-16 flex flex-col justify-between items-start">
					<h1 className="font-extrabold text-[3.5rem] leading-tight mb-5">Enjoy Your<br />Dream Vacations</h1>
				<p className="text-slate-800 text-[1rem] mb-5">
					temukan surga tersembunyi pada setiap perjalanan mu. dilengkapi dengan
				</p>
				<button className="flex justify-center items-center gap-4 text-emerald-700 font-extrabold">
					<FaUnlockAlt style={ { width: '3rem', height: '3rem', border: '2px solid #ffffff', padding: '0.6rem', borderRadius: '50%', fill: '#000000' }} />
					Warwick Hotels & Resorts
				</button>
			</div>
		</div>
	)
}