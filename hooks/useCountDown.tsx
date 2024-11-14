import { useEffect, useState, useRef } from 'react';

const useCountDown = () => {
  const targetTime = useRef<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [countDown, setCountDown] = useState(Math.max(0, targetTime.current - new Date().getTime()));

  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  const startCountDown = (date: Date | string) => {
    targetTime.current = new Date(date).getTime();
    setIsRunning(true);
  };

  const stopCountDown = () => {
    targetTime.current = 0;
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        const remainingTime = Math.max(0, targetTime.current - new Date().getTime());
        setCountDown(remainingTime);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return {
    hours,
    minutes,
    seconds,
    isExpired: countDown === 0,
    startCountDown,
    stopCountDown,
  };
};

export default useCountDown;
