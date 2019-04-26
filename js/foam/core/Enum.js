/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
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
  package: 'foam.core',
  name: 'Enum',
  requires: [
    'foam.core.EnumValue'
  ],
  properties: [
    {
      name: 'name',
      defaultValueFn: function() {
        return this.id.split('.').pop();
      }
    },
    {
      name: 'javaClassName',
      defaultValueFn: function() {
        return this.name;
      }
    },
    {
      name: 'package',
      defaultValueFn: function() {
        return this.id.split('.').slice(0, -1).join('.');
      }
    },
    {
      /* Not ready to be used yet. For it to work, we need to change the way the
       * build happens and bundle the generated files as part of the android
       * project instead of as their own library to avoid a circular dependency.
       */
      name: 'androidResource',
    },
    {
      name: 'messages',
      lazyFactory: function() {
        var labels = [];
        for ( var i = 0 ; i < this.values.length ; i++ ) {
          var value = this.values[i];
          var object = {
            name: this.name + "_" + value.name,
            value: value.label,
            translationHint: value.description,
          };
          labels.push(object);
        }
        return labels;
      }
    },
    {
      name: 'startIndex',
      defaultValue: 0,
      type: 'Int'
    },
    {
      name: 'step',
      defaultValue: 1,
      type: 'Int'
    },
    {
      name: 'id',
    },
    {
      name: 'javaValueType',
      labels: ['java', 'compiletime'],
      defaultValue: 'Object',
    },
    {
      name: 'values',
      adapt: function(_, a) {
        // TODO: this should be a custom Property.fromJson implementation
        var index = this.startIndex;
        var used = {};
        for ( var i = 0 ; i < a.length ; i++ ) {
          if ( typeof a[i] == 'string' ) {
            a[i] = this.EnumValue.create({
              label: a[i],
              index: index
            });
          }

          if ( ! a[i].index ) {
            a[i].index = index;
          } else {
            index = a[i].index;
          }
          index += this.step;

          if ( used[index] ) {
            throw "Duplicate Enum index.";
          }
          used[index] = true;

          if ( ! this.EnumValue.isInstance(a[i]) ) {
            a[i] = this.EnumValue.create(a[i]);
          }
        }

        return a;
      }
    }
  ],
  methods: [
    {
      name: 'init',
      labels: ['javascript'],
      code: function init() {
        for ( var i = 0 ; i < this.values.length ; i++ ) {
          var value = this.values[i];
          this[value.name] = value.index;
          this[value.index] = value;
        }
      }
    },
    {
      name: 'valueForIndex',
      labels: ['javascript'],
      code: function(index) {
        for (var i = 0, value; value = this.values[i]; i++) {
          if (value.index == index) return value;
        }
      }
    },
  ],
  templates: [
    {
      name: 'swiftSource',
      labels: ['swift'],
      template: function() {/*
// Generated by foam.core.Enum.  DO NOT MODIFY BY HAND
import Foundation
public class <%= this.name %>: FoamEnum, Hashable, Equatable {
  public var index: Int
  public var value: AnyObject
  public var label: String
  public func hash(into hasher: inout Hasher) {
    hasher.combine(index)
  }
  private init(value: AnyObject, label: String, index: Int) {
    self.value = value
    self.label = label
    self.index = index
  }
<% for (var i = 0, value; value = this.values[i]; i++) { %>
  public static let <%= value.name %> = <%= this.name %>(
      value: <%= value.swiftValue %> as AnyObject,
      label: <%= value.swiftLabel %>,
      index: <%= value.index %>)
<% } %>
  public static let choices: [FoamEnum] = [
<% for (var i = 0, value; value = this.values[i]; i++) { %>
    <%= this.name %>.<%= value.name %>,
<% } %>
  ]
  public static func enumForValue(_ value: AnyObject) -> FoamEnum? {
    for e in <%= this.name %>.choices {
      if equals(e.value, b: value) { return e }
    }
    return nil
  }
  public func isEqual(_ value: AnyObject?) -> Bool {
    if let value = value as? FoamEnum {
      return equals(self.value, b: value.value)
    }
    return false
  }
}
public func ==(lhs: <%= this.name %>, rhs: <%= this.name %>) -> Bool {
  return lhs.isEqual(rhs)
}
      */}
    },
    {
      name: 'javaSource',
      labels: ['java'],
      template: function() {/*
// Generated by FOAM, do not modify.
package <%= this.package %>;
<%
var labelForValue = function(value) {
  if (this.androidResource) {
    return this.androidResource + "." + this.name + "_" + value.name;
  } else {
    return value.javaLabel;
  }
}
%>
public enum <%= this.name %> {
<%
  for ( var i = 0 ; i < this.values.length ; i++ ) {
    var value = this.values[i];
    if ( value.javaSource ) { value.javaSource(out); }
    else {
%>  <%= value.name %>(<%= value.index %>, <%= value.javaValue %>, <%= labelForValue(value) %>) <%
    }
    if ( i == this.values.length - 1 ) {%>;<%}
    else {%>,<%}
  }
%>

  private final int index_;
  private final <%= this.javaValueType %> value_;
  private final String label_;
  <%= this.name %>(int index, <%= this.javaValueType %> value, String label) {
    index_ = index;
    label_ = label;
    value_ = value;
  }

  public <%= this.javaValueType %> getValue() { return value_; }
  public int getIndex() { return index_; }
  public String getLabel() { return label_; }

  public static <%= this.name %> forOrdinal(int ordinal) {
    switch (ordinal) {
<% for (var i = 0, value; value = this.values[i]; i++) { %>
      case <%= i %>: return <%= this.name %>.<%= value.name %>;
<% } %>
    }
    return null;
  }

  public static <%= this.name %> forIndex(int index) {
    switch (index) {
<% for (var i = 0, value; value = this.values[i]; i++) { %>
      case <%= value.index %>: return <%= this.name %>.<%= value.name %>;
<% } %>
    }
    return null;
  }

  public static <%= this.name %> forValue(<%= this.javaValueType %> value) {
    for (<%= this.name %> e : <%= this.name %>.values()) {
    <% if (this.javaValueType == 'int' || this.javaValueType == 'long') { %>
      if (value == e.getValue()) {
    <% } else { %>
      if (value.equals(e.getValue())) {
    <% } %>
        return e;
      }
    }
    return null;
  }

  public static String[] labels() {
    return new String[] {
<% for (var i = 0, value; value = this.values[i]; i++) { %>
      <%= labelForValue(value) %>,
<% } %>
    };
  }
}
*/}
    }
  ]
});
