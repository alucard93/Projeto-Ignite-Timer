import styled from 'styled-components'

// container (span **hora)
export const CountdownContainer = styled.div`
    font-family: 'Roboto Mono', monospace; //utiliza a fonte se não conseguir utilizar qualquer outra font monoespaçada
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme['gray-100']};

    display: flex;
    gap: 1rem;

    span {
        background: ${(props) => props.theme['green-700']};
        padding: 2rem 1rem; //2 encima e embaixo e 1 laterais
        border-radius: 8px;
    }
`

// (dois pontos)
export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme['green-500']};

    width: 4rem;
    overflow: hidden;

    display: flex;
    justify-content: center;
`
export const BaseCountDownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`
