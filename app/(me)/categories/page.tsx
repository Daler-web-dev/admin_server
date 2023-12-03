import CategoryModal from "@/components/CategoryModal";
import Pagination from "@/components/Pagination";
import axios from "axios";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { FiFolderPlus } from "react-icons/fi";

export default async function Page() {
	const res = await axios.get(process.env.NEXT_PUBLIC_API + "/categories");

	return (
		<div>
			<div className="flex items-center justify-between w-full">
				<h2 className="text-3xl mb-5">Product list</h2>
				<button className="flex items-center gap-3 bg-[#0A60FE] text-white py-3 px-5 rounded-md mb-5">
					<FiFolderPlus size="22" />
					Create
				</button>
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
									<button className="mr-4 p-3 bg-blue-600 hover:bg-blue-400 text-white rounded-md">
										<FaPen />
									</button>
									<button className="mr-4 p-3 bg-red-600 hover:bg-red-400 text-white rounded-md">
										<FaRegTrashAlt />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="absolute bottom-0 w-full">
					<Pagination data={res.data.data} />
				</div>
			</div>
			<CategoryModal/>
		</div>
	);
}


