//sintaxe do hmtl -- os compontentes são funções que retornam html
import { Link } from 'react-router-dom';
import style from './Cabecalho.module.css';

const Cabecalho = (props) =>{
    const { nomeUsuario} = props;
    return (
    <div className={style.Cabecalho}>
        <Link to="/">
            Sua Lista de Tarefas, {nomeUsuario}!
        </Link>
        <Link to="/sobre-nos">
           Saiba mais sobre nós, {nomeUsuario}!
        </Link>
    </div>



    );
};

export {Cabecalho}; //por padrão eu vou exportar esse componente