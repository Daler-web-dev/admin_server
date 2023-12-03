"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Forms/Input";
import { IoClose } from "react-icons/io5";

interface Inputs {
	name: string;
	image: any;
}
interface Props {
	category: any
    setClose: any
    isClose: boolean
}

export default function CategoryModal({
    category,
    setClose,
    isClose
}: Props) {
	const [image, setImage] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = () => {
				setImage(reader.result as string);
			};

			reader.readAsDataURL(file);
		}
	};
	return (
		<div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]">
			<div className="flex flex-col gap-3 w-[700px] h-[400px] bg-white rounded-md p-4 relative">
            <button className="absolute top-4 right-4" >
                <IoClose size="22" />
            </button>
				<form className="flex flex-col gap-3" >
					<Input
						placeholder="Name"
						label="Name"
						rules={{
							...register("name", { required: true }),
						}}
					/>
					<input
                        className="w-full font-normal border-2 rounded-md p-3"
						type="file"
						id="dropzone-file"
						{...register('image', {required: "Image is required"})}
						onChange={handleImageChange}
						multiple
					/>
				</form>
                <h3>Category name: </h3>
                <img src="" alt="" className="w-full bg-gray-500 h-[200px]" />
			</div>
		</div>
	);
}
