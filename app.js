let appModal=angular.module("appModal",["ui.bootstrap"])

appModal.controller("modalDetails",function($scope,$uibModal){
$scope.showModal=async function(){
    
    var values=await (await fetch('https://randomuser.me/api')).json()
    
    console.log(values)
    $uibModal.open({
               ariaLabelledBy: 'modal-title',
               ariaDescribedBy: 'modal-body',
               templateUrl: 'Modal.html',
               controller :'modalController',
               size: 'lg',
               resolve: {
                    values: function(){
                        return values;
                     }
                }
                  })


}
})

appModal.controller("modalController",function($scope,$uibModalInstance,values){
    $scope.title=values.results[0].name.title+" "+ values.results[0].name.first+" "+values.results[0].name.last
    $scope.description=` Email: ${values.results[0].email} Gender: ${values.results[0].gender}`
    $scope.ok = function(){
        $uibModalInstance.close('save')
    }
    
    $scope.cancel = function(){
        
        $uibModalInstance.close('close')
    }
})