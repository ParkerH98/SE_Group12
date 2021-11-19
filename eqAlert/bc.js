

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


