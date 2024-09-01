import { db } from "@/db";
import { Users } from "@/db/schema";
import { Mega } from "@/mega.nz";
import { count, eq } from "drizzle-orm";
import fs from "fs";



export async function GET() {

  const query = db.select().from(Users).where(eq(Users.id, 1));

  //console.log(query.$dynamic().limit(15).offset((1 - 1) * 15));

  const count = db.select({
    count: count()
  }).from(Users);

  return Response.json(count)
}


export async function POST(req, res) {
  const body = await req.json();

  const { name, data } = body.image || {};

  try {
    let link = null;
    const meganz = await Mega()
    const file = await meganz.upload(name, Buffer.from(data, 'base64')).complete

    link= await file.link();

  } catch (error) {
    console.log(error);

  }



  body.image = undefined;







  console.log(body);



  return Response.json({})
}


function save_base64_image({ name, data }) {

  if (!data) return;
  try {
    const binaryData = Buffer.from(data, 'base64');
    fs.writeFile(`storage/journals/${name}`, binaryData, (err) => {
      if (err) {
        console.error("Error writing the PNG file:", err);
      } else {
        console.log("PNG file created successfully:", name);
      }
    });

  } catch (error) {
    console.log(error);

  }


  return name;

}