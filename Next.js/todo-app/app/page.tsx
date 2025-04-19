'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input"



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
      <button
        className="border-1 border-black bg-amber-100"
        onClick={addTodoItem}
      >
        Add Item
      </button>
    </div>
  );
}
