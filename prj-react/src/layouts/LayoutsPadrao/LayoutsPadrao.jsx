import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";
import { AppContext } from "../../Context";
import { UseAppContext } from "../../hooks";

const LayoutsPadrao = () => {
const {criador} = UseAppContext(AppContext);

 return(
    <>
        <Cabecalho nomeUsuario="Laiane"/>
            <Conteudo>
                <Outlet />
            </Conteudo>
        <Rodape criador={criador} />
    </> 
 );
};
export { LayoutsPadrao };