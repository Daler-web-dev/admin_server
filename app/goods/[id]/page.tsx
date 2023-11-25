import Image from "next/image";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

export default function Home() {
	return (
		<div className="flex flex-col gap-5">
			<div className="border-2 rounded-xl p-4">
				<div className="flex items-center justify-between w-full mb-5">
					<h1>Product Title</h1>
					<div className="flex items-center gap-5">
						<button
							className="flex items-center gap-3 bg-[#0A60FE] text-white py-3 px-5 rounded-md"
						>
							<FaEdit/>
							change
						</button>
						<button
							className="flex items-center gap-3 bg-[#0A60FE] text-white py-3 px-5 rounded-md"
						>
							<FaRegTrashAlt/>
							change
						</button>
					</div>
				</div>
				<div className="flex items-start gap-10">
					<div className="w-full bg-gray-400 h-36 rounded-xl"></div>

					<div className="flex flex-col items-start gap-2">
						<span className="opacity-[0.40]">Jacket & Jones</span>
						<h2 className="text-xl font-bold">
							Customer Reviews and Ratings
						</h2>

						<p className="opacity-[0.40]">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repellat cupiditate consectetur perferendis
							placeat laborum quo?
						</p>
						<div className="text-xl font-bold">
							<span className="font-normal">Price: </span>
							<span>$ 430.00</span>
						</div>
					</div>
				</div>
			</div>
			<div className="border-2 rounded-xl p-4">
				<div className="flex flex-col gap-4">
					<h2>Description</h2>
					<hr />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						At tenetur quibusdam obcaecati? Assumenda hic cupiditate
						vitae vel dolor saepe eum! Molestias neque cum doloribus
						sunt rerum dolorem repellendus quas animi.
					</p>
				</div>
			</div>
		</div>
	);
}
