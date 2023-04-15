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

export let data: ChartConfiguration['data'] = {
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
  labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July ', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
};