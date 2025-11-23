import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', size = 'medium', className = '', ...props }) => {
    return (
        <button
            className={`btn btn-${variant} btn-${size} ${className}`}
            onClick={onClick}
            {...props}
        >
            <span className="btn-content">{children}</span>
            <span className="btn-glitch"></span>
        </button>
    );
};

export default Button;
