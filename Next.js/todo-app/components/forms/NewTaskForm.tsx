"use client"
import  { useActionState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { addTask } from "@/actions/addTask";


export default function NewTaskForm() {

  const initialState = {
    description: "",
  }
  const [error, formAction, isPending] = useActionState(addTask, initialState)



  return (
    <form action={formAction}>
      <Input
        className="" type="text" name="description"
        defaultValue={initialState.description}

      />
      <Button>Add Item</Button>
    </form>      
  );
}
