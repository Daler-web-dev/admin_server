import React from "react";

interface TextAreaProps {
    placeholder?: string
    name?: string
}

const TextArea: React.FC<TextAreaProps> = ({placeholder = "", name = ""}) => {
	return (
		<textarea
			className="w-full border-2 rounded-md"
			placeholder={placeholder}
			name={name}
		></textarea>
	);
};

export default TextArea;
