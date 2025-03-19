# Calculadora Aritmética

## Requisitos:
- Crear una calculadora que permita realizar operaciones aritméticas básicas: suma, resta, multiplicación y división.
- La interfaz debe ser sencilla, con botones para ingresar números, seleccionar operaciones y calcular el resultado.
- El usuario debe poder ingresar números y seleccionar operaciones usando tanto botones en la interfaz como el teclado físico.
- La calculadora debe realizar los cálculos y mostrar el resultado de la operación en la pantalla.

## Diagrama de flujo:

![Diagrama de Flujo](https://github.com/user-attachments/assets/7b9549e7-aeca-45d7-b3b7-a184128bca05)

## Estructura de datos:
- **Números**: Los números se almacenarán como cadenas de texto (string) mientras se ingresan, pero se convertirán a flotantes (float) al realizar el cálculo, ya que las operaciones pueden involucrar decimales.
- **Operaciones**: Las operaciones se manejan como cadenas de texto, por ejemplo, `+`, `-`, `*`, `/`.
- **Resultado**: El resultado de cada operación será un número flotante, que luego se convertirá nuevamente a cadena de texto para ser mostrado en la pantalla.

## Ingreso de Números y Selección de Operaciones:
1. **Ingresar los números**:
    - Los números se ingresan haciendo clic en los botones correspondientes o usando el teclado numérico.
    - El número ingresado se va agregando al valor en la pantalla de la calculadora.
2. **Seleccionar la operación**:
    - El usuario selecciona la operación deseada (`+`, `-`, `*`, `/`) haciendo clic en el botón correspondiente.
    - Al seleccionar una operación, la calculadora guarda el primer número ingresado y espera a que el usuario ingrese el segundo número.
3. **Realizar el cálculo**:
    - Al presionar el botón `=` o la tecla `Enter`, la calculadora realiza la operación y muestra el resultado.

## Posibles Errores y Respuestas del Usuario:
- **División por cero**: Si el usuario intenta dividir por cero, la calculadora mostrará un mensaje de error y restablecerá la pantalla.
    - _Mensaje de error_: "No se puede dividir por cero."
    - _Respuesta del usuario_: El usuario debe revisar los números ingresados y corregir la operación.
- **Entrada no válida**: Si el usuario ingresa un valor no numérico o realiza una operación sin ingresar números válidos, la calculadora debe resetear la pantalla y evitar realizar el cálculo.
    - _Mensaje de error_: "Entrada no válida."
    - _Respuesta del usuario_: El usuario debe asegurarse de ingresar solo números válidos y operaciones correctas.

## Ejemplos de Uso:
### Suma

![Suma](https://github.com/user-attachments/assets/88ad6ab4-1ead-470b-84f5-0a1b35a833aa)

### Resta

![Resta](https://github.com/user-attachments/assets/cf3514ab-82e7-44e4-a3e6-4dfc72cf60c3)

### Multiplicación

![Multiplicación](https://github.com/user-attachments/assets/1642ce7e-c5f9-4329-b642-611a4a4488f7)

### División

![División](https://github.com/user-attachments/assets/a5179737-35b2-4b41-859b-a9e2167dc268)

## Descripción de las Modificaciones Realizadas:
1. **Interfaz de Usuario**:
    - La interfaz de la calculadora fue diseñada con simplicidad y la facilidad de uso, utilizando botones grandes para cada número y operación.
    - Se añadieron dos pantallas: una para mostrar el resultado y otra para mostrar el historial de operaciones.
2. **Funcionalidad**:
    - Se implementó la lógica de la calculadora en JavaScript, manejando la entrada de números, la selección de operaciones y la ejecución de los cálculos.
    - Se integró la capacidad de usar el teclado para facilitar la interacción.
    - Se implementó el manejo de errores, especialmente para la división por cero.
3. **Manejo de Errores**:
    - Se manejó la división por cero, mostrando un mensaje de error si el divisor es cero.
    - Se implementó una validación básica para asegurarse de que las entradas sean números válidos.
4. **Modificaciones del Código**:
    - Se implementó la capacidad de manejar el teclado físico (`keydown`) para interactuar con la calculadora.
    - _Manejo de errores_: Se implementó un sistema de alertas que detiene el cálculo si los valores ingresados son incorrectos.
    - _Estilo_: Se mejoró el diseño visual de los botones y las pantallas para hacerla más amigable.

## Reflexión sobre el Desarrollo:
- **¿Fue la lógica de programación, el diseño de interfaz o quizás la documentación?**
    - La lógica de programación fue un desafío interesante, ya que requería aplicar principios de programación orientada a objetos y lógica para las operaciones de la calculadora. Sin embargo, el diseño de la interfaz fue la parte más familiar, ya que los elementos visuales fueron fáciles de organizar y estilizar.
- **¿Te costó implementar el manejo de errores? ¿El diseño del menú presentó dificultades inesperadas?**
    - Al principio, la implementación del manejo de errores, especialmente en lo relacionado con la división entre cero, fue desafiante. En cuanto al diseño de la interfaz, hacer que fuera responsiva se me complicó un poco.
- **¿Qué prácticas aplicadas aquí son esenciales en entornos profesionales?**
    - En un entorno profesional, dos prácticas fundamentales son el diseño de interfaces intuitivas y la validación de entradas. El diseño debe ser claro y accesible, mientras que la validación adecuada de las entradas de los usuarios garantiza una experiencia fluida y segura, minimizando posibles errores de operación.
