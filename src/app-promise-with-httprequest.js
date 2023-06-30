function loadDogImageUrl() {
    return new Promise((resolve, reject) => {
      const DOGS_API = "https://dog.ceo/api/breeds/image/random";
      var httpRequest = new XMLHttpRequest();
      
      httpRequest.open("GET", `${DOGS_API}`, true);

      httpRequest.onload = () => {
        let responseFromAPI = httpRequest.responseText;
        let jsonResponse = JSON.parse(responseFromAPI);
        let dogImageURL = jsonResponse.message;
        resolve(dogImageURL);
      };
  
      httpRequest.onerror = () => {
        reject("Request failed!");
      };
  
      httpRequest.send();
    });
  }
  
  // Task 1
  console.log("Loading Url...");
  
  loadDogImageUrl().then((result) => {
    console.log("Url loaded => ", result);
    document.querySelector("#dog").setAttribute('src', result)
  });
  
  
  // Task 2
  console.log("Check the next task while loading the image.");