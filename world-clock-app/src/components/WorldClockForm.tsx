import React, { useState } from 'react';

interface WorldClockFormProps {
  onAddClock: (name: string, timezone: number) => void;
}

export const WorldClockForm: React.FC<WorldClockFormProps> = ({ onAddClock }) => {
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || timezone === '') return;

    const zoneNum = parseFloat(timezone);
    if (isNaN(zoneNum) || zoneNum < -12 || zoneNum > 14) {
      alert('Введите корректную зону от -12 до +14');
      return;
    }

    onAddClock(name.trim(), zoneNum);
    setName('');
    setTimezone('');
  };

  return (
    <form onSubmit={handleSubmit} className="clock-form">
      <div className="form-group">
        <label>Название города</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Например, Токио"
          required
        />
      </div>
      <div className="form-group">
        <label>Временная зона (UTC)</label>
        <input
          type="number"
          step="0.5"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          placeholder="Например, 9"
          required
        />
      </div>
      <button type="submit" className="btn-submit">Добавить</button>
    </form>
  );
};
