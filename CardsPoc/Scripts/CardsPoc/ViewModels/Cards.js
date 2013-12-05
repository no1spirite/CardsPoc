///<reference path="~/scripts/Vendor/knockout-3.0.0.debug.js"/>
///<reference path="~/scripts/Vendor/jquery-1.8.2.js"/>

///<reference path="~/Scripts/CardsPoc/ViewModels/Card.js"/>
///<reference path="~/Scripts/CardsPoc/common.js"/>

var Cards = function () {
    var self = this;
    var min = 0;
    var index = 0;
    this.cards = ko.observableArray([]);
    this.loaded = ko.observable(false);
    this.containerHeight = ko.observable(0);

    this.update = function (cardsJson) {
        $.each(cardsJson, function (key, value) {
            var card = new Card(self.cards().length);
            card.update(value);
            setCardPosition(card);
            self.cards.push(card);
        });

        self.loaded(true);
    };

    this.refresh = function () {
        $.each(self.cards(), function (key, value) {
            setCardPosition(value);
            Common.defaults.cards[$.inArray(Array.min(Common.defaults.cards), Common.defaults.cards)] = Array.min(Common.defaults.cards) + $('#' + value.id()).get(0).scrollHeight + Common.defaults.margin;
            //Common.defaults.cards[index] = min + value.height() + Common.defaults.margin;
        });
    };

    var setCardPosition = function (card) {
        min = Array.min(Common.defaults.cards);
        self.containerHeight(Array.max(Common.defaults.cards));
        index = $.inArray(min, Common.defaults.cards);
        var leftPos = Common.defaults.margin + (index * (Common.defaults.colWidth + Common.defaults.margin));
        card.setPosition(leftPos, min);
    };
}