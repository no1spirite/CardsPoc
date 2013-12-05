///<reference path="~/scripts/Vendor/knockout-3.0.0.debug.js"/>
///<reference path="~/scripts/Vendor/jquery-1.8.2.js"/>

///<reference path="~/Scripts/CardsPoc/ViewModels/Card.js"/>
///<reference path="~/Scripts/CardsPoc/common.js"/>

var Cards = function () {
    var self = this;
    this.cards = ko.observableArray([]);
    this.loaded = ko.observable(false);
    this.containerHeight = ko.observable(0);

    this.update = function (cardsJson) {
        $.each(cardsJson, function(key, value) {
            var card = new Card(self.cards().length);
            card.update(value);   
            setCardPosition(card);
            self.cards.push(card);
        });

        self.loaded(true);  
    };

    this.someFunction = function() {

    };

    this.refresh = function () {
        $.each(self.cards(), function (key, value) {
            setCardPosition(value);
            Common.defaults.cards[index] = min + value.height() + Common.defaults.margin;
        });
    };

    var setCardPosition = function(card) {
        var min = Array.min(Common.defaults.cards);
        self.containerHeight(Array.max(Common.defaults.cards));
        var index = $.inArray(min, Common.defaults.cards);
        var leftPos = Common.defaults.margin + (index * (Common.defaults.colWidth + Common.defaults.margin));
        card.setPosition(leftPos, min);
    };
}