import React from "react";

interface TextAreaProps {
    placeholder?: string
	rules: any
}

const TextArea: React.FC<TextAreaProps> = ({placeholder = "", rules}) => {
	return (
		<textarea
			className="w-full border-2 rounded-md"
			placeholder={placeholder}
			{...rules}
		></textarea>
	);
};

export default TextArea;
