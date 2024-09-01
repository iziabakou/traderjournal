import { Storage } from 'megajs'

let storage = undefined;

export async function Mega() {

    if (storage){
        return storage;
    }
    
   const mega=  new Storage({email:process.env.MEGA_EMAIL,password: process.env.MEGA_PASSWORD})
   storage = await mega.ready;
   console.log("MEGA CONNECTED");

   return storage;
   
}