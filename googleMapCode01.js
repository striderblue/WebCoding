/* Example 1 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// In this example, we center the map, and add a marker, using a LatLng object
// literal instead of a google.maps.LatLng object. LatLng object literals are
// a convenient way to add a LatLng coordinate and, in most cases, can be used
// in place of a google.maps.LatLng object.
let map;

// 14.0200738,100.527984

function initMap() {
    const mapOptions = {
        zoom: 15,
        center: {
            lat: 14.0200738,
            lng: 100.527984
        },
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const marker = new google.maps.Marker({
        // The below line is equivalent to writing:
        // position: new google.maps.LatLng(-34.397, 150.644)
        position: {
            lat: 14.0200738,
            lng: 100.527984
        },
        map: map,
        draggable: true,
    });
    // You can use a LatLng literal in place of a google.maps.LatLng object when
    // creating the Marker object. Once the Marker object is instantiated, its
    // position will be available as a google.maps.LatLng object. In this case,
    // we retrieve the marker's position using the
    // google.maps.LatLng.getPosition() method.
    // const infowindow = new google.maps.InfoWindow({
    //  content: "<p>Marker Location:" + marker.getPosition() + "</p>",
    // });

    function calcDistance(p1, p2) {
        let disTance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
        console.log(disTance);
        return disTance;
    }

    google.maps.event.addListener(marker, "dragend", () => {
        // const infowindow = new google.maps.InfoWindow({
        //     content: "<p>Marker Location:" + marker.getPosition() + "</p>",
        // });
        // infowindow.open(map, marker);
        console.log(marker.getPosition());
        console.log(`lat: ${marker.getPosition().lat()}, long: ${marker.getPosition().lng()}`);
    });
}

window.initMap = initMap;

/* Example 2 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 14.0200738,
            lng: 100.527984
        },
    });

    let marker;
    let markerList = [];

    function calcDistance(pos) {
        console.log(pos);
        let disTance = (google.maps.geometry.spherical.computeDistanceBetween(pos[0], pos[1]) / 1000).toFixed(2);
        console.log(`distance: ${disTance}`);
        //return disTance;
    }

    function placeMarker(position, map) {
        marker = new google.maps.Marker({
            position: position,
            map: map,
            draggable: true,
        });
    }

    map.addListener("click", (event) => {
        console.log(event.latLng);
        console.log(`add marker lat: ${event.latLng.lat()}, long: ${event.latLng.lng()}`);
        markerList.push(event.latLng);
        if (markerList.length == 2) {
            calcDistance(markerList);
        }
        placeMarker(event.latLng, map);
    });

    google.maps.event.addListener(marker, "dragend", () => {
        console.log(marker.getPosition());
        console.log(`lat: ${marker.getPosition().lat()}, long: ${marker.getPosition().lng()}`);
    });

    /*const flightPlanCoordinates = [{
            lat: 37.772,
            lng: -122.214
        },
        {
            lat: 21.291,
            lng: -157.821
        },
        {
            lat: -18.142,
            lng: 178.431
        },
        {
            lat: -27.467,
            lng: 153.027
        },
    ];
    const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    flightPath.setMap(map);*/


}

window.initMap = initMap;

/* Example 3 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example requires the Geometry library. Include the libraries=geometry
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {
            lat: 14.0200738,
            lng: 100.527984
        },
    });

    let marker;
    let markerList = [];

    function calcDistance(pos) {
        console.log(pos);
        let disTance = (google.maps.geometry.spherical.computeDistanceBetween(pos[0], pos[1]) / 1000).toFixed(2);
        console.log(`distance: ${disTance}`);
        //return disTance;
    }

    function placeMarker(position, map) {
        marker = new google.maps.Marker({
            position: position,
            map: map,
            draggable: true,
        });
    }

    map.addListener("click", (event) => {
        console.log(event.latLng);
        console.log(`add marker lat: ${event.latLng.lat()}, long: ${event.latLng.lng()}`);
        markerList.push(event.latLng);
        if (markerList.length == 2) {
            calcDistance(markerList);
        }
        placeMarker(event.latLng, map);
    });

    google.maps.event.addListener(marker, "dragend", () => {
        console.log(marker.getPosition());
        console.log(`lat: ${marker.getPosition().lat()}, long: ${marker.getPosition().lng()}`);
    });
}

window.initMap = initMap;

/* Example 4 */
// https://www.aspsnippets.com/Articles/Google-Maps-API-V3-Add-click-event-listener-to-all-multiple-markers.aspx
const pathumthaniMap = {
    lat: 14.0200738,
    lng: 100.527984
};
const pathumthaniCoordinates = [{
        lat: 14.020110232315343,
        lng: 100.52789548710253
    },
    {
        lat: 14.01914737632345,
        lng: 100.52781502083208
    },
    {
        lat: 14.018944395355483,
        lng: 100.52911857441332
    },
    {
        lat: 14.019568951606301,
        lng: 100.5257282622185
    },
];

let markerList = [];
let drawLines = [];

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: pathumthaniMap,
    });

    let marker;
    // let infoWindow = new google.maps.InfoWindow();



    function addMarker(pos, map) {
        marker = new google.maps.Marker({
            position: pos,
            map: map,
        });

        showInfo(marker);
        detectDblClick(marker);

        // (function (marker) {
        //	google.maps.event.addListener(marker, "click", function (e) {
        //    	infoWindow.close();
        //    	infoWindow.setContent(JSON.stringify(marker.getPosition().toJSON(), null, 2));
        //    	infoWindow.open(map, marker);
        //   	});
        // })(marker);
    }

    for (let i in pathumthaniCoordinates) {
        // console.log(pathumthaniCoordinates[i]);
        addMarker(pathumthaniCoordinates[i], map);
    }

    // marker.addListener('dblclick', (event) => {
    //     console.log(event.latLng);
    // });
}

function showInfo(marker) {
    //marker.addListener("click", () => {
    //	const infoWindow = new google.maps.InfoWindow();
    //    infoWindow.close();
    //    infoWindow.setContent(JSON.stringify(marker.getPosition().toJSON(), null, 2));
    //    infoWindow.open(marker.get("map"), marker);
    //});
    const infowindow = new google.maps.InfoWindow({
        content: JSON.stringify(marker.getPosition().toJSON()),
    });

    marker.addListener("click", () => {
        infowindow.close();
        infowindow.open(marker.get("map"), marker);
    });
}

function drawLine(pos, marker) {
    const flightPath = new google.maps.Polyline({
        path: pos,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: marker.get("map")
    });
    drawLines.shift();
}

function calcDistance(pos, marker) {
    console.log(pos);
    let disTance = (google.maps.geometry.spherical.computeDistanceBetween(pos[0], pos[1]) / 1000).toFixed(2);
    if (disTance < 1) {
    	console.log(`distance: ${disTance}`);
        drawLines = pos;
        drawLine(drawLines, marker);
    } else {
    	alert("Too far.")
    }
}

function detectDblClick(marker) {
    marker.addListener("dblclick", (event) => {
        markerList.push(event.latLng);
        console.log(markerList);
        if (markerList.length == 2) {
            calcDistance(markerList, marker);
        }
    });
}

window.initMap = initMap;

