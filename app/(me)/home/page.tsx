
export default async function Home() {
	return (
		<div>
			<h1 className="mb-4 font-normal text-xl" >Welcome</h1>
			<span>Video guide</span>
			<video className="mt- w-full aspect-video rounded-md" width="100%" height="100%" src="https://storage.cloud.google.com/amadea/2023-12-12%2012-20-59.mp4" controls ></video>
		</div>
	);
}
