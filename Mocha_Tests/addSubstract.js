export function addSubstract() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        substract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
