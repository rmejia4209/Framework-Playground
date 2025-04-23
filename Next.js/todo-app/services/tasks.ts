import { prisma } from "@/lib/prismaClient";



export async function getTasks() {
  try {
    const tasks = await prisma.tasks.findMany({
      select: { description: true }
    });
    return tasks;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function addTask(description: string) {
  try {
    await prisma.tasks.create({
      data: {
        description: description
      }
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}