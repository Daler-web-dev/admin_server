import Pagination from "@/components/Pagination";
import TableItem from "@/components/TableItem";
import Image from "next/image";

export default function Page() {
	return (
		<div>
			<h2 className="text-3xl mb-5" >Product list</h2>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="p-4">
								<div className="flex items-center">
									<input
										id="checkbox-all-search"
										type="checkbox"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										htmlFor="checkbox-all-search"
										className="sr-only"
									>
										checkbox
									</label>
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
						{[1, 2, 3, 4].map((item) => (
							<TableItem />
						))}
					</tbody>
				</table>
				<Pagination/>
			</div>
		</div>
	);
}
