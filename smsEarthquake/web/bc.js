
var formsub = document.getElementById('formsub');
var button = document.getElementById('submit-button');
var phoneNum = document.getElementById('phoneNum');
var mag = document.getElementById('mag');
var lat = document.getElementById('lat');
var long = document.getElementById('long');
var radius = document.getElementById('radius');

button.addEventListener('click', function (ev) {
    
    ev.preventDefault();
    ev.stopPropagation();
    var body = {
        "phoneNum": phoneNum.value,
        "lat": lat.value,
        "long": long.value,
        "radius": radius.value,
        "magnitude": mag.value
    }
    fetch("http://localhost:7071/api/formsSubmit", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
});


fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson').then(
    res => {
        res.json().then(
            data => {
                var temp = "";
                data.features.forEach(u => {
                    temp += "<tr>";
                    temp += "<td>" + Math.round(u.properties.mag * 1e2) / 1e2 + "</td>";
                    temp += "<td>" + u.properties.place + "</td>";
                    var utcSeconds = u.properties.time;
                    var d = new Date(utcSeconds);
                    temp += "<td>" + d + "</td>";
                    temp += "<td>" + u.geometry.coordinates[0] + "</td>";
                    temp += "<td>" + u.geometry.coordinates[1] + "</td>";
                    temp += "<td>" + Math.round(u.geometry.coordinates[2] * 1e2) / 1e2 + "</td></tr>";

                    
                })
                document.getElementById("hourData").innerHTML = temp;
                console.log(data);
            }
        )
    }
)
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson').then(
    res => {
        res.json().then(
            data => {
                var temp = "";
                data.features.forEach(u => {
                    temp += "<tr>";
                    temp += "<td>" + Math.round(u.properties.mag * 1e2) / 1e2 + "</td>";
                    temp += "<td>" + u.properties.place + "</td>";
                    var utcSeconds = u.properties.time;
                    var d = new Date(utcSeconds);
                    temp += "<td>" + d + "</td>";
                    temp += "<td>" + u.geometry.coordinates[0] + "</td>";
                    temp += "<td>" + u.geometry.coordinates[1] + "</td>";
                    temp += "<td>" + Math.round(u.geometry.coordinates[2] * 1e2) / 1e2 + "</td></tr>";

                    
                })
                document.getElementById("dayData").innerHTML = temp;
            }
        )
    }
)
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(
    res => {
        res.json().then(
            data => {
                var temp = "";
                data.features.forEach(u => {
                    temp += "<tr>";
                    temp += "<td>" + Math.round(u.properties.mag * 1e2) / 1e2 + "</td>";
                    temp += "<td>" + u.properties.place + "</td>";
                    var utcSeconds = u.properties.time;
                    var d = new Date(utcSeconds);
                    temp += "<td>" + d + "</td>";
                    temp += "<td>" + u.geometry.coordinates[0] + "</td>";
                    temp += "<td>" + u.geometry.coordinates[1] + "</td>";
                    temp += "<td>" + Math.round(u.geometry.coordinates[2] * 1e2) / 1e2 + "</td></tr>";
                    
                })
                document.getElementById("weekData").innerHTML = temp;
            }
        )
    }
)
