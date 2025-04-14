import {ListaTarefasItens} from './ListaTarefasItens';
import { UseAppContext } from '../../hooks';

import style from './ListaTarefas.module.css';

const ListaTarefas = () => {
    const { tarefas } = UseAppContext();
  
    return (
      <>
        {tarefas.length === 0 && (
          <p>Não há tarefas!!</p>
        )}
        <ul className={style.ListaTarefas}>
          {tarefas.map((item) => (
            <ListaTarefasItens
              key={item.id}
              id={item.id}
              nome={item.nome}
            />
          ))}
        </ul>
      </>
    );
  };
  
  export { ListaTarefas };