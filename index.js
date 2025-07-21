const data = [
      { day: "mon", amount: 17.45 },
      { day: "tue", amount: 34.91 },
      { day: "wed", amount: 52.36 },
      { day: "thu", amount: 31.07 },
      { day: "fri", amount: 23.39 },
      { day: "sat", amount: 43.28 },
      { day: "sun", amount: 25.48 }
    ];

    const maxAmount = Math.max(...data.map(item => item.amount));
    const chart = document.getElementById('chart');

    data.forEach((item, index) => {
      const barHeight = (item.amount / maxAmount) * 100;

      const barContainer = document.createElement('div');
      barContainer.className = 'bar-container';

      const bar = document.createElement('div');
      bar.className = 'bar spending-chart__bar';
      bar.style.height = `${barHeight}%`;
      bar.setAttribute('data-label', item.day);
      bar.setAttribute('data-amount', `$${item.amount}`);

      const dayLabel = document.createElement('div');
      dayLabel.className = 'day-label';
      dayLabel.textContent = item.day;

      barContainer.appendChild(bar);
      barContainer.appendChild(dayLabel);
      chart.appendChild(barContainer);
    });

    const today = new Date().getDay(); 
    const adjustedDay = today === 0 ? 6 : today - 1;
    const bars = document.querySelectorAll('.spending-chart__bar');
    if (adjustedDay >= 0 && adjustedDay < bars.length) {
      bars[adjustedDay].classList.add('active');
    }