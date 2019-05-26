<?php
add_action( 'admin_enqueue_scripts', 'nftp_portal_add_color_picker' );
function nftp_portal_add_color_picker( $hook ) {
 
	if( is_admin() ) { 
	 
		// Add the color picker css file       
		wp_enqueue_style( 'wp-color-picker' ); 
		 
		// Include our custom jQuery file with WordPress Color Picker dependency
		wp_enqueue_script( 'handle-color-picker', get_template_directory_uri() . '/inc/admin/js/handle-color-picker.js', array( 'jquery', 'wp-color-picker' ), '', true ); 
	}
}

// Setup administration settings page
require get_template_directory() . '/inc/admin/theme-settings-page.php';