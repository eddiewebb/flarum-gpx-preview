import app from 'flarum/app';

import gpxMap from './gpxMap';

console.debug("GPX Preview Scanning...");

app.initializers.add('gpx-preview', () => {
    gpxMap();
});
