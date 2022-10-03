const infos = () => {
    let valorNome = document.getElementById("nome")

    let valorEndereco = document.getElementById("endereco")

    let valorEmail = document.getElementById("email")

    console.log(valorNome.value , valorEndereco.value , valorEmail.value)

    valorNome.value=""
    valorEndereco.value=""
    valorEmail.value=""
}
// infos()