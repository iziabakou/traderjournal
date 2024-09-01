import { db } from "@/db";
import { Users } from "@/db/schema";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { QueryBuilder } from "drizzle-orm/pg-core";
import { eq } from "drizzle-orm";


function paginate(query, page=1, per_page=15) {
  return query.limit(per_page).offset(page * per_page);
}


export async function GET(req, res) {
  
    const query = db.select().from(Users).where(eq(Users.email, 'ayenazeinscription@gmail.com'));
    // const usersList = await db.select()
    // //.from(Users).where(ilike(Users.name, "abakou"));

    // let query = new QueryBuilder();

    //let users = paginate(query.$dynamic(), 1, 15) ;
  
    return Response.json(query)
  }
  

export async function POST(req, res) {
    const body = await req.json();

    

    const newUser = await db.insert(Users).values({
      ...body,
      password: await bcrypt.hash(body.password, 10),
      id: uuidv4(), 
      
    }).returning();  

    return Response.json(newUser);
}