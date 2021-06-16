<?php
/**
 * Plugin Name: Products Blocks
 * Description: Product Blocks is a collection of custom Gutenberg Blocks those help to showcase affilicate products easily.
 * Author: Zakaria Binsaifullah
 * Author URI: https://webackstop.com/
 * Version: 2.1.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
/**
 * Remove Empty P Tag
*/

function gpb_remove_auto_ptag( $content ) {
	$content = force_balance_tags( $content );
	$content = preg_replace( '#<p>\s*+(<br\s*/*>)?\s*</p>#i', '', $content );
	$content = preg_replace( '~\s?<p>(\s| )+</p>\s?~', '', $content );
	return $content;
}
add_filter('the_content', 'gpb_remove_auto_ptag', 20, 1);