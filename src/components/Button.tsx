import React from "react";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    text: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    type = 'button',
    disabled = false,
    onClick: onClick,
    text = 'button', 
    className = '',  
}) => {
    return (
        <button
            type={type} disabled={disabled} onClick={onClick} className={`bg-accentblue text-theme rounded-none hover:bg-neutralwhite hover:text-black dark:hover:bg-neutralblack dark:hover:text-white hover:outline-dashed ${className}`}
        >
            <span>
                {text}
            </span>
        </button>
    );
};

export default Button;