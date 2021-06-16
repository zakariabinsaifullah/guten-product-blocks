//  Import
import { InnerBlocks } from '@wordpress/block-editor';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gpb-blocks/pros-cons-block', {
	title: __( 'Pros Cons' ),
	description: __( 'Combination of Pros & Cons Blocks' ),
	icon: 'leftright', 
	category: 'product-blocks', 
	keywords: [
		__( 'Pros Cons' ),
	],
	edit,
	save: ({ className }) => {
		return (
			<div className={ `${className}` } >
                <InnerBlocks.Content />
            </div>
		);
	},
} );
