'use strict';

/**
 * @ngdoc directive
 * @name keddoApp.directive:admAddWidget
 * @description
 * # admAddWidget
 */
angular.module('frontendApp')
  .directive('admWidget', function () {
    //model = something;
    //hint  = something;
    return {
      scope:{item:'=item', hint:'@hintAttr',type:'@itemType'},
      replace:true,
      template: ''+
        '<div ng-init="showForm=False" class="adm-menu-item"> '+
      '    <a ng-click="showForm=!showForm; model={type:type}"'+
        '       data-hint="{{hint}}">'+
        '    <i class="step fi-page-add size-72"> </i>'+
      '    </a> '+
        '    <div ng-show="showForm" style="position:relative;">'+
      '        {{model}}<div class="container">'+
        '            <span ng-repeat="(key,param) in item">'+
        '                <input type="text" placeholder="{{key}}"  ng-model="model.data[key]" />'+
        '            </span>'+
        ' <input type="text" ng-model="model.type" />'+
        '        </div> ' +
        '        <div class="btn btn-primary"'+
        '             data-drag="true"'+
        '             data-jqyoui-options="{revert: \'invalid\',cursorAt:{top:15},cursor:\'walt\',snap:\'.ui-droppable\',snapMode:\'inner\'}"'+
        '             ng-model="model"'+
        '             jqyoui-draggable="{animate:true}"'+
        '             ng-hide="!model">[dragme]</div>'+
        '        </div>'+
        '    </div>'+
        '</div>'
      }
  });
