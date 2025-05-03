"use strict";
{
    const a = "bike";
    const b = "bike";
    function getPropertyValue(obj, key) {
        return obj[key];
    }
    const user = {
        name: "Mr. Bean",
        age: 44,
        address: "London"
    };
    const car = {
        name: "Axo",
        model: "We9"
    };
    const result = getPropertyValue(user, "name");
    const result2 = getPropertyValue(car, "model");
}
