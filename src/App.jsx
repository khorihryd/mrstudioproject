import {
	useEffect,
	useState
} from 'react';

import DataHotel from './datadummy/DataHotel.json';

import Header from './components/Header';
import Hero from './components/Hero';
import Facility from './components/Facility';
import CityChoice from './components/CityChoice';
import Resorts from './components/Resorts';
import Relaxing from './components/Relaxing';
import TopAirlines from './components/TopAirlines';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
	const [showNav,
		setShowNav] = useState(false);

	const handleClickMenu = ()=> {
		setShowNav(!showNav)
		if (!showNav) {
			document.body.classList.add('overflow-hidden')
		}else{
			document.body.classList.remove('overflow-hidden')
		}
	}
	return (
		<div className="w-full">
			<Header toggleBtnMenu={handleClickMenu} show={showNav} />
			<Hero />
			<Facility dataHotel={DataHotel} />
			<CityChoice dataHotel={DataHotel} />
			<Resorts dataHotel={DataHotel} />
			<Relaxing dataHotel={DataHotel} />
			<TopAirlines />
			<Contact />
			<Footer />
		</div>
	)
}