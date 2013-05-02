var k4xaml;
(function (k4xaml) {
    var MainViewModel = (function () {
        function MainViewModel() {
            this.DisplayMessage = ko.observable("Hello Developers");
        }
        return MainViewModel;
    })();
    k4xaml.MainViewModel = MainViewModel;    
})(k4xaml || (k4xaml = {}));
