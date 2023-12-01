"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useCookies } from "react-cookie";
import Input from "@/components/Forms/Input";
import { FiFolderPlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import TextArea from "@/components/Forms/TextArea";

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

const Product = () => {
	const [cookies, setCookie] = useCookies(["token"]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [image, setImage] = useState<string | null>(null);

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const formData = new FormData();
			Object.entries(data).forEach(([key, value]) => {
				if (key === "titles") {
					Object.entries(value).forEach(([subKey, subValue]:any) => {
						formData.append(`titles.${subKey}`, subValue);
					});
				} else if (key === "image") {
					formData.append(key, (value as FileList)[0]);
				} else {
					formData.append(key, value);
				}
			});
			console.log(data);
			
			const response = await axios.post(
				process.env.NEXT_PUBLIC_API + "/products",
				formData,
				{
					headers: {
						Authorization: cookies?.token?.token,
						"Content-Type": "multipart/form-data",
					},
				}
			);

			console.log("Data uploaded successfully:", response.data);
		} catch (error) {
			console.error("Error uploading data:", error);
		}
	};

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
		<form onSubmit={handleSubmit(onSubmit)}>
 				<div className="border-2 rounded-xl p-4 bg-white">
 					<div className="flex items-center justify-between w-full mb-5">
 						<div>
 							<Input
								placeholder="Product name"
								rules={{
									...register("name", { required: true }),
								}}
							/>
							{errors.name && (
								<span className="text-red-500">
									Title is required
								</span>
							)}
						</div>

						<div className="flex items-center gap-5">
							<button
								type="submit"
								className="flex items-center gap-3 bg-[#0A60FE] text-white py-3 px-5 rounded-md"
							>
								<FiFolderPlus size="22" />
								Create/Save
							</button>
							<button
								type="button"
								className="flex items-center gap-3 bg-red-500 text-white py-3 px-5 rounded-md"
							>
								<MdCancel />
								Cancel
							</button>
						</div>
					</div>
					<div className="flex items-start gap-10 ">
						<div className="flex items-center justify-center w-full">
							<label
								htmlFor="dropzone-file"
								style={
									image && {
										background: `linear-gradient(to right, rgb(255 255 255 / 0.7),rgb(255 255 255 / 0.7)), url(${image}`,
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
									} || {}
								}
								className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 "
							>
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg
										className="w-8 h-8 mb-4 text-gray-500 "
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 16"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
										/>
									</svg>
									<p className="mb-2 text-sm text-gray-500 ">
										<span className="font-semibold">
											Click to upload
										</span>{" "}
										or drag and drop
									</p>
									<p className="text-xs text-gray-500">
										SVG, PNG, JPG or GIF (MAX. 800x400px)
									</p>
								</div>
								 <input
								 	className="hidden"
									type="file"
									id="dropzone-file"
									{...register('image', { required: 'Image is required' })}
									onChange={handleImageChange}
									multiple  // Добавляем атрибут multiple для возможности выбора нескольких файлов
								/>
							</label>
						</div>

						<div className="flex flex-col items-start gap-2 w-full">
							<Input
								placeholder="Category"
								rules={{
									...register("category", { required: true }),
								}}
							/>
							{errors.category && (
								<span className="text-red-500">
									Category is required
								</span>
							)}
							<Input
								placeholder="Title Uzbek"
								rules={{
									...register("titles.uzTitle", {
										required: true,
									}),
								}}
							/>
							{errors.titles?.uzTitle && (
								<span className="text-red-500">
									Uz Title is required
								</span>
							)}
							<Input
								placeholder="Title Russian"
								rules={{
									...register("titles.ruTitle", {
										required: true,
									}),
								}}
							/>
							{errors.titles?.ruTitle && (
								<span className="text-red-500">
									Ru Title is required
								</span>
							)}
							<Input
								placeholder="Title English"
								rules={{
									...register("titles.engTitle", {
										required: true,
									}),
								}}
							/>
							{errors.titles?.engTitle && (
								<span className="text-red-500">
									En Title is required
								</span>
							)}
							<div className="flex items-center text-xl font-bold gap-2">
								<span className="font-normal">Price: </span>$
								<Input
									rules={{
										...register("price", {
											required: true,
										}),
									}}
									placeholder="price"
									type="number"
								/>
								{errors.price && (
									<span className="text-red-500">
										Price is required
									</span>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="border-2 rounded-xl p-4 bg-white">
					<div className="flex flex-col gap-4">
						<h2>Description</h2>
						<hr />
						<TextArea
							rules={{
								...register("description", { required: true }),
							}}
						/>
						{errors.description && (
							<span className="text-red-500">
								Description is required
							</span>
						)}
					</div>
				</div>
			</form>
	);
};

export default Product;
