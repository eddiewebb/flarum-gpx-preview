<?php

namespace Webbinaro\GpxPreview\Templates;
use Illuminate\Contracts\View\View;

class GpxTemplate extends \FoF\Upload\Templates\AbstractTextFormatterTemplate
{
    /**
     * @var string
     */
    protected $tag = 'gpx';

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

    /**
     * The xsl template to use with this tag.
     *
     * @return View
     */
    public function template(): View
    {
        return $this->getView('webbinaro-gpxpreview.templates::gpx');
    }

    /**
     * The bbcode to be parsed.
     *
     * @return string
     */
    public function bbcode(): string
    {
        return '[upl-file uuid={IDENTIFIER} size={SIMPLETEXT2} url={URL}]{SIMPLETEXT1}[/upl-file]';
    }

}
