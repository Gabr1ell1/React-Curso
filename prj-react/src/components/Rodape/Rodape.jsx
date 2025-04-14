import style from './Rodape.module.css';

const Rodape = (props) => {
    const { criador } = props;
    const anoAtual = (new Date()).getFullYear();

    return(
        <div className={style.Rodape}>
            Curso de React - {anoAtual} - By {criador}
        </div>
    );
};

export { Rodape };