var Common = {};

Common.defaults = {
    type: { 0: 'Message', 1: 'Donation' },
    colCount: 0,
    colWidth: 0,
    margin: 0,
    containerWidth: 0,
    cards: []
};

Array.min = function (array) {
    return Math.min.apply(Math, array);
};