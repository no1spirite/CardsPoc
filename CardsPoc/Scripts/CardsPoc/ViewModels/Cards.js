///<reference path="~/scripts/Vendor/knockout-3.0.0.debug.js"/>
///<reference path="~/scripts/Vendor/jquery-1.8.2.js"/>

///<reference path="~/Scripts/CardsPoc/ViewModels/Card.js"/>
///<reference path="~/Scripts/CardsPoc/common.js"/>

var Cards = function () {
    var self = this;
    var index = 0;
    var min = 0;
    this.cards = ko.observableArray([]);
    this.loaded = ko.observable(false);

    this.update = function (cardsJson) {
        $.each(cardsJson, function(key, value) {
            var card = new Card(self.cards().length);
            card.update(value);   
            min = Array.min(Common.defaults.cards);
            index = $.inArray(min, Common.defaults.cards);
            var leftPos = Common.defaults.margin + (index * (Common.defaults.colWidth + Common.defaults.margin));
            card.setPosition(leftPos, min);
            self.cards.push(card);
            self.saveCard(card);
        });

        self.loaded(true);  
    };

    this.refresh = function () {
        $.each(self.cards(), function (key, value) {
            min = Array.min(Common.defaults.cards);
            index = $.inArray(min, Common.defaults.cards);
            var leftPos = Common.defaults.margin + (index * (Common.defaults.colWidth + Common.defaults.margin));
            value.setPosition(leftPos, min);
            self.saveCard(value);
        });
    };

    this.saveCard = function(card) {
        Common.defaults.cards[index] = min + $('#' + card.id()).get(0).scrollHeight + Common.defaults.margin;
    };

    this.getMore = function(callback) {
        $.ajax("GetMore")
            .done(function(cardsJson) {
                self.update(cardsJson);
                if (callback !== undefined) {
                    callback();
                }
            });
    };
}