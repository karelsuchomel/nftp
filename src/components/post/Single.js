import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Single(props) {
	return(
		<div id="content">
			<div id="content-single-page">


				<h1><a href="http://192.168.1.190/zs-hroznova/2018/04/mezinarodni-jazykova-zkouska-podevate/" rel="bookmark" title="Permanent Link to 15. – 30. 4. 2018 proběhne dotazníkové šetření SCIO “Mapa školy”">15. – 30. 4. 2018 proběhne dotazníkové šetření SCIO “Mapa školy”</a></h1>
			<span className="publication-date">
				27. april 2018</span>
				<p><a className="pswp-gallery" href="http://localhost/zs-hroznova/wp-content/uploads/2017/08/1498143209_9.jpg" data-size="640x427"><img className="size-medium wp-image-6996 aligncenter" src="http://localhost/zs-hroznova/wp-content/uploads/2017/08/1498143209_9-300x200.jpg" alt="" srcset="http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1498143209_9-300x200.jpg 300w, http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1498143209_9-400x267.jpg 400w, http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1498143209_9.jpg 640w" sizes="(max-width: 300px) 100vw, 300px" width="300" height="200" /></a></p>
			<p><strong>V pátek 16. června vyrazili zájemci z 5. tříd skládat mezinárodní jazykovou zkoušku z anglického jazyka YLE Movers. Na její absolvování se připravovali ve 3. – 5. třídě v kroužku Cambridge Course.</strong></p>
			<p>Zkouška se skládala ze tří částí – poslechu, <a className="text-link off-site-link" href="http://localhost/zs-hroznova/" target="_blank">psaného testu</a> a rozhovoru. Přes počáteční nervozitu zvládli akci velice dobře všichni účastníci. Výsledky se žáci dozvědí v srpnu.</p>
			<p>Přípravné kurzy na jazykovou zkoušku by měly na naší škole probíhat i v příštím školním roce.</p>
			<p>Luděk Balcařík</p>

				<a onClick={ props.history.goBack } className="home-link">Zpět</a>
				
			</div>
		</div>
	);
}