export default function Contact() {
	return (
		<section className="max-w-screen-lg my-20 mx-auto px-2 flex justify-center">
			<div className="md:w-1/2">
				<h2 className="text-3xl md:text-5xl font-[950] text-center mb-5">Get Better Work</h2>
				<p className="text-center mb-5">
					See why milions of people across 195<br /> countries use Dash
			</p>
			<form className="flex flex-col md:flex-row  justify-center items-center gap-4">
				<input type="email" placeholder="example@email.com" className="px-5 py-3 border rounded-xl" />
			<button className="px-5 py-3 rounded-xl bg-blue-500 shrink-0 font-bold text-white">Try for free</button>
		</form>
	</div>
</section>
)
}