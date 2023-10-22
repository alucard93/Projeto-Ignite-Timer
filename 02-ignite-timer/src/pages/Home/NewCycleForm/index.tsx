import React, { useContext } from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../context/CyclesContext'

export const NewCycleForm = () => {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (
        <FormContainer>
            <label htmlFor="task"> Vou trabalhar em</label>
            <TaskInput
                id="task"
                list="task-suggestions"
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle} // se tiver algum valor dentro converte para true caso n false
                {...register('task')}
            />
            <label htmlFor="minutesAmount">Durante</label>

            {/* lista de sugestoes para um input e passo o list no local */}
            <datalist id="task-suggestions">
                <option value="Projeto 1" />
                <option value="Projeto 2" />
                <option value="Projeto 3" />
                <option value="Banana" />
            </datalist>

            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={1} // pula de 1 em 1
                min={1} // valor minimo
                max={60} // valor maximo
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            />
            <span>minutos.</span>
        </FormContainer>
    )
}
