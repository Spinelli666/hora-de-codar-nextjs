"use client"

// USar com use (hook) => ambiente client

import { useSearchParams } from "next/navigation"

const ExemploPage = () => {

    const searchParams = useSearchParams()

    // console.log(searchParams)

    const valorParam = searchParams.get('parametro')

    const presencaParam = searchParams.has('parametro')

  return (
    <div>
      <h1>Exibindo resultados para: {valorParam}</h1>
      {presencaParam ? 'Parâmetro presente' : 'Parâmetro ausente'}
    </div>
  )
}

export default ExemploPage
