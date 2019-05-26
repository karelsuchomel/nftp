import React from 'react'

import TabSwitcher from './TabSwitcher'
import SingleArticle from './SingleArticle'
import AsideArticle from './AsideArticle'
import decodeEntities from '../../utils/decodeEntities'

const trim = (excerpt) => {
	let byWord = excerpt.split(" ")
	return byWord.slice(0, 15).join(" ")
}

const PostListing = (props) => (
	<div id="posts-wrap" className="size-medium">
		<div className="single-page-of-posts">
			
		</div>
		<div id="load-more-wrap">
			 <button id="fetch-older-posts-button">Načíst starší</button>
		</div>
	</div>
)

export default PostListing

// { props.posts.map((post, i) => {
// 				if (post.format === 'aside') {
// 					return (
// 						<AsideArticle
// 							key={i}
// 							link={post.link}
// 							title={decodeEntities(post.title.rendered)}
// 							excerpt={trim(decodeEntities(
// 								post.excerpt.rendered
// 							))}
// 						/>
// 					)
// 				}
// 				return (
// 					<SingleArticle
// 						key={i}
// 						link={post.link}
// 						title={decodeEntities(post.title.rendered)}
// 						excerpt={trim(decodeEntities(
// 							post.excerpt.rendered
// 						))}
// 						featuredImageURL={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : null}
// 					/>
// 				)
// 			}) }