/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

CLASS({
  package: 'foam.apps.builder.wizard',
  name: 'ChangeDAOWizard',
  extendsModel: 'foam.apps.builder.wizard.NewOrExistingDAOWizard',

  properties: [
    {
      model_: 'foam.apps.builder.wizard.WizardViewFactoryProperty',
      name: 'editViewFactory',
      label: 'Edit the current Data Source',
      defaultValue: { factory_: 'foam.apps.builder.wizard.DAOWizard' },
    },
    {
      name: 'newViewFactory',
      label: 'Create different kind of Data Source',
    },
    {
      name: 'nextViewFactory',
      lazyFactory: function() {
        return ( this.data.getDataConfig() && this.data.getDataConfig().dao.requiresUserConfiguration ) ?
           this.editViewFactory : this.newViewFactory; },
    },
  ],

  templates: [
    function contentHTML() {/*
      <div class="md-card-heading-content-spacer"></div>
      <div class="new-existing-wizard-dao-page-scroller">
      <div class="new-existing-wizard-dao-page">
        <% var choiceList = ( this.data.getDataConfig() && this.data.getDataConfig().dao.requiresUserConfiguration )  ?
          [
            [this.editViewFactory, this.model_.EDIT_VIEW_FACTORY.label],
            [this.newViewFactory, this.model_.NEW_VIEW_FACTORY.label],
            [this.existingViewFactory, this.model_.EXISTING_VIEW_FACTORY.label ],
          ] :
          [
            [this.newViewFactory, this.model_.NEW_VIEW_FACTORY.label],
            [this.existingViewFactory, this.model_.EXISTING_VIEW_FACTORY.label ],
          ]; %>
        $$nextViewFactory{ model_: 'foam.ui.md.ChoiceRadioView',
          orientation: 'vertical',
          choices: choiceList,
        }
        <% if ( this.existingDAO ) { %>
          <div id="<%= this.id %>-container">
            $$existingDAO
          </div>
        <%  } %>
      </div>
      </div>
      <%
        this.setClass('existing-hidden', function() { return self.nextViewFactory !== self.existingViewFactory; }, this.id+'-container');
        this.setClass('new-existing-wizard-dao-container', function() { return true; }, this.id+'-container');
      %>
    */},
  ],

});