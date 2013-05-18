var k4xaml;
(function (k4xaml) {
    var MainViewModel = (function () {
        function MainViewModel() {
            this.Sports = ko.observableArray([]);
            this.SelectedSport = ko.observable();
            this.Sports.push({
                id: 1,
                Name: 'Baseball'
            });
            this.Sports.push({
                id: 2,
                Name: 'Football'
            });
            this.Sports.push({
                id: 3,
                Name: 'Basketball'
            });
            this.Sports.push({
                id: 4,
                Name: 'Soccer'
            });
        }
        return MainViewModel;
    })();
    k4xaml.MainViewModel = MainViewModel;    
})(k4xaml || (k4xaml = {}));
