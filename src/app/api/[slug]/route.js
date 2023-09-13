import { NextResponse } from "next/server";

export async function GET(request, context) {
	console.log(request);
	console.log(context);

	return NextResponse.json({ Hello: "World" });
}
