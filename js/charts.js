const ctx1 = document.getElementById('moneyChart');
const ctx2 = document.getElementById('goalsChart');


new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [100, 30, 3, 25, 50, 46],
        //backgroundColor: 
        //['rgba(32, 181, 238, 0.67)',
        //'rgba(1, 112, 223, 0.00)'],
        backgroundColor: (context) => {
            const bgColor = [
                'rgba(32, 181, 238, 0.67)',
                'rgba(1, 112, 223, 0.00)'
            ];
    
            if (!context.chart.chartArea) {
                return;
            }
            console.log(context.chart.chartArea);
            const { ctx, data, chartArea: {top, bottom} } = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0, bgColor[0]);
            gradientBg.addColorStop(0.5, bgColor[1]);
            return gradientBg;
        },
        borderColor: "#009FDF",
        fill: true,
        borderWidth: 1,
        tension: 0.1,
        pointRadius: 0,
      }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        data: [100, 30, 3, 25, 50, 46],
        //backgroundColor: 
        //['rgba(32, 181, 238, 0.67)',
        //'rgba(1, 112, 223, 0.00)'],
        backgroundColor: (context) => {
            const bgColor = [
                'rgba(32, 181, 238, 0.67)',
                'rgba(1, 112, 223, 0.00)'
            ];
    
            if (!context.chart.chartArea) {
                return;
            }
            console.log(context.chart.chartArea);
            const { ctx, data, chartArea: {top, bottom} } = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0, bgColor[0]);
            gradientBg.addColorStop(0.5, bgColor[1]);
            return gradientBg;
        },
        borderColor: "#009FDF",
        fill: true,
        borderWidth: 1,
        tension: 0.1,
        pointRadius: 0,
      }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });