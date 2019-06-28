
function uvCheckA() {
    fetch('https://api.openuv.io/api/v1/uv?lat=52.1&lng=4.3', {
        headers: {
            'x-access-token': '249009029fdd1c68cc26a3efc9ec4dbd'
  } }) .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataAA) {
    drawUvA(dataAA); })  
    .catch(function() { // catch any errors 
  }); }

function uvCheckB() {
    fetch('https://api.openuv.io/api/v1/uv?lat=-8.4&lng=114.83', {
        headers: {
            'x-access-token': '249009029fdd1c68cc26a3efc9ec4dbd'
  } }) .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataBB) {
    drawUvB(dataBB); })  
    .catch(function() { 
        console.log(); // catch any errors 
  }); }

function uvCheckC() {
    fetch('https://api.openuv.io/api/v1/uv?lat=21.3&lng=-157.9', {
        headers: {
            'x-access-token': '249009029fdd1c68cc26a3efc9ec4dbd'
  } }) .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataCC) {
    drawUvC(dataCC); })  
    .catch(function() { // catch any errors 
  }); }

function uvCheckD() {
    fetch('https://api.openuv.io/api/v1/uv?lat=-38.36&lng=144.3', {
        headers: {
            'x-access-token': '249009029fdd1c68cc26a3efc9ec4dbd'
  } }) .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataDD) {
    drawUvD(dataDD); })  
    .catch(function() { // catch any errors 
  }); }

function uvCheckE() {
    fetch('https://api.openuv.io/api/v1/uv?lat=50.4&lng=-5', {
        headers: {
            'x-access-token': '249009029fdd1c68cc26a3efc9ec4dbd'
  } }) .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataE) {
    drawUvE(dataE); })  
    .catch(function() { // catch any errors 
  }); }

function uvCheckF() {
    fetch('https://api.openuv.io/api/v1/uv?lat=-17.8&lng=-149.3', {
        headers: {
            'x-access-token': '249009029fdd1c68cc26a3efc9ec4dbd'
  } }) .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataF) {
    drawUvF(dataF); })  
    .catch(function() { // catch any errors 
  }); }


function drawUvA(dataAA) {
	var Uv = parseFloat(dataAA.result.uv)
    var Uvfixed = parseFloat(Math.round(Uv * 100) / 100).toFixed(2);
    var UvMax = parseFloat(dataAA.result.uv_max)
    var UvMaxfixed = parseFloat(Math.round(UvMax * 100) / 100).toFixed(2)
	document.getElementById("uvA").innerHTML = 'uv index: ' + Uvfixed;
    document.getElementById("uvMaxA").innerHTML = 'max uv: ' + UvMaxfixed;
}
function drawUvB(dataBB) {
	var Uv = parseFloat(dataBB.result.uv)
    var Uvfixed = parseFloat(Math.round(Uv * 100) / 100).toFixed(2);
    var UvMax = parseFloat(dataBB.result.uv_max)
    var UvMaxfixed = parseFloat(Math.round(UvMax * 100) / 100).toFixed(2)
	document.getElementById("uvB").innerHTML = Uvfixed + 'uv';
    document.getElementById("uvMaxB").innerHTML = 'max uv: ' + UvMaxfixed;
}
function drawUvC(dataCC) {
	var Uv = parseFloat(dataCC.result.uv)
    var Uvfixed = parseFloat(Math.round(Uv * 100) / 100).toFixed(2);
    var UvMax = parseFloat(dataCC.result.uv_max)
    var UvMaxfixed = parseFloat(Math.round(UvMax * 100) / 100).toFixed(2)
	document.getElementById("uvC").innerHTML = Uvfixed + 'uv';
    document.getElementById("uvMaxC").innerHTML = 'max uv: ' + UvMaxfixed;
}
function drawUvD(dataDD) {
	var Uv = parseFloat(dataDD.result.uv)
    var Uvfixed = parseFloat(Math.round(Uv * 100) / 100).toFixed(2);
    var UvMax = parseFloat(dataDD.result.uv_max)
    var UvMaxfixed = parseFloat(Math.round(UvMax * 100) / 100).toFixed(2)
	document.getElementById("uvD").innerHTML = Uvfixed + 'uv';
    document.getElementById("uvMaxD").innerHTML = 'max uv: ' + UvMaxfixed;
}
function drawUvE(dataEE) {
	var Uv = parseFloat(dataEE.result.uv)
    var Uvfixed = parseFloat(Math.round(Uv * 100) / 100).toFixed(2);
    var UvMax = parseFloat(dataEE.result.uv_max)
    var UvMaxfixed = parseFloat(Math.round(UvMax * 100) / 100).toFixed(2)
	document.getElementById("uvE").innerHTML = Uvfixed + 'uv';
    document.getElementById("uvMaxE").innerHTML = 'max uv: ' + UvMaxfixed;
}
function drawUvF(dataFF) {
	var Uv = parseFloat(dataFF.result.uv)
    var Uvfixed = parseFloat(Math.round(Uv * 100) / 100).toFixed(2);
    var UvMax = parseFloat(dataFF.result.uv_max)
    var UvMaxfixed = parseFloat(Math.round(UvMax * 100) / 100).toFixed(2)
	document.getElementById("uvF").innerHTML = Uvfixed + 'uv';
    document.getElementById("uvMaxF").innerHTML = 'max uv: ' + UvMaxfixed;
}


function weatherCheckA() {
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=52.1&lon=4.3&units=metric&appid=ce3c188d4f921bf708670569c438cdd5')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataA) {
    drawWeatherA(dataA); })  
    .catch(function() { // catch any errors 
  }); }
    
function weatherCheckB() {
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=-8.4&lon=114.8&units=metric&appid=ce3c188d4f921bf708670569c438cdd5')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataB) {
    drawWeatherB(dataB);  })
  .catch(function() { // catch any errors
  }); }

function weatherCheckC() {
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=21.3&lon=-157.9&units=metric&appid=ce3c188d4f921bf708670569c438cdd5') 
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataC) {
    drawWeatherC(dataC);  })
  .catch(function() { // catch any errors
  }); }

function weatherCheckD() {
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=-38.36&lon=144.3&units=metric&appid=ce3c188d4f921bf708670569c438cdd5')
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataD) {
    drawWeatherD(dataD);  })
  .catch(function() { // catch any errors
  }); }

function weatherCheckE() {
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=50.4&lon=-5&units=metric&appid=ce3c188d4f921bf708670569c438cdd5')
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataE) {
    drawWeatherE(dataE);  })
  .catch(function() { // catch any errors
  }); }

function weatherCheckF() {
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=-17.8&lon=-149.3&units=metric&appid=ce3c188d4f921bf708670569c438cdd5')
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(dataF) {
    drawWeatherF(dataF);  })
  .catch(function() { // catch any errors
  }); }


function drawWeatherA(dataA) {
	var celcius = Math.round(parseFloat(dataA.main.temp));
	document.getElementById("tempA").innerHTML = celcius + '&deg;C';
}
function drawWeatherB(dataB) {
    var celcius = Math.round(parseFloat(dataB.main.temp));
	document.getElementById("tempB").innerHTML = celcius + '&deg;C';
}
function drawWeatherC(dataC) {
    var celcius = Math.round(parseFloat(dataC.main.temp));
	document.getElementById("tempC").innerHTML = celcius + '&deg;C';
}
function drawWeatherD(dataD) {
    var celcius = Math.round(parseFloat(dataD.main.temp));
	document.getElementById("tempD").innerHTML = celcius + '&deg;C';
}
function drawWeatherE(dataE) {
    var celcius = Math.round(parseFloat(dataE.main.temp));
	document.getElementById("tempE").innerHTML = celcius + '&deg;C';
}
function drawWeatherF(dataF) {
    var celcius = Math.round(parseFloat(dataF.main.temp));
	document.getElementById("tempF").innerHTML = celcius + '&deg;C';
}
    

function onA() {
    weatherCheckA();   
    uvCheckA();
  document.getElementById("overlayA").style.display = "block";
}

function offA() {
  document.getElementById("overlayA").style.display = "none";
}


function onB() {
    weatherCheckB();   
    uvCheckB();
  document.getElementById("overlayB").style.display = "block";
}

function offB() {
  document.getElementById("overlayB").style.display = "none";
}


function onC() {
    weatherCheckC();   
    uvCheckC();
  document.getElementById("overlayC").style.display = "block";
}

function offC() {
  document.getElementById("overlayC").style.display = "none";
}


function offD() {
  document.getElementById("overlayD").style.display = "none";
}

function onD() {
    weatherCheckD();   
    uvCheckD();
  document.getElementById("overlayD").style.display = "block";
}


function onE() {
    weatherCheckE();   
    uvCheckE();
  document.getElementById("overlayE").style.display = "block";
}

function offE() {
  document.getElementById("overlayE").style.display = "none";
}


function onF() {
    weatherCheckF();   
    uvCheckF();
  document.getElementById("overlayF").style.display = "block";
}


function offF() {
  document.getElementById("overlayF").style.display = "none";
}


//Scheveningen
//http://api.openweathermap.org/data/2.5/weather?lat=52.1&lon=4.3&units=metric%APPID=ce3c188d4f921bf708670569c438cdd5

//https://www.metaweather.com/api/location/search/?lattlong=52.1,4.3