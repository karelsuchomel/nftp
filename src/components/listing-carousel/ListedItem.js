import React from 'react'

const ListedItem = (props) => (
	<div class="item-container">
		<div class="thumbnail-container">
			<img src={props.thumbnailURL} />
		</div>
		<div class="text-contaienr">
			<h3>{props.headline}</h3>
			<p>{props.excerpt}</p>
		</div>
	</div>
)

export default ListedItem