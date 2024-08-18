import React, { useState } from 'react';
import { SavingsChart } from './components/SavingsChart';

const App: React.FC = () => {
  const [dailyAmount, setDailyAmount] = useState<number>(100);
  const [years, setYears] = useState<number>(5);
  const [investmentType, setInvestmentType] = useState<string>('piggyBank');

  const totalDays = years * 365;
  const directSavings = dailyAmount * totalDays;

  let depositInterest = 0;
  let dividends = 0;

  switch (investmentType) {
    case 'fixedDeposit':
      depositInterest = directSavings * 0.05;
      break;
    case 'additiveDeposit':
      depositInterest = directSavings * 0.07;
      break;
    case 'governmentBonds':
      dividends = directSavings * 0.04;
      break;
    case 'funds':
      dividends = directSavings * 0.06;
      break;
  }

  const totalSavings = directSavings + depositInterest + dividends;

  return (
    <div className="container">
      <div className="input-section">
        <h2>Если бы я откладывал:</h2>
        <div>
          <label>Рублей в день: {dailyAmount}</label>
          <input
            type="range"
            min="1"
            max="1000"
            value={dailyAmount}
            onChange={(e) => setDailyAmount(Number(e.target.value))}
          />
          <input
            type="number"
            value={dailyAmount}
            onChange={(e) => setDailyAmount(Number(e.target.value))}
          />
        </div>
        <div>
          <label>в течение лет: {years}</label>
          <input
            type="range"
            min="1"
            max="50"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="investment"
              value="piggyBank"
              checked={investmentType === 'piggyBank'}
              onChange={() => setInvestmentType('piggyBank')}
            />
            в копилку
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="investment"
              value="fixedDeposit"
              checked={investmentType === 'fixedDeposit'}
              onChange={() => setInvestmentType('fixedDeposit')}
            />
            на депозит (фиксированный)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="investment"
              value="additiveDeposit"
              checked={investmentType === 'additiveDeposit'}
              onChange={() => setInvestmentType('additiveDeposit')}
            />
            на депозит (с добавлением)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="investment"
              value="governmentBonds"
              checked={investmentType === 'governmentBonds'}
              onChange={() => setInvestmentType('governmentBonds')}
            />
            в облигации гос займа
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="investment"
              value="funds"
              checked={investmentType === 'funds'}
              onChange={() => setInvestmentType('funds')}
            />
            ПИФы/ПАИ
          </label>
        </div>
      </div>
      <div className="output-section">
        <h3>Мои накопления составили бы: {totalSavings} рублей</h3>
        <p>Прямые накопления: {directSavings}</p>
        <p>Проценты по депозиту: {depositInterest}</p>
        <p>Дивиденды: {dividends}</p>
        <SavingsChart directSavings={directSavings} depositInterest={depositInterest} dividends={dividends} />
      </div>
    </div>
  );
};

export default App;
