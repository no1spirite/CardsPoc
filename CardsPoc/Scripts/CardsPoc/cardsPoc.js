﻿///<reference path="~/Scripts/Vendor/knockout-3.0.0.debug.js"/>
///<reference path="~/Scripts/Vendor/jquery-1.8.2.js"/>

///<reference path="~/Scripts/Extensions/knockout.extensions.js"/>
///<reference path="~/Scripts/CardsPoc/ViewModels/Cards.js"/>

var cardsViewModel = {};
var CardsPoc = {
    init: function (cardsJson) {
        this.setBindings(cardsJson);
        if (Common.defaults.infiniteScroll === true) {
            this.setScroll();
            CardsPoc.defaults.killScroll = false;
        }
    },
    setBindings: function (cardsJson) {
        this.cardsViewModel = new Cards();
        ko.applyBindings(CardsPoc, $(CardsPoc.defaults.$container).get(0));
        this.cardsViewModel.update(cardsJson);
    },
    setScroll: function() {
        $(window).scroll(function () {
            if ($(window).scrollTop() + 1500 >= ($(document).height() - ($(window).height()))) {
                if (CardsPoc.defaults.killScroll == false) {
                    CardsPoc.defaults.killScroll = true;
                    CardsPoc.getMore(function () {
                        CardsPoc.defaults.killScroll = false;
                    });
                }
            }
        });
    },
    afterInitialCardRender: function (element) {
        Common.defaults.cards[$.inArray(Array.min(Common.defaults.cards), Common.defaults.cards)] = Array.min(Common.defaults.cards) + $(element).parent().get(0).scrollHeight + Common.defaults.margin;
    },
    getMore: function (callback) {
        $.ajax(Common.defaults.ajaxGetMethod)
          .done(function (cardsJson) {
              CardsPoc.cardsViewModel.update(cardsJson);
              if (callback !== undefined) {
                  callback();
              }
        });
    },
    refresh: function () {
        CardsPoc.setupCards(function() {
            CardsPoc.cardsViewModel.refresh();
        });
        
    },
    setupCards: function (callback) {
        Common.defaults.containerWidth = $(CardsPoc.defaults.$cardsContainer).width();
        Common.defaults.colWidth = Math.floor($(CardsPoc.defaults.$content).get(0).getBoundingClientRect().width || $(CardsPoc.defaults.$content).width());
        Common.defaults.cards = [];
        Common.defaults.colCount = Math.floor(Common.defaults.containerWidth / (Common.defaults.colWidth + Common.defaults.margin * 2));
        for (var i = 0; i < Common.defaults.colCount; i++) {
            Common.defaults.cards.push(Common.defaults.margin);
        }
        
        if (callback !== undefined) {
            callback();
        }
    },
    defaults: {
        $cardsContainer: '.cards-container-javascript',
        $content: '.content',
        $container: '.container',
        killScroll: true
    }
};

(function (cardsJson) {
    CardsPoc.setupCards(function() {
        CardsPoc.init(cardsJson);
        $(window).resize(CardsPoc.refresh);
    });
})(cardsJson);