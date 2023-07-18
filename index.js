const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http,{cors:{"origin":[
    "http://localhost:3000",
  ],
  credentials: true,
}});

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('message', (data) => {
    socket.join(data.room);
    console.log(`User joined room ${data.room}`);
  });

  // console.log(socket.id)
  socket.on('message', (data) => {
    io.to(data.room).emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// setInterval(()=>{console.log(io.engine.clientsCount, io.of("/").sockets.size);
// },2000)

http.listen(5000, () => {
  console.log('listening on : 5000');
});

const path=require("path");

app.use(express.static('client/build'));
 app.get('*', (req, res) => {
        res.sendFile(path.resolve('client','build','index.html'));
});