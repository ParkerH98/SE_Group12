/* HTTP TIMER
CDB [ phoneNum, mag, lat, long, radius, eqIDs[] ]

For contact in CDB
	EQs[] = Fetch(USGSLastHour(contact.mag,
						contact.lat,
						contact.long,
						contact.radius))
	For quake in EQs[]
		If quake.ID !in contact.eqIDs[]
			twilio(contact.phoneNum, quake)
            contact.eqIDs[].append(quake.ID)
 */

const fetch = require('node-fetch');

module.exports = async function (context, myTimer, contacts) {

    var messages = [];
    var documentsToSave = [];
    for(var contact of contacts) {



        var startTime = new Date().toISOString().substring(0,10);
        var maxradiusKm = contact.radius * 1.60934;
        var fetchUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=" 
                + startTime + "&latitude="
                + contact.lat + "&longitude="
                + contact.long + "&maxradiuskm="
                + maxradiusKm + "&minmagnitude="
                + contact.magnitude;
        var response = await fetch(fetchUrl);
        var EQs = await response.json();
        
        EQs.features.forEach(quake => {
            const quakeMag = Math.round(quake.properties.mag * 1e2) / 1e2;
            const place = quake.properties.place;


            if(contact.eqID.includes[quake.id] == false)
                messages.push({
                    body: quakeMag.toString() +" magnitude "+ place,
                    to: "+1"+contact.phoneNum
                }); 
                context.bindings.messages = messages;
                contact.eqID.push(quake.id);
                documentsToSave.push(contact);
            
        });
        context.bindings.outputDocument = documentsToSave;
    } 
    
};

