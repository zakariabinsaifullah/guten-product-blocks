<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Register Block 
*/
function gpb_block_registration( $block, $options=array() ){
    return register_block_type(
        'gpb-blocks/' . $block,
        array_merge(
            array(
				'style'         => 'gutenberg_product_blocks-cgb-style-css',
				'editor_script' => 'gutenberg_product_blocks-cgb-block-js',
				'editor_style'  => 'gutenberg_product_blocks-cgb-block-editor-css',
			),
            $options
        )
    );
}

/**
 * Assets Load 
*/
function gpb_blocks_assets_init() {
	wp_register_style(
		'gutenberg_product_blocks-cgb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		is_admin() ? array( 'wp-editor' ) : null,
		null
	);

	wp_register_script(
		'gutenberg_product_blocks-cgb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);

	wp_register_style(
		'gutenberg_product_blocks-cgb-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		null
	);

	/**
	 * Single Block Registration 
	*/
	gpb_block_registration('faq-block');
	gpb_block_registration('single-product-showcase');
	gpb_block_registration('pros-block');
	gpb_block_registration('cons-block');
	gpb_block_registration('pros-cons-block');
	gpb_block_registration('product-showcase');
	gpb_block_registration('button-block');
}
add_action( 'init', 'gpb_blocks_assets_init' );

/*
 * New Category
 * */
function gpb_blocks_new_cat( $categories ){
	return array_merge(
		$categories,
		array(
			array(
				'title' => 'Product Blocks',
				'slug'  => 'product-blocks'
			)
		)
	);
}
add_filter( 'block_categories', 'gpb_blocks_new_cat' );
/**
 * External Assets
*/
function gpb_enqueue_blocks_assets(){
	wp_enqueue_style( 'dashicon' );
	wp_enqueue_script( 'plugin-js', plugins_url( '../inc/js/plugin.js', __FILE__ ), array('jquery'), time(), true );
}
add_action( 'enqueue_block_assets', 'gpb_enqueue_blocks_assets' );