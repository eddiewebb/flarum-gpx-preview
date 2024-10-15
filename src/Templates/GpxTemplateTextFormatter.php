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
     * The user repository implementation.
     *
     * @var Translator
     */
    private Translator $translator;

    /**
     * Create a new controller instance.
     *
     * @param  Translator $translator
     * @return void
     */
    public function __construct(Translator $translator)
    {
        $this->translator = $translator;
    }


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
        return $this->translator->trans('gpx-preview.admin.templates.gpx');
    }


    public function template(): View
    {
        return $this->getView('gpx-preview.templates::gpx');
    }

    /**
     * {@inheritdoc}
     */
    public function description(): string
    {
        return $this->translator->trans('gpx-preview.admin.templates.gpx.file_description');
    }

    /**
     * The xsl template to use with this tag.
     *
     * @return string
     */
    public function bbcode(): string {
        //return $this->getView('gpx-preview.templates::gpx');
        return '[gpx uuid={IDENTIFIER} size={SIMPLETEXT2} url={URL}]{SIMPLETEXT1}[/gpx]';
    }

}
