
export default async function Home() {
	return (
		<div>
			<h1 className="mb-4 font-normal text-xl" >Welcome</h1>
			<span>Video guide</span>
			<div className="mt-4 w-full bg-[rgb(218,235,255)] h-[500px] flex justify-center items-center rounded-md overflow-hidden ">
				<video width="100%" height="100%" src="https://storage.cloud.google.com/amadea/2023-12-12%2012-20-59.mp4" controls ></video>
			</div>
		</div>
	);
}
