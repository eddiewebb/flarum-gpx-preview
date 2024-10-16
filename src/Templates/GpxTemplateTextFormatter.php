<?php

namespace Webbinaro\GpxPreview\Templates;

use Flarum\Extend;
use Flarum\Foundation\AbstractServiceProvider;
use FoF\Upload\Contracts\Template;
use FoF\Upload\File;
use FoF\Upload\Helpers\Util;
use Flarum\Locale\Translator;
use Illuminate\Contracts\View\View;
use FoF\Upload\Templates\AbstractTextFormatterTemplate;


class GpxTemplateTextFormatter extends AbstractTextFormatterTemplate
{
    /**
     * @var string
     */
    public function tag(): string
    {
        return 'gpx';
    }

    /**
     * The human readable name of the template.
     *
     * @return string
     */
    public function name(): string
    {
        return $this->trans('gpx-preview.admin.templates.gpx');
    }

    /**
     * {@inheritdoc}
     */
    public function description(): string
    {
        return $this->trans('gpx-preview.admin.templates.gpx.file_description');
    }

    public function template(): View
    {
        return $this->getView('gpx-preview.templates::gpx');
    }

    public function bbcode(): string {
        return '[upl-gpx uuid={IDENTIFIER} size={SIMPLETEXT2} url={URL}]{SIMPLETEXT1}[/upl-gpx]';
    }

}
