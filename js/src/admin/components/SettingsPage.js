/*
 * This file is part of Composer Autocomplete extension.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import app from 'flarum/admin/app';

export default class ComposerAutoComplete extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
  }

  content() {
    return (
      <div className="grid-container">
        <h1 className="extTitle">{app.translator.trans('justoverclock-composer-autocomplete.admin.settingsTitle')}</h1>
        <p className="explanation">{app.translator.trans('justoverclock-composer-autocomplete.admin.settingsSubTitle')}</p>

        <div className="gridCont">
          <form className="AutoCompl">
            <label className="textAreaClass" htmlFor="first">
              ALT+1 ={' '}
            </label>
            <textarea
              className="FormControl AutoComp"
              placeholder="Insert Sencence for ALT+1 autocomplete..."
              name="first"
              bidi={this.setting('justoverclock-composer-autocomplete.firstSentence')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost autocomp textarea">
              <i className="fas fa-save autopost" /> Save
            </Button>
          </form>
        </div>

        <div className="gridCont">
          <form className="AutoCompl">
            <label htmlFor="second">ALT+2 = </label>
            <input
              className="FormControl AutoComp"
              placeholder="Insert Sencence for ALT+2 autocomplete..."
              type="text"
              name="second"
              bidi={this.setting('justoverclock-composer-autocomplete.secondSentence')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost autocomp">
              <i className="fas fa-save autopost" /> Save
            </Button>
          </form>
        </div>

        <div className="gridCont">
          <form className="AutoCompl">
            <label htmlFor="third">ALT+3 = </label>
            <input
              className="FormControl AutoComp"
              placeholder="Insert Sencence for ALT+3 autocomplete..."
              type="text"
              name="second"
              bidi={this.setting('justoverclock-composer-autocomplete.thirdSentence')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost autocomp">
              <i className="fas fa-save autopost" /> Save
            </Button>
          </form>
        </div>

        <div className="gridCont">
          <form className="AutoCompl">
            <label htmlFor="fourth">ALT+4 = </label>
            <input
              className="FormControl AutoComp"
              placeholder="Insert Sencence for ALT+4 autocomplete..."
              type="text"
              name="second"
              bidi={this.setting('justoverclock-composer-autocomplete.fourthSentence')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost autocomp">
              <i className="fas fa-save autopost" /> Save
            </Button>
          </form>
        </div>

        <div className="gridCont">
          <form className="AutoCompl">
            <label htmlFor="fifth">ALT+5 = </label>
            <input
              className="FormControl AutoComp"
              placeholder="Insert Sencence for ALT+5 autocomplete..."
              type="text"
              name="second"
              bidi={this.setting('justoverclock-composer-autocomplete.fifthSentence')}
            />
            <Button onclick={this.saveSettings.bind(this)} className="Button Button--primary autopost autocomp">
              <i className="fas fa-save autopost" /> Save
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
