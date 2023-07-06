import { useEffect, useReducer } from "react"

interface IAuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: IAuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = {
    username: string,
    nombre: string
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };



const authReducer = (state: IAuthState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        case 'login':
            return {
                validando: false,
                token: 'ABC123',
                nombre: action.payload.nombre,
                username: action.payload.username
            }
    }
}

export const Login = () => {

    const [{ validando, token, nombre, username }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Christopher',
                username: 'Titandog'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    if (validando) {
        return (
            <>
                <h3>Login</h3>

                <div className="alert alert-info">
                    Validando....
                </div>
            </>
        )
    }


    return (
        <>

            {
                (token)
                    ? <div className="alert alert-success">Autenticado como {nombre}</div>
                    : <div className="alert alert-danger">No autenticado</div>
            }

            {
                (token)
                    ? <button className="btn btn-danger"
                    onClick={logout}>Logout</button>
                    : <button className="btn btn-primary"
                    onClick={login}>Login</button>
            }



        </>
    )
}
