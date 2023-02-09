import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem; //comprimento máximo da página
  height: calc(
    100vh - 10rem
  ); // 100vh(total) - 10rem = p/ sobrar c. e emb. (5emb. e 5 enc.) tam.
  margin: 5rem auto; // 5 enc/emb laterais automatico (margin com relação a div com externo)
  padding: 2.5rem; // padding interno ... espaçar internamente os itens

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px; // sempre px

  display: flex;
  flex-direction: column; // header e conteudo embaixo
`
