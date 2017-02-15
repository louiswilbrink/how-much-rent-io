'use strict'

function SearchController () {
  console.log('SearchController');
}

angular.module('howmuchrentio').component('search', {
  templateUrl: 'components/search/search.html',
  controller: SearchController
});
