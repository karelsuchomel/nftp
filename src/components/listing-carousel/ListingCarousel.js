import React from 'react'

import ListedItem from './ListedItem.js'

const ListingCarousel = (props) => {
	return (
	<div className="listing-carousel">
		{props.items.map(item => {
			return (
			<ListedItem 
				{...item}
			/>
			)
		})
		}
	</div>
	)
}

export default ListingCarousel