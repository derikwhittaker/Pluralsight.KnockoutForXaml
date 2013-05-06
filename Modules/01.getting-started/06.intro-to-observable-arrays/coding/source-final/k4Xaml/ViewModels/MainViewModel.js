var k4xaml;
(function (k4xaml) {
    var MainViewModel = (function () {
        function MainViewModel() {
            this.DisplayMessages = ko.observableArray([]);
            this.DisplayMessages.push({
                Message: 'Message 1'
            });
            this.DisplayMessages.push({
                Message: 'Message 2'
            });
            this.DisplayMessages.push({
                Message: 'Message 3'
            });
            this.DisplayMessages.push({
                Message: 'Message 4'
            });
        }
        return MainViewModel;
    })();
    k4xaml.MainViewModel = MainViewModel;    
})(k4xaml || (k4xaml = {}));
