import { ChartConfiguration, ChartType } from "chart.js";
import * as moment from 'moment';

export let type: ChartType = 'line';
export let options: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,

  scales: {
    x: { 
      ticks: { color: '#77778e', },
      grid: { color: 'rgba(119,119,142, 0.2)', },
    },
    y: {
      ticks: { color: '#77778e', },
      grid: { color: 'rgba(119,119,142, 0.2)', },
    },
  },
  plugins: {
    tooltip: { mode: 'index', intersect: false, },
    legend: { labels: { color: '#77778e', }, },
  },
};
export let def: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Amount Used(Mins)',
      data: [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65],
      borderColor: ' rgb(98, 58, 162,0.5 )',
      borderWidth: 4,
      backgroundColor: ' rgb(98, 58, 162,0.3 )',
      tension: 0.5,
      fill: 'origin',
    },
    {
      label: 'Total Budgets Per Session',
      data: [0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46],
      borderColor: 'rgba(246, 107, 78, 0.5)',
      borderWidth: 4,
      backgroundColor: 'rgba(246, 107, 78, 0.3)',
      tension: 0.5,
      fill: 'origin',
    },
  ],
  labels: [ '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032' ],
};

export let yearly: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Amount Used(Mins)',
      data: [0.31, 0.11, 0.25, 0.22, 0.12, 0.19, 0.18, 0.24, 0.15, 0.25, 0.28, 0.20],
      borderColor: ' rgb(98, 58, 162,0.5 )',
      borderWidth: 4,
      backgroundColor: ' rgb(98, 58, 162,0.3 )',
      tension: 0.5,
      fill: 'origin',
    },
    {
      label: 'Total Budgets Per Session',
      data: [0.11, 0.29, 0.10, 0.28, 0.13, 0.18, 0.21, 0.19, 0.23, 0.24, 0.29, 0.14],
      borderColor: 'rgba(246, 107, 78, 0.5)',
      borderWidth: 4,
      backgroundColor: 'rgba(246, 107, 78, 0.3)',
      tension: 0.5,
      fill: 'origin',
    },
  ],
  labels: [ '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032' ],
};
export let monthly: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Amount Used(Mins)',
      data: [0.12, 0.19, 0.18, 0.24, 0.15, 0.25, 0.28, 0.20, 0.31, 0.11, 0.25, 0.22],
      borderColor: ' rgb(98, 58, 162,0.5 )',
      borderWidth: 4,
      backgroundColor: ' rgb(98, 58, 162,0.3 )',
      tension: 0.5,
      fill: 'origin',
    },
    {
      label: 'Total Budgets Per Session',
      data: [0.18, 0.21, 0.19, 0.23, 0.24, 0.29, 0.14, 0.11, 0.29, 0.10, 0.28, 0.13],
      borderColor: 'rgba(246, 107, 78, 0.5)',
      borderWidth: 4,
      backgroundColor: 'rgba(246, 107, 78, 0.3)',
      tension: 0.5,
      fill: 'origin',
    },
  ],
  labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
};
export let daily: ChartConfiguration['data'] = {
  datasets: [
    {
      label: 'Amount Used(Mins)',
      data: [0.15, 0.25, 0.28, 0.20, 0.31, 0.11, 0.25, 0.22, 0.12, 0.19, 0.18, 0.24],
      borderColor: ' rgb(98, 58, 162,0.5 )',
      borderWidth: 4,
      backgroundColor: ' rgb(98, 58, 162,0.3 )',
      tension: 0.5,
      fill: 'origin',
    },
    {
      label: 'Total Budgets Per Session',
      data: [0.23, 0.24, 0.29, 0.14, 0.11, 0.29, 0.10, 0.28, 0.13, 0.18, 0.21, 0.19],
      borderColor: 'rgba(246, 107, 78, 0.5)',
      borderWidth: 4,
      backgroundColor: 'rgba(246, 107, 78, 0.3)',
      tension: 0.5,
      fill: 'origin',
    },
  ],
  labels: [ '1', '2', '3', '4', '5', '6', '7 ', '8', '9', '10', '11', '12' ],
};


export let period:any = {
  daily  : { id: "daily"  , label: "Daily"  , data: daily   },
  monthly: { id: "monthly", label: "Monthly", data: monthly },
  yearly : { id: "yearly" , label: "Yearly" , data: yearly  },
};