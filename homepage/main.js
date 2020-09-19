const requestURL = "homepage/links.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const links = jsonObject['links'];
    for (let i = 0; i < links.length; i++ ) {
        let li = document.createElement("li");
        let a = document.createElement("a");

        a.textContent = links[i].label;
        a.setAttribute("href", links[i].url);

        li.appendChild(a);

        document.getElementById('assignment-list').appendChild(li);

    }
    
});