export const TiposBasicos = () => {

    let nombre: string | number = 'chris';
    let number: number = 2;
    nombre = 2;
    let estaActivo: boolean = false;
    const poderes: string[] = [];
    poderes.push("Hola");
    poderes.push("es");
    poderes.push("miercoles");



  return (
    <>
        <h3>Tipos Basicos</h3>
        {nombre}, {number},
        {
            (estaActivo) ? "Esta activo" : "No esta activo"
        },
        {poderes[2]}
    </>
  )
}
