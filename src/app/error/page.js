// "use client";

async function getData() {
	// get endpoint
	const endpoint = "http://127.0.0.1:3000/api/posts/a";
	const res = await fetch(endpoint);

	if (!res.ok) {
		throw new Error("Failed to load the data!");
	}

	return res.json();
}

const BlogPage = async () => {
	const data = await getData();
	const { items } = data;
	return (
		<main>
			<h1>Welcome</h1>
			<ul>
				{data &&
					items.map((item, index) => {
						return <li key={index}>{item.content}</li>;
					})}
			</ul>
		</main>
	);
};

export default BlogPage;
