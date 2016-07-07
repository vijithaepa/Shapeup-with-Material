/**
 * Created by EpaV on 06/07/2016.
 */
(function(){
    angular.module('users').controller('userController', UserController);

    function UserController(userService, $mdSidenav, $mdBottomSheet, $timeout, $log){

        var self = this;

        self.selected     = null;
        self.users        = [ ];
        self.selectUser   = selectUser;
        self.toggleList   = toggleUsersList;
        self.makeContact  = makeContact;

        // Load all registered users

        userService
            .loadAllUsers()
            .then( function( users ) {
                self.users    = [].concat(users);
                self.selected = users[0];
                // console.info(self.selected);
            });
        // *********************************
        // Internal methods
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }


        /**
         * Select the current avatars
         * @param menuId
         */
        function selectUser ( user ) {
            self.selected = angular.isNumber(user) ? $scope.users[user] : user;
        }

        /**
         * Show the Contact view in the bottom sheet
         */
        function makeContact(selectedUser) {

            $mdBottomSheet.show({
                controllerAs  : "vm",
                templateUrl   : 'view/contactSheet.html',
                controller    : [ '$mdBottomSheet', ContactSheetController],
                parent        : angular.element(document.getElementById('content'))
            }).then(function(clickedItem) {
                $log.debug( clickedItem.name + ' clicked!');
            });

            /**
             * User ContactSheet controller
             */
            function ContactSheetController( $mdBottomSheet ) {
                this.user = selectedUser;
                this.items = [
                    { name: 'Phone'       , icon: 'phone'       , icon_url: 'images/svg/telegram.svg'},
                    { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'images/svg/twitter.svg'},
                    { name: 'Google+'     , icon: 'google_plus' , icon_url: 'images/svg/google-plus.svg'},
                    { name: 'Facebook'    , icon: 'facebook'    , icon_url: 'images/svg/facebook.svg'}
                ];
                this.contactUser = function(action) {
                    // The actually contact process has not been implemented...
                    // so just hide the bottomSheet

                    $mdBottomSheet.hide(action);
                };
            }
        }


    }
})();