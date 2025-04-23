
import NewTaskForm from "@/components/forms/NewTaskForm"


export default async function Home() {

  const res = await fetch(
    "http://localhost:3000/api/tasks", {method:"GET"}
  );
  const data = await res.json()
  const TodoItems: string[] = data.length ? data : []


  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {TodoItems.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
      <NewTaskForm/>
    </div>
  );
}
