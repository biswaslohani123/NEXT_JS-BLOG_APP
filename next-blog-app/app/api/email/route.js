import connectDB from "@/lib/config/db.js"
import mailModel from "@/lib/models/mailModel.js"



import { NextResponse } from "next/server"

const loadDB = async () => {

    await connectDB()
}

loadDB()

export async function POST (request) {

    const formData = await request.formData()
    const emailData = {

        email: `${formData.get('email')}`,
    }

    await mailModel.create(emailData)
    return NextResponse.json({success: true, msg: "Email Subscribed."})

};

export async function GET (request) {

    const emails = await mailModel.find({});
    return NextResponse.json({emails})

}

export async function DELETE (request) {

    const id = await request.nextUrl.searchParams.get('id');
    await mailModel.findByIdAndDelete(id);
    return NextResponse.json({success: true, msg: "Email Deleted"})
}