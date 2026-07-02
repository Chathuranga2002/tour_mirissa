fetch("data/prices.json")

.then(response => response.json())

.then(data => {

const whale = data.whaleWatching;

document.getElementById("adultPrice").innerHTML =
"LKR " + whale.adult.toLocaleString();

document.getElementById("childPrice").innerHTML =
"LKR " + whale.child.toLocaleString();

document.getElementById("infantPrice").innerHTML =
whale.infant;

document.getElementById("departureTime").innerHTML =
whale.departure;

document.getElementById("tourDuration").innerHTML =
whale.duration;

document.getElementById("pickupInfo").innerHTML =
whale.pickup;

});