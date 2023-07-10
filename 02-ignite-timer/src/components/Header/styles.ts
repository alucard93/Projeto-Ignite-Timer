import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex; //padrão row
    align-items: center; // row padrão -  quando linha centraliza na altura
    justify-content: space-between; // totalmente direita e totalmente esquerda

    nav {
        display: flex; // padrão row
        gap: 0.5rem; // espaçamento entre os itens
    }

    a {
        width: 3rem;
        height: 3rem;

        display: flex; // padrão row
        justify-content: center; // centr. no comprimento **row
        align-items: center; // centralizado na altura **row

        color: ${(props) => props.theme['gray-100']};

        border-top: 3px solid transparent; // a bor. é coloc.transp. p/ n dar aquele efeito de bord. n. ao colc. o h. e evitar mexer o i.
        border-bottom: 3px solid transparent; // é colocado encima e embaixo para deixar centralizado

        &:hover {
            border-bottom: 3px solid ${(props) => props.theme['green-500']};
        }

        &.active {
            color: ${(props) => props.theme['green-500']};
        }
    }
`;
