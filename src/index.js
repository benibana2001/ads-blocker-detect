const message = {
  off: 'お使いのブラウザのアドブロックは無効になっているようです。',
  on: 'お使いのブラウザのアドブロックは有効になっているようです。',
}

if (document.getElementById('HuYdWNOGMALb')) {
  console.log('ADS: OFF')
  alert(message.off)
} else {
  console.log('ADS: ON')
  alert(message.on)
}
