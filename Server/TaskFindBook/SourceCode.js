const PORT = 3009;
const SuccessCode = 200;
const SuccessMessage = "Well Come to Book stall";
const InvalidCode = 404;
const InvalidMessage = "Please Enter the Valid String";
const SuccessCode2 = 200;
const MessageSuccess = "Book details matched below showed the details of books";
const Invalid = 404;
const MessageInvalid = "Books is not found Please try again later!";

// Book information

Books = [
  {
    id: 1,
    name: "class1",
    price: 100,
  },
  {
    id: 2,
    class: "class2",
    price: 150,
  },
  {
    id: 3,
    class: "class3",
    price: 200,
  },
  {
    id: 4,
    class: "class4",
    price: 250,
  },
  {
    id: 5,
    class: "class5",
    price: 150,
  },
  {
    id: 6,
    class: "class6",
    price: 150,
  },
  {
    id: 7,
    class: "class7",
    price: 150,
  },
  {
    id: 8,
    class: "class8",
    price: 150,
  },
  {
    id: 9,
    class: "class9",
    price: 150,
  },

  {
    id: 10,
    class: "class10",
    price: 150,
  },
];

module.exports = {
  PORT,
  SuccessCode,
  SuccessMessage,
  InvalidCode,
  InvalidMessage,
  SuccessCode2,
  MessageSuccess,
  Invalid,
  MessageInvalid,
  Books
};
