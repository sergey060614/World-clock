import { useState } from 'react';
import { WorldClockForm } from './components/WorldClockForm';
import { WorldClockList } from './components/WorldClockList';
import { type IClockItem } from './types';
import './App.css';

function App() {
  const [clocks, setClocks] = useState<IClockItem[]>([
    { id: '1', name: 'Москва', timezone: 3 },
    { id: '2', name: 'Нью-Йорк', timezone: -5 },
  ]);

  const handleAddClock = (name: string, timezone: number) => {
    const newClock: IClockItem = {
      id: Date.now().toString(), 
      name,
      timezone,
    };
    setClocks((prevClocks) => [...prevClocks, newClock]);
  };

  const handleRemoveClock = (id: string) => {
    setClocks((prevClocks) => prevClocks.filter((clock) => clock.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Мировые часы (Hooks)</h1>
      <WorldClockForm onAddClock={handleAddClock} />
      <WorldClockList clocks={clocks} onRemoveClock={handleRemoveClock} />
    </div>
  );
}

export default App;
