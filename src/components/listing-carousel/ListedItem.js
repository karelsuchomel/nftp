import React from 'react'

const ListedItem = (props) => (
	<div class="item-container">
		<h2>{props.headline}</h2>
		<p>{props.excerpt}</p>
	</div>
)

export default ListedItem