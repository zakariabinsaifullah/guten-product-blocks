const { Fragment } = wp.element;
import { InnerBlocks } from '@wordpress/block-editor';
const { __ } = wp.i18n;

const Edit = ({ className }) => {
    return(
        <Fragment>
            <div className={ `${className}` }>
                <InnerBlocks
                    allowedBlocks={[ 'gpb-blocks/pros-block', 'gpb-blocks/cons-block' ]}
                    template={[
                        [ 'gpb-blocks/pros-block' ],
                        [ 'gpb-blocks/cons-block' ]
                    ]}
                    renderAppender = { false }
                />
            </div>
        </Fragment>
    )
} 
export default Edit; 