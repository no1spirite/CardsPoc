///<reference path="~/scripts/Vendor/knockout-3.0.0.debug.js"/>
///<reference path="~/scripts/Vendor/jquery-1.8.2.js"/>

ko.bindingHandlers['height-two-way'] = {
    init: function (element, valueAccessor) {
        var modelValue = valueAccessor();
        
        modelValue(element.scrollHeight);
    },
    update: function(element, valueAccessor, allBindings) {
        var modelValue = valueAccessor();

        modelValue(element.scrollHeight);
    }
};