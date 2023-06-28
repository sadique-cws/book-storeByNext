import Connect from "@/app/db/Connect";
import Category from "@/app/models/Category";
import { Cabin_Sketch } from "next/font/google";
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {
    let {catid} = params;
    await Connect();
    let data, code = 200;
    try{
        data = await Category.findById(catid);
    }
    catch(e){
        data = "something went wrong";
        code = 500;
    }
    return NextResponse.json({data},{status:code})
}

export const PUT = async (req, {params}) => {
    await Connect();
    let {catid} = params;
    let data = await req.json();
    let updateData, code = 200;
    try{
        updateData = await Category.findByIdAndUpdate(catid, data)
    }
    catch(e){
        updateData = "something went wrong";
        code = 500;
    }
    return NextResponse.json({updateData},{status:code})
}

export const DELETE = async (req, {params}) => {
    let {catid}  = params;
    let data,code = 200;
    try{
        data = await Category.findByIdAndDelete(catid)
    }
    catch(e){
        data = "deletion failed"
        code = 500
    }
    return NextResponse.json({data},{status:code})
}
