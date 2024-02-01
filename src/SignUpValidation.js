function singUpValidation(values) {
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
        error.password = "campo vacio "
    } else if(!password_pattern.test(values.password)) {
        error.password = "constraseña no valida"
    } else {
        error.password = ""
    }

    if (values.confirmPassword === "") {
        error.confirmPassword = "La confirmación de contraseña no debe estar vacía";
    } else if (values.confirmPassword !== values.password) {
        error.confirmPassword = "Las contraseñas no coinciden";
    } else {
        error.confirmPassword = "";
    }

    return error;
}

export default singUpValidation;