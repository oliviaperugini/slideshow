<?php

/*
 * See docs/AUTHORS and docs/COPYRIGHT for relevant info.
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * @author Matthew McNaney <mcnaney at gmail dot com>
 *
 * @license http://opensource.org/licenses/lgpl-3.0.html
 */

namespace slideshow\Resource;

class TitleResource extends BaseAbstract
{

    /**
    * Unique id that is associated with the show
    * @var \phpws2\Variable\IntegerVar
    */
    protected $title_id;
    protected $ss_slide_id;
    protected $title_align;
    protected $title_bold;
    protected $title_italics;
    protected $title_underline;
    protected $title_font_size;
    protected $title_font;



    /**
     * Title of show
     * @var \phpws2\Variable\StringVar
     */
    //protected $title;

    /**
     *
     * @var \phpws2\Variable\Boolean
     */
    //protected $active;
    protected $table = 'ss_titles';

    public function __construct()
    {
        parent::__construct();
        // $this->showId = new \phpws2\Variable\IntegerVar(null, 'showId');
        $this->title_id = new \phpws2\Variable\IntegerVar(null, 'title_id');
        $this->title_id->setLimit('255');
        $this->ss_slide_id = new \phpws2\Variable\IntegerVar(null, 'ss_slide_id');
        $this->ss_slide_id->setLimit('255');
        $this->title_align = \phpws2\Variable\StringVar(null, 'title_align');
        $this->title_align->setLimit('255');
        $this->title_bold = \phpws2\Variable\BooleanVar(0, 'title_bold');
        $this->title_italics = \phpws2\Variable\BooleanVar(0, 'title_italics');
        $this->title_underline = \phpws2\Variable\BooleanVar(0, 'title_underline');
        $this->title_font_size = \phpws2\Variable\SmallInteger(0, 'title_font_size');
        $this->title_font = \phpws2\Variable\IntegerVar(null, 'title_font');
        $this->title_font->setLimit('255');

        //$this->active = new \phpws2\Variable\BooleanVar(0, 'active');
    }

    /*public function getImagePath()
    {
        return './images/slideshow/' . $this->id . '/';
    }*/

}
