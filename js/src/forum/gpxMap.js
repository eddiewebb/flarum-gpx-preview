import app from 'flarum/app';
import {extend} from 'flarum/extend';
import Post from 'flarum/components/Post';
import GPXParser from './GPXParser';

/* global $ */

console.log(GPXParser.default);

export default function () {
    extend(Post.prototype, 'config', function (isInitialized) {
        if (isInitialized) return;
        //console.log(this);
        //console.log(this.$('.gpxFile').data('fofUploadDownloadUuid'));


        let url = this.$('.gpxFile').data('mapUrl');
        console.log(url);

        console.log(url);
         function loadGPXFileIntoGoogleMap(map, filename) {
            $.ajax({url: filename,
                dataType: "xml",
                success: function(data) {
                    console.log("parsing");
                  var parser = new GPXParser.GPXParser(data, map);
                  parser.setTrackColour("#ff0000");     // Set the track line colour
                  parser.setTrackWidth(5);          // Set the track line width
                  parser.setMinTrackPointDelta(0.001);      // Set the minimum distance between track points
                  parser.centerAndZoom(data);
                  parser.addTrackpointsToMap();         // Add the trackpoints
                  parser.addRoutepointsToMap();         // Add the routepoints
                  parser.addWaypointsToMap();           // Add the waypoints
                }
            });
        }

        $(document).ready(function() {
            var mapOptions = {
              zoom: 8,
              mapTypeId: 'roadmap'
            };
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);
            console.log("loading");
            loadGPXFileIntoGoogleMap(map, url);
        });
    });
}
