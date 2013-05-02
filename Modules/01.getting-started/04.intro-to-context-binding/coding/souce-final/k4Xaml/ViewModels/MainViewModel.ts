/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />

module k4xaml {
    export class MainViewModel {
        public DisplayMessage: KnockoutObservableString = ko.observable("Hello Developers");
    }
}