import {
	FaUnlockAlt
} from 'react-icons/fa';
import {
	IoIosArrowDown,
	IoIosArrowUp
} from 'react-icons/io';

import {
	useState
} from 'react';

export default function CityChoice( {
	dataHotel
}) {
	const [tampilan,
		setTampilan] = useState(3)
	const [isOpen,
		setIsOpen] = useState(false);

	function handleClickMore() {
		if (!isOpen) {
			setIsOpen(true);
			setTampilan(9);
		} else {
			setIsOpen(false);
			setTampilan(3)
		}
	}
	return (
		<section className={`
			max-w-screen-lg mx-auto px-2
			relative
			mt-32
			md:mt-2
			md:before:${isOpen? 'h-3/4': 'h-44'}
			flex
			flex-col
			items-center
			md:before:content-['']
			md:before:w-full
			md:before:absolute
			md:before:top-0
			md:before:bottom-0
			md:before:translate-y-[14rem]
			md:before:shadow-inner
			md:before:z-[-1]
			md:before:bg-sky-100
			md:before:rounded-2xl
			md:before:transition-all
			md:before:ease-out
			md:before:duration-300
			`}>
			<h2 className="text-5xl font-[950] text-center mb-10">Entire City of Choice</h2>
			<div className="w-[91%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{dataHotel.slice(0, tampilan).map((item, index)=>(
					<div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
						<div className="relative w-full  ">
							<h3 className="text-xl font-[900] absolute top-0 left-0 pt-2 px-3 text-white">{item.name}</h3>
							<img src={item.img} alt={item.name} className="w-full aspect-video" />
					</div>
					<div className="py-3 px-4 flex justify-between items-end">
						<div>
							<h3 className="text-red-600 text-lg font-[800] mb-2">${item.price}.00</h3>
							<p className="font-[700] text-xs">
								Booking ID:{item.bookingID}
							</p>
							<span className="text-slate-500 text-xs">{item.type}</span>
						</div>
						<button className="shrink-0 w-16 h-16 text-[0.5rem] flex flex-col justify-center items-center border-2 rounded-full">
							<FaUnlockAlt style={ { fontSize: "1.4rem" }} />
							{item.location}</button>
					</div>
				</div>
				))}
		</div>
		<button onClick={handleClickMore} className="flex justify-center items-center bg-black text-white text-[2rem] w-10 h-10 rounded-full translate-y-[50%]">
			{!isOpen? <IoIosArrowDown />: <IoIosArrowUp /> }
		</button>
	</section>
)
}