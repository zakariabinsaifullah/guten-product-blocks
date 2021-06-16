
//  Import CSS.
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gpb-blocks/pros-block', {
	title: __( 'Pros Block' ),
	description: __( 'Show the pros of a single product' ),
	icon: 'saved',
	category: 'product-blocks',
	keywords: [
		__( 'Pros Block' ),
	],
	attributes,
	edit,
	save: ({ className, attributes }) => {
		const { prosShow, heading, headingColor, headingBg, headingBRadius, borderWidth, borderColor, borderRadius, containerBg } = attributes; 
		return (
            <div className={ `${className} content` } style={{ backgroundColor: containerBg, borderRadius: borderRadius, border: `${borderWidth}px solid ${borderColor}` }}>
                {
                    prosShow &&
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
