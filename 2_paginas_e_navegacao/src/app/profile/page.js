import { redirect } from "next/navigation"

const ProfilePage = () => {

    // true = logado, e false = deslogado
    // chamada para o banco, tentando achar o usuario pelo id ou email
    const user = false

    if (!user) {
        redirect('/')
    }

  return (
    <div>
      <h1>Bem vindo ao seu perfil!</h1>
    </div>
  )
}

export default ProfilePage
