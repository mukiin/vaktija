$(document).ready(function(){
	'use strict';
  });
  
  function get_azan_time(selectObject) {
	  var city = selectObject.value;
	  var country = "Slovenia";
	
	  var azan_time_json_url = "https://api.aladhan.com/v1/timingsByCity?city=" + city + "&country=" + country + "&method=6&tune=2,0,0,1,1,0,1,1,1";
	  var namaz_time_json_url = "https://api.aladhan.com/v1/timingsByCity?city=" + city + "&country=" + country + "&method=6&tune=2,10,11,11,11,10,11,11,11";
	  // Fetch Azan timings
	  $.getJSON(azan_time_json_url, function(data) {
		"use strict";
		var status = data.code;
		var timings = data.data.timings; // Azan Timings
	
		if (status == 200) {
		  $(".fajr-azan-time").html(get_meridian(timings.Fajr));
		  $(".sunrise-azan-time").html(get_meridian(timings.Sunrise));
		  $(".zohar-azan-time").html(get_meridian(timings.Dhuhr));
		  $(".asr-azan-time").html(get_meridian(timings.Asr));
		  $(".maghrib-azan-time").html(get_meridian(timings.Maghrib));
		  $(".isha-azan-time").html(get_meridian(timings.Isha));
		  $(".juma-azan-time").html(get_meridian(timings.Sunset));
	
		  // Clear previous styles
		  $(".prayer-name").css({ "font-weight": "normal", "color": "black" });

		  // Highlight and bold the current prayer in progress		  
		  var now = new Date();
		  var currentTime = now.getHours() * 60 + now.getMinutes();		  
		  
		  if (currentTime >= get_minutes(timings.Fajr) && currentTime < get_minutes(timings.Sunrise)) {
			$(".fajr-azan-time").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
			$(".fajr-azan-prayer").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
			$(".prayer-name").filter(":contains('Fedžr')").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		  } else if (currentTime >= get_minutes(timings.Sunrise) && currentTime < get_minutes(timings.Dhuhr)) {
		   // $(".sunrise-azan-time").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		   // $(".sunrise-azan-prayer").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		   // $(".prayer-name").filter(":contains('Sunrise')").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		  } else if (currentTime >= get_minutes(timings.Dhuhr) && currentTime < get_minutes(timings.Asr)) {
			$(".zohar-azan-time").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
			$(".zohar-azan-prayer").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
			$(".prayer-name").filter(":contains('Zuhr')").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		  } else if (currentTime >= get_minutes(timings.Asr) && currentTime < get_minutes(timings.Maghrib)) {
			$(".asr-azan-time").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
			$(".asr-azan-prayer").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
			$(".prayer-name").filter(":contains('Asr')").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		  } else if (currentTime >= get_minutes(timings.Maghrib) && currentTime < get_minutes(timings.Isha)) {
			$(".maghrib-azan-time").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
			$(".maghrib-azan-prayer").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
			$(".prayer-name").filter(":contains('Magrib')").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		  } else if (currentTime >= get_minutes(timings.Isha) && currentTime < get_minutes(timings.Fajr)) {
			$(".isha-azan-time").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
			$(".isha-azan-prayer").css({ "font-weight": "bold", "color": "#ff9822" , "font-size": "30px"});
			$(".prayer-name").filter(":contains('Iša')").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		  } else if (currentTime >= get_minutes(timings.Sunset) || currentTime < get_minutes(timings.Fajr)) {
		   // $(".juma-azan-time").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		   // $(".juma-azan-prayer").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		   // $(".prayer-name").filter(":contains('Sončni zahod')").css({ "font-weight": "bold", "color": "#ff9822", "font-size": "30px" });
		}
		} else {
		  // API Not Working
		}
	  });
	
	  // Fetch Prayer timings
	  $.getJSON(namaz_time_json_url, function(data) {
		"use strict";
		var status = data.code;
		var timings = data.data.timings; // Prayer Timings
	
		$("#result-update").html('Vaktija za mesto:' + ' ' + '<span class ="country">' + city + '</span>');
	
		if (status == 200) {
		  $(".fajr-azan-prayer").html(get_meridian(timings.Fajr));
		  $(".sunrise-azan-prayer").html(get_meridian(timings.Sunrise));
		  $(".zohar-azan-prayer").html(get_meridian(timings.Dhuhr));
		  $(".asr-azan-prayer").html(get_meridian(timings.Asr));
		  $(".maghrib-azan-prayer").html(get_meridian(timings.Maghrib));
		  $(".isha-azan-prayer").html(get_meridian(timings.Isha));
		  $(".juma-azan-prayer").html(get_meridian(timings.Sunset));
		} else {
		  // API Not Working
		}
	  });
	}
	
	function get_meridian(ntime) {
	  const timeString = ntime + ':00';
	  const timeObject = new Date('1970-01-01T' + timeString + 'Z');
	  const hours = timeObject.getUTCHours().toString().padStart(2, '0');
	  const minutes = timeObject.getUTCMinutes().toString().padStart(2, '0');
	  return hours + ':' + minutes;
	}
  
	function get_minutes(ntime) {
	  const timeString = ntime + ':00';
	  const timeObject = new Date('1970-01-01T' + timeString + 'Z');
	  return timeObject.getUTCHours() * 60 + timeObject.getUTCMinutes();
	}