var k4xaml;
(function (k4xaml) {
    var MainViewModel = (function () {
        function MainViewModel() {
            var _this = this;
            this.FirstName = ko.observable("");
            this.LastName = ko.observable("");
            this.FullName = ko.computed(function () {
                return _this.FirstName() + " " + _this.LastName();
            });
        }
        return MainViewModel;
    })();
    k4xaml.MainViewModel = MainViewModel;    
})(k4xaml || (k4xaml = {}));
