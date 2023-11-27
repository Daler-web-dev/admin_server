import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { MdOutlineExitToApp } from "react-icons/md";

import Navigations from "@/components/Navigations";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<header></header>
			<aside className="flex flex-col justify-between items-start bg-white fixed top-0 left-0 bottom-0 min-w-[260px] border-r-[1px] rounded-r-xl">
				{/* <Image src="" alt="" /> */}
				<div className="w-full">
					<h1 className="px-6 py-5 text-2xl">Admin</h1>
					<div className="flex items-start flex-col">
						<span className="px-6 pb-3 text-[12px] opacity-[0.67]">
							Главное меню
						</span>
						<Navigations />
					</div>
				</div>
				<div className="w-full">
					<Link
						className="block opacity-[0.67] pl-6 py-[10px]"
						href="#"
					>
						<button className="flex items-center gap-3">
							<FiUser size="22px" /> Account
						</button>
					</Link>
					<Link
						className="block opacity-[0.67] ml-6 py-[10px]"
						href="#"
					>
						<button className="flex items-center gap-3">
							<MdOutlineExitToApp size="22px" /> Exit
						</button>
					</Link>
				</div>
			</aside>
			<main className="w-full min-h-screen p-10 pl-[280px]">
				{children}
			</main>
			<footer></footer>
		</>
	);
}