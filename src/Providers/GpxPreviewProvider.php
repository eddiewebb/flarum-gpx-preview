<?php

namespace Webbinaro\GpxPreview\Providers;

use FoF\Upload\Helpers\Settings;
use Webbinaro\GpxPreview\Templates\GpxTemplate;

class GpxPreviewProvider extends \Flarum\Foundation\AbstractServiceProvider
{
    public function register()
    {
        $this->loadViewsFrom(__DIR__ . '/../../resources/templates', 'fof-upload.templates');

        /** @var Settings $settings */
        $settings = $this->app->make(Settings::class);

        $settings->addRenderTemplate($this->app->make(GpxTemplate::class));
    }
}
