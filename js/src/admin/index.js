/*
 * This file is part of Composer Autocomplete extension.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app';
import SettingsPage from './components/SettingsPage';

app.initializers.add('justoverclock/composer-autocomplete', () => {
  app.extensionData.for('justoverclock-composer-autocomplete').registerPage(SettingsPage);
});
