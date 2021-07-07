interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser() {
    return{
        nome: 'Jessica',
        email: 'jessiksu@email.com'
    }
}

function setUser(usuario: Usuario){
    // ...
}