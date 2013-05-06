/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/knockout.mapping/knockout.mapping.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
 
module k4xaml {
    export class MainViewModel {
        public FirstName: KnockoutObservableString = ko.observable("");
        public LastName: KnockoutObservableString = ko.observable("");

        public FullName: KnockoutComputed;

        constructor() {
            this.FullName = ko.computed(() => {
                return this.FirstName() + " " + this.LastName();
            });
        }
    }
}
