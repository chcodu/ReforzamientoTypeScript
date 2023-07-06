import { useState } from "react"


export const useForm = <T extends Object>(stateForm: T) => {
    
    const onChange = (value: string, campo: keyof T) => {
        setFormulario({
            ...formulario,
            [campo]: value
        })
    }
    
    const [formulario, setFormulario] = useState<T>(stateForm)
    
    return {
        formulario,
        onChange
    }
}


