import React, { FC } from "react";
import { useEffect, useState } from "react";
import { getStringTime } from "../utils/timeUtils";

const Timer:FC = () => {

  const [seconds, setSeconds] = useState<number>(0)

  const [isTick, setIsTick] = useState<boolean>(false)

  useEffect(() => {
    if (!isTick) {
      return
    }
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [isTick])

  const startTimer = () => {
    setIsTick(true)
  }
  const stopTimer = () => {
    setIsTick(false)
  }
  const clearTimer = () => {
    setIsTick(false)
    setSeconds(0)
  }

  return (
    <div className="timer">
      <div className="timer__seconds">
        {getStringTime(seconds)}
      </div>
      <div className="timer__row stack">
        <button className="timer__button button" onClick={startTimer}>Запустить таймер</button>
        <button className="timer__button button" onClick={stopTimer}>Остановить таймер</button>
        <button className="timer__button button" onClick={clearTimer}>Очистить таймер</button>
      </div>
    </div>
  );
}

export default Timer;
