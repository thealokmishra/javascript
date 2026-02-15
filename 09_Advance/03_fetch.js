// in js event loop we have a microtask queue (priority queue) specially for promises like fetch api which is used to make network request and it returns a promise

fetch("https://api.github.com/users/thealokmishra")
  .then((response) => {
    //return response
    return response.json();
  })
  .then((data) => {
    //handle data from response
    console.log(data);
  })
  .catch((error) => console.log(error)); //handle error

//  ********** when fetch is called there are two thing happening***********
// 1. fetch in first part reserves spot array in memory i)onfulfilled ii)onrejection and waits for the response that'll come from network request
// 2. the second part performs the network request and sends the response to onfulfill (promise resolved) or onreject (promise rejected), if the request was successful and any response is received from server either data or error like 404 not found then it will be sent to onfulfilled
// in case the request could not be made due to some reason like network error then it will be sent to onrejection, also known as reject
