import React from "react";

interface InputProps {
	placeholder?: string;
	type?: string;
	rules: any
	value?: string | number
}

const Input: React.FC<InputProps> = ({
	placeholder,
	type = "text",
	rules,
	value=""
}) => {
	return (
		<>
			<input {...rules} defaultValue={value} className="w-full font-normal border-2 rounded-md" type={type} placeholder={placeholder}/>
		</>
	);
};

export default Input;
