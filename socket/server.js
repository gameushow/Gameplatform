var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(process.env.PORT || 5000, () => {
  console.log('Start GateWay by zompong')
})// WARNING: app.listen(80) will NOT work here!

//io = everyone can get when connect
//socket = user on that time coming
io.on('connection', function (socket) {
  console.log('user connected')
  io.emit('login_notification',  'new users login' )

  socket.on('disconnect', function () {
    io.emit('user_disconnected', 'user has disconnected' )
    console.log('user disconnected')
  })

  socket.on('sendMessage', message => {
    console.log(message)
    if(message){
      io.emit('boardCastMessage',`${message[0] || 'guest'} said : ${message[1]}`)
    }
  })
})
