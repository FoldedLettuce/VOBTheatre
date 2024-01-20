jQuery(function ($) {
  // Set tab 0 as active tab
  $('.movies').tabs({
    active: 0
  });

  // Page navigation
  $('.movies #day1').find('.day1-time').css('display', 'inline-block');
  $('.movies #day2').find('.day2-time').css('display', 'inline-block');
  $('.movies #day3').find('.day3-time').css('display', 'inline-block');
  $('.movies #day4').find('.day4-time').css('display', 'inline-block');
  $('.movies #day5').find('.day5-time').css('display', 'inline-block');
  $('.movies #day6').find('.day6-time').css('display', 'inline-block');
  $('.movies #day7').find('.day7-time').css('display', 'inline-block');

  // Populate dates
  var weekday=new Array(14);
  weekday[0]="Sun";
  weekday[1]="Mon";
  weekday[2]="Tue";
  weekday[3]="Wed";
  weekday[4]="Thur";
  weekday[5]="Fri";
  weekday[6]="Sat";
  weekday[7]="Sun";
  weekday[8]="Mon";
  weekday[9]="Tue";
  weekday[10]="Wed";
  weekday[11]="Thur";
  weekday[12]="Fri";
  weekday[13]="Sat";

  document.getElementById('navday1').innerHTML = ('<h2 class="text-center text-3xl">' + new Date().getDate() + '</h2>' + new Date().toLocaleDateString('en', {weekday:'short'}));
  document.getElementById('navday2').innerHTML = ('<h2 class="text-center text-3xl">' + (new Date().getDate()  + 1) + '</h2>' + weekday[new Date().getDay() + 1]);
  document.getElementById('navday3').innerHTML = ('<h2 class="text-center text-3xl">' + (new Date().getDate()  + 2) + '</h2>' + weekday[new Date().getDay() + 2]);
  document.getElementById('navday4').innerHTML = ('<h2 class="text-center text-3xl">' + (new Date().getDate()  + 3) + '</h2>' + weekday[new Date().getDay() + 3]);
  document.getElementById('navday5').innerHTML = ('<h2 class="text-center text-3xl">' + (new Date().getDate()  + 4) + '</h2>' + weekday[new Date().getDay() + 4]);
  document.getElementById('navday6').innerHTML = ('<h2 class="text-center text-3xl">' + (new Date().getDate()  + 5) + '</h2>' + weekday[new Date().getDay() + 5]);
  document.getElementById('navday7').innerHTML = ('<h2 class="text-center text-3xl">' + (new Date().getDate()  + 6) + '</h2>' + weekday[new Date().getDay() + 6]);



  $.ajax({"url": "https://api.npoint.io/18ce21ad1805e706f06b","method": "GET","timeout": 0, "dataType": "text",}).done(function (response) {
    var jsonData = JSON.parse(response);

    function convertDate(daysToAdd) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + daysToAdd);
    
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getDate().toString().padStart(2, '0');
    
      return `${year}${month}${day}`;
    }
    
    // Examples
    console.log(convertDate(0)); // Today's date
    console.log(convertDate(1)); // Tomorrow's date
    console.log(convertDate(2)); // Date 2 days after today
    console.log(convertDate(3)); // Date 3 days after today
    

    for(i = 0; i < 7; i++) {
      // Skip 3rd movie on webpage (Default true)
      var skip3 = true;

      if(jsonData['s' + convertDate(i)]["movies"] == 3) {
        skip3 = false;
      }

      var currentnum = 1;

      for (const key in jsonData['s' + convertDate(i)]) {
        if (key !== "movies" && typeof jsonData['s' + convertDate(i)][key] === "object") {
          const movieData = jsonData['s' + convertDate(i)][key];
          const { name, posterurl, synopsis, genre, runtime, numshowtimes, showtime1, showtime2, showtime3 } = movieData;
            
          if(currentnum < 3 || currentnum === 3 && skip3 === false) {
            var showtimes;
            if(numshowtimes == 1) {
              showtimes = `<span class="time ">${showtime1}</span>`
            } else if(numshowtimes == 2) {
              showtimes = `<span class="time ">${showtime1}</span><span class="time ">${showtime2}</span>`
            } else if(numshowtimes == 3) {
              showtimes = `<span class="time ">${showtime1}</span><span class="time ">${showtime2}</span><span class="time ">${showtime3}</span>`
            }

            document.getElementById('day' +  (i + 1)).innerHTML = document.getElementById('day' +  (i + 1)).innerHTML + ('<div class="row movie-tabs"><div class="col-md-2 col-sm-3"><a title="' + name +'"><img decoding="async" src="' + posterurl + '" style="height:250px" alt="' + name + '"></a></div><div class="col-md-10 col-sm-9"><span class="title">' +  genre + '</span><header><h3 class="no-underline">' + name + '</h3></header><p>' + synopsis + '</p><div class="row"><div class="col-md-8 col-sm-9"><hr class="space-10"><span class="viewing-times"><i class="fa fa-clock-o"></i>Showtimes</span><ul class="show-times"><li class="day1-time today" style="display: inline-block">' + showtimes + '</li></ul></div><div class="col-md-4 col-sm-3 running-time"><hr class="space-10">' + runtime + '</div></div></div></div>');
            console.log(name + posterurl + synopsis + genre + runtime + numshowtimes + showtime1 + showtime2 + showtime3)
            console.log("Added movie #" + currentnum);
            currentnum += 1;
          }
        }
      }
    }
  });







  var posterurl = "https://obserlabs.com";
  var name = "OPPENHEIMERRRRRRRRRR";
  var posterurl = "img/movieposter.jpg";
  var genre = "your mom";
  var synopsis = "yea yea synopsis here lol";
  var runtime = "69 mins";
});