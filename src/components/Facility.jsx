import {
	FaPersonSwimming,
	FaWifi
} from 'react-icons/fa6';
import {
	FaCheckCircle,
	FaSearch
} from 'react-icons/fa';
import {
	LuAirVent
} from 'react-icons/lu';
import {
	MdDinnerDining,
	MdEdit
} from 'react-icons/md';

import
Hotels1
from '../assets/img/hotels1.jpg';
import
Hotels2
from '../assets/img/hotels2.jpg';
import
Hotels3
from '../assets/img/hotels3.jpg';
import
Hotels4
from '../assets/img/hotels4.jpg';
import
Hotels5
from '../assets/img/hotels5.jpg';


export default function Facility( {
	dataHotel
}) {
	return (
		<section className="max-w-screen-lg mx-auto px-2">
			<div className="flex flex-col md:flex-row justify-between gap-20 md:gap-10 w-full md:w-11/12 mx-auto border-2 border-slate-300 rounded-xl shadow-2xl p-6 md:translate-y-[-30%] lg:translate-y-[-50%] bg-white">
				<div className="flex flex-col justify-between gap-14 md:gap-5">
					<div className="flex justify-between items-end">
						<h3 className="text-2xl font-bold">Facilities</h3>
						<button className="text-orange-500 font-bold text-xs">See More</button>
					</div>
					<ul className="grid md:grid-cols-4 grid-cols-2 gap-y-10">
						<li className=" flex flex-col justify-center items-center gap-2.5 font-bold">
							<FaPersonSwimming style={ { fontSize: '3rem', border: '2px solid #938e8e', padding: '0.5rem', borderRadius: '0.5rem', fill: '#29cff2' }} />
							Swimming
						</li>
						<li className="flex flex-col justify-center items-center gap-2.5 font-bold">
							<FaWifi style={ { fontSize: '3rem', border: '2px solid #938e8e', padding: '0.5rem', borderRadius: '0.5rem', fill: '#fd0a4c' }} />
							Wi-Fi
						</li>
						<li className="flex flex-col justify-center items-center gap-2.5 font-bold">
							<LuAirVent style={ { fontSize: '3rem', border: '2px solid #938e8e', padding: '0.5rem', borderRadius: '0.5rem', color: '#00fbb5' }} />
							AC
						</li>
						<li className="flex flex-col justify-center items-center gap-2.5 font-bold">
							<MdDinnerDining style={ { fontSize: '3rem', border: '2px solid #938e8e', padding: '0.5rem', borderRadius: '0.5rem', fill: '#ec9000' }} />
							Dinner
						</li>
					</ul>
				</div>
				<div className="flex flex-col justify-center gap-4">
					<h3 className="text-lg font-bold">Hotels For You</h3>
					<p className="text-slate-500 text-xs">
						5 Days 6 Night
					</p>
					<button className="shrink-0 w-max flex  gap-4 justify-center items-center  px-4 border rounded">
						<FaCheckCircle style={ { fill: 'blue', fontSize: '2rem ' }} />
						<span className="py-2 pl-2 block h-full border-l">USD $506.00</span>
					</button>
				</div>
				<div className="flex flex-col justify-between py-2 gap-16">
					<div className="flex justify-between items-center">
						<span className="text-slate-500 text-xs">150 Results</span>
						<div className="flex justify-between items-center gap-12">
							<MdEdit style={ { fontSize: '2rem', color: 'gray' }} />
							<FaSearch style={ { color: '#1177a1', fontSize: '2rem' }} />
						</div>
					</div>
					<div className="flex justify-center items-center gap-4">
						{dataHotel.slice(0, 5).map((item, index)=>(
							<img key={index} src={item.img} alt="hotel" className="w-10 h-10 rounded-full" />
						))}
				</div>
			</div>
		</div>
	</section>
)
}