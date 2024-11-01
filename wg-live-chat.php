<?php
/**
 * Plugin Name: WG Live Chat
 * Author URI: http://www.liveadmins.com
 * Description: WG Live Chat plugin for WordPress. WG Live Chat is an instant and hassle-free way for businesses to connect with online shoppers without any fuss or lengthy wait-times. It can help increase sales and customer satisfaction by enabling you to chat to your website visitors. Add WG Live Chat to your website today!
 * Version: 1.1.0
 * Author: LiveAdmins
 */
 
 
add_action('admin_menu', 'wg_la_chat_plugin_menu');

function wg_la_chat_plugin_menu() {
	add_menu_page('WG Live Chat', 'WG Live Chat', 'administrator', 'la-chat-settings', 'wg_la_chat_settings_page', plugin_dir_url( __FILE__ ) . 'wg-icon.png');
	do_action('la_chat_add_more_submenu');
}

function wg_la_chat_settings_page() {
	include( plugin_dir_path( __FILE__ ) . 'admin-area/la-settings.php');
}

function wg_la_chat_load_scripts($hook_suffix) {
	// jQuery
	wp_enqueue_script('jquery');
    wp_enqueue_script( 'la-chat-script', plugins_url('admin-area/js/la-my-script.js', __FILE__ ), array( 'wp-color-picker' ), false, true );
	//load basic css
	wp_enqueue_style('la-chat-basic-css', plugins_url('admin-area/css/plugin-basic.css', __FILE__ )); 
}
add_action( 'admin_enqueue_scripts', 'wg_la_chat_load_scripts' );
?>