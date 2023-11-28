import Pagination from "@/components/Pagination";
import TableItem from "@/components/TableItem";
import Link from "next/link";
import { FiFolderPlus } from "react-icons/fi";

export default function Page() {
	return (
		<div>
			<div className="flex items-center justify-between w-full">
				<h2 className="text-3xl mb-5">Product list</h2>
				<Link href="/goods/create" >
					<button
						className="flex items-center gap-3 bg-[#0A60FE] text-white py-3 px-5 rounded-md mb-5"
					>
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
								<div className="flex items-center">
									No
									{/* <input
										id="checkbox-all-search"
										type="checkbox"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										htmlFor="checkbox-all-search"
										className="sr-only"
									>
										checkbox
									</label> */}
								</div>
							</th>
							<th scope="col" className="px-6 py-3">
								Product name
							</th>
							<th scope="col" className="px-6 py-3">
								Color
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{[1, 2, 3, 4, 1, 1, 1, 1, 1].map((item, idx) => (
							<TableItem key={idx} idx={idx} />
						))}
					</tbody>
				</table>
				<div className="absolute bottom-0 w-full">
					<Pagination />
				</div>
			</div>
		</div>
	);
}
