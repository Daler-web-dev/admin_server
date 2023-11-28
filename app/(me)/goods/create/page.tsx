"use client";

import Input from "@/components/Forms/Input";
import TextArea from "@/components/Forms/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiFolderPlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";


type Inputs = {
	login: string;
	password: string;
};

interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
	const [changing, setChanging] = useState(false);
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	return (
		<>
			<form >
				<div className="border-2 rounded-xl p-4 bg-white">
					<div className="flex items-center justify-between w-full mb-5">
						<div>
							<Input placeholder="Product name" />
						</div>

						<div className="flex items-center gap-5">
							<button
								onClick={() => setChanging(!changing)}
								className="flex items-center gap-3 bg-[#0A60FE] text-white py-3 px-5 rounded-md"
							>
								<FiFolderPlus size="22" />
								Create/Save
							</button>
							<button className="flex items-center gap-3 bg-red-500 text-white py-3 px-5 rounded-md">
								<MdCancel />
								Cancel
							</button>
						</div>
					</div>
					<div className="flex items-start gap-10 ">
						<div className="w-full bg-gray-400 h-36 rounded-xl"></div>

						<div className="flex flex-col items-start gap-2 w-full">
							<Input placeholder="Category" />
							<Input placeholder="Title" />
							<TextArea />
							<div className="flex items-center text-xl font-bold gap-2">
								<span className="font-normal">Price: </span>$
								<Input placeholder="price" type="number" />
							</div>
						</div>
					</div>
				</div>
				<div className="border-2 rounded-xl p-4 bg-white">
					<div className="flex flex-col gap-4">
						<h2>Description</h2>
						<hr />
						<TextArea />
					</div>
				</div>
			</form>
		</>
	);
};

export default Product;
