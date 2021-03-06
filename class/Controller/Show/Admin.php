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

namespace slideshow\Controller\Show;

use Canopy\Request;
use slideshow\Factory\NavBar;

class Admin extends Base
{

    public function createPostCommand(Request $request)
    {
        return $this->factory->post($request);
    }
    
    protected function listHtmlCommand(Request $request)
    {
        $this->addShowOption();
        $showForm = $this->factory->reactView('showform');
        return parent::listHtmlCommand($request) . $showForm;
    }

    protected function viewHtmlCommand(Request $request)
    {
        $this->addSectionOption($this->id);
        $showId = <<<EOF
<script>const showId = {$this->id}</script>
EOF;
        $sectionForm = $this->factory->reactView('sectionform');
        return parent::viewHtmlCommand($request) . $showId . $sectionForm;
    }
    
    private function addSectionOption($id)
    {
        $item = '<a id="add-section" class="pointer"><i class="fa fa-plus"></i> Add a new section</a>';
        NavBar::addItem($item);
    }
    
    private function addShowOption()
    {
        $item = '<a id="add-show" class="pointer"><i class="fa fa-plus"></i> Add new show</a>';
        NavBar::addItem($item);
    }
            

}
