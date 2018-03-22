var express= require('express')
var socket= require('socket.io')
var app = express()

var server = app.listen(8000,function(err){
   if(err) throw err
   else{
      console.log('listening to port 8000')
   }
})

app.use(express.static('views'))

//socket setup
var io= socket(server)

io.on('connection',function(socket){
  console.log('Client connected to server', socket.id)
  socket.on('chat',function(data){
    io.sockets.emit('chat',data)
  })
})
