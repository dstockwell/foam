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

MODEL({
  package: 'foam.demos.sevenguis',
  name: 'DiameterDialog',
  extendsModel: 'foam.ui.DetailView',

  templates: [
    function toHTML() {/*
      <br>
      Adjust the diameter of the circle at ($$x{mode: 'read-only'}, $$y{mode: 'read-only'}).<br>
      $$r{model_: 'foam.ui.RangeView', maxValue: 200, onKeyMode: true}
    */}
  ]
});