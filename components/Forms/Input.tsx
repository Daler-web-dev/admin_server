import React from "react";

interface InputProps {
	placeholder?: string;
	type?: string;
	rules: any
}

const Input: React.FC<InputProps> = ({
	placeholder,
	type = "text",
	rules
}) => {
	return (
		<>
			<input {...rules} className="w-full font-normal border-2 rounded-md" type={type} placeholder={placeholder}/>
		</>
	);
};

export default Input;
