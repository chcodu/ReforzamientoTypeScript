import { useEffect, useRef, useState } from "react"
import { ReqResListado, Usuario } from "../interfaces/reqRes"
import { reqReaApi } from "../api/reqRes"

export const useUsuarios = () => {

    const [usuarios, setusuarios] = useState<Usuario[]>([])
    const page = useRef(1)

    useEffect(() => {
        return () => { cargarUsuarios(); }
    }, [])

    const cargarUsuarios = async () => {
        const resp = await reqReaApi.get<ReqResListado>('/users', {
            params: {
                page: page.current
            }
        })

        if (resp.data.data.length > 0) {
            setusuarios(resp.data.data);
        } else {
            page.current--;
            alert('No hay más registros');
        }

        if (page.current <= 0){
            page.current++;
        }
            

    }

    const paginaSiguiente = () => {
        page.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        page.current--;
        cargarUsuarios();
    }


    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id}>
                <td>
                    <img
                        src={usuario.avatar}
                        alt={usuario.first_name}
                        style={{
                            width: 35,
                            borderRadius: 100
                        }} /></td>
                <td>{usuario.first_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }

    return {
        usuarios,
        paginaAnterior,
        renderItem,
        paginaSiguiente
    }
}
