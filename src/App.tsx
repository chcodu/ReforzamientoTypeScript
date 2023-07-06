import { Contador } from './components/Contador';
import { ContadorConHook } from './components/ContadorConHook';
import { Formularios } from './components/Formularios';
import { Login } from './components/Login';
import { Funcionalidades } from './typescript/Funcionalidades';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { TiposBasicos } from './typescript/TiposBasicos';
import { Usuarios } from './typescript/Usuarios';

const App = () => {
  return(
    <div>
      <h1>
        Introduccón a TS -React
      </h1>
      <TiposBasicos/>
      <ObjetosLiterales />
      <Funcionalidades />
      <Contador />
      <ContadorConHook />
      <Login />
      <Usuarios/>
      <Formularios/>
    </div>
  )
}

export default App;
