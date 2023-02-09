import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem); // menos a margem de 5 encima e 5 embaixo
  margin: 5rem auto; // 5 encima e embaixo e nas laterais auto(espaçamento da div para o outro elemento externo)
  padding: 2.5rem; //espaçamento interno a div

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px; //usado px

  display: flex;
  flex-direction: column; // header depois embaixo conteudo
`
