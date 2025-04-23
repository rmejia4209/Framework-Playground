"use server"
import { addTask as addTaskQuery } from "@/services/tasks";


const initialState = {
  description: "",
}

type formDataType = typeof initialState & {error?: string}

export async function addTask(
  prev: formDataType, formData: FormData
):Promise<formDataType> {

  const description = String(formData.get("description"))
  
  try {
    await addTaskQuery(description);
    return initialState;
  } catch (err) {
    console.error(err);
    return {...prev, error: "Something went wrong..."}
  }
}