"use client";
import axios from "axios";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteBtn = ({ id, token }: { id: string, token: string }) => {
	async function removeCategory() {
		const res = await axios.delete(
			process.env.NEXT_PUBLIC_API + "/categories/" + id,
			{
				headers: {
					Authorization: token,
				},
			}
		);
		console.log(res);
	}
	return (
		<button
			onClick={removeCategory}
			className="mr-4 p-3 bg-red-600 hover:bg-red-400 text-white rounded-md"
		>
			<FaRegTrashAlt />
		</button>
	);
};

export default DeleteBtn;
