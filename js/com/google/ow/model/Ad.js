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
  package: 'com.google.ow.model',
  name: 'Ad',

  properties: [
    {
      model_: 'StringProperty',
      name: 'titleText',
      required: true,
    },
    {
      model_: 'StringProperty',
      name: 'summaryText',
      required: true,
    },
    {
      model_: 'ReferenceProperty',
      name: 'image',
    },
    {
      model_: 'StringProperty',
      name: 'headerImageUrl',
    },
  ],
});
