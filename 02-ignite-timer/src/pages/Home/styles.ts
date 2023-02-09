import styled from 'styled-components'

// home sem o layout
export const HomeContainer = styled.main`
  flex: 1; // div preencha a tela toda

  display: flex;
  flex-direction: column; //um elemento abaixo do outro
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3.5rem;
  }
`
// container (label and input)
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']}; //scp
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap; // quando atingir o tamanho ele quebra a linha
`
// o input possui propriedades igual com isso criou-se um elemento para passar em ambos e evitar repetição
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none; // não ter a sombra ao redor do elemento
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1; // um atalho para setar 3 propriedades(flex-grow[eu dou habilidade para o meu componente crescer além?], flex-basic[qual o tamanho ideal?],shrink[eu dou habilidade para o meu componente diminuir além?] )
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

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
export const StartCountDownButton = styled.button`
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
  background: ${(props) => props.theme['green-500']}; //scp
  color: ${(props) => props.theme['gray-100']}; //scp

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  // se não estiver disabled faça o hover
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']}; //scp
  }
`
