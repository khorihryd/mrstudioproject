import {
	MdPool
} from 'react-icons/md';
import {
	TbBeach,
	TbSunset2
} from 'react-icons/tb';
import {
	PiIslandFill
} from 'react-icons/pi';

export default function Resorts( {
	dataHotel
}) {
	return (
		<section className="mt-20 md:mt-0 max-w-screen-lg mx-auto px-2 bg-white py-14 w-full grid grid-cols-1 md:grid-cols-[45%_55%]">
			<div className=" pt-2 md:pt-7 md:pl-11 flex flex-col gap-5 md:gap-4">
				<h2 className="text-4xl font-[800]">Resorts Surprises</h2>
				<p className="text-slate-950 text-[0.8rem]">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tempora.
				</p>
				<ul className="flex flex-col gap-2">
					<li className="flex gap-5 items-center text-lg text-slate-500">
						<MdPool style={ {
							width: "2.7rem",
							height: "2.7rem",
							padding: "5px",
							borderRadius: "50%",
							backgroundColor: "skyblue",
							fill: "darkblue"
						}} />
						Infinity Pool</li>
					<li className="flex gap-5 items-center text-lg text-slate-500">
						<TbBeach style={ {
							width: "2.7rem",
							height: "2.7rem",
							padding: "5px",
							borderRadius: "50%",
							backgroundColor: "skyblue",
							stroke: "darkblue"
						}} />
						The Beach</li>
					<li className="flex gap-5 items-center text-lg text-slate-500">
						<PiIslandFill style={ {
							width: "2.7rem",
							height: "2.7rem",
							padding: "5px",
							borderRadius: "50%",
							backgroundColor: "skyblue",
							fill: "darkblue"
						}} />
						Beach Surprise</li>
					<li className="flex gap-5 items-center text-lg text-slate-500">
						<TbSunset2 style={ {
							width: "2.7rem",
							height: "2.7rem",
							padding: "5px",
							borderRadius: "50%",
							backgroundColor: "skyblue",
							stroke: "darkblue"
						}} />
						Beach Activities</li>
				</ul>
			</div>
			<div className="
				mt-10
				md:mt-0
				pb-4
				w-full
				h-full
				relative
				md:before:content-['']
				md:before:w-full
				md:before:h-3/5
				md:before:bg-sky-100
				md:before:rounded-2xl
				md:before:absolute
				md:before:bottom-0
				md:before:left-0
				md:before:z-[-1]
				">
				<div className="w-full md:w-5/6 mx-auto  flex flex-col gap-5">
					<iframe src="https://www.youtube.com/embed/BFS9n4B_2xA?si=AsNSxOq9-BBz8iHZ" className="aspect-video border-2 border-white rounded-xl shadow-xl" />
					<div className="flex gap-3 justify-center items-center">
						{dataHotel.slice(0, 5).map((item, index)=>(
							<img key={index} src={item.img}
							className="w-10 h-10 rounded-full "
							/>
						))}
				</div>
				<p className="font-semibold text-xs text-center">
					Play Your Favorite
				</p>
			</div>
		</div>
	</section>
)
}