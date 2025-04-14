import style from './ListaTarefasItens.module.css';
import { useState } from 'react';

import { Botao, TIPO_BOTAO } from '../../Botao';
import { UseAppContext } from '../../../hooks';

const ListaTarefasItens = (props) => {
    const { id, nome } = props;
  
    const [estaEditando, setEstaEditando] = useState(false);
  
    const { EditarTarefa, removerTarefa } = UseAppContext();
  
    return (
      <ul className={style.ListaTarefasItens}>
        {estaEditando && (
          <CampoTexto
            defaultValue={nome}
            onChange={event => EditarTarefa(id, event.currentTarget.value)}
            onBlur={() => setEstaEditando(false)}
            autoFocus
            value={nome}
          />
        )}
  
        {!estaEditando && (
          <span onDoubleClick={() => setEstaEditando(true)}>
            {nome}
          </span>
        )}
  
        <Botao
          texto="-"
          tipo={TIPO_BOTAO.PRIMARIO}
          onClick={() => removerTarefa(id)}
        />
      </ul>
    );
  };
  
  export { ListaTarefasItens };