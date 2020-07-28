const fs = require('fs')
const secret = JSON.parse(fs.readFileSync('./secret.json', 'UTF-8'))

const config = {
  bridge: {
    name: 'HomeBridge',
    username: 'CC:22:3D:E3:CE:30',
    port: 51826,
    pin: '032-45-154'
  },
  accessories: [{
    accessory: 'XiaomiRoborockVacuum',
    name: 'Раб пылесос',
    pause: true,
    dock: true,
    autoroom: true,
    ip: secret.ip,
    token: secret.token
  }]
}

fs.unlink('./config.json', (err) => {
  fs.writeFileSync(
    './config.json',
    JSON.stringify(config, null, 2),
    'UTF-8'
  )
})

