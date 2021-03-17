import app from 'flarum/app';

import gpxMap from './gpxMap';

console.log("GPX Preview Scanning...");

app.initializers.add('gpx-preview', () => {
    gpxMap();
});
