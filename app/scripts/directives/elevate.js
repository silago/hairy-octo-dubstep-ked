
angular.module('frontendApp')
.directive('ngElevateZoom', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      //Will watch for changes on the attribute
      attrs.$observe('zoomImage',function(){
        linkElevateZoom();
      })

      function linkElevateZoom(){
        $(element).removeData('elevateZoom');//remove zoom instance from image
        $(element).removeData('zoomImage');//remove zoom instance from image
        $('.zoomContainer').remove();
        //Check if its not empty
        if (!attrs.zoomImage) return;
        element.attr('data-zoom-image',attrs.zoomImage);
        $(element).elevateZoom();
      }

      linkElevateZoom();

    }
  };
});
