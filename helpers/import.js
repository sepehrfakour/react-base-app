require('./env.js');

const INDEX_NAME = 'SOME_INDEX_NAME';  // Set the name of the index

const algoliasearch = require('algoliasearch'),
      client        = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY),
      index         = client.initIndex(INDEX_NAME),
      records       = require('../data/SOME_DATA.json')
                        .filter((record) => {
                          return record.ranks_history.length > 0;
                        })
                        .map((record) => {
                          record.list_names       = record.ranks_history.map((historyObj) => {
                            return historyObj.list_name;
                          });
                          record.rank             = (!!record.ranks_history[0]['rank'])             ? record.ranks_history[0]['rank']                       : null;
                          record.display_name     = (!!record.ranks_history[0]['display_name'])     ? record.ranks_history[0]['display_name']               : null;
                          record.published_date   = (!!record.ranks_history[0]['published_date'])   ? record.ranks_history[0]['published_date']             : null;
                          record.timestamp        = (!!record.ranks_history[0]['published_date'])   ? Date.parse(record.ranks_history[0]['published_date']) : null;
                          record.bestsellers_date = (!!record.ranks_history[0]['bestsellers_date']) ? record.ranks_history[0]['bestsellers_date']           : null;
                          record.weeks_on_list    = (!!record.ranks_history[0]['weeks_on_list'])    ? record.ranks_history[0]['weeks_on_list']              : null;
                          record.ranks_last_week  = (!!record.ranks_history[0]['ranks_last_week'])  ? record.ranks_history[0]['ranks_last_week']            : null;
                          return record;
                        });

const executeImports = function (data) {
  index.addObjects(data, function(err, content) {
    if (err) { throw err }
    console.log('\n--- Algolia Import Complete ---\n');
  });
};

executeImports(records,authorsArray);
