import connectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import BlogModel from "@/lib/models/blogModel.js";

const fs = require('fs')


const loadDB = async () => {

    await connectDB()

}

loadDB();

// API endpoint to get all blogs 

export async function GET(request) {

    const blogId = request.nextUrl.searchParams.get("id");

    if (blogId) {
        
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);

    }else{

        const blogs = await BlogModel.find({});
    
        return NextResponse.json({blogs});
    }

}

// API Endpoint for uploading blogs

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

// creating endpoint to deleting blog

export async function DELETE(request) {

    const  id = await request.nextUrl.searchParams.get('id');

    const blog = await BlogModel.findById(id);

    fs.unlink(`./public${blog.image}`, () => {});

    await BlogModel.findByIdAndDelete(id);

    return NextResponse.json({msg: "Blog Deleted"});


}

