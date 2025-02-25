import {
	FcLike
} from 'react-icons/fc'

export default function Relaxing( {
	dataHotel
}) {
	return (
		<section className="mt-20 md:mt-0 max-w-screen-lg mx-auto px-2 md:py-14 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0">
			<div className="relative w-full">
				<div className="w-full flex justify-center md:justify-start items-center gap-4 [&>*:nth-child(2)]:translate-y-[-25%]">
					{dataHotel.slice(4, 8).map((item, index)=>(
						<img key={index} src={item.img} alt={item.name} className="w-20 md:w-28 aspect-[3/6] object-cover rounded-2xl hover:scale-110" style={ { boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }} />
					))}
			</div>
			<div className="border bg-white shadow-2xl py-2 px-5 rounded-2xl w-[12rem] md:absolute bottom-10 left-32">
				<div className="flex justify-between items-center mb-1">
					<p className="text-[0.7rem] font-semibold text-slate-500">
						MrStudio Resorts
					</p>
					<span className="flex items-baseline gap-2 text-[0.9rem] font-semibold"><FcLike />4.7</span>
				</div>
				<div className="w-full h-1 rounded-2xl bg-sky-500 mb-1"></div>
				<button className="px-2 py-1 rounded-lg bg-orange-400 text-[0.7rem] text-white font-bold">More Details</button>
			</div>
		</div>
		<div className="flex flex-col gap-5">
			<h3 className="text-lg font-bold text-red-700">Welcome to MRStudio Resorts</h3>
			<h2 className="text-4xl font-bold ">Relaxing Pleasure</h2>
			<p className="font-semibold text-slate-600">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dignissimos eveniet neque pariatur, quia, quis quasi iste eius eaque laborum veritatis itaque esse unde accusantium similique impedit beatae minima. Autem.
			</p>
		</div>
	</section>
)
}