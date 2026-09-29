import React, { useState, useEffect } from 'react';

interface WorldClockProps {
  id: string;
  name: string;
  timezone: number;
  onRemove: (id: string) => void;
}

// Функция для расчета времени города с учетом таймзоны
const getCityTime = (timezoneOffset: number): Date => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + timezoneOffset * 3600000);
};

export const WorldClock: React.FC<WorldClockProps> = ({ id, name, timezone, onRemove }) => {
  // Инициализируем стейт сразу правильным временем
  const [time, setTime] = useState<Date>(() => getCityTime(timezone));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getCityTime(timezone));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timezone]); 

  const timeString = time.toLocaleTimeString('ru-RU', { hour12: false });

  return (
    <div className="clock-card">
      <div className="clock-info">
        <span className="clock-name">{name}</span>
        <span className="clock-zone">UTC {timezone >= 0 ? `+${timezone}` : timezone}</span>
      </div>
      <div className="clock-time">{timeString}</div>
      <button className="btn-close" onClick={() => onRemove(id)} title="Удалить часы">
        ×
      </button>
    </div>
  );
};
