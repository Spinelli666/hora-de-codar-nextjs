'use server'

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {

    const id = Number(formData.get('id'))

    await db.todo.delete({
      where: { id }
    })

    redirect('/')
  }


export const addTodo = async (formData) => {

    // 2 - Inserindo dados no banco
    const titulo = formData.get("titulo");
    const descricao = formData.get("descricao");
    const status = "pendente";

    const todo = await db.todo.create({
      data: {
        titulo,
        descricao,
        status,
      },
    });

    redirect("/");
 };

export const findTodoByID = async (id) => {

  // throw new Error("Not implemented");
    
   const todo = db.todo.findFirst({
     where: { id },
   })

   return todo;

}

export async function updateTodo(formState, formData) {
  const id = parseInt(formData.get("id"));
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");

  if (titulo.length < 5) {
    return {
      errors: "O título precisa de pelo menos 5 caracteres.",
    };
  }

  if (descricao.length < 10) {
    return {
      errors: "A descrição precisa de pelo menos 10 caracteres.",
    };
  }

  await db.todo.update({
    where: { id },
    data: {
      titulo,
      descricao,
    },
  });

  redirect("/");
}
