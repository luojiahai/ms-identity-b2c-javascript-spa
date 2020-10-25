function callApi(endpoint, token) {
    
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
  
    headers.append("Authorization", bearer);
  
    const options = {
        method: "GET",
        headers: headers
      };
  
    logMessage('Calling Web API...');
    
    fetch(endpoint, options)
      .then(response => response.json())
      .then(response => {

        if (response) {
          response.text().then(function (text) {
            logMessage('Web API responded: ' + text);
          });
        }
        
        return response;
      }).catch(error => {
        console.error(error);
      });
  }