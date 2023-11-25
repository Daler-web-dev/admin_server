import React from "react";

interface InputProps {
	placeholder?: string;
	value?: string;
	name?: string;
	type?: string;
}

const Input: React.FC<InputProps> = ({
	placeholder,
	value = "",
	name = "",
	type = "text",
}) => {
	return (
		<>
			<input className="w-full font-normal border-2 rounded-md" type={type} placeholder={placeholder} name={name} defaultValue={value} />
		</>
	);
};

export default Input;
