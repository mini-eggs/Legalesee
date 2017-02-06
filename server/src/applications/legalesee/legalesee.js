import LegaleseeSockets from './sockets'
export { LegaleseeSockets }

import Read from './business/read/read'

export default (app, parser) => {

  // example
  app.all('/legalesee', (req, res) => {
    res.json({ message: 'welcome to legalesee server' })
  })

  app.post('/legalesee/read', parser, (req, res) => {
    Read(req, res)
  })

}