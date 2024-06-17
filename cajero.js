
var nombreUsuarios = [
    {usuario: "Mali", saldo: 200, contraseña: "contra1" },
    {usuario: "Gera", saldo: 290, contraseña: "contra2" },
    {usuario: "Maui", saldo: 67, contraseña: "contra3"},
  ];

/*USUARIO VALIDO O NO*/
while(true) {
  var usuarioElegido = prompt("Ingresa el nombre de tu cuenta.");
  if (usuarioElegido == "Mali" || usuarioElegido == "Gera" || usuarioElegido == "Maui") {
    alert("Hola " + usuarioElegido + ". Bienvenido a tu banca en línea.")
    break;
  }
  else {
    alert("Usuario no existente. Revisa la ortografía.")
  }
}

/*CONTRASEÑA E INICIO DE PROCESOS*/
while(true) {
  var contraseña = prompt("Escribe tu contraseña.");
  var cuenta = nombreUsuarios.find(cuenta => cuenta.usuario === usuarioElegido);

  if (cuenta) {
    if(cuenta.contraseña === contraseña) {
 

        var opcion1 = " Consultar saldo"
        var opcion2 = " Realizar un depósito"
        var opcion3 = " Retirar dinero"
            
        var opcionElegida = prompt("¿Qué acción deseas realizar? \n1." + opcion1 + "\n2." + opcion2 + "\n3." + opcion3);
        
        /*OPCION 1: SALDO*/
        if (opcionElegida === "1") {
          alert("Tu saldo actual es de $" + cuenta.saldo + "pesos");
        }
        
        /*OPCION 2: DEPOSITO*/
        else if (opcionElegida === "2") {
          while (true) {
            var deposito = prompt("Ingresa la cantidad de dinero que deseas añadir a tu cuenta.");
            deposito = + deposito;
            if (deposito > 0 && cuenta.saldo + deposito <= 990) {
              cuenta.saldo += deposito;
              alert("Se ingresaron $" + deposito + " pesos. Tu nuevo saldo es de $ " + cuenta.saldo + " pesos.");
              break;
            }
            else {
              alert ("El monto de tu depósito no es válido. Inténtalo de nuevo. NOTA: Recuerda que el saldo MÁXIMO a almacenar en una cuenta es de $990.00 pesos. ");
            }
          }
        }
        
        /*OPCION 3: RETIRO*/
        else if (opcionElegida === "3") {
          while (true) {
            var retiro = prompt("Ingresa la cantidad de dinero que deseas retirar");
            retiro = +retiro;
            if (retiro > 0 && cuenta.saldo - retiro >= 10) {
              cuenta.saldo -= retiro;
              alert("Se retiraron $" + retiro + " pesos. Tu nuevo saldo es de $" + cuenta.saldo + " pesos.");
              break;
            }
            else {
              alert("El saldo MÍNIMO a almacenar en una cuenta es de $10.00 pesos. El monto de tu retiro no es válido. Inténtalo de nuevo.");
            }
          }
        }
    break;
    }

    else {
      if (cuenta.contraseña !== contraseña) {
        alert("Lo sentimos, " + usuarioElegido + ". Tu contraseña es incorrecta. Inténtalo de nuevo.")
      }
    }
  }
}
