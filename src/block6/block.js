//  Import
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gpb-blocks/button-block', {
	title: __( 'Button Block' ),
	description: __( 'It works as a child block' ),
	icon: 'button', 
	category: 'product-blocks', 
	keywords: [
		__( 'Button' ),
	],
	attributes,
	edit,
	save: ({ attributes, className }) => {
        const { btnLabel, link, btnColor, btnBg, btnShadowColor } = attributes; 
		return (
            <div className={`single-product-btn ${className}`}>
                <a 
                    href={ link } 
                    target="_blank" 
                    rel="nofollow noopener noreferrer"
                    style={{
                        backgroundColor: btnBg,
                        color: btnColor,
                        boxShadow: `0 3px 0 ${btnShadowColor}`
                    }}
                >
                    { btnLabel }
                </a>
            </div>
		);
	},
} );
