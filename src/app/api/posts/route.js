import { NextResponse } from "next/server";

export async function GET(request, context) {
	setTimeout(() => {
		return NextResponse.json({
			items: [
				{ id: 1, content: "Hello" },
				{ id: 2, content: "World" },
			],
		});
	}, 30000);
}
