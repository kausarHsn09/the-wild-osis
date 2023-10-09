import supabase, { supabaseUrl } from "./superbase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabin not Founnd ");
  }
  return data;
}

export async function createEditCabin(cabindata, id) {
  const hasImagePath = cabindata.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${cabindata.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? cabindata.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/Edit Cabin
  let query = supabase.from("cabins");

  //A) CREATE
  if (!id) query = query.insert([{ ...cabindata, image: imagePath }]);

  //B) EDIT
  if (id)
    query = query
      .update({ ...cabindata, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin is not created");
  }

  // 2.upload Image
  if(hasImagePath) return data
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabindata.image);

  // Delete The Cabin If that is Error

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    console.error(error);
    throw new Error("Cabin image not Uploaded ");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin not Founnd ");
  }
  return data;
}
