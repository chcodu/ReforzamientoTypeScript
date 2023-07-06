import { useEffect, useRef, useState } from "react"
import { reqReaApi } from "../api/reqRes"
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { useUsuarios } from "../hooks/useUsuarios";


export const Usuarios = () => {

    const { usuarios, paginaAnterior,paginaSiguiente, renderItem } = useUsuarios()

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario => renderItem(usuario))
                    }
                </tbody>
            </table>
            {
                (usuarios.length > 0)
                    ?
                    <>
                        <button className="btn btn-primary"
                            onClick={paginaAnterior}>Anterior</button>
                            &nbsp;
                        <button className="btn btn-primary"
                            onClick={paginaSiguiente}>Siguiente</button>
                    </>
                    : ""
            }
        </>
    )
}
