function validation(values) {
    let error = {}
    const username_pattern = /^[a-zA-Z0-9_]{4,}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.username === "") {
        error.username = "Campo vacio"
    } else if(!username_pattern.test(values.username)) {
        error.username = "Usuario no valido"
    } else {
        error.username = ""
    }

    if(values.password === "") {
        error.password = "Campo vacio"
    } else if(!password_pattern.test(values.password)) {
        error.password = "Contraseña invalida"
    } else {
        error.password = ""
    }

    return error;
}

export default validation;