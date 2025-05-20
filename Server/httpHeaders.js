const http = require("http");
const SuccessCode = 200;
const messageCode = "data rectrived successfully";

const data = {
  name: "Muni",
  age: 23,
  role: "mern stack developer",
  gender: "male",
};
const data1 = {
  name: "Car2",
  color: "red",
};
const data2 = {
  name: "car3",
  color: "green",
};
const data3 = {
  name: "car4",
  color: "black",
};
const data4 = {
  name: "car4",
  color: "pink",
};
const data5 = {
  name: " car5",
  colors: "gray",
};
// create the object to display in browser
const resData = {
  // status: SuccessCode,
  // message: messageCode,
  res: data,
  res2: data1,
};

// nested array
const Details = [data, data1, data2, data3, data4, data5];

const server = http.createServer((req, res) => {
  res.writeHead(201, { "content-Type": "application/json" });
  // res.write(JSON.stringify(resData));
  res.write(JSON.stringify(Details));
  res.end();
});

server.listen(3003, () => {
  console.log("ported is connected here!");
});
