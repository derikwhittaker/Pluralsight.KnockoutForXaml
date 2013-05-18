/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/knockout.mapping/knockout.mapping.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
 
module k4xaml {
    export class MainViewModel {
        public Sports: KnockoutObservableArray = ko.observableArray([]);
        public SelectedSport: KnockoutObservableAny = ko.observable();

        constructor() {
            this.Sports.push({ id: 1, Name: 'Baseball' });
            this.Sports.push({ id: 2, Name: 'Football' });
            this.Sports.push({ id: 3, Name: 'Basketball' });
            this.Sports.push({ id: 4, Name: 'Soccer' });
        }
    }
}
