const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';

const Edit = ({ className, attributes, setAttributes }) => {
    const { consShow, heading, headingColor, headingBg, headingBRadius, borderWidth, borderColor, borderRadius, containerBg } = attributes; 
    return(
        <Fragment>
            <InspectorControls>
                <PanelBody
                    title="Cons Area Display"
                    initialOpen={ true }
                >
                    <ToggleControl
                        label="Show Cons Area"
                        checked={ consShow }
                        onChange={ () => setAttributes({ consShow: ! consShow }) }
                    />
                </PanelBody>
                {
                    consShow &&
                    <Fragment>
                        <PanelBody
                            initialOpen={ true }
                            title="Container Options"
                        >
                            <RangeControl
                                label="Border Width"
                                value={ borderWidth }
                                onChange={ ( borderWidth ) => setAttributes( { borderWidth } ) }
                                min={ 0 }
                                max={ 50 }
                            />
                            <RangeControl
                                label="Border Radius"
                                value={ borderRadius }
                                onChange={ ( borderRadius ) => setAttributes( { borderRadius } ) }
                                min={ 0 }
                                max={ 50 }
                            />
                            <PanelColorSettings 
                                title="Colors Settings"
                                initialOpen={ false }
                                colorSettings={ [
                                    {
                                        value: containerBg,
                                        onChange: ( colorValue ) => setAttributes( { containerBg: colorValue } ),
                                        label: 'Container Background',
                                    },
                                    {
                                        value: borderColor,
                                        onChange: ( colorValue ) => setAttributes( { borderColor: colorValue } ),
                                        label: 'Border Color',
                                    },
                                ] }
                            />
                        </PanelBody>
                        <PanelBody
                            initialOpen={ false }
                            title="Content Heading Options"
                        >
                            <RangeControl
                                label="Border Radius"
                                value={ headingBRadius }
                                onChange={ ( headingBRadius ) => setAttributes( { headingBRadius } ) }
                                min={ 0 }
                                max={ 50 }
                            />
                            <PanelColorSettings 
                                title="Heading Color"
                                initialOpen={ false }
                                colorSettings={ [
                                    {
                                        value: headingColor,
                                        onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
                                        label: 'Heading Color',
                                    },
                                    {
                                        value: headingBg,
                                        onChange: ( colorValue ) => setAttributes( { headingBg: colorValue } ),
                                        label: 'Heading Background',
                                    },
                                ] }
                            />
                        </PanelBody>
                    </Fragment>
                }
            </InspectorControls>
            <div className={ `${className}` } style={{ backgroundColor: containerBg, borderRadius: borderRadius, border: `${borderWidth}px solid ${borderColor}` }}>
                {
                    consShow &&
                    <div className={`content-body`}>
                        <div className="content-heading" style={{
                            color: headingColor,
                            backgroundColor: headingBg,
                            borderRadius: `${headingBRadius}px ${headingBRadius}px 0 0`
                        }}>
                            <RichText
                                tagName="p"
                                value={ heading }
                                onChange={ ( heading ) => setAttributes( { heading } ) }
                            /> 
                        </div>
                        <div className="content-list">
                            <InnerBlocks 
                                allowedBlocks={[
                                    ['core/list']
                                ]}
                                template={[
                                    ['core/list', { placeholder: 'Product Pros here..' }]
                                ]}
                            />
                        </div>
                    </div>
                }
            </div>
        </Fragment>
    )
}
export default Edit; 