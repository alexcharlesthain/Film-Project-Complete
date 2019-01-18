let JSONarray = [];

function loadDb(){

  let requestURL = "http://localhost:8080/api/films"
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Access-Control-Allow-Origin','*');
  request.responseType = "json"
  request.send();
  request.onload = function() {

    JSONarray = request.response;

  }
}


function searchTitles(film){
  document.getElementById("hey").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].title.includes(film.value.toUpperCase())){

      document.getElementById("hey").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>£"  + JSONarray[i].price + "<br><br>";
    }
  }
}

function showSciFi(film){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].category == "Sci-Fi"){

      document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>£"  + JSONarray[i].price + "<br><br>";
    }
  }
}

function showChildren(film){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].category == "Children"){

      document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>£"  + JSONarray[i].price + "<br><br>";
    }
  }
}

function showFamily(film){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].category == "Family"){

      document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>£"  + JSONarray[i].price + "<br><br>";
    }
  }
}

function showAnimation(film){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].category == "Animation"){

      document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>£"  + JSONarray[i].price + "<br><br>";
    }
  }
}

function showComedy(film){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].category == "Comedy"){

      document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>£"  + JSONarray[i].price + "<br><br>";
    }
  }
}

function showSports(film){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].category == "Sports"){

      document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>£"  + JSONarray[i].price + "<br><br>";
    }
  }
}

function showHorror(film){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].category == "Horror"){

      document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>£"  + JSONarray[i].price + "<br><br>";
    }
  }
}

function showDocumentary(film){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].category == "Documentary"){

      document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>£"  + JSONarray[i].price + "<br><br>";
    }
  }
}
