import { useForm } from "../hooks/useForm"

export const Formularios = () => {

 const {formulario, onChange} = useForm({
    Email: 'test',
    Password: 'chcodu@gmail.com'
 })


  return (
   <>
    <h3>Formuarios</h3>
    <input
        type="text"
        className="form-control"
        name='Email'
        placeholder="Email"
        value={formulario.Email}
        onChange={(ev) => onChange(ev.target.value, "Email")}
    />
    <input 
        type="text"
        className="form-control mt-2 mb-2"
        name='Password'
        placeholder="Password"
        value={formulario.Password}
        onChange={(ev) => onChange(ev.target.value, "Password")}
    />

    <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
    </code>
   </>
  )
}
