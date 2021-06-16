const { Fragment } = wp.element;
import { BlockControls, InspectorControls, MediaPlaceholder, MediaUpload, MediaUploadCheck, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl, Toolbar } from '@wordpress/components';
const { __ } = wp.i18n;

const Edit = ({ attributes, setAttributes, className }) => {
    const { id, url, alt, productTitle, link, productSubTitle, titleColor } = attributes; 
    return(
        <Fragment>
            <InspectorControls>
                <PanelBody
                    title="Link Setting"
                    initialOpen={ true }
                >
                    <TextControl
                        label="Set Product Link"
                        onChange={ ( link ) => setAttributes( { link } ) }
                        value={ link }
                    />
                </PanelBody>
                <PanelColorSettings
                    title={ __( 'Product Title' ) }
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: titleColor,
                            onChange: ( colorValue ) => setAttributes( { titleColor: colorValue } ),
                            label: __( 'Title Color' ),
                        }
                    ] }
                />
            </InspectorControls>
            <BlockControls>
            {
                url &&
                <Toolbar>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ media => setAttributes({ 
                                url:media.url, 
                                id: media.id,
                                alt: media.alt
                            })}
                            allowedTypes={["image"]}
                            value={id}
                            render={({ open }) => {
                                return (
                                    <Button
                                        className="components-icon-button components-toolbar__control"
                                        label={__(
                                            "Edit Image"
                                        )}
                                        onClick={open}
                                        icon="edit"
                                    />
                                );
                            }}
                        />
                    </MediaUploadCheck>
                    <Button
                        className="components-icon-button components-toolbar__control"
                        label={__(
                            "Delete Image"
                        )}
                        onClick={ () => setAttributes({ url:'', id: null, alt: '' }) }
                        icon="trash"
                    />
                </Toolbar>
            }
            </BlockControls>
            <div className={ `${className} product-showcase-container` }>
                <div className="product-head">
                    <div className="product-subtitle">
                        <RichText
                            tagName="h3"
                            value={ productSubTitle }
                            onChange={ ( productSubTitle ) => setAttributes( { productSubTitle } ) }
                            style={{ color: titleColor }}
                        />
                    </div>
                    <div className="product-title">
                        <a href={link} target="_self" rel="nofollow noopener noreferrer">
                            <RichText
                                tagName="h3"
                                value={ productTitle }
                                onChange={ ( productTitle ) => setAttributes( { productTitle } ) }
                                style={{ color: titleColor }}
                            />
                        </a>
                    </div>
                </div>
                <div className="product-image">
                    {
                        url ? (
                            <Fragment>
                                <a href={link} target="_self" rel="nofollow noopener noreferrer">
                                    <img src={url} alt={alt} className="single-product-img" />
                                </a>
                            </Fragment>
                        ) : (
                            <MediaPlaceholder
                                icon="format-image"
                                onSelect={ media => setAttributes({ 
                                    url:media.url, 
                                    id: media.id,
                                    alt: media.alt
                                })}
                                onFilesPreUpload={ media => setAttributes({ 
                                    url:media.url, 
                                    id: media.id,
                                    alt: media.alt
                                })}
                                onSelectURL={ url => setAttributes({ url })}
                                allowedTypes={["image"]}
                                labels = { { title: 'Add Product Image' } }
                            />
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
} 
export default Edit; 