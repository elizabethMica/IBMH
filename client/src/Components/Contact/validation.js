export default function validation(value){
    let errors = {}

    if(!value.name){errors.name = "Se requiere: Nombre"};

    if(!value.lastName){errors.lastName = "Se requiere: Apellido"};

    if(!value.phone){errors.phone = "Se requiere: Teléfono"};

    if(!value.email){errors.email = "Se requiere: Email"};

    if(!value.message){errors.message = "Se requiere: Mensaje"};

    return errors;
}