import React from 'react';

import HeroCard from './hero-card/HeroCard.js';
import TabSwitcher from './TabSwitcher';
import ListingCarousel from '../listing-carousel/ListingCarousel.js';
import AgendaListing from './AgendaListing';

const Home = (props) => {
	const isEmpty = props.posts === []

	return(
		<div>
			{ false && 
				(
					<div>
						<HeroCard />

						<div id="content" className="clear-both home-page">

							<TabSwitcher />

							<ListingCarousel 
								posts={props.posts} 
								isFetching={props.isFetching}
							/>

							<AgendaListing />

						</div>
					</div>
				)
			}
		</div>
	)
}

export default Home
