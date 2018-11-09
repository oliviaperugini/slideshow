<?php

namespace slideshow\Factory;

use slideshow\Resource\TitleResource as Resource;
use phpws2\Database;
use Canopy\Request;

class TitleFactory extends Base
{

    protected function build()
    {
        return new Resource;
    }

    /**
     *
     * @param interer $id
     * @return \slideshow\Resource\TitleResource
     */
    public function load($id)
    {
        return parent::load($id);
    }

    public function listing($showId)
    {

    }

    // For creating a title the first time.
    public function post(Request $request)
    {

    }


    public function save(Resource $slide)
    {

    }

    public function delete($titleId)
    {

    }

}
