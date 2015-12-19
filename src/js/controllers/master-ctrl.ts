interface IMasterCtrl{
    getWidth() : number;
    toggle : boolean;
    toggleSidebar() : void;
}
class MasterCtrl implements IMasterCtrl{
    mobileView:number = 992;
    toggle : boolean  ;

    constructor(private $scope: ng.IScope, $cookieStore){
        $scope.$watch(this.getWidth, (newValue:number, oldValue:number)=> {
            if (newValue >= this.mobileView) {
                if (angular.isDefined($cookieStore.get('toggle'))) {
                    this.toggle = ! $cookieStore.get('toggle') ;
                } else {
                    this.toggle = true;
                }
            } else {
                this.toggle = false;
            }

        });
        window.onresize = function() {
            $scope.$apply();
        };
    };
    toggleSidebar = ()=>{
        this.toggle = !this.toggle;
    };
    getWidth = ()=> {
        return window.innerWidth;
    };

}
angular.module('RDash')
    .controller('MasterCtrl', [ '$scope', '$cookieStore', MasterCtrl] );