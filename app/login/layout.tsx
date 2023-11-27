export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="w-[200px] h-[200px] bg-purple-200" >
			{/* Include shared UI here e.g. a header or sidebar */}
			<nav></nav>

			{children}
		</section>
	);
}
