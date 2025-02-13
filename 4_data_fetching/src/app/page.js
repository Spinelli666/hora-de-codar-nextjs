import Button from "@/components/Button";
import { db } from "@/db";
import Link from "next/link";

import { deleteTodo, toggleTodoStatus } from "@/actions";
import Checkbox from "@/components/Checkbox";

// Reavalidando o cache por tempo
// export const revalidate = 20

// export const dynamic = "force-dynamic"

export default async function Home() {
  // 3 - Resgatando dados do banco
  const todos = await db.todo.findMany();

  // async function deleteTodo(formData) {
  //   'use server'

  //   const id = Number(formData.get('id'))

  //   await db.todo.delete({
  //     where: { id }
  //   })

  //   redirect('/')
  // }

  return (
    <>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Todos!</h1>
        <div className="space-y-4">
          {todos.map((todo) => (
            <div key={todo.id} className={`bg-gray-100 p-4 rounded-lg shadow ${todo.status === 'completa' ? 'bg-green-100' : ''}`}>
              <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{todo.titulo}</h2>
                    <p>{todo.descricao}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="italic">completar?</p>
                    <form action={toggleTodoStatus}>
                      <input type="hidden" name="id" value={todo.id}/>
                      <Checkbox checked={todo.status === 'completa'} />
                    </form>
                  </div>
                <div className="flex space-x-2 mt-3">
                  <Link
                    href={`/todos/${todo.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Visualizar
                  </Link>
                  <Link
                    href={`/todos/${todo.id}/edit`}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Editar
                  </Link>
                  <form action={deleteTodo}>
                    <input type="hidden" name="id" value={todo.id}/>
                    <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Excluir</Button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}