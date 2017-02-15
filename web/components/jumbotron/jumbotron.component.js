'use strict'

function JumbotronController () {
  console.log('JumbotronController');
}

angular.module('howmuchrentio').component('jumbotron', {
  templateUrl: 'components/jumbotron/jumbotron.html',
  controller: JumbotronController
});
