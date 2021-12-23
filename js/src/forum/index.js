/*
 * This file is part of Composer Autocomplete extension.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';

app.initializers.add('justoverclock/composer-autocomplete', () => {
  extend(TextEditor.prototype, 'oncreate', function () {
    const addID = this.$('.TextEditor-editor').attr('id', 'ComposerTextarea');
    const input = document.getElementById('ComposerTextarea');

    function typeInTextarea(newText, el = input) {
      const [start, end] = [el.selectionStart, el.selectionEnd];
      el.setRangeText(newText, start, end, 'select');
    }

    document.getElementById('ComposerTextarea').onkeydown = (e) => {
      if ((!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) || e.key === 'Meta' || e.key === 'Shift' || e.key === 'Control' || e.key === 'alt') {
        return;
      }
      if (e.altKey && e.key === '1') {
        typeInTextarea(app.forum.attribute('justoverclock-composer-autocomplete.firstSentence') || 'Test Sentence...');
      }
      if (e.altKey && e.key === '2') {
        typeInTextarea(app.forum.attribute('justoverclock-composer-autocomplete.secondSentence') || 'Test Sentence 2...');
      }
      if (e.altKey && e.key === '3') {
        typeInTextarea(app.forum.attribute('justoverclock-composer-autocomplete.thirdSentence') || 'Test Sentence 3...');
      }
      if (e.altKey && e.key === '4') {
        typeInTextarea(app.forum.attribute('justoverclock-composer-autocomplete.fourthSentence') || 'Test Sentence 4...');
      }
      if (e.altKey && e.key === '5') {
        typeInTextarea(app.forum.attribute('justoverclock-composer-autocomplete.fifthSentence') || 'Test Sentence 5...');
      }
    };
  });
});
