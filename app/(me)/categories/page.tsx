import CategoryModal from "@/components/CategoryModal";
import DeleteBtn from "@/components/DeleteBtn";
import EditCategory from "@/components/EditCategory";
import Pagination from "@/components/Pagination";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import { FaPen } from "react-icons/fa";
import { FiFolderPlus } from "react-icons/fi";

export default async function Page() {
	const res = await axios.get(process.env.NEXT_PUBLIC_API + "/categories");
	const cookieStore = cookies();
	const theme = cookieStore.get("token");
	const { token } = JSON.parse(theme?.value || "");

	async function handleGetPage(page: number) {
		"use server";
		const res = await axios.get(process.env.NEXT_PUBLIC_API + "/categories?page=" + page)
		console.log({res});
	}
	async function onClose() {
		"use server";

		console.log("Modal has close");
	}
		async function onOk() {
			"use server";
			console.log("Ok was clicked");
		}

	return (
		<div>
			<div className="flex items-center justify-between w-full">
				<h2 className="text-3xl mb-5">Product list</h2>
				<Link href="?showDialog=y">
					<button className="flex items-center gap-3 bg-[#0A60FE] text-white py-3 px-5 rounded-md mb-5">
						<FiFolderPlus size="22" />
						Create
					</button>
				</Link>
			</div>
			<div className="overflow-x-auto shadow-md sm:rounded-lg min-h-[80vh] relative pb-[80px]">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
					<thead className="text-xs text-[#6A7899] uppercase bg-[#FEFEFE] font-normal">
						<tr>
							<th scope="col" className="p-4">
								<div className="flex items-center">No</div>
							</th>
							<th scope="col" className="px-6 py-3">
								image
							</th>
							<th scope="col" className="px-6 py-3">
								name
							</th>
							<th scope="col" className="px-6 py-3 text-end">
								actions
							</th>
						</tr>
					</thead>
					<tbody>
						{res.data.data.map((item: any, idx: number) => (
							<tr
								key={idx}
								className="bg-[#EEF1F8] border-b hover:bg-gray-200 even:bg-white text-[#111728]"
							>
								<td className="w-4 p-4">
									<div className="flex items-center">
										{idx + 1}
									</div>
								</td>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									<img
										className="w-[100px] h-[100px] object-contain"
										src={item.image}
										alt={item.name}
									/>
								</th>
								<td className="px-6 py-4">{item.name}</td>
								<td className="px-6 py-4 text-end ">
									<Link href={`?showEditDialog=y&name=${item.name}&image=${item.image}&id=${item._id}`} >
										<button className="mr-4 p-3 bg-blue-600 hover:bg-blue-400 text-white rounded-md">
											<FaPen />
										</button>
									</Link>
									<DeleteBtn token={token} id={item._id} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="absolute bottom-0 w-full">
					<Pagination data={res.data} handleGetPage={handleGetPage} />
				</div>
			</div>
			<CategoryModal onClose={onClose} onOk={onOk} />
			<EditCategory onClose={onClose} onOk={onOk} />
		</div>
	);
}
