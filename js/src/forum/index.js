import app from 'flarum/app';

import gpxMap from './gpxMap';

console.log("RUNNING");

app.initializers.add('gpx-preview', () => {
    gpxMap();
});
