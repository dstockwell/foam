/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


CLASS({
  name: 'PropertyCitationView',
  package: 'foam.meta.types',
  extendsModel: 'foam.meta.types.CitationView',

  imports: [
    'properties$',
  ],

  properties: [
    {
      model_: 'IntProperty',
      name: 'moveMode',
      defaultValue: 0,
    },
    {
      model_: 'IntProperty',
      name: 'index',
      defaultValue: -1,
    },
    {
      name: 'properties',
      postSet: function(old, nu) {
        if ( nu ) {
          for (var i = 0; i < nu.length; ++i) {
            if (nu[i] === this.data) {
              this.index = i;
              break;
            }
          }
        } else {
          this.index = -1;
        }
      },
    },
  ],

  actions: [
    {
      name: 'move',
      ligature: 'reorder',
      label: 'Re-order',
      isAvailable: function() {
        this.mode; this.moveMode; this.properties;
        return this.mode == 'read-write' &&
          (! this.moveMode) &&
          this.properties && (this.properties.length > 1);
      },
      code: function() {
        this.addMoveExpiry();
      },
    },
    {
      name: 'moveUp',
      label: 'Move Up',
      ligature: 'keyboard_arrow_up',
      isAvailable: function() {
        this.moveMode; this.mode; this.index;
        return this.moveMode &&
          this.mode == 'read-write' &&
          this.index > 0;
      },
      code: function() {
        this.addMoveExpiry();

        var swap = this.properties[this.index - 1];
        this.properties[this.index - 1] = this.data;
        this.properties[this.index] = swap;
        this.properties.notify_('reset',{});

        this.properties = this.properties;
        this.data.propertyChange('name', null, this.data.name);
        swap.propertyChange('name', null, swap.name);
      },
    },
    {
      name: 'moveDown',
      label: 'Move Down',
      ligature: 'keyboard_arrow_down',
      isAvailable: function() {
        this.moveMode; this.mode; this.index; this.properties;
        return this.moveMode &&
          this.mode == 'read-write' &&
          this.index >= 0 &&
          this.properties && (this.index < this.properties.length-1);
      },
      code: function() {
        this.addMoveExpiry();

        var swap = this.properties[this.index + 1];
        this.properties[this.index + 1] = this.data;
        this.properties[this.index] = swap;
        this.properties.notify_('reset',{});

        this.properties = this.properties;
        this.data.propertyChange('name', null, this.data.name);
        swap.propertyChange('name', null, swap.name);
      },
    },
  ],

  methods: [
    function init() {
      this.SUPER();
      this.properties = this.properties;
    },

    function addMoveExpiry() {
      this.moveMode = this.moveMode + 1;
      this.X.setTimeout(function() {
        this.moveMode = Math.max(this.moveMode - 1, 0);
      }.bind(this), 3000);
    },
  ],

  templates: [
    function toHTML() {/*
      <div id="%%id" <%= this.cssClassAttr() %>>
        $$name{ model_:'foam.ui.StringElideTextualView' }
        $$label{ model_:'foam.ui.StringElideTextualView', extraClassName: 'md-grey' }
        $$edit{ color: 'black' }
        $$move{ color: 'black' }
        $$moveUp{ color: 'black' }
        $$moveDown{ color: 'black' }
      </div>
    */},
    function CSS() {/*

    */},

  ]

});

