import styled, { css } from 'styled-components'
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess'

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    sucess: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 0;
    margin: 8px;
    background-color: ${(props) => props.theme['green-500']};

    /* 
    ${(props) => {
        return css`
            background-color: ${buttonVariants[props.variant]};
        `
    }} */
`
