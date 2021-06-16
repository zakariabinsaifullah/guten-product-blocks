const { Fragment } = wp.element;
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
const { __ } = wp.i18n;

const Edit = ({ attributes, setAttributes, className }) => {
    const { btnLabel, link, btnColor, btnBg, btnShadowColor } = attributes; 
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
                <PanelBody
                    title="Button Options"
                    initialOpen={ false }
                >
                    <TextControl
                        label="Button Label"
                        onChange={ ( btnLabel ) => setAttributes( { btnLabel } ) }
                        value={ btnLabel }
                    />
                    <PanelColorSettings
                        title={ __( 'Button Colors' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: btnColor,
                                onChange: ( colorValue ) => setAttributes( { btnColor: colorValue } ),
                                label: __( 'Button Text Color' ),
                            },
                            {
                                value: btnBg,
                                onChange: ( colorValue ) => setAttributes( { btnBg: colorValue } ),
                                label: __( 'Button Background' ),
                            },
                            {
                                value: btnShadowColor,
                                onChange: ( colorValue ) => setAttributes( { btnShadowColor: colorValue } ),
                                label: __( 'Button Shadow' ),
                            },
                        ] }
                    />
                </PanelBody>
            </InspectorControls>
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
        </Fragment>
    )
} 
export default Edit; 