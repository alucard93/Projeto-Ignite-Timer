import { createContext, ReactNode, useState, useReducer } from 'react'

interface CreateCycleData {
    task: string
    minutesAmount: number
}

// tudo que tem dentro do ciclo
interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}

interface CyclesContextType {
    cycles: Cycle[] // inves de passar um a um passo a interface
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleAsFineshed: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)
interface CyclesContextProviderProps {
    children: ReactNode
}

interface CycleState {
    cycles: Cycle[]
    activeCycleId: string | null
}

export function CyclesContextProvider({
    children,
}: CyclesContextProviderProps) {
    const [cyclesState, dispatch] = useReducer(
        (state: CycleState, action: any) => {
            if (action.type === 'ADD_NEW_CYCLE') {
                return {
                    ...state,
                    cycles: [...state.cycles, action.payload.newCycle],
                    activeCycleId: action.payload.newCycle.id,
                }
            }

            if (action.type === 'INTERRUPT_CURRENT_CYCLE') {
                return {
                    ...state,
                    cycles: state.cycles.map((cycle) => {
                        if (cycle.id === state.activeCycleId) {
                            return { ...cycle, interruptedDate: new Date() }
                        } else {
                            return cycle
                        }
                    }),
                    activeCycleId: null,
                }
            }
            return state
        },
        {
            cycles: [],
            activeCycleId: null,
        }
    )
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const { cycles, activeCycleId } = cyclesState

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    function createNewCycle(data: CreateCycleData) {
        const id = String(new Date().getTime())
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        dispatch({
            type: 'ADD_NEW_CYCLE',
            payload: {
                newCycle,
            },
        })

        // setCycles((state) => [...cycles, newCycle]);
        // sempre que uma alteração de estado depender do estado antigo a gente usa o formato de arrow function
        setAmountSecondsPassed(0) // limpando o tempo e começando de zero
    }

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    function markCurrentCycleAsFineshed() {
        dispatch({
            type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
            payload: {
                activeCycleId,
            },
        })
        // setCycles((state) =>
        //     state.map((cycle) => {
        //         if (cycle.id === activeCycleId) {
        //             return { ...cycle, finishedDate: new Date() }
        //         } else {
        //             return cycle
        //         }
        //     })
        // )
    }

    function interruptCurrentCycle() {
        dispatch({
            type: 'INTERRUPT_CURRENT_CYCLE',
            payload: {
                activeCycleId,
            },
        })
        // setCycles((state) =>
        //     state.map((cycle) => {
        //         if (cycle.id === activeCycleId) {
        //             return { ...cycle, interruptedDate: new Date() }
        //         } else {
        //             return cycle
        //         }
        //     })
        // )
    }

    return (
        <CyclesContext.Provider
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                markCurrentCycleAsFineshed,
                amountSecondsPassed,
                setSecondsPassed,
                createNewCycle,
                interruptCurrentCycle,
            }}
        >
            {children}
        </CyclesContext.Provider>
    )
}
