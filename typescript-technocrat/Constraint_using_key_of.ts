{
    // generics contraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"; // manually

    type Owner2 = keyof Vehicle; // automatically

    const a: Owner = "bike";
    
    const b: Owner2 = "bike";

    function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) {
        return obj[key];
    }

    const user = {
        name: "Mr. Bean",
        age: 44,
        address: "London"
    }

    const car = {
        name: "Axo",
        model: "We9"
    }

    const result = getPropertyValue(user, "name")
    const result2 = getPropertyValue(car, "model")


}