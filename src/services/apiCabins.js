
import supabase from "./superbase"
export async function getCabins(){
  
let { data, error } = await supabase
.from('cabins')
.select('*')


if(error){
    console.error(error)
    throw new Error('Cabin not Founnd ')
}
return data
} 