function getEarthquakes(phoneNum) {
    var phoneNum = document.getElementById('phoneNum').value;
    var mag = document.getElementById('mag').value;
    var lat = document.getElementById('lat').value;
    var long = document.getElementById('long').value;
    var radius = document.getElementById('radius').value;

    var messages = [];
    var startTime = new Date().toISOString().substring(0,10);
    var maxradiusKm = radius * 1.60934;
    var fetchUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=" 
            + startTime + "&latitude="
            + lat + "&longitude="
            + long + "&maxradiuskm="
            + maxradiusKm + "&minmagnitude="
            + mag;
   
    fetch(fetchUrl).then(
        res => {
            res.json().then(
                data => {
                    data.features.forEach(u => {
                        const quakeMag = Math.round(quake.properties.mag * 1e2) / 1e2;
                        const place = quake.properties.place;

                        messages.push({
                                    body: quakeMag.toString() +" magnitude "+ place,
                                    to: "+1"+phoneNum
                                    });

                        
                    })
                    console.log(data);
                }
            )
        }
    )
}