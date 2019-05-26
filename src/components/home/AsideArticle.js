import React from 'react'

const AsideArticle = (props) => {
	const {link, title, excerpt} = props
	return (
		<article className='aside post-wrap clear-both'>
			<a 
			className='link-overlay'
			href={link}
			title={title}
			></a>
			<h2 className="aside-headline">
				{title}&nbsp; | &nbsp;
				<span className="one-line-excerpt">
					{excerpt}
				</span>
			</h2>
			<div className="basic-info-wrap">
				<div className="post-details-wrap">
					<span>
						dřed 6 dny
					</span>
				</div>
			</div>
		</article>
	)
}

export default AsideArticle