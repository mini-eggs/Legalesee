import LegaleseeSockets from './sockets'
export { LegaleseeSockets }

export default app /* express app */ => {

  // example
  app.all('/legalesee', (req, res) => {
    res.json({ message: 'welcome to legalesee server' })
  })

}