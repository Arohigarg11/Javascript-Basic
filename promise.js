const firstFuntion = () => {
  console.log("First Fucntion is Called");
  return new Promise((resolve, reject) => {
    resolve();
  });
};
 
firstFuntion()
  .then(() => {
    console.log("second function is called");
  })
  .then(() => {
    console.log("third function is called");
  })
  .catch((err) => {
    console.log("Error handled", err);
  })
  .finally(() => {
    console.log("finally called");
  });