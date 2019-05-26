import React from 'react';

export default function AgendaListing(props) {
	return(
		<div id="agenda-container">
			<div id="agenda-list-wrap">
				<div className="day-segment">
					<div id="agenda-line"></div>
					<div className="date-label">31. října</div>
					<ul className="event-list">
						<li className="event">
							<div className="dot"></div><a href="http://192.168.1.190/zs-hroznova/2018/08/sber-papiru-20162017/">Sběr papíru 2018/2019</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
}