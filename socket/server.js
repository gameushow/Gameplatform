var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var minute = 999;
var second = 999;

server.listen(process.env.PORT || 5000, () => {
  console.log('Start GateWay by zompong')
})// WARNING: app.listen(80) will NOT work here!



//io = everyone can get when connect
//socket = user on that time coming
io.on('connection', function (socket) {

  app.get('/timer', function (req, res) {
    minute = req.query.minute;
    second = req.query.second;
    time = [
      minute,second
    ];
    console.log(time)
    console.log(io.emit('boardCastTimeForTimer',time));
    res.send('<p>minute = '+minute+' second = '+second+'</p>');
  });

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

  socket.on('boardCastTimeForTimer', message => {
    console.log(message);
    io.emit('boardCastTimeForTimer',message);
  })

  socket.on('boardCastStartGame', message => {
    console.log(message);
    io.emit('boardCastStartGame',message);
  })

  socket.on('boardCastRandomTeam', message => {
    console.log(message);
    io.emit('boardCastRandomTeam',message);
  })
  
  socket.on('boardCastScore', message => {
    console.log(message);
    io.emit('boardCastScore',message);
  })
  
  socket.on('boardCastSendQuestion', message => {
    console.log(message);
    io.emit('boardCastSendQuestion',message);
  })

  socket.on("updateScoreBoard", async () => {
    io.emit('updateScoreBoard');
  })
})
