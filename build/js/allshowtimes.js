//Convert YYYYMMDD to Month DD, YYYY text
function convertDateText(input) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var year = input.substring(0,4);
  var month = months[input.substring(4,6) - 1];
  var day = input.substring(6,8);

  return `${month} ${day}, ${year}`;
}


//Pull from showtime API
jQuery(function ($) {
  $.ajax({"url": "https://api.npoint.io/18ce21ad1805e706f06b","method": "GET","timeout": 0, "dataType": "text",}).done(function (response) {
    var jsonData = JSON.parse(response); //Set jsonData

    //Index JSON for searching
    var index = [];
    for (var x in jsonData) {
      index.push(x);
    }
    index.sort(function (a, b) {    
      return a == b ? 0 : (a > b ? 1 : -1); 
    }); 

    //Run for every date entry in JSON
    for(i = 0; i < Object.keys(jsonData).length; i++) {
      //Run for "movies" value in JSON
       for(x = 1; x <= jsonData[index[i]].movies; x++) {
        //If movie #1
        if(x==1) {
          //Set values from JSON and convert date + showtimes to text
          const { name, rating, runtime, showtime1, showtime2, showtime3 } = jsonData[index[i]].movie1;
   
          var date = convertDateText(jsonData[index[i]].date);
          var times = showtime1 + ' ' + showtime2 + ' ' + showtime3;

          //Append new movie to 'allshowtimesbody' 
          document.getElementById('allshowtimesbody').innerHTML = document.getElementById('allshowtimesbody').innerHTML + (`<tr class="odd:bg-gray-500 even:bg-gray-400"><td class="px-6 py-4">${date}</td><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${name}</th><td class="px-6 py-4">${runtime}</td><td class="px-6 py-4">${rating}</td><td class="px-6 py-4">${times}</td></tr>`); 
        }
        //If movie #2
        if(x==2) {
          //Set values from JSON and convert date + showtimes to text
          const { name, rating, runtime, showtime1, showtime2, showtime3 } = jsonData[index[i]].movie2;
   
          var date = convertDateText(jsonData[index[i]].date);
          var times = showtime1 + ' ' + showtime2 + ' ' + showtime3;
          
          //Append new movie to 'allshowtimesbody' 
          document.getElementById('allshowtimesbody').innerHTML = document.getElementById('allshowtimesbody').innerHTML + (`<tr class="odd:bg-gray-500 even:bg-gray-400"><td class="px-6 py-4">${date}</td><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${name}</th><td class="px-6 py-4">${runtime}</td><td class="px-6 py-4">${rating}</td><td class="px-6 py-4">${times}</td></tr>`);
        }
        //If movie #3
        if(x==3) {
          //Set values from JSON and convert date + showtimes to text
          const { name, rating, runtime, showtime1, showtime2, showtime3 } = jsonData[index[i]].movie3;
   
          var date = convertDateText(jsonData[index[i]].date);
          var times = showtime1 + ' ' + showtime2 + ' ' + showtime3;
       
          //Append new movie to 'allshowtimesbody' 
          document.getElementById('allshowtimesbody').innerHTML = document.getElementById('allshowtimesbody').innerHTML + (`<tr class="odd:bg-gray-500 even:bg-gray-400"><td class="px-6 py-4">${date}</td><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${name}</th><td class="px-6 py-4">${runtime}</td><td class="px-6 py-4">${rating}</td><td class="px-6 py-4">${times}</td></tr>`);
        }
       }
    }
  });
});