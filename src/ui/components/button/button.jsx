import { PropTypes } from "prop-types";
import { React } from "react"; 
export const Button = ({label, handleClick, backgroundColor, isShadow, size}) => {
    let scale = 1;
    const normalSize = 3.8;
    if (size === 'lg') scale = 1.5;
    let styles = {
        padding: `0.75rem ${normalSize * scale}rem`,
        backgroundColor,
        border: 'none',
        color: '#fff',
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '20px',
        borderRadius: '8px',
    }
    if (isShadow) {
        styles = {...styles, boxShadow: '0px 4px 12px rgba(55, 81, 255, 0.24)'}
    }
    return (
        <button onClick={handleClick} style={styles}>
            {label}
        </button>
    )
}

Button.prototype = {
    label: PropTypes.string,
    style: PropTypes.string,
    handleClick: PropTypes.func,
    isShadow: PropTypes.boolean,
    backgroundColor: PropTypes.string
}