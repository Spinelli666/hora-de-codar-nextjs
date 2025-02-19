// 5 - pagina dinamica com request
import { db } from "@/db";
import { notFound } from "next/navigation";

export default async function TodoShow(props) {

    await new Promise((a) => setTimeout(a, 2000))

    const id = Number(props.params.id);

    const todo = await db.todo.findFirst({
        where: { id },
    });

  if(!todo) return notFound();

  return <div>{todo.titulo}</div>;
}