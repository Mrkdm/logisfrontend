import './assets/css/bootstrap.min.css'
import './assets/css/styles.css'
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Home from './views/Home/Home'
import CasasCancun from './views/casasVentasCancun/casasCancun';
import CasasPlaya from './views/casasVentasPlaya/casasPlaya';
import CasasTulum from './views/casasVentasTulum/casasTulum';
import CasasMerida from './views/casasVentasMerida/casasMerida';

import Casas from './views/totalCasas/Casas'
import CasaId from './views/casaId/Casa';

import PageNotFound from './views/404/Page404'
import Terminosycondiciones from './views/termycond/terminosycondiciones';

function App() {
  return (

<Router>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/casasCancun" exact element={<CasasCancun/>} />
      <Route path="/casasPlaya" exact element={<CasasPlaya />} /> 
      <Route path="/casasTulum" exact element={<CasasTulum />} /> 
      <Route path="/casasMerida" exact element={<CasasMerida />} /> 

      <Route path="/aviso-de-privacidad" exact element={<Terminosycondiciones/>} /> 

      <Route path="/casas" exact element={<Casas/>}/>

      <Route path="/casa/:id" exact element={<CasaId /> }/>

      <Route path="*"  element={<PageNotFound /> }/>

    </Routes>
 </Router>

  );
}

export default App;
