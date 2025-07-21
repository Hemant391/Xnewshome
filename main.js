const list = document.getElementById('list');

data.forEach((item, index) => {
  const li = document.createElement('li');
  if (index < 3) li.classList.add('new-notification');
  li.innerHTML = `
    <img src="${item.img}" alt="${item.info.name}">
    <div class="notification-infos">
  <div class="notification-text">
    <a href="#" class="profile-link"><strong>${item.info.name}</strong></a> ${
    item.info.action
  }
    ${
      item.info.postName
        ? ` <a href="#" class="notification-link-post"><strong>${item.info.postName}</strong></a>`
        : ''
    }
    <div class="notification-time">${item.info.time}</div>
  </div>
  ${index < 3 ? '<span class="notification-dot"></span>' : ''}
</div>

    ${
      item.info.picture
        ? `<img class="notification-img" src="${item.info.picture}" alt="related">`
        : ''
    }
    ${
      item.info.privateMessage
        ? `<div class="notification-text-private-message"><p>${item.info.privateMessage}</p></div>`
        : ''
    }
  `;
  list.appendChild(li);
});

document.querySelector('.mark-all-button').addEventListener('click', () => {
  document
    .querySelectorAll('.new-notification')
    .forEach((item) => item.classList.remove('new-notification'));
  document
    .querySelectorAll('.notification-dot')
    .forEach((dot) => (dot.style.display = 'none'));
  document.querySelector('.notifications-counter').textContent = '0';
});

document.querySelectorAll('#list li').forEach((item) => {
  item.addEventListener('click', () => {
    const message = item.querySelector('.notification-text-private-message');
    if (message) {
      message.style.display =
        message.style.display === 'block' ? 'none' : 'block';
    }
  });
});
