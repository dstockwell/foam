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
  package: 'foam.apps.builder.questionnaire',
  name: 'QuestionnaireController',

  extendsModel: 'foam.ui.md.DetailView',

  requires: [
    'foam.ui.md.DetailView',
    'foam.apps.builder.questionnaire.Questionnaire',
    'foam.dao.EasyDAO',
    'foam.dao.IDBDAO',
  ],

  exports: [
    'dao'
  ],

  properties: [
    {
      name: 'appConfig',
      help: 'The configuration for app parameters, question set, etc.',
    },
    {
      name: 'dao',
      help: 'The store of questionnaires filled in by users.',
      lazyFactory: function() {
        return this.appConfig.dao.factory(this.Y);
//         return this.EasyDAO.create({
//           model: this.Questionnaire,
//           name: 'questionnaires',
//           daoType: this.IDBDAO,
//           cache: true,
//           seqNo: true,
//           logging: true,
//         });
      }
    },
    {
      name: 'content',
      help: 'The current questionnaire being edited',
      view: 'foam.ui.md.DetailView',
      lazyFactory: function() {
        return this.appConfig.model.create({}, this.Y);
      }
    },
  ],

  actions: [
    {
      name: 'save',
      iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAASUlEQVR4AWPADUaBFmnKQxh+MzSQpvw/Q8PwU87KsIohkBTTI4CSvxiCSHAMUPI/UFEQunLCWoLRlBPWglBOpBaYcqK1YCgfBQDw0y1mS9NLDAAAAABJRU5ErkJggg==',
      //isAvailable: function() { return this.data.enableHomeBttn; },
      code: function() {
        this.dao.put(this.content, {
            put: function() {
              this.reload();
              //TODO: save ok notification
            }.bind(this),
            error: function() {
              //TODO: error notification
            }.bind(this),
        });
      }
    },
    {
      name: 'reload',
      iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAwElEQVR4Ad3SP04CURDA4a8RlpNYEP5zQbBGIYT4Ck5iZbwEcStj9AQW7JrI2LLxuYmx45tuMr9uXKSJpFT7VErGgIWsnr1ozElSWIr8+ZNwtDLV1TGzUQsvIh/shVd958Y+RD6YCEd9TTciH5CElaal+D0ohalzC9EW1EJXi38Hz8LMH9wLd3K2wq0fRk4qg8y+9uVaRhLeDJ0behfWsgqPQmVtrqcwt1EJD64gnyQnzefb6mg1snNQqR3sDFygb3rVYPgYJpUVAAAAAElFTkSuQmCC',
      //isAvailable: function() { return this.data.enableReloadBttn; },
      code: function() {
        this.content = this.appConfig.model.create();
      }
    },
  ],

  templates: [
    function toHTML() {/*
      <div id="%%id" <%= this.cssClassAttr() %>>
        $$content
      </div>
    */},
    function CSS() {/*
    */},
  ]
});