import { Route, Routes } from 'react-router-dom';

import { Inicial, SobreNos } from './pages';
import { LayoutsPadrao } from './layouts';

const Router = () => {
 return(
    <Routes>
        <Route path="/" element={<LayoutsPadrao />}>
            <Route path="/" element={<Inicial />} />
            <Route path="sobre-nos" element={<SobreNos />} />
        </Route>
    </Routes>
 );
};
export { Router };