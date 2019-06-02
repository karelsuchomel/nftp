import React from 'react'

const ListedItem = (props) => (
	<div class="item-container">
		<h3>{props.headline}</h3>
		<p>{props.excerpt}</p>
	</div>
)

export default ListedItem