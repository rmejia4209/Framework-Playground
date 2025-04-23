import { NextRequest, NextResponse } from "next/server";
import { getTasks, addTasks } from "@/services/tasks";


export async function GET(request: NextRequest) {

  try {
    const tasks = await getTasks();
    return NextResponse.json(
      tasks.map(task => task.description), {status: 200}
    );
  } catch (err) {
    return NextResponse.json(err, {status: 500})
  }

}

