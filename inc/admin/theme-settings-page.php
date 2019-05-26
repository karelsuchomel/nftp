<?php

require get_template_directory() . '/inc/admin/field-validation.php';
require get_template_directory() . '/inc/admin/settings-defaults.php';

//
// Registering new admin settings page and section identifier
//

function theme_settings_page()
{
?>
	<div class="wrap">
		<h1>TFS Portal theme customization</h1>
		<form method="post" action="options.php">
			<?php
				settings_fields("section");
				// This is the identifier, to add
				// markup/functionality to this specific section
				do_settings_sections("nftp-portal-theme-options");
				submit_button(); 
			?>          
		</form>
	</div>
<?php
}

function add_theme_menu_item()
{
	add_menu_page("Theme Options", "Theme Options", "manage_options", "theme-panel", "theme_settings_page", null, 99);
}

add_action("admin_menu", "add_theme_menu_item");

//
// Add all your sections, fields and settings during admin_init
//

function display_theme_panel_fields()
{
	// Add Section for option fields
	add_settings_section("section", "", null, "nftp-portal-theme-options");
	
	// Add fields
	// Basic fields
	add_settings_field("home-page-title", "Home page title", "home_page_title_field", "nftp-portal-theme-options", "section");
	add_settings_field("base-color", "Base color", "base_color_field", "nftp-portal-theme-options", "section");
	add_settings_field("highlight-color", "Highlight color", "highlight_color_field", "nftp-portal-theme-options", "section");
	add_settings_field("default-theme-mode", "Default theme mode", "default_theme_mode_field", "nftp-portal-theme-options", "section");
	// Theme mode [tm] settings. Light [l] and dark [d]
	add_settings_field("tm-l-window-bg", "Light theme - window background color", "tm_l_window_bg_field", "nftp-portal-theme-options", "section");
	add_settings_field("tm-l-font-color", "Light theme - font color", "tm_l_font_color_field", "nftp-portal-theme-options", "section");
	add_settings_field("tm-l-icon-fill", "Light theme - icon color", "tm_l_icon_fill_field", "nftp-portal-theme-options", "section");
	add_settings_field("tm-l-line-border-color", "Light theme - lines and borders color", "tm_l_line_border_field", "nftp-portal-theme-options", "section");
	add_settings_field("tm-l-panel-bg", "Light theme - panel background color", "tm_l_panel_bg_field", "nftp-portal-theme-options", "section");

	// Save and update field options
	register_setting("section", "home_page_title");
	register_setting("section", "base_color");
	register_setting("section", "highlight_color");
	register_setting("section", "default_theme_mode");
	register_setting("section", "tm_l_window_bg");
	register_setting("section", "tm_l_font_color");
	register_setting("section", "tm_l_icon_fill");
	register_setting("section", "tm_l_line_border_color");
	register_setting("section", "tm_l_panel_bg");
}

add_action("admin_init", "display_theme_panel_fields");

//
// Callback functions for our setting fields
//

function home_page_title_field()
{
	global $settingsDefaults;
	$val = get_option('home_page_title') ?: $settingsDefaults['home_page_title'];
	echo '<input type="text" name="home_page_title" value="' . $val . '" />';
}

function base_color_field()
{
	global $settingsDefaults;
	$val = get_option('base_color') ?: $settingsDefaults['base_color'];
	echo '<input type="text" class="color-picker" name="base_color" value="' . $val . '" />';
}

function highlight_color_field()
{
	global $settingsDefaults;
	$val = get_option('highlight_color') ?: $settingsDefaults['highlight_color'];
	echo '<input type="text" class="color-picker" name="highlight_color" value="' . $val . '" />';
}

function default_theme_mode_field()
{
	global $settingsDefaults;
	$prevSettings = get_option('default_theme_mode') ?: $settingsDefaults['default_theme_mode'];
	$isLight = $prevSettings === 'light' ? true : false;
	echo '
		<label>
			<input type="radio" name="default_theme_mode" value="light" ' . ($isLight ? 'checked' : '') . '/>
			Light
		</label>
		<label>
			<input type="radio" name="default_theme_mode" value="dark" ' . (!$isLight ? 'checked' : '') . '/>
			Dark
		</label>
	';
}

function tm_l_window_bg_field()
{
	global $settingsDefaults;
	$val = get_option('tm_l_window_bg') ?: $settingsDefaults['tm_l_window_bg'];
	echo '<input type="text" class="color-picker" name="tm_l_window_bg" value="' . $val . '" />';
}

function tm_l_font_color_field()
{
	global $settingsDefaults;
	$val = get_option('tm_l_font_color') ?: $settingsDefaults['tm_l_font_color'];
	echo '<input type="text" class="color-picker" name="tm_l_font_color" value="' . $val . '" />';
}

function tm_l_icon_fill_field()
{
	global $settingsDefaults;
	$val = get_option('tm_l_icon_fill') ?: $settingsDefaults['tm_l_icon_fill'];
	echo '<input type="text" class="color-picker" name="tm_l_icon_fill" value="' . $val . '" />';
}

function tm_l_line_border_field()
{
	global $settingsDefaults;
	$val = get_option('tm_l_line_border_color') ?: $settingsDefaults['tm_l_line_border_color'];
	echo '<input type="text" class="color-picker" name="tm_l_line_border_color" value="' . $val . '" />';
}

function tm_l_panel_bg_field()
{
	global $settingsDefaults;
	$val = get_option('tm_l_panel_bg') ?: $settingsDefaults['tm_l_panel_bg'];
	echo '<input type="text" class="color-picker" name="tm_l_panel_bg" value="' . $val . '" />';
}
