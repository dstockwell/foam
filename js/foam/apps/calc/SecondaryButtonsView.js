/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

CLASS({
  name: 'SecondaryButtonsView',
  package: 'foam.apps.calc',
  extends: 'foam.ui.View',
  requires: [
    'foam.apps.calc.CalcButton'
  ],
  templates: [
    function toHTML() {/*
          <%
          this.X.registerModel(this.CalcButton.xbind({
            background: '#00796b',
            width:  61,
            height: 61,
            font:   '300 20px Roboto'
          }), 'foam.ui.ActionButton');
          %>
          <div id="%%id" class="buttons button-row secondaryButtons">
            <div class="button-column" style="flex-grow: 1;-webkit-flex-grow: 1;">
              <div class="button-row">
                $$backspace{
                  tabIndex: '300',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['.f1', '[e]',    '[ac]',         '[round]'], label: '⌫'
                }
                $$round{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['.f1', '[ln]',   '[backspace]',  '[fetch]']
                }
                $$fetch{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['.f1', '[log]',  '[round]',      '[store]']
                }
                $$store{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['.f1', '[exp]',  '[fetch]',      '[deg]']
                }
              </div>
              <div class="button-row">
                $$e{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[backspace]', '[inv]',     '[div]',   '[ln]']
                }
                $$ln{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[round]',     '[pow]',     '[e]',      '[log]']
                }
                $$log{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[fetch]',     '[sqroot]',  '[ln]',     '[exp]']
                }
                $$exp{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[store]',     '[root]',    '[log]',    '[sin]']
                }
              </div>
              <div class="button-row">
                $$inv{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[e]',    '[sign]',     '[minus]',     '[pow]']
                }
                $$pow{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[ln]',   '[percent]',  '[inv]',     '[sqroot]']
                }
                $$sqroot{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[log]',  '[square]',   '[pow]',     '[root]']
                }
                $$root{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[exp]',  '[pi]',       '[sqroot]',  '[cos]']
                }
              </div>
              <div class="button-row">
                $$sign{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[inv]',   null, '[plus]',    '[percent]']
                }
                $$percent{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[pow]',   null, '[sign]',    '[square]']
                }
                $$square{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[sqroot]', null, '[percent]', '[pi]']
                }
                $$pi{
                  tabIndex: '-1',
                  haloColor: 'rgba(255, 255, 255, 0.4)',
                  arrowNav: ['[root]',  null, '[square]',  '[tan]']
                }
              </div>
            </div>
          </div>
    */}
  ]
});
