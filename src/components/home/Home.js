import React from 'react';

import HeroCard from './hero-card/HeroCard.js';
import TabSwitcher from './TabSwitcher';
import ListingCarousel from '../listing-carousel/ListingCarousel.js';
import AgendaListing from './AgendaListing';

const Home = (props) => {
	return(
		<div className="carousel-container">
			<h2>{props.category}</h2>
			<ListingCarousel 
				items={props.items}
			/>
		</div>
	)
}

export default Home
