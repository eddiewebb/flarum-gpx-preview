<?php

/*
 * This file is part of webbinaro/adv-extras.
 *
 * Copyright (c) 2020 Eddie Webbinaro.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Webbinaro\GpxPreview;

use Flarum\Extend;
use Flarum\Foundation\Application;
use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface as Request;


return [
	(new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),


    (new Extend\Frontend('forum'))
        ->content(function (Document $document, Request $request) {
            $document->head[] = '<script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyCuGkfq_z0u0wnMSAB3pR1Uwr4eXjEV93o"></script>';
        }),

    (new Extend\ServiceProvider())
        ->register(Providers\GpxPreviewProvider::class),


    (new Extend\View())
    ->namespace('fof-upload.templates', __DIR__.'/resources/templates'),


];