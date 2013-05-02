/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module k4xaml {
    export class MainViewModel {
        public DisplayMessage: KnockoutObservableString = ko.observable("Hello XAML Developers");
    }
}



<span data - bind = "text: DisplayMessage" > < / span >

<input type = "checkbox" data - bind = "checked: DisplayValue" / >