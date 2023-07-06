interface IPersona {
    nombre:string,
    edad:number,
    direccion:IDireccion
}
interface IDireccion {
    pais:string,
    casaNo:number
}


export const ObjetosLiterales = () => {

    const persona: IPersona = {
        nombre: "Fernando",
        edad: 35,
        direccion: {
            pais: "Costa Rica",
            casaNo:615
        }
    }

  return (
    <>
    <div>ObjetosLiterales</div>
    <code>
        <pre>
        { JSON.stringify(persona) }
        </pre>
    </code>
    </>
  )
}
