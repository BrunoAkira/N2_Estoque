(function () {
    'use strict';

    angular
        .module('app')
        .controller('Estoque.IndexController', Controller);

    function Controller($window, ItemService, FlashService) {
        var vm = this;

        vm.item= null;
        vm.saveItem = saveItem;
        //vm.deleteItem = deleteItem;

        initController();

        function initController()
         {
            // get current user
           // UserService.GetCurrent().then(function (user) {
            //    vm.user = user;
           // });
        }

        function saveItem() {
            EstoqueService.Update(vm.item)
                .then(function () {
                    FlashService.Success('Item updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        /*function deleteUser() {
            UserService.Delete(vm.user._id)
                .then(function () {
                    // log user out
                    $window.location = '/login';
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }*/
    }

})();