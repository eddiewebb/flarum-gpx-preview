module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/GPXParser.js":
/*!********************************!*\
  !*** ./src/forum/GPXParser.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

///////////////////////////////////////////////////////////////////////////////
// loadgpx.4.js
//
// Javascript object to load GPX-format GPS data into Google Maps.
//
// Copyright (C) 2006 Kaz Okuda (http://notions.okuda.ca)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// If you use this script or have any questions please leave a comment
// at http://notions.okuda.ca/geotagging/projects-im-working-on/gpx-viewer/
// A link to the GPL license can also be found there.
//
///////////////////////////////////////////////////////////////////////////////
//
// History:
//    revision 1 - Initial implementation
//    revision 2 - Removed LoadGPXFileIntoGoogleMap and made it the callers
//                 responsibility.  Added more options (colour, width, delta).
//    revision 3 - Waypoint parsing now compatible with Firefox.
//    revision 4 - Upgraded to Google Maps API version 2.  Tried changing the way
//               that the map calculated the way the center and zoom level, but
//               GMAP API 2 requires that you center and zoom the map first.
//               I have left the bounding box calculations commented out in case
//               they might come in handy in the future.
//
//    5/28/2010 - Upgraded to Google Maps API v3 and refactored the file a bit.
//                          (Chris Peplin)
//
// Author: Kaz Okuda
// URI: http://notions.okuda.ca/geotagging/projects-im-working-on/gpx-viewer/
//
// Updated for Google Maps API v3 by Chris Peplin
// Fork moved to GitHub: https://github.com/peplin/gpxviewer
//
///////////////////////////////////////////////////////////////////////////////
function GPXParser(xmlDoc, map) {
  this.xmlDoc = xmlDoc;
  this.map = map;
  this.trackcolour = "#ff00ff"; // red

  this.trackwidth = 5;
  this.mintrackpointdelta = 0.0001;
} // Set the colour of the track line segements.


GPXParser.prototype.setTrackColour = function (colour) {
  this.trackcolour = colour;
}; // Set the width of the track line segements


GPXParser.prototype.setTrackWidth = function (width) {
  this.trackwidth = width;
}; // Set the minimum distance between trackpoints.
// Used to cull unneeded trackpoints from map.


GPXParser.prototype.setMinTrackPointDelta = function (delta) {
  this.mintrackpointdelta = delta;
};

GPXParser.prototype.translateName = function (name) {
  if (name == "wpt") {
    return "Waypoint";
  } else if (name == "trkpt") {
    return "Track Point";
  } else if (name == "rtept") {
    return "Route Point";
  }
};

GPXParser.prototype.createMarker = function (point) {
  var lon = parseFloat(point.getAttribute("lon"));
  var lat = parseFloat(point.getAttribute("lat"));
  var html = "";
  var pointElements = point.getElementsByTagName("html");

  if (pointElements.length > 0) {
    for (i = 0; i < pointElements.item(0).childNodes.length; i++) {
      html += pointElements.item(0).childNodes[i].nodeValue;
    }
  } else {
    // Create the html if it does not exist in the point.
    html = "<b>" + this.translateName(point.nodeName) + "</b><br>";
    var attributes = point.attributes;
    var attrlen = attributes.length;

    for (i = 0; i < attrlen; i++) {
      html += attributes.item(i).name + " = " + attributes.item(i).nodeValue + "<br>";
    }

    if (point.hasChildNodes) {
      var children = point.childNodes;
      var childrenlen = children.length;

      for (i = 0; i < childrenlen; i++) {
        // Ignore empty nodes
        if (children[i].nodeType != 1) continue;
        if (children[i].firstChild == null) continue;
        html += children[i].nodeName + " = " + children[i].firstChild.nodeValue + "<br>";
      }
    }
  }

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lon),
    map: this.map
  });
  var infowindow = new google.maps.InfoWindow({
    content: html,
    size: new google.maps.Size(50, 50)
  });
  google.maps.event.addListener(marker, "click", function () {
    infowindow.open(this.map, marker);
  });
};

GPXParser.prototype.addTrackSegmentToMap = function (trackSegment, colour, width) {
  var trackpoints = trackSegment.getElementsByTagName("trkpt");

  if (trackpoints.length == 0) {
    return;
  }

  var pointarray = []; // process first point

  var lastlon = parseFloat(trackpoints[0].getAttribute("lon"));
  var lastlat = parseFloat(trackpoints[0].getAttribute("lat"));
  var latlng = new google.maps.LatLng(lastlat, lastlon);
  pointarray.push(latlng);

  for (var i = 1; i < trackpoints.length; i++) {
    var lon = parseFloat(trackpoints[i].getAttribute("lon"));
    var lat = parseFloat(trackpoints[i].getAttribute("lat")); // Verify that this is far enough away from the last point to be used.

    var latdiff = lat - lastlat;
    var londiff = lon - lastlon;

    if (Math.sqrt(latdiff * latdiff + londiff * londiff) > this.mintrackpointdelta) {
      lastlon = lon;
      lastlat = lat;
      latlng = new google.maps.LatLng(lat, lon);
      pointarray.push(latlng);
    }
  }

  var polyline = new google.maps.Polyline({
    path: pointarray,
    strokeColor: colour,
    strokeWeight: width,
    map: this.map
  });
};

GPXParser.prototype.addTrackToMap = function (track, colour, width) {
  var segments = track.getElementsByTagName("trkseg");

  for (var i = 0; i < segments.length; i++) {
    var segmentlatlngbounds = this.addTrackSegmentToMap(segments[i], colour, width);
  }
};

GPXParser.prototype.addRouteToMap = function (route, colour, width) {
  var routepoints = route.getElementsByTagName("rtept");

  if (routepoints.length == 0) {
    return;
  }

  var pointarray = []; // process first point

  var lastlon = parseFloat(routepoints[0].getAttribute("lon"));
  var lastlat = parseFloat(routepoints[0].getAttribute("lat"));
  var latlng = new google.maps.LatLng(lastlat, lastlon);
  pointarray.push(latlng);

  for (var i = 1; i < routepoints.length; i++) {
    var lon = parseFloat(routepoints[i].getAttribute("lon"));
    var lat = parseFloat(routepoints[i].getAttribute("lat")); // Verify that this is far enough away from the last point to be used.

    var latdiff = lat - lastlat;
    var londiff = lon - lastlon;

    if (Math.sqrt(latdiff * latdiff + londiff * londiff) > this.mintrackpointdelta) {
      lastlon = lon;
      lastlat = lat;
      latlng = new google.maps.LatLng(lat, lon);
      pointarray.push(latlng);
    }
  }

  var polyline = new google.maps.Polyline({
    path: pointarray,
    strokeColor: colour,
    strokeWeight: width,
    map: this.map
  });
};

GPXParser.prototype.centerAndZoom = function (trackSegment) {
  var pointlist = new Array("trkpt", "rtept", "wpt");
  var minlat = 0;
  var maxlat = 0;
  var minlon = 0;
  var maxlon = 0;

  for (var pointtype = 0; pointtype < pointlist.length; pointtype++) {
    // Center the map and zoom on the given segment.
    var trackpoints = trackSegment.getElementsByTagName(pointlist[pointtype]); // If the min and max are uninitialized then initialize them.

    if (trackpoints.length > 0 && minlat == maxlat && minlat == 0) {
      minlat = parseFloat(trackpoints[0].getAttribute("lat"));
      maxlat = parseFloat(trackpoints[0].getAttribute("lat"));
      minlon = parseFloat(trackpoints[0].getAttribute("lon"));
      maxlon = parseFloat(trackpoints[0].getAttribute("lon"));
    }

    for (var i = 0; i < trackpoints.length; i++) {
      var lon = parseFloat(trackpoints[i].getAttribute("lon"));
      var lat = parseFloat(trackpoints[i].getAttribute("lat"));
      if (lon < minlon) minlon = lon;
      if (lon > maxlon) maxlon = lon;
      if (lat < minlat) minlat = lat;
      if (lat > maxlat) maxlat = lat;
    }
  }

  if (minlat == maxlat && minlat == 0) {
    this.map.setCenter(new google.maps.LatLng(49.327667, -122.942333), 14);
    return;
  } // Center around the middle of the points


  var centerlon = (maxlon + minlon) / 2;
  var centerlat = (maxlat + minlat) / 2;
  var bounds = new google.maps.LatLngBounds(new google.maps.LatLng(minlat, minlon), new google.maps.LatLng(maxlat, maxlon));
  this.map.setCenter(new google.maps.LatLng(centerlat, centerlon));
  this.map.fitBounds(bounds);
};

GPXParser.prototype.centerAndZoomToLatLngBounds = function (latlngboundsarray) {
  var boundingbox = new google.maps.LatLngBounds();

  for (var i = 0; i < latlngboundsarray.length; i++) {
    if (!latlngboundsarray[i].isEmpty()) {
      boundingbox.extend(latlngboundsarray[i].getSouthWest());
      boundingbox.extend(latlngboundsarray[i].getNorthEast());
    }
  }

  var centerlat = (boundingbox.getNorthEast().lat() + boundingbox.getSouthWest().lat()) / 2;
  var centerlng = (boundingbox.getNorthEast().lng() + boundingbox.getSouthWest().lng()) / 2;
  this.map.setCenter(new google.maps.LatLng(centerlat, centerlng), this.map.getBoundsZoomLevel(boundingbox));
};

GPXParser.prototype.addTrackpointsToMap = function () {
  var tracks = this.xmlDoc.documentElement.getElementsByTagName("trk");

  for (var i = 0; i < tracks.length; i++) {
    this.addTrackToMap(tracks[i], this.trackcolour, this.trackwidth);
  }
};

GPXParser.prototype.addWaypointsToMap = function () {
  var waypoints = this.xmlDoc.documentElement.getElementsByTagName("wpt");

  for (var i = 0; i < waypoints.length; i++) {
    this.createMarker(waypoints[i]);
  }
};

GPXParser.prototype.addRoutepointsToMap = function () {
  var routes = this.xmlDoc.documentElement.getElementsByTagName("rte");

  for (var i = 0; i < routes.length; i++) {
    this.addRouteToMap(routes[i], this.trackcolour, this.trackwidth);
  }
};

exports.GPXParser = GPXParser;

/***/ }),

/***/ "./src/forum/gpxMap.js":
/*!*****************************!*\
  !*** ./src/forum/gpxMap.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Post */ "flarum/components/Post");
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GPXParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GPXParser */ "./src/forum/GPXParser.js");
/* harmony import */ var _GPXParser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GPXParser__WEBPACK_IMPORTED_MODULE_3__);




/* global $ */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'config', function (isInitialized) {
    if (isInitialized) return; //console.log(this.$('.gpxFile').data('fofUploadDownloadUuid'));

    function loadGPXFileIntoGoogleMap(map, filename) {
      $.ajax({
        url: filename,
        dataType: "xml",
        success: function success(data) {
          console.log("parsing GPS file " + filename);
          var parser = new _GPXParser__WEBPACK_IMPORTED_MODULE_3___default.a.GPXParser(data, map);
          parser.setTrackColour("#ff0000"); // Set the track line colour

          parser.setTrackWidth(5); // Set the track line width

          parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points

          parser.centerAndZoom(data);
          parser.addTrackpointsToMap(); // Add the trackpoints

          parser.addRoutepointsToMap(); // Add the routepoints

          parser.addWaypointsToMap(); // Add the waypoints
        }
      });
    } //for each gpx file in this post, loop and map


    this.$('.gpxFile').each(function (i) {
      //console.log(this); //'this' is now a matching div with our URL and UUID
      var url = $(this).data('mapUrl');
      var mapId = 'map-' + $(this).data('fofUploadDownloadUuid');
      console.log(url);
      console.log(mapId);
      var mapOptions = {
        zoom: 8,
        mapTypeId: 'roadmap'
      };
      var map = new google.maps.Map(document.getElementById(mapId), mapOptions);
      loadGPXFileIntoGoogleMap(map, url);
    });
  });
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpxMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gpxMap */ "./src/forum/gpxMap.js");


console.log("RUNNING");
flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('gpx-preview', function () {
  Object(_gpxMap__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Post":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Post']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Post'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map