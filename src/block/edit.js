const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';

const icons = [
    {
        label: 'Plus Minus',
        value: 'plus-alt2'
    },
    {
        label: 'Arrow Up Down',
        value: 'arrow-down-alt2'
    },
    {
        label: 'Open Close',
        value: 'plus-alt'
    }
];

const Edit = ({ attributes, setAttributes }) => {
    const { className, heading, headingColor, showIcon, iconClass, borderTopWidth, borderBottomWidth, borderTopColor, borderBottomColor } = attributes; 
    return(
        <Fragment>
            <InspectorControls>
                <PanelBody
                    initialOpen={ true }
                    title="Container Options"
                >
                    <RangeControl
                        label="Top Border Width"
                        value={ borderTopWidth }
                        onChange={ ( borderTopWidth ) => setAttributes( { borderTopWidth } ) }
                        min={ 0 }
                        max={ 50 }
                    />
                    <RangeControl
                        label="Bottom Border Width"
                        value={ borderBottomWidth }
                        onChange={ ( borderBottomWidth ) => setAttributes( { borderBottomWidth } ) }
                        min={ 0 }
                        max={ 50 }
                    />
                </PanelBody>
                <PanelColorSettings 
                    title="Borders Colors"
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: borderTopColor,
                            onChange: ( colorValue ) => setAttributes( { borderTopColor: colorValue } ),
                            label: 'Top Border Color',
                        },
                        {
                            value: borderBottomColor,
                            onChange: ( colorValue ) => setAttributes( { borderBottomColor: colorValue } ),
                            label: 'Bottom Border Color',
                        }
                    ] }
                />
                <PanelBody
                    initialOpen={ false }
                    title="Heading Options"
                >
                    <ToggleControl
                        label="Show Expand Icon"
                        checked={ showIcon }
                        onChange={ () => setAttributes({ showIcon: ! showIcon }) }
                    />
                    {
                        showIcon &&
                        <Fragment>
                            <SelectControl
                                label="Select Icon Type"
                                options={ icons }
                                onChange={ ( iconClass ) => { setAttributes( { iconClass } ) } }
                                value={ iconClass }
                            />
                        </Fragment>
                    }
                </PanelBody>
                <PanelColorSettings 
                    title="Heading Color"
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: headingColor,
                            onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
                            label: 'Heading Color',
                        }
                    ] }
                />
            </InspectorControls>
            <div 
                className={ `${className} single-accordion-container` }
                style={{
                    borderTop: `${borderTopWidth}px solid ${borderTopColor}`,
                    borderBottom: `${borderBottomWidth}px solid ${borderBottomColor}`,
                }}
            >
                <div className="accordion-head" style={{ color: headingColor}}>
                    <div className="accordion-heading">
                        <RichText
                            tagName="b"
                            value={ heading }
                            onChange={ ( heading ) => setAttributes( { heading } ) }
                            placeholder="Make a Question"
                        /> 
                    </div>
                    {
                        showIcon &&
                        <div className="collapse-icon">
                            <span className={`dashicons dashicons-${iconClass}`}></span>
                        </div>
                    }
                </div>
                <div className={`accordion-body`}>
                    <InnerBlocks 
                        allowedBlocks={[
                            ['core/paragraph']
                        ]}
                        template={[
                            ['core/paragraph',{ placeholder: "Write Answer.." } ],
                        ]}
                    />
                </div>
            </div>
        </Fragment>
    )
}
export default Edit; 