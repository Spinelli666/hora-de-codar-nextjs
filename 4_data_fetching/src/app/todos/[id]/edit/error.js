'use client'

import Link from "next/link"

const TodoEditErrorPage = () => {
  return (
    <div>
      <h1>Occorreu um problema, tente novamente mais tarde</h1>
      <Link href='/'>Voltar para home</Link>
    </div>
  )
}

export default TodoEditErrorPage
