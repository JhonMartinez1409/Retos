let pantalla = document.getElementById('pantalla');
    let numero1 = 0;
    let operador = null;
    let numero2 = 0;

    function agregarNumero(numero) {
      pantalla.value += numero;
    }

    function agregarOperador(op) {
      numero1 = parseFloat(pantalla.value);
      operador = op;
      pantalla.value = "";
    }

    function igualar() {
      numero2 = parseFloat(pantalla.value);
      let resultado;

      switch (operador) {
        case '+':
          resultado = numero1 + numero2;
          break;
        case '-':
          resultado = numero1 - numero2;
          break;
        case '*':
          resultado = numero1 * numero2;
          break;
        case '/':
          resultado = numero1 / numero2;
          break;
        default:
          resultado = numero1;
      }

      pantalla.value = resultado;
      numero1 = resultado;
      operador = null;
      numero2 = 0;
    }

    function limpiar() {
      pantalla.value = "0";
      numero1 = 0;
      operador = null;
      numero2 = 0;
    }

    function punto() {
      if (!pantalla.value.includes(".")) {
        pantalla.value += ".";
      }
    }