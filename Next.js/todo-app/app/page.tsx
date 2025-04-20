'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";


export default function Home() {

  const [TodoItems, setTodoItems] = useState<string[]>([])
  const [newItem, setNewItem] = useState("")
  const addTodoItem = () => {
    setTodoItems((prev) => ([...prev, newItem]));
    setNewItem("");
  }


  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {TodoItems.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
      <Input
        className="" type="text" value={newItem}
        onChange={(e) => setNewItem(e.target.value)}

      />
      <Button
        onClick={addTodoItem}
      >
        Add Item
      </Button>
    </div>
  );
}
