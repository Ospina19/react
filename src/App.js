import React, { useState } from 'react';
function Saludo(props) {
  const idioma = props.idioma;
  const nombre = props.nombre;
  const saludo = idioma === "inglés" ? "Hello" : "Hola" ;
  return <h1>{saludo}, {nombre}!</h1>
}

function App() {
  return (
    <Contenedor>
      <div>
        <Saludo nombre="Juan" idioma="inglés" />
        <Saludo nombre="Pedro" idioma="español" />
        <Saludo nombre="Sandra" idioma="esapñol" />
      </div>
      <Contador></Contador>
    </Contenedor>
  );
}

function Contenedor(props) {
  return (
    <div style={{border: "1px solid #000"}}>
      {props.children}
    </div>
  );
}


function Contador() {

  const [contar, setCount] = useState(0);

  const sumar = () => {
    setCount(contar + 1)
  }

  const restar = () => {
    setCount(contar - 1)
  }

  return (
    <div>
      <p>Haz dado click {contar} veces</p>
      <button onClick={sumar}>Aumentar</button>
      <button onClick={restar}>Disminuir</button>
    </div>
  );
}


export default App;