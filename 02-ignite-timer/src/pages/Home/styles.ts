import styled from 'styled-components'
import { BaseCountDownButton } from './Countdown/styles'

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

export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['green-500']}; //scp
  color: ${(props) => props.theme['gray-100']}; //scp

  // se não estiver disabled faça o hover
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']}; //scp
  }
`

export const StopCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['red-500']}; //scp
  color: ${(props) => props.theme['gray-100']}; //scp

  // se não estiver disabled faça o hover
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']}; //scp
  }
`
