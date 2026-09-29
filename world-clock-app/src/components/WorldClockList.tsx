import React from 'react';
import { WorldClock } from './WorldClock';
import { type IClockItem } from '../types';

interface WorldClockListProps {
  clocks: IClockItem[];
  onRemoveClock: (id: string) => void;
}

export const WorldClockList: React.FC<WorldClockListProps> = ({ clocks, onRemoveClock }) => {
  if (clocks.length === 0) {
    return <p className="no-clocks">Список пуст. Добавьте свой первый город.</p>;
  }

  return (
    <div className="clocks-grid">
      {clocks.map((clock) => (
        <WorldClock
          key={clock.id} 
          id={clock.id}
          name={clock.name}
          timezone={clock.timezone}
          onRemove={onRemoveClock}
        />
      ))}
    </div>
  );
};
