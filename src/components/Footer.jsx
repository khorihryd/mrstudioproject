import {
	BiLogoFacebook,
	BiLogoTwitter,
	BiLogoLinkedin,
	BiLogoPinterest
} from 'react-icons/bi'

export default function Footer() {
	return (
		<footer className="max-w-screen-lg mx-auto px-2">
			<div className="md:grid md:grid-cols-[320px_1fr_1fr_1fr] px-11 flex flex-col gap-5">
				<div className="w-1/2">
					<h2 className="text-xl font-bold">MRStudio</h2>
					<p className="mt-5 text-xs text-slate-600">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
					<div className="mt-14 grid grid-cols-4
						[&>*]:w-[2rem]
						[&>*]:h-[2rem]
						[&>*]:p-1
						[&>*]:border-2
						[&>*]:rounded-full

						">
						<BiLogoFacebook />
						<BiLogoTwitter />
						<BiLogoLinkedin />
						<BiLogoPinterest />

					</div>
				</div>
				<div>
					<h3 className="text-lg font-bold mb-4">Links</h3>
					<ul className="text-xs flex flex-col gap-2">
						<li>Home</li>
						<li>Price</li>
						<li>Download</li>
						<li>About</li>
						<li>Services</li>
					</ul>
				</div>
				<div className="">
					<h3 className="text-lg font-bold mb-4">Support</h3>
					<ul className="text-xs flex flex-col gap-2">
						<li>FAQ</li>
						<li>How it Works</li>
						<li>Features</li>
						<li>Contact</li>
						<li>Reporting</li>
					</ul>
				</div>
				<div>
					<h3 className="text-lg font-bold mb-4">
						Contact Us
					</h3>
					<ul className="text-xs flex flex-col gap-2">
						<li>+880 12345678</li>
						<li>uxdesigner@gmail.com</li>
						<li>Thakurgaon</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}