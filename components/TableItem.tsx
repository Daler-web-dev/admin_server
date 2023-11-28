import Link from "next/link";
import React from "react";

interface TableItemProps {
	idx: number
}

const TableItem: React.FC<TableItemProps> = ({idx}) => {
	return (
		<tr className="bg-[#EEF1F8] border-b hover:bg-gray-200 even:bg-white text-[#111728]">
			<td className="w-4 p-4">
				<div className="flex items-center">
					{idx + 1}
				</div>
			</td>
			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
			>
				Apple MacBook Pro 17
			</th>
			<td className="px-6 py-4">Silver</td>
			<td className="px-6 py-4">Laptop</td>
			<td className="px-6 py-4">$2999</td>
			<td className="px-6 py-4">
				<Link
					href="/goods/123"
					className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				>
					Edit
				</Link>
			</td>
		</tr>
	);
};

export default TableItem;
