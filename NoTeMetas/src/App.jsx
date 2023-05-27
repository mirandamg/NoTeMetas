import { BrowserRouter, useRoutes } from 'react-router-dom';

import Informacion from "./pages/Informacion"; 
import Inicio from "./pages/Inicio"; 
import Movilidad from "./pages/Movilidad"; 
import Rutas from "./pages/Rutas"; 
import Seguridad from "./pages/Seguridad"; 

const MyRouter = () => {
  const routes = useRoutes([
    { path: '/', element:<Inicio /> },
    { path: '/informacion', element:<Informacion /> },
    { path: '/seguridad', element:<Seguridad /> },
    { path: '/movilidad', element:<Movilidad /> },
    { path: '/rutas', element:<Rutas /> },
  ]);
  return <>{routes}</>;
};
const App =() =>{
  return(
    <BrowserRouter>
    <MyRouter />
  </BrowserRouter>
  );
  
};


export default App
