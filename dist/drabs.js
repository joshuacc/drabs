// Drabs 0.0.1 built on 11-05-2013
// https://github.com/joshuacc/drabs
// (c) 2013 Joshua Clanton
// Drabs may be freely distributed under the MIT license.
(function(root) {

    root.drabs = {};

    drabs.deepGet = function (obj, props, defaultValue) {
        // If the property list is in dot notation, convert to array
        if (typeof props === "string") {
            props = props.split(".");
        }

        // In order to avoid constantly checking the type of the properties
        // we separate the real logic out into an inner function.
        var deepGetByArray = function (obj, propsArray, defaultValue) {
            // If we have reached an undefined/null property
            // then stop executing and return the default value.
            // If no default was provided it will be undefined.
            if (obj === undefined || obj === null) {
                return defaultValue;
            }

            // If the path array has no more elements, we've reached
            // the intended property and return its value
            if (propsArray.length === 0) {
                return obj;
            }

            // Prepare our found property and path array for recursion
            var foundSoFar = obj[propsArray[0]];
            var remainingProps = propsArray.slice(1);

            return deepGetByArray(foundSoFar, remainingProps, defaultValue);
        };

        return deepGetByArray(obj, props, defaultValue);
    };

})(this);