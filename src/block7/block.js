//  Import
import { RichText } from '@wordpress/block-editor';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gpb-blocks/single-product-showcase', {
	title: __( 'Single Product' ),
	description: __( 'Product Showcase Block allows you to display the product easily' ),
	icon: 'cart', 
	category: 'product-blocks', 
	keywords: [
		__( 'Product Showcase' ),
	],
	attributes,
	edit,
	save: ({ attributes, className }) => {
        const { id, url, alt, productTitle, link, productSubTitle, titleColor } = attributes; 
		return (
            <div className={ `${className} product-showcase-container` }>
                <div className="product-head">
                    <div className="product-subtitle">
                        <RichText.Content
                            tagName="h3"
                            value={ productSubTitle }
                            style={{ color: titleColor }}
                        />
                    </div>
                    <div className="product-title">
                        <a href={link} target="_blank" rel="nofollow noopener noreferrer">
                            <RichText.Content
                                tagName="h3"
                                value={ productTitle }
                                style={{ color: titleColor }}
                            />
                        </a>
                    </div>
                </div>
                <div className="product-image">
                    {
                        url&&
                        <a href={link} target="_blank" rel="nofollow noopener noreferrer">
                            <img src={url} alt={alt} className={`single-product-img wp-image-${id}`} />
                        </a>
                    }
                </div>
            </div>
		);
	},
} );
