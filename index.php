<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
	<title>Nadační fond Terezy Pergnerové | web ve vývoji</title>
	<meta charset="<?php bloginfo('charset');?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Windows tile graphics and RSS feed -->
	<?php $templateURL = get_bloginfo('template_url'); ?>
	<meta name="application-name" content="www.zshroznova.cz"/>

	<!-- Links-->
	<?php wp_head(); ?>
	</head>
<body <?php body_class(); ?> >

	<noscript>
		You need to enable JavaScript to run this app.
	</noscript>

	<div id="root"></div>

	<?php wp_footer(); ?>
</body>
</html>