///<reference path="~/scripts/Vendor/knockout-3.0.0.debug.js"/>

///<reference path="~/Scripts/CardsPoc/common.js"/>

var Card = function (id) {
    var self = this;
    this.id = ko.observable(id);
    this.title = ko.observable("");
    this.content = ko.observable("");
    this.cardType = ko.observable("");
    this.imgUrl = ko.observable("");
    this.left = ko.observable(20);
    this.top = ko.observable(20);

    this.isCardType = function(cardType) {
        return Common.defaults.type[self.cardType()] == Common.defaults.type[cardType];
    };

    this.update = function (cardJson) {
        self.title(cardJson.Title);
        self.content(cardJson.Content);
        self.cardType(cardJson.CardType);
        self.imgUrl(cardJson.ImgUrl);
    };

    this.setPosition = function(left, top) {
        self.left(left);
        self.top(top);
    };
}