import React from 'react'

const Componente1 = () => {
  return (
    <section>
     <Saluto></Saluto>
     <Saluto/>
     <Saluto/>
    </section>
  )
}

const Persona = () =>{
  return <h2>Mi chiamo Luigi</h2>
}
const Messaggio = () => <h4> Messaggio</h4>
const Saluto = () => {
  return (
    <React.Fragment>
      <Persona/>
      <Messaggio></Messaggio>
    </React.Fragment>
  )
}

export default Componente1
