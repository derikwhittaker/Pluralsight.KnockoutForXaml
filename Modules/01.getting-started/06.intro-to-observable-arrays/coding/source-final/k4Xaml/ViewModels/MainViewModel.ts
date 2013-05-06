/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/knockout.mapping/knockout.mapping.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
 
module k4xaml {
    export class MainViewModel {
        public DisplayMessages: KnockoutObservableArray = ko.observableArray([]);

        constructor() {
            this.DisplayMessages.push({ Message: 'Message 1' });
            this.DisplayMessages.push({ Message: 'Message 2' });
            this.DisplayMessages.push({ Message: 'Message 3' });
            this.DisplayMessages.push({ Message: 'Message 4' });
        }
    }
}
