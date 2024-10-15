import app from 'flarum/app';
import gpxMap from './gpxMap';

console.debug("GPX Preview Scanning...");

app.initializers.add('gpx-preview', () => {
    gpxMap();

    // File model
    // I think this was cause of Issue #9
    //app.store.models.files = File;
});
