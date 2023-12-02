"use client";

import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Input from "../Forms/Input";
import TextArea from "../Forms/TextArea";
import { SubmitHandler, useForm } from "react-hook-form";
import FileUpload from "../Forms/FileUpload";
import axios from "axios";
import { useCookies } from "react-cookie";

type Category = {
	_id: string;
	name: string;
	image: string;
	createdAt: string;
	updatedAt: string;
};

interface ProductProps {
	_id: string;
	name: string;
	price: number;
	category: Category;
	image: string;
	description: string;
	titles: {
		ruTitle: string;
		engTitle: string;
		uzTitle: string;
	};
	categories: any;
}
interface Inputs {
	name: string;
	price: string;
	category: string;
	image: File;
	description: string;
	titles: {
		uzTitle: string;
		ruTitle: string;
		engTitle: string;
	};
}

const Product: React.FC<ProductProps> = ({
	name,
	category,
	titles,
	price,
	description,
	image,
	categories,
	_id
}) => {
	const [cookies, setCookie] = useCookies(["token"]);
	const [changing, setChanging] = useState(false);
	const [fileImage, setFileImage] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		defaultValues: {
			name: name,
			price: price,
			category: category.name,
			image: image,
			description: description,
			titles: titles
		}
	});

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const formData = new FormData();
			Object.entries(data).forEach(([key, value]) => {
				if (key === "titles") {
					Object.entries(value).forEach(([subKey, subValue]: any) => {
						formData.append(`titles.${subKey}`, subValue);
					});
				} else if (key === "image") {
					formData.append(key, (value as FileList)[0]);
				} else {
					formData.append(key, value);
				}
			});

			const response = await axios.patch(
				process.env.NEXT_PUBLIC_API + "/products/" + _id,
				formData,
				{
					headers: {
						Authorization: cookies?.token?.token,
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if(response.status === 200 || response.status === 201) {
				console.log(response);
			}

			
		} catch (error) {
			console.error("Error uploading data:", error);
		}
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = () => {
				setFileImage(reader.result as string);
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="border-2 rounded-xl p-4 bg-white">
				<div className="flex items-center justify-between w-full mb-5">
					{changing ? (
						<div>
							<Input
								placeholder="Product name"
								rules={{
									...register("name", { required: true }),
								}}
							/>
						</div>
					) : (
						<h1>{name}</h1>
					)}
					<div className="flex items-center gap-5">
						{changing ? (
							<button
								type="submit"
								className="flex items-center gap-3 bg-[#0A60FE] text-white py-3 px-5 rounded-md"
							>
								<FaEdit />
								save
							</button>
						) : (
							<button
								type="button"
								onClick={() => setChanging(!changing)}
								className="flex items-center gap-3 bg-[#0A60FE] text-white py-3 px-5 rounded-md"
							>
								<FaEdit />
								change
							</button>
						)}
						<button
							type="button"
							className="flex items-center gap-3 bg-red-500 text-white py-3 px-5 rounded-md"
						>
							<FaRegTrashAlt />
							delete
						</button>
					</div>
				</div>
				<div className="flex items-start gap-10 ">
					{changing ? (
						<FileUpload
							handleImageChange={handleImageChange}
							rules={{
								...register("image", {
									required: "Image is required",
								}),
							}}
							image={fileImage}
						/>
					) : (
						<div
							style={{
								backgroundImage: `url(${fileImage || image})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
							className="w-full bg-gray-400 h-[500px] rounded-xl"
						></div>
					)}

					<div className="flex flex-col items-start gap-2 w-full">
						{image}
						{changing ? (
							<select
								{...register("category", {
									required: true,
								})}
							>
								{categories.data.map((item: Category) => (
									<option key={item._id} value={item._id}>
										{item.name}
									</option>
								))}
							</select>
						) : (
							<span className="opacity-[0.40]">
								{category?.name}
							</span>
						)}
						{changing ? (
							<Input
								placeholder="UZ title"
								rules={{
									...register("titles.uzTitle", {
										required: true,
									}),
								}}
							/>
						) : (
							<h2 className="text-xl font-bold">
								{titles.uzTitle}
							</h2>
						)}
						{changing ? (
							<Input
								placeholder="RU title"
								rules={{
									...register("titles.ruTitle", {
										required: true,
									}),
								}}
							/>
						) : (
							<h2 className="text-xl font-bold">
								{titles.ruTitle}
							</h2>
						)}
						{changing ? (
							<Input
								placeholder="EN title"
								rules={{
									...register("titles.engTitle", {
										required: true,
									}),
								}}
							/>
						) : (
							<h2 className="text-xl font-bold">
								{titles.engTitle}
							</h2>
						)}
						<div className="flex items-center text-xl font-bold gap-2">
							<span className="font-normal">Price: </span>
							{changing ? (
								<Input
									placeholder="price"
									type="number"
									rules={{
										...register("price", {
											required: true,
										}),
									}}
								/>
							) : (
								<span>${price}</span>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="border-2 rounded-xl p-4 bg-white">
				<div className="flex flex-col gap-4">
					<h2>Description</h2>
					<hr />
					{changing ? (
						<TextArea
							rules={{
								...register("description", { required: true }),
							}}
						/>
					) : (
						<p>{description}</p>
					)}
				</div>
			</div>
		</form>
	);
};

export default Product;
