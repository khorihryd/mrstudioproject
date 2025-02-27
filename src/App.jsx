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

	const [isScroll,
		setIsScroll] = useState(false);

	const handleClickMenu = ()=> {
		setShowNav(!showNav)
		if (!showNav) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}
	}
	
	useEffect(()=>{
		const handleScroll = ()=>{
			if(window.scrollY > 50){
				setIsScroll(true)
			}else{
				setIsScroll(false)
			}
			
			window.addEventListener('scroll',handleScroll);
			return ()=>{
				window.removeEventListener('scroll',handleScroll)
			}
		}
	},[])
	
	return (
		<div className="w-full">
			<Header toggleBtnMenu={handleClickMenu} show={showNav} scroll={isScroll}/>
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