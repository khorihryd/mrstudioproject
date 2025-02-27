content://com.termux.documents/tree/%2Fdata%2Fdata%2Fcom.termux%2Ffiles%2Fhome%2Fkhori%2Fweb%2Flandingpage%2Fbeachhotels::/data/data/com.termux/files/home/khori/web/landingpage/beachhotels/src/components/TopAirlines.jsximport {
	SiLionair,
	SiEmirates,
	SiTurkishairlines,
	SiAmericanairlines,
	SiSingaporeairlines,
	SiChinaeasternairlines
} from 'react-icons/si'


export default function TopAirlines() {
	return (
		<section className="w-full mt-32 bg-sky-100">
			<div className="max-w-screen-lg p-5 my-1 mx-auto">
				<div className="
					relative
					grid
					grid-cols-1
					gap-10
					md:grid-cols-2
					w-full
					py-7
					px-10
					mx-auto
					bg-white
					rounded-2xl">
					<div className="flex flex-col gap-10">
						<h2 className="text-[1.7rem] font-[900]">Search for Other Top Airlines</h2>
						<ul className="
							grid
							grid-cols-1
							md:grid-cols-2
							gap-y-8
							gap-x-8
							[&>li]:flex
							[&>li]:w-full
							[&>li]:gap-4
							[&>li]:items-center
							[&>li>*]:text-[2rem]">
							<li>
								<SiAmericanairlines />
								American Airlines
							</li>
							<li>
								<SiSingaporeairlines />
								Singapore Airlines
							</li>
							<li>
								<SiChinaeasternairlines />
								Chinaeastern Airlines
							</li>
							<li>
								<SiTurkishairlines />
								Turkish Airlines
							</li>
							<li>
								<SiLionair />
								Lion Airlines
							</li>
							<li>
								<SiEmirates />
								Emirates Airlines
							</li>
						</ul>
					</div>
					<img src={"./travels.svg"} alt="ilustration" className="md:w-2/3 md:absolute right-0 bottom-0 md:bottom-[-10%] scale-90 " />
			</div>
		</div>
	</section>
)
}