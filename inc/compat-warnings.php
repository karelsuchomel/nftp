<?php
/**
 * NFTP-Portal compatbility warnings
 *
 * Prevents NFTP-Portal from running on WordPress versions without the REST API,
 * since this theme requires API functionality. If this file is loaded,
 * we know we have an incompatible WordPress.
 *
 * @package NFTP-Portal
 */

/**
 * Prevent switching to NFTP-Portal on old versions of WordPress.
 *
 * Switches to the default theme.
 */
function nftp_portal_switch_theme() {
	switch_theme( WP_DEFAULT_THEME );
	unset( $_GET['activated'] );
	add_action( 'admin_notices', 'nftp_portal_upgrade_notice' );
}
add_action( 'after_switch_theme', 'nftp_portal_switch_theme' );

/**
 * Adds a message for unsuccessful theme switch.
 *
 * Prints an update nag after an unsuccessful attempt to switch to
 * NFTP-Portal on WordPress versions prior to 4.7.
 */
function nftp_portal_upgrade_notice() {
	$message = __( 'NFTP-Portal requires WordPress 4.7 or higher. Please update your wordpress installation and try again.', 'nftp-portal' );
	printf( '<div class="error"><p>%s</p></div>', $message ); /* WPCS: xss ok. */
}

/**
 * Prevents the Customizer from being loaded on WordPress versions prior to 4.7.
 *
 * @since NFTP-Portal 0.0.1
 */
function nftp_portal_customize() {
	wp_die( __( 'NFTP-Portal requires WordPress 4.7 or higher. Please update your wordpress installation and try again.', 'nftp-portal' ), '', array(
		'back_link' => true,
	) );
}
add_action( 'load-customize.php', 'nftp_portal_customize' );

/**
 * Prevents the Theme Preview from being loaded on WordPress versions prior to 4.7.
 *
 * @since NFTP-Portal 0.0.1
 */
function nftp_portal_preview() {
	if ( isset( $_GET['preview'] ) ) {
		wp_die( __( 'NFTP-Portal requires WordPress 4.7 or higher. Please update your wordpress installation and try again.', 'nftp-portal' ) );
	}
}
add_action( 'template_redirect', 'nftp_portal_preview' );
