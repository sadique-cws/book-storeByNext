import Connect from "@/app/db/Connect"
import Book from "@/app/models/Book";
import { NextResponse } from "next/server"

export const GET =  async () => {
    // db connection
    await Connect();
    // for calling
    let data,code = 200;
    try{
        data = await Book.find({})
    }
    catch(e){
        data = "Something went wrong";
        code = 500;
    }

    return NextResponse.json({data},{status:code})
}

export const POST = async (req) => {
    await Connect();

    let data,newRecord,code = 200;
    data = await req.json();
    newRecord = new Book(data)
    try{
        await newRecord.save();
    }
    catch(e){
        newRecord = "insertion failed";
        code = 500
    }
    return NextResponse.json({newRecord},{status:code})
}