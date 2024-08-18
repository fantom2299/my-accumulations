import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SavingsChartProps {
  directSavings: number;
  depositInterest: number;
  dividends: number;
}

export const SavingsChart: React.FC<SavingsChartProps> = ({ directSavings, depositInterest, dividends }) => {
  const data = {
    labels: ['Прямые накопления', 'Проценты по депозиту', 'Дивиденды'],
    datasets: [
      {
        label: 'Рубли',
        data: [directSavings, depositInterest, dividends],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Распределение накоплений',
      },
    },
  };

  return <Bar data={data} options={options} />;
};
