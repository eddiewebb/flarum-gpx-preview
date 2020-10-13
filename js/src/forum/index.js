import app from 'flarum/app';

import gpxMap from './gpxMap';

app.initializers.add('fof-upload', () => {
    gpxMap();
});
