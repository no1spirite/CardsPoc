///<reference path="~/Scripts/Vendor/knockout-3.0.0.debug.js"/>
///<reference path="~/Scripts/Vendor/jquery-1.8.2.js"/>

///<reference path="~/Scripts/CardsPoc/ViewModels/Cards.js"/>

var cardsViewModel = {};
var CardsPoc = {
    init: function(cardsJson) {
        cardsViewModel = new Cards();
        ko.applyBindings(cardsViewModel, $('.container').get(0));
        cardsViewModel.update(cardsJson);
        
        $(window).scroll(function () {
            if ($(window).scrollTop() + 1500 >= ($(document).height() - ($(window).height()))) {
                if (Common.defaults.killScroll == false) {
                    Common.defaults.killScroll = true;
                    cardsViewModel.getMore(function () {
                        Common.defaults.killScroll = false;
                    });
                }
            }
        });
    },
    refresh: function() {
        CardsPoc.setupCards(function() {
            cardsViewModel.refresh();
        });
    },
    setupCards: function (callback) {
        Common.defaults.containerWidth = $('.cards-container-javascript').width();
        Common.defaults.colWidth = $('.content').outerWidth();
        Common.defaults.cards = [];
        Common.defaults.colCount = Math.floor(Common.defaults.containerWidth / (Common.defaults.colWidth + Common.defaults.margin * 2));
        for (var i = 0; i < Common.defaults.colCount; i++) {
            Common.defaults.cards.push(Common.defaults.margin);
        }
        
        if (callback !== undefined) {
            callback();
        }
    }
};

$(function () {
    CardsPoc.setupCards(function () {
        CardsPoc.init(cardsJson);
        $(window).resize(CardsPoc.refresh);
        Common.defaults.killScroll = false;
    });
});

