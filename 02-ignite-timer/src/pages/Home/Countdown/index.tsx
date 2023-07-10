import { differenceInSeconds } from 'date-fns';
import React, { useContext, useEffect } from 'react';

import { CyclesContext } from '../../../context/CyclesContext';
import { CountdownContainer, Separator } from './styles';

export const Counterdown = () => {
    const {
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFineshed,
        amountSecondsPassed,
        setSecondsPassed,
    } = useContext(CyclesContext);

    const totalSecond = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    const currentSeconds = activeCycle ? totalSecond - amountSecondsPassed : 0;

    const minuteAmount = Math.floor(currentSeconds / 60); // arrendondo para baixo pq sempre tenho minutos completos(cheios)
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minuteAmount).padStart(2, '0'); // converte em string e usa o padstart(para preencher até completar 2 caracteres)
    const seconds = String(secondsAmount).padStart(2, '0');

    // tempo passando no title
    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}: ${seconds}`;
        }
    }, [minutes, seconds, activeCycle]);

    // função que está responsavel pelo time
    useEffect(() => {
        // crio a variavel fora sem valor pq o intevral está sendo criado dentro de um scope if
        let interval: number;
        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), activeCycle.startDate);

                if (secondsDifference >= totalSecond) {
                    markCurrentCycleAsFineshed();

                    setSecondsPassed(totalSecond);
                    clearInterval(interval);
                } else {
                    setSecondsPassed(secondsDifference);
                }
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [activeCycle, totalSecond, activeCycleId, markCurrentCycleAsFineshed, setSecondsPassed]);

    return (
        <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountdownContainer>
    );
};
