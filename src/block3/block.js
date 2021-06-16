
//  Import CSS.
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gpb-blocks/cons-block', {
	title: __( 'Cons Block' ),
	description: __( 'Show the cons of a single product' ),
	icon: 'no-alt',
	category: 'product-blocks',
	keywords: [
		__( 'Cons Block' ),
	],
	attributes,
	edit,
	save: ({ className, attributes }) => {
		const { consShow, heading, headingColor, headingBg, headingBRadius, borderWidth, borderColor, borderRadius, containerBg } = attributes; 
		return (
			<div className={ `${className}` } style={{ backgroundColor: containerBg, borderRadius: borderRadius, border: `${borderWidth}px solid ${borderColor}` }}>
                {
                    consShow &&
                    <div className={`content-body`}>
                        <div className="content-heading" style={{
                            color: headingColor,
                            backgroundColor: headingBg,
                            borderRadius: `${headingBRadius}px ${headingBRadius}px 0 0`
                        }}>
                            <RichText.Content 
                                tagName="p"
                                value={ heading }
                            /> 
                        </div>
                        <div className="content-list">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                }
            </div>
		);
	},
} );
