//  Import
import { InnerBlocks } from '@wordpress/block-editor';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gpb-blocks/product-showcase', {
	title: __( 'Product Showcase' ),
	description: __( 'Product Showcase Block allows you to display the product easily' ),
	icon: 'align-full-width', 
	category: 'product-blocks', 
	keywords: [
		__( 'Product Showcase' ),
	],
	attributes,
	edit,
	save: ({ attributes, className }) => {
        const { containerBorderColor, containerBorderWidth } = attributes; 
		return (
			<div 
                className={ `${className}` }
                style={{
                    border: `${containerBorderWidth}px solid ${containerBorderColor}`
                }}
            >
                <InnerBlocks.Content />
            </div>
		);
	},
} );
