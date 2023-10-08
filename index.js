const express = require("express");
const app = express();
const http = require('http').Server(app);
const PORT = process.env.PORT || 5000;
const io = require('socket.io')(http
//   ,{cors:{"origin":[
//     "http://localhost:3000",
//   ],
//   credentials: true,
// }}
);

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('message', (data) => {
    socket.join(data.room);
    console.log(`User joined room ${data.room}`);
  });

  // console.log(socket.id)
  socket.on('message', (data) => {
    //  console.log(data.room,data)
    io.to(data.room).emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// setInterval(()=>{console.log(io.engine.clientsCount, io.of("/").sockets.size);
// },2000)

http.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

app.get("/test",(req,res)=>{
  res.send("Testing")
})
app.use("/mail", require("./Routes/MailSender"));

const path=require("path");

app.use((req, res, next) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // console.log(req.headers['x-forwarded-for'], " : ",req.connection.remoteAddress," , ",`User IP: ${clientIp}`)
  // const clientIp = req.ip; // Get the user's IP address from the request
  console.log(`User IP: ${clientIp}`);
  next(); // Call the next middleware in the chain
});

app.use(express.static('client/build'));
 app.get('*', (req, res) => {
        res.sendFile(path.resolve('client','build','index.html'));
});

module.exports = app