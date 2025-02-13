'use server'

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {

    const id = Number(formData.get('id'))

    await db.todo.delete({
      where: { id }
    })

    // revalidatePath, pode estar em projetos junto com force dynamic
    revalidatePath('/')

    // redirect = return
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

export async function toggleTodoStatus(formData) {

  const todoId = Number(formData.get('id'))

  const todo = await db.todo.findFirst({
    where: { id: todoId },
  })

  if(!todo) {
    throw new Error('Todo not found')
  }

  const novoStatus = todo.status === 'pendente' ? 'feito' : 'pendente'


  await db.todo.update({
    where: { id: todoId },
    data: { status: novoStatus },
  })

  revalidatePath('/')

  redirect('/')
}
