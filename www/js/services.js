angular.module('mapTest.services', [])

//factory for maps Markers
.factory('Markers', function() {
  //fake Testing Data
  var markers = [{
    name: "Ashleys Bottlo",
    description: "Bla Bla",
    cords: {lat: -34.8178633 , lng: 138.6831162 },
    colour: '#19A3FF'
  }, {
    name: "test 2",
    description: "description 2",
    cords: {lat: -34.8158633 , lng: 138.683655 },
    colour: '#F0B2F0' 
  }];

  return {
    all: function() {
      return markers;
    }
  };

});
