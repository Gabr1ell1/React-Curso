import { useState } from 'react';
import { Botao, CampoTexto, TIPO_BOTAO } from '../../components';
import style from './FormCriarTarefa.module.css';
import {UseAppContext} from '../../hooks';

const FormCriarTarefa = ( ) => {
    const { adicionarTarefa } = UseAppContext();

    const [nomeTarefa, setNomeTarefa] = useState('');
    
    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)
    };
    
    const submeterFormulário = (event) => { 
        event.preventDefault();

        if(!nomeTarefa){
            return;
        }
      
        adicionarTarefa(nomeTarefa);
        setNomeTarefa('');
    };
        return (
            <form className={style.FormCriarTarefa} onSubmit={submeterFormulário}>
             <CampoTexto value = {nomeTarefa} onChange = {onChangeNomeTarefa} />
             <Botao texto ="+" tipo={TIPO_BOTAO.PRIMARIO } />
            </form>
        );

    };
export { FormCriarTarefa};