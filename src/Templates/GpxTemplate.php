<?php

namespace Webbinaro\GpxPreview\Templates;

use FoF\Upload\Templates\AbstractTemplate;

class GpxTemplate extends AbstractTemplate
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
    public function name()
    {
        return $this->trans('gpx-preview.admin.templates.gpx');
    }

    /**
     * {@inheritdoc}
     */
    public function description()
    {
        return $this->trans('fof-upload.admin.templates.file_description');
    }

    /**
     * The xsl template to use with this tag.
     *
     * @return string
     */
    public function template()
    {
        return $this->getView('fof-upload.templates::gpx');
    }

    /**
     * The bbcode to be parsed.
     *
     * @return string
     */
    public function bbcode()
    {
        return '[upl-file uuid={IDENTIFIER} size={SIMPLETEXT2} url={URL}]{SIMPLETEXT1}[/upl-file]';
    }
}
