import { useState } from "react"

export const App = () => {

    const [url,seturl] = useState('')
    const [nam,setnam] = useState('')
    const [id,setId] = useState()
    const [tipo,setipo] = useState('')
    const [ability,setability] = useState('')

    const fetcha = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nam}`)
            .then((response) => response.json())
            .then((data) => {
                const { id, name, sprites,} = data;
                console.log(id, name, sprites.other['official-artwork'].front_default,data.types[0].type.name,data.abilities[0].ability.name)
                seturl(sprites.other['official-artwork'].front_default)
                setId(id)
                setipo(data.types[0].type.name)
                setability(data.abilities[0].ability.name)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }


  return (
    <> 
        <h1>ID: {id}</h1>
        <h1>Nombre: {nam}</h1>
        <h1>Tipo: {tipo}</h1>
        <h1>Habilidad: {ability}</h1>
        <img src={url}></img>
        <input className="form-control me-2" type="text" onChange={(e/*evento*/) => {setnam(e.target.value)}}/>
        <button onClick={fetcha}>Pruebas</button>
    </>
  )
}