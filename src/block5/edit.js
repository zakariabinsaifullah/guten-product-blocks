const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
const { __ } = wp.i18n;

const Edit = ({ attributes, setAttributes, className }) => {
    const { containerBorderColor, containerBorderWidth } = attributes; 
    return(
        <Fragment>
            <InspectorControls>
                <PanelBody
                    title="Container Settings"
                    initialOpen={ false }
                >
                    <RangeControl
                        label="Border Width"
                        value={ containerBorderWidth }
                        onChange={ ( containerBorderWidth ) => setAttributes( { containerBorderWidth } ) }
                        min={ 0 }
                        max={ 100 }
                    />
                    <PanelColorSettings
                        title={ __( 'Colors Settings' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: containerBorderColor,
                                onChange: ( colorValue ) => setAttributes( { containerBorderColor: colorValue } ),
                                label: __( 'Border Color' ),
                            }
                        ] }
                    />
                </PanelBody>
            </InspectorControls>
            <div 
                className={ `${className}` }
                style={{
                    border: `${containerBorderWidth}px solid ${containerBorderColor}`
                }}
            >
                <InnerBlocks
                    allowedBlocks={[ 'gpb-blocks/single-product-showcase', 'gpb-blocks/pros-cons-block', 'gpb-blocks/button-block', 'core/heading', 'core/paragraph' ]}
                    template={[
                        [ 'gpb-blocks/single-product-showcase' ],
                        ['gpb-blocks/button-block'],
                        [ 'gpb-blocks/pros-cons-block' ],
                        ['core/heading'],
                        ['core/paragraph']
                    ]}
                />
            </div>
        </Fragment>
    )
} 
export default Edit; 