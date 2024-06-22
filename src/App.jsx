import { useState } from 'react'

import './App.css'

function App() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const initNums = () => {
    setNum1(0);
    setNum2(0);
  }

  const sumNums = () => {
    const newResult = Number(num1) + Number(num2)
    console.log(newResult);
    console.log(num1, num2)
    setResult(newResult);
  }
  const multiNums = () => {
    const newResult = (Number(num1) * Number(num2))
    console.log(newResult);
    console.log(num1, num2)
    setResult(newResult);
  }

  const restNums = () => {
    const newResult = Number(num1) - Number(num2)
    console.log(newResult);
    console.log(num1, num2)
    setResult(newResult);
  }

  const dividNums = () => {
    const newResult = (Number(num1) / Number(num2))
    console.log(newResult);
    console.log(num1, num2)
    setResult(newResult);
  }


  var employees = [
    { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
    { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
    { name: 'Pedro', lastName: 'López', hobbies: ['senderismo', 'cine'], age: 28 },
    { name: 'Ana', lastName: 'Martínez', hobbies: ['baile', 'viajar'], age: 22 },
    { name: 'Carlos', lastName: 'Sánchez', hobbies: ['cocina', 'videojuegos'], age: 35 },
    { name: 'Sofía', lastName: 'Ruiz', hobbies: ['natación', 'teatro'], age: 29 },
    { name: 'Luis', lastName: 'Hernández', hobbies: ['jardinería', 'patinar'], age: 31 },
    { name: 'Elena', lastName: 'Díaz', hobbies: ['fotografía', 'montañismo'], age: 27 },
    { name: 'Javier', lastName: 'Torres', hobbies: ['ajedrez', 'surf'], age: 33 },
    { name: 'Laura', lastName: 'Romero', hobbies: ['yoga', 'ciclismo'], age: 26 },
    { name: 'David', lastName: 'Gómez', hobbies: ['escritura', 'musculación'], age: 34 },
    { name: 'Isabel', lastName: 'Jiménez', hobbies: ['piano', 'voleibol'], age: 23 },
    { name: 'Miguel', lastName: 'Alvarez', hobbies: ['cocina', 'pintura'], age: 37 },
    { name: 'Carmen', lastName: 'Moreno', hobbies: ['jardinería', 'cine'], age: 24 },
    { name: 'Alejandro', lastName: 'Dominguez', hobbies: ['viajar', 'fotografía'], age: 30 },
    { name: 'Rosa', lastName: 'Ortega', hobbies: ['bailar', 'leer'], age: 32 },
    { name: 'Francisco', lastName: 'Vargas', hobbies: ['música', 'senderismo'], age: 28 },
    { name: 'Lucía', lastName: 'Ramos', hobbies: ['gimnasia', 'ciclismo'], age: 26 },
    { name: 'Antonio', lastName: 'Castillo', hobbies: ['cocinar', 'pintura'], age: 29 },
    { name: 'Eva', lastName: 'Iglesias', hobbies: ['cine', 'teatro'], age: 31 },
    { name: 'José', lastName: 'Fernández', hobbies: ['fútbol', 'baloncesto'], age: 27 },
    { name: 'Teresa', lastName: 'Serrano', hobbies: ['pintura', 'música'], age: 33 },
    { name: 'Manuel', lastName: 'Garrido', hobbies: ['cocina', 'fotografía'], age: 30 },
    { name: 'Rocío', lastName: 'Cortés', hobbies: ['patinar', 'leer'], age: 28 },
    { name: 'Pablo', lastName: 'Marín', hobbies: ['surf', 'senderismo'], age: 25 },
    { name: 'Beatriz', lastName: 'Luna', hobbies: ['piano', 'yoga'], age: 29 },
    { name: 'Diego', lastName: 'Ibáñez', hobbies: ['ciclismo', 'música'], age: 34 },
    { name: 'Nuria', lastName: 'Gil', hobbies: ['teatro', 'cocina'], age: 27 },
    { name: 'Rubén', lastName: 'Sanz', hobbies: ['fútbol', 'lectura'], age: 32 },
    { name: 'Cristina', lastName: 'Herrero', hobbies: ['bailar', 'pintura'], age: 26 }
  ];


  return (
    // tengo que poner aquí el logo en lo de arriba. Que no se me olvide
    <>
      <img className="logo" src='/src/assets/cocretainc.jpg' alt='logo cocreta.inc' />
      <div className="envoltura">
        <div className="employees">
          {employees.map((employe, index) => {
            return (
              <div key={index}>
                <p>Nombre: {employe.name}</p>
                <p>Apellidos: {employe.lastName}</p>
                <p>Hobbies: {employe.hobbies.join(', ')}</p>
                <p>Edad: {employe.age}</p>
              </div>
            )
          })}
        </div>
        <div className="calculator">
          <div>
            <input type='number' onChange={(e) => setNum1(e.target.value)} value={num1} />
            <input type='number' onChange={(e) => setNum2(e.target.value)} value={num2} />
          </div>
          <div>
            <button onClick={sumNums}>SUMAR</button>
            <button onClick={multiNums}>MULTIPLICAR</button>
            <button onClick={restNums}>RESTAR</button>
            <button onClick={dividNums}>DIVIDIR</button>
            <button onClick={initNums}>RESETEAR</button>
          </div>
          <p>Resultado: {result}</p>
        </div>
      </div>
      <footer>
        <span> Todos los derechos reservados. </span>
        <span> Coquetas INC © </span>
        <span>- Dirección: Simancas (Madriz)</span>
        <span>- Teléfono: 917335673 - 635444912 </span>
        <span>- Email: croquetasINC@hotmail.com </span>
      </footer>
    </>
  )
}

export default App
