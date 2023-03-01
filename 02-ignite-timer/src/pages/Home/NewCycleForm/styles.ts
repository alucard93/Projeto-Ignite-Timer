import styled from 'styled-components'

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

  &::-webkit-calendar-picker-indicator {
    // tirar a seta do input no chorme
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
