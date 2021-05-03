<?php

namespace Webbinaro\GpxPreview\Providers;

use FoF\Upload\Helpers\Util;
use Webbinaro\GpxPreview\Templates\GpxTemplate;
use Flarum\Settings\SettingsRepositoryInterface;

class GpxPreviewProvider extends \Flarum\Foundation\AbstractServiceProvider
{    
	

    public function register()
    {
        /** @var Util $util */
        $util = $this->container->make(Util::class);

        $util->addRenderTemplate($this->container->make(GpxTemplate::class));
    }
}
