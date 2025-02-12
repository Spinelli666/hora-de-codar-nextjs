import { findTodoByID } from '@/actions'
import TodoForm from '@/components/TodoForm'
import React from 'react'

const TodoEdit = async ({ params }) => {

    const id = Number(params.id)

    const todo = await findTodoByID(id)

  return (
    <div>
      <h1>Editando: {todo.titulo}</h1>
      <TodoForm todo={todo} />
    </div>
  )
}

export default TodoEdit
