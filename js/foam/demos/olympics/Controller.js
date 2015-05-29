CLASS({
  package: 'foam.demos.olympics',
  name: 'Controller',
  extendsModel: 'foam.ui.View',

  requires: [
    'foam.ui.TextFieldView',
    'foam.dao.EasyDAO',
    'foam.demos.olympics.Medal',
    'foam.ui.search.GroupBySearchView'
  ],

  properties: [
    {
      name: 'query'
    },
    {
      model_: 'foam.core.types.DAOProperty',
      name: 'dao',
      factory: function() {
        var Medal = foam.demos.olympics.Medal;
        return foam.dao.EasyDAO.create({
          model: Medal,
          daoType: 'MDAO',
          seqNo: true
        })/*.addIndex(Medal.CITY).addIndex(Medal.COLOR).addIndex(Medal.SPORT)*/;
      }
    },
    {
      model_: 'foam.core.types.DAOProperty',
      name: 'filteredDAO',
      view: { factory_: 'foam.ui.TableView', xxxscrollEnabled: true, rows: 30}
    },
    {
      name: 'fromYear'
    },
    {
      name: 'toYear'
    },
    {
      name: 'color'
    },
    {
      name: 'country'
    },
    {
      name: 'city'
    },
    {
      name: 'gender'
    },
    {
      name: 'discipline'
    },
    {
      name: 'sport'
    },
    {
      name: 'predicate'
    },
    {
      model_: 'StringProperty',
      name: 'sql',
      displayWidth: 30,
      displayHeight: 10
    }
  ],

  methods: [
    function addGroup(prop, opt_name, opt_map) {
      var map = opt_map || {};
      map.property = prop;
      map.size = map.size || 1;
      this[opt_name || prop.name] = this.GroupBySearchView.create(map);
    },

    function init() {
      this.SUPER();

GLOBAL.ctrl = this;
      var self = this;
      var Medal = this.Medal;

      axhr('js/foam/demos/olympics/MedalData.json')(function (data) {
        data.limit(5000).select(self.dao);
        self.fromYear.dao = self.toYear.dao = self.discipline.dao = self.sport.dao = self.color.dao = self.country.dao = self.city.dao = self.gender.dao = self.dao;
      });

      this.addGroup(Medal.YEAR, 'fromYear', {label: 'From', op: GTE});
      this.addGroup(Medal.YEAR, 'toYear',   {label: 'To',   op: LTE});
      this.addGroup(Medal.COLOR, null,      {size: 4});
      this.addGroup(Medal.COUNTRY);
      this.addGroup(Medal.CITY);
      this.addGroup(Medal.GENDER, null,     {size: 3});
      this.addGroup(Medal.DISCIPLINE);
      this.addGroup(Medal.SPORT);

      Events.dynamic(
        /*
        function() {
          self.fromYear.predicate;
          self.toYear.predicate;
          self.color.predicate;
          self.country.predicate;
          self.city.predicate;
          self.gender.predicate;
          self.discipline.predicate;
          self.sport.predicate; },*/
        function() {
          self.predicate = AND(
            self.fromYear.predicate,
            self.toYear.predicate,
            self.color.predicate,
            self.country.predicate,
            self.city.predicate,
            self.gender.predicate,
            self.discipline.predicate,
            self.sport.predicate
          ).partialEval();

          self.sql = 'SELECT * FROM Medal' +
            (self.predicate !== TRUE ?
              ' WHERE (' + self.predicate.toSQL() + ')' :
              '');

          self.filteredDAO = self.dao.where(self.predicate);
        });
    }
  ],

  actions: [
    {
      name: 'clear',
      action: function() {
        this.fromYear.predicate =
        this.toYear.predicate =
        this.color.predicate =
        this.country.predicate =
        this.city.predicate =
        this.gender.predicate =
        this.discipline.predicate =
        this.sport.predicate = TRUE;
      }
    }
  ],

  templates: [
    function CSS() {/*
      .medalController {
        display: flex;
      }
      .foamSearchView select {
        width: 300px;
      }
      .tableView {
        width: auto !important;
      }
      .MedalTable {
        width: auto !important;
      }
      .searchPanel {
        margin: 15px;
      }
      .searchResults {
        margin-left: 40px;
      }
      input[name='query'] {
        width: 300px;
      }
    */},
    function toHTML() {/*
      <div class="medalController">
        <div class="searchPanel">
          Search:<br>
          $$query
          %%fromYear %%toYear %%city %%discipline %%sport %%country %%color %%gender
          $$clear<br>
          <br>SQL:<br>$$sql{mode: 'read-only'}
        </div>
        <div class="searchResults">
          $$filteredDAO
        </div>
      </div>
    */}
  ]
});