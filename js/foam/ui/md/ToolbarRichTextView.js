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
  name: 'ToolbarRichTextView',
  package: 'foam.ui.md',
  extendsModel: 'foam.ui.RichTextView',

  templates: [
    function CSS() {/*
      @media (max-width: 360px) {
        .actionButtonCView-leftJustify, .actionButtonCView-centerJustify, .actionButtonCView-rightJustify {
          display: none;
        }
      }

      @media (max-width: 440px) {
        .actionButtonCView-numberedList, .actionButtonCView-bulletList {
          display: none;
        }
      }

      @media (max-width: 510px) {
        .actionButtonCView-decreaseIndentation, .actionButtonCView-increaseIndentation {
          display: none;
        }
      }

      @media (max-width: 560px) {
        .actionButtonCView-blockQuote {
          display: none;
        }
      }
    */},

    function toolbar() {/*
      <div class="toolbar">
      $$bold $$italic $$underline $$link $$leftJustify $$centerJustify $$rightJustify $$numberedList $$bulletList $$decreaseIndentation $$increaseIndentation $$blockQuote
      </div>
    */}
  ],

  actions: [
    {
      name: 'bold',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTEyLjE5OSwxMC41YzAsMCwxLjgwMS0wLjUsMS44MDEtMlMxMyw2LDExLjUsNkg2djloNS41YzEuNSwwLDIuNS0xLDIuNS0yLjVTMTIuMTk5LDEwLjUsMTIuMTk5LDEwLjV6IE0xMC41LDE0SDl2LTNoMS41DQoJYzAuNTUzLDAsMC44NSwwLjY3MiwwLjg1LDEuNVMxMS4wNTMsMTQsMTAuNSwxNHogTTEwLjUsMTBIOVY3aDEuNWMwLjU1MywwLDAuODUsMC42NzIsMC44NSwxLjVTMTEuMDUzLDEwLDEwLjUsMTB6Ii8+DQo8cmVjdCBvcGFjaXR5PSIwIiBmaWxsPSIjNDM4N0ZEIiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiLz4NCjwvc3ZnPg0K'
    },
    {
      name: 'italic',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBvbHlnb24gZmlsbD0iIzg4OCIgcG9pbnRzPSI5LDYgOSw3IDEwLjksNyA2LjksMTQgNSwxNCA1LDE1IDExLjI1LDE1IDExLjI1LDE0IDkuMSwxNCAxMy4xLDcgMTUsNyAxNSw2ICIvPg0KPHJlY3Qgb3BhY2l0eT0iMCIgZmlsbD0iIzQzODdGRCIgd2lkdGg9IjIxIiBoZWlnaHQ9IjIxIi8+DQo8L3N2Zz4NCg=='
    },
    {
      name: 'underline',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTEwLDE0YzIsMCw0LTEuNSw0LTRWNWgtMS44MDF2NWMwLDEuNS0wLjY5OSwyLjI1LTIuMTk5LDIuMjVTNy44LDExLjUsNy44LDEwVjVINnY1QzYsMTIuNSw4LDE0LDEwLDE0eiBNNSwxNXYxaDEwdi0xSDV6Ig0KCS8+DQo8cmVjdCBvcGFjaXR5PSIwIiBmaWxsPSIjNDM4N0ZEIiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiLz4NCjwvc3ZnPg0K'
    },
    {
      name: 'link',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTIuNzY4LDExLjAwOFY5Ljk5MkMyLjc2OCw5LjMxMSwzLjMxOCw4Ljc2LDQsOC43Nmg1QzguNTksNy43NjgsNy41MjUsNyw2LjUsN2gtMkMyLjU2Niw3LDEsOC41NjcsMSwxMC41UzIuNTY2LDE0LDQuNSwxNA0KCWgyYzEuMDI1LDAsMi4wOS0wLjc2OCwyLjUtMS43Nkg0QzMuMzE4LDEyLjI0LDIuNzY4LDExLjY4OSwyLjc2OCwxMS4wMDh6IE0xNS41LDdoLTJjLTEuMDI1LDAtMi4wOSwwLjc2OC0yLjUsMS43Nmg1DQoJYzAuNjgyLDAsMS4yMzIsMC41NTEsMS4yMzIsMS4yMzJ2MS4wMTZjMCwwLjY4Mi0wLjU1MSwxLjIzMi0xLjIzMiwxLjIzMmgtNWMwLjQxLDAuOTkyLDEuNDc1LDEuNzYsMi41LDEuNzZoMg0KCWMxLjkzNCwwLDMuNS0xLjU2NywzLjUtMy41UzE3LjQzNCw3LDE1LjUsN3ogTTYsMTAuNDk5YzAsMC40MTQsMC4zMzYsMC43NTEsMC43NSwwLjc1MWg2LjVjMC40MTQsMCwwLjc1LTAuMzM3LDAuNzUtMC43NTENCgljMC0wLjQxNS0wLjMzNi0wLjc0OS0wLjc1LTAuNzQ5aC02LjVDNi4zMzYsOS43NSw2LDEwLjA4NCw2LDEwLjQ5OXoiLz4NCjxyZWN0IG9wYWNpdHk9IjAiIGZpbGw9IiM0Mzg3RkQiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIvPg0KPC9zdmc+DQo='
    },
    {
      name: 'leftJustify',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTMsMTZoMTB2LTFIM1YxNnogTTEzLDExSDN2MWgxMFYxMXogTTEzLDdIM3YxaDEwVjd6IE0zLDE0aDE0di0xSDNWMTR6IE0zLDEwaDE0VjlIM1YxMHogTTMsNXYxaDE0VjVIM3oiLz4NCjxyZWN0IG9wYWNpdHk9IjAiIGZpbGw9IiM0Mzg3RkQiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIvPg0KPC9zdmc+DQo='
    },
    {
      name: 'centerJustify',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTUsMTF2MWgxMHYtMUg1eiBNMywxNGgxNHYtMUgzVjE0eiBNNSwxNmgxMHYtMUg1VjE2eiBNMywxMGgxNFY5SDNWMTB6IE01LDd2MWgxMFY3SDV6IE0zLDV2MWgxNFY1SDN6Ii8+DQo8cmVjdCBvcGFjaXR5PSIwIiBmaWxsPSIjNDM4N0ZEIiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiLz4NCjwvc3ZnPg0K'
    },
    {
      name: 'rightJustify',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTUsMTF2MWgxMHYtMUg1eiBNMywxNGgxNHYtMUgzVjE0eiBNNSwxNmgxMHYtMUg1VjE2eiBNMywxMGgxNFY5SDNWMTB6IE01LDd2MWgxMFY3SDV6IE0zLDV2MWgxNFY1SDN6Ii8+DQo8cmVjdCBvcGFjaXR5PSIwIiBmaWxsPSIjNDM4N0ZEIiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiLz4NCjwvc3ZnPg0K'
    },
    {
      name: 'numberedList',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTYsMTVjMC0wLjU1My0wLjQ0Ny0xLTEtMUgzdjFoMi4yNWwtMSwxbDEsMUgzdjFoMmMwLjU1MywwLDEtMC40NDcsMS0xYzAtMC4yNzYtMC4xMTEtMC41MjYtMC4yOTMtMC43MDdMNS40MTQsMTYNCglsMC4yOTMtMC4yOTNDNS44ODksMTUuNTI2LDYsMTUuMjc2LDYsMTV6IE01LjcwNywxMC43MDdDNS44ODksMTAuNTI2LDYsMTAuMjc2LDYsMTBjMC0wLjU1My0wLjQ0Ny0xLTEtMUgzdjFoMi4yNUwzLDEyLjI1VjEzaDN2LTENCglINC40MTRDNC40MTQsMTIsNS41MjUsMTAuODg5LDUuNzA3LDEwLjcwN3ogTTgsNXYxaDlWNUg4eiBNNCw4aDFWNEgzdjFoMVY4eiBNOCwxMWg5di0xSDhWMTF6IE04LDE2aDl2LTFIOFYxNnoiLz4NCjxyZWN0IG9wYWNpdHk9IjAiIGZpbGw9IiM0Mzg3RkQiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIvPg0KPC9zdmc+DQo='
    },
    {
      name: 'bulletList',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTYsMTVjMC0wLjU1My0wLjQ0Ny0xLTEtMUgzdjFoMi4yNWwtMSwxbDEsMUgzdjFoMmMwLjU1MywwLDEtMC40NDcsMS0xYzAtMC4yNzYtMC4xMTEtMC41MjYtMC4yOTMtMC43MDdMNS40MTQsMTYNCglsMC4yOTMtMC4yOTNDNS44ODksMTUuNTI2LDYsMTUuMjc2LDYsMTV6IE01LjcwNywxMC43MDdDNS44ODksMTAuNTI2LDYsMTAuMjc2LDYsMTBjMC0wLjU1My0wLjQ0Ny0xLTEtMUgzdjFoMi4yNUwzLDEyLjI1VjEzaDN2LTENCglINC40MTRDNC40MTQsMTIsNS41MjUsMTAuODg5LDUuNzA3LDEwLjcwN3ogTTgsNXYxaDlWNUg4eiBNNCw4aDFWNEgzdjFoMVY4eiBNOCwxMWg5di0xSDhWMTF6IE04LDE2aDl2LTFIOFYxNnoiLz4NCjxyZWN0IG9wYWNpdHk9IjAiIGZpbGw9IiM0Mzg3RkQiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIvPg0KPC9zdmc+DQo='
    },
    {
      name: 'decreaseIndentation',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTMsMTZoMTR2LTFIM1YxNnogTTgsOGg5VjdIOFY4eiBNOCwxMGg5VjlIOFYxMHogTTgsMTJoOXYtMUg4VjEyeiBNOCwxNGg5di0xSDhWMTR6IE0zLDV2MWgxNFY1SDN6Ii8+DQo8cG9seWdvbiBvcGFjaXR5PSIwLjg1IiBwb2ludHM9IjYsOCA2LDEzIDMsMTAuNSAiLz4NCjxyZWN0IG9wYWNpdHk9IjAiIGZpbGw9IiM0Mzg3RkQiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIvPg0KPC9zdmc+DQo='
    },
    {
      name: 'increaseIndentation',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTYsMTVjMC0wLjU1My0wLjQ0Ny0xLTEtMUgzdjFoMi4yNWwtMSwxbDEsMUgzdjFoMmMwLjU1MywwLDEtMC40NDcsMS0xYzAtMC4yNzYtMC4xMTEtMC41MjYtMC4yOTMtMC43MDdMNS40MTQsMTYNCglsMC4yOTMtMC4yOTNDNS44ODksMTUuNTI2LDYsMTUuMjc2LDYsMTV6IE01LjcwNywxMC43MDdDNS44ODksMTAuNTI2LDYsMTAuMjc2LDYsMTBjMC0wLjU1My0wLjQ0Ny0xLTEtMUgzdjFoMi4yNUwzLDEyLjI1VjEzaDN2LTENCglINC40MTRDNC40MTQsMTIsNS41MjUsMTAuODg5LDUuNzA3LDEwLjcwN3ogTTgsNXYxaDlWNUg4eiBNNCw4aDFWNEgzdjFoMVY4eiBNOCwxMWg5di0xSDhWMTF6IE04LDE2aDl2LTFIOFYxNnoiLz4NCjxyZWN0IG9wYWNpdHk9IjAiIGZpbGw9IiM0Mzg3RkQiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIvPg0KPC9zdmc+DQo='
    },
    {
      name: 'blockQuote',
      label: '',
      iconUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgb3ZlcmZsb3c9InZpc2libGUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIxIDIxIg0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxkZWZzPg0KPC9kZWZzPg0KPHBhdGggZmlsbD0iIzg4OCIgZD0iTTMsMTZoMTR2LTFIM1YxNnogTTgsOGg5VjdIOFY4eiBNOCwxMGg5VjlIOFYxMHogTTgsMTJoOXYtMUg4VjEyeiBNOCwxNGg5di0xSDhWMTR6IE0zLDV2MWgxNFY1SDN6Ii8+DQo8cG9seWdvbiBvcGFjaXR5PSIwLjg1IiBwb2ludHM9IjYsOCA2LDEzIDMsMTAuNSAiLz4NCjxyZWN0IG9wYWNpdHk9IjAiIGZpbGw9IiM0Mzg3RkQiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIvPg0KPC9zdmc+DQo='
    }
  ],

  methods: {
    init: function() {
      this.SUPER();
      this.Y = this.Y = this.Y.sub();
      this.Y.registerModel(this.X.lookup('foam.graphics.ActionButtonCView').xbind({
        background: 'white',
        radius: 18
      }), 'foam.ui.ActionButton');
    },
    toHTML: function() { return this.SUPER() + this.toolbar(); }
  }
});