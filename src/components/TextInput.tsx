import React from 'react';

interface TextInputProps {
    type?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
    errorMessage?: string;
    id: string;
    name: string;
}

const TextInput: React.FC<TextInputProps> = ({
    type = "text",
    placeholder = "Type here",
    className = "",
    required = false,
    // errorMessage = "Please fill the field",
    id,
    name,
}) => {
    return (
        <label htmlFor={id} className="form-control w-full">
            <input
                required={required}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className={`bg-transparent border-b-4 border-theme-invert py-2 placeholder-gray-800 dark:placeholder-gray-500 outline-none focus:border-accentblue ${className}`}
            />
            {/* <div className="label">
                <span className="label-text-alt">{errorMessage}</span>
            </div> */}
        </label>
    );
};

export default TextInput;