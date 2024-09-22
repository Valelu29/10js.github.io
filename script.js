// Ejercicio 1: Cálculo de intereses 
function calcularIntereses() {
    // Obtener el valor del input y convertirlo a número
    const capital = parseFloat(document.getElementById("capital").value);
    
    // Validar que el valor sea un número válido
    if (isNaN(capital)) {
      document.getElementById("resultadoInteres").innerText = "Por favor, ingresa un número válido.";
      return;
    }
    
    // Calcular los intereses
    const interes = capital * 0.02;
    
    // Mostrar el resultado de los intereses
    document.getElementById("resultadoInteres").innerText = "Intereses ganados: $" + interes.toFixed(2);
  }

  // Validación para que solo se puedan ingresar números
  const capitalInput = document.getElementById('capital');
  
  capitalInput.addEventListener('input', function () {
    // Elimina cualquier letra o símbolo no numérico
    this.value = this.value.replace(/[^0-9.]/g, '');
    
    // Asegurarse de que solo haya un punto decimal
    const parts = this.value.split('.');
    if (parts.length > 2) {
      this.value = parts[0] + '.' + parts[1]; // Elimina puntos adicionales
    }
  });

// Ejercicio 2: Cálculo de comisiones
function calcularComisiones() {
    // Obtener los valores de los inputs y convertirlos a número
    const sueldoBase = parseFloat(document.getElementById("sueldoBase").value);
    const venta1 = parseFloat(document.getElementById("venta1").value);
    const venta2 = parseFloat(document.getElementById("venta2").value);
    const venta3 = parseFloat(document.getElementById("venta3").value);
    
    // Validar que todos los valores sean números válidos
    if (isNaN(sueldoBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
      document.getElementById("resultadoComisiones").innerText = "Por favor, ingresa valores numéricos válidos en todos los campos.";
      return;
    }
    
    // Calcular comisiones y total
    const comisiones = (venta1 + venta2 + venta3) * 0.10;
    const total = sueldoBase + comisiones;
    
    // Mostrar el resultado
    document.getElementById("resultadoComisiones").innerText = `Comisiones: $${comisiones.toFixed(2)}, Total: $${total.toFixed(2)}`;
  }

  // Validación para solo números en los inputs
  const inputs = ['sueldoBase', 'venta1', 'venta2', 'venta3'];

  inputs.forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('input', function () {
      // Elimina cualquier letra o símbolo no numérico, excepto el punto decimal
      this.value = this.value.replace(/[^0-9.]/g, '');
      
      // Asegurarse de que solo haya un punto decimal
      const parts = this.value.split('.');
      if (parts.length > 2) {
        this.value = parts[0] + '.' + parts[1]; // Elimina puntos adicionales
      }
    });
  });


// Ejercicio 3: Descuento en tienda
function calcularDescuento() {
    // Obtener el valor del input y convertirlo a número
    const totalCompra = parseFloat(document.getElementById("totalCompra").value);
    
    // Validar que el valor sea un número válido
    if (isNaN(totalCompra)) {
      document.getElementById("resultadoDescuento").innerText = "Por favor, ingresa un número válido.";
      return;
    }
    
    // Calcular el descuento y el total final
    const descuento = totalCompra * 0.15;
    const totalFinal = totalCompra - descuento;
    
    // Mostrar el resultado del descuento
    document.getElementById("resultadoDescuento").innerText = `Total a pagar con descuento: $${totalFinal.toFixed(2)}`;
  }

  // Validación para que solo se puedan ingresar números
  const totalCompraInput = document.getElementById('totalCompra');
  
  totalCompraInput.addEventListener('input', function () {
    // Elimina cualquier letra o símbolo no numérico, excepto el punto decimal
    this.value = this.value.replace(/[^0-9.]/g, '');
    
    // Asegurarse de que solo haya un punto decimal
    const parts = this.value.split('.');
    if (parts.length > 2) {
      this.value = parts[0] + '.' + parts[1]; // Elimina puntos adicionales
    }
  });

// Ejercicio 4: Calificación final
function calcularCalificacion() {
    const parcial1 = parseFloat(document.getElementById("parcial1").value);
    const parcial2 = parseFloat(document.getElementById("parcial2").value);
    const parcial3 = parseFloat(document.getElementById("parcial3").value);
    const examenFinal = parseFloat(document.getElementById("examenFinal").value);
    const trabajoFinal = parseFloat(document.getElementById("trabajoFinal").value);

    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    const calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
    
    document.getElementById("resultadoCalificacion").innerText = `Calificación final: ${calificacionFinal.toFixed(2)}`;
}

// Ejercicio 5: Cálculo de edad
function calcularEdad() {
    const yearNacimiento = parseInt(document.getElementById("yearNacimiento").value);
    const yearActual = new Date().getFullYear();
    const edad = yearActual - yearNacimiento;
    
    document.getElementById("resultadoEdad").innerText = `Edad: ${edad} años`;
}

// Ejercicio 6: Palabras a Números
function palabrasANumeros() {
    const palabras = document.getElementById("palabras").value.split(',').map(palabra => palabra.trim().toLowerCase());
    const numerosPalabras = {
        "cero": 0, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4,
        "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, "nueve": 9
    };
    
    const resultado = palabras.map(palabra => numerosPalabras[palabra] !== undefined ? numerosPalabras[palabra] : -1);
    document.getElementById("resultadoPalabrasNumeros").innerText = `Resultado: [${resultado.join(', ')}]`;
}

// Ejercicio 7: Cálculo de horas extra
function calcularHorasExtras() {
    const horasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value);
    const pagoPorHora = parseFloat(document.getElementById("pagoPorHora").value);

    let pagoTotal = 0;

    if (horasTrabajadas <= 40) {
        pagoTotal = horasTrabajadas * pagoPorHora;
    } else {
        const horasExtras = horasTrabajadas - 40;
        if (horasExtras <= 8) {
            pagoTotal = (40 * pagoPorHora) + (horasExtras * pagoPorHora * 2);
        } else {
            pagoTotal = (40 * pagoPorHora) + (8 * pagoPorHora * 2) + ((horasExtras - 8) * pagoPorHora * 3);
        }
    }

    document.getElementById("resultadoHorasExtras").innerText = `Pago total: $${pagoTotal.toFixed(2)}`;
}

// Ejercicio 8: Cálculo de utilidades
function calcularUtilidades() {
    const salario = parseFloat(document.getElementById("salario").value);
    const antiguedad = parseFloat(document.getElementById("antiguedad").value);

    let porcentajeUtilidad;

    if (antiguedad < 1) {
        porcentajeUtilidad = 0.05;
    } else if (antiguedad >= 1 && antiguedad < 2) {
        porcentajeUtilidad = 0.07;
    } else if (antiguedad >= 2 && antiguedad < 5) {
        porcentajeUtilidad = 0.10;
    } else if (antiguedad >= 5 && antiguedad < 10) {
        porcentajeUtilidad = 0.15;
    } else {
        porcentajeUtilidad = 0.20;
    }

    const utilidad = salario * porcentajeUtilidad;
    document.getElementById("resultadoUtilidades").innerText = `Utilidad anual: $${utilidad.toFixed(2)}`;
}

// Ejercicio 9: Validador de formulario
document.getElementById("formularioRegistro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const comentarios = document.getElementById("comentarios").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!nombre || !email || !comentarios) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Email inválido.");
        return;
    }

    if (comentarios.length > 50) {
        alert("El comentario no debe exceder los 50 caracteres.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("La contraseña debe tener al menos 6 caracteres, una letra minúscula, una letra mayúscula y un dígito.");
        return;
    }

    alert("Formulario enviado correctamente.");
});

// Ejercicio 10: Expresión regular para eliminar etiquetas <script>
function eliminarTagsPeligrosos(html) {
    const cleanedHtml = html.replace(/<script.*?>.*?<\/script>/gi, "");
    return cleanedHtml;
}