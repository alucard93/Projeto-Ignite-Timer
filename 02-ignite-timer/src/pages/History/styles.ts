import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
// div em volta para fazer o scroll n tem como fazer scroll em tabela
export const HistoryList = styled.div`
  flex: 1; //máximo de altura
  overflow: auto; // se o tamanho da tabela for maior que o tamanho do container que eu tenho disponivel gera um scroll
  margin-top: 2rem; // espaçamento externo

  // agora começa a estilização da tabela em si
  table {
    width: 100%;
    border-collapse: collapse; //sem esse cmd ele cons. 1px da esq. e 1px da dir. c/ cmd apenas 1 px
    min-width: 600px; // força quando tivermos um tamanho menor ele gera um scroll

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem; // espaçamento interno
      text-align: left; //padrão center
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6; // 160%

      //seleciono a primeira th(coluna)
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      //seleciono a ultima coluna
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem; // para aumentar o tamanho(preencer interno) do td
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%; //primeiro elemento com 50%
        padding-left: 1.5rem;
      }

      //seleciono a ultima coluna
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`
const STATUS_COLOR = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const // p/ dizer que sempre vai ser esses 3 e nunca vai mudar(se não colocar é como se fosse qualquer txt)

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR // as cores que eu tenho disponivel são o tipo do meu status color(typescript n consegue ler obj javasc. por isso passo a tipagem)
}

// novo componente(criado pelo styled components por que só é diferente na visualização) ou seja não precisa criar um novo arquivo
export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  // por meio do before eu adiciono um elemento dentro da tag, no começo after no final com isso adiciono a bolinha do status
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
