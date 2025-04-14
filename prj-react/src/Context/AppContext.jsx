import { createContext, useEffect, useState } from "react";
import { api } from '../services';

export const AppContext = createContext({});

export const AppContextProvider = ( props ) => {
    const {children} = props;

    const [criador, setCriador] = useState('gabyss');

    const [tarefas, setTarefas] = useState([]);

    const carregarTarefas = async () =>{
       const response = await api.get('/tarefas')

       console.log(response);
    };

    const adicionarTarefa = (nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefas = {
                id: estadoAtual.length + 1,
                nome: nomeTarefa,
            };
            return [...estadoAtual, tarefas
            ];
        });
    };

    const removerTarefa = (idTarefa) => {
        setTarefas(estadoAtual =>{
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa);

            return[
                ...tarefasAtualizadas,
            ];
        });
    };
    
    const EditarTarefa = (idTarefa, nomeTarefa) => {
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => {
                return tarefa.id === idTarefa
                    ? { ...tarefa, nome: nomeTarefa }
                    : tarefa;
            });
            return tarefasAtualizadas;
        });
    };

    useEffect(() => {
        carregarTarefas();
      }, []);

    return(
        <AppContext.Provider value={{
            criador, 
            tarefas,
            adicionarTarefa,  
            removerTarefa,
            EditarTarefa
        }}>
            {children }
        </AppContext.Provider>
    );

};