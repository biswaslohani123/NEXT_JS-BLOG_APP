import connectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import BlogModel from "@/lib/models/blogModel.js";


const loadDB = async () => {

    await connectDB()

}

loadDB();

export async function GET(request) {

    return NextResponse.json({msg: "API Working"})
}

export async function POST(request){

    const formData = await request.formData();
    const timestamp = Date.now();

    // extract the image
    const image = formData.get('image');

    // store image in public folder
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imageUrl = `/${timestamp}_${image.name}`;

    const blogData = {

        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imageUrl}`,
        author_img: `${formData.get('author_img')}`,

    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");
    
    return NextResponse.json({success: true, msg: "Blog Added"});
    
}