//    everything will occur when we click the button.
    var pageCounter = 1; 
    var botone = document.getElementById("btn");
    var contenedor = document.getElementById("container");
    botone.addEventListener("click", function(){
        //instance of the XMLHttpRequest object to work with the json
        var myRequest = new XMLHttpRequest();
        //opening the json    
        myRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
        //This is what to do with the json info
        myRequest.onload = function(){
                    var ladata = JSON.parse(myRequest.responseText);
                    // when click the button also run the ponerENhtml function with the data array as parameter
                    ponerENhtml(ladata);
            }
        //Finally this is to get the info from the json
        myRequest.send(); 
        pageCounter++;
        //Check when there are no more urls to show
        if (pageCounter > 3) {
            botone.classList.add("zoomOutLeft");
        }
    });
    
//    Function to insert json data into html div, data is the parameter representing the json array.
    function ponerENhtml(data){
        var stringToprint = "";
        // looping the whole json array
        for (i = 0; i< data.length; i++) {
            // add stringtoprint over and over (+=) every time click the button
            stringToprint += "<p>" + data[i].name + " is a " + data[i].species + " ";
             
            //Lets create another loop so we can get values from the array inside the object
            for (j = 0; j < data[i].foods.likes.length; j++) {
                stringToprint += data[i].foods.likes[j] + " "; 
            }
            stringToprint += "</p>"; 
        // now lets put it into the div
            
        }
        contenedor.insertAdjacentHTML('beforeend',stringToprint);    
    }
