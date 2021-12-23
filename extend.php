<?php

/*
 * This file is part of Composer Autocomplete extension.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\ComposerAutoComplete;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings)
        ->serializeToForum('justoverclock-composer-autocomplete.firstSentence', 'justoverclock-composer-autocomplete.firstSentence')
        ->serializeToForum('justoverclock-composer-autocomplete.secondSentence', 'justoverclock-composer-autocomplete.secondSentence')
        ->serializeToForum('justoverclock-composer-autocomplete.thirdSentence', 'justoverclock-composer-autocomplete.thirdSentence')
        ->serializeToForum('justoverclock-composer-autocomplete.fourthSentence', 'justoverclock-composer-autocomplete.fourthSentence')
        ->serializeToForum('justoverclock-composer-autocomplete.fifthSentence', 'justoverclock-composer-autocomplete.fifthSentence')
];
