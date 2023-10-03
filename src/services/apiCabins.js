
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

export async function addCabin(cabindata){
   const { data, error } = await supabase
  .from('cabins')
  .insert([
    cabindata
  ])
  .select()

  if(error){
    console.error(error)
    throw new Error('Cabin not Founnd ')
  }
  return data
}

export async function deleteCabin(id){
  
const { data,error } = await supabase
.from('cabins')
.delete()
.eq('id', id)
if(error){
    console.error(error)
    throw new Error('Cabin not Founnd ')
}
return data
}