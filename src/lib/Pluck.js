/**
 *  Gets the property value of path from all elements in collection.
 *
 *  @author  David
 *  @date    Nov 1, 2016
 *
 */

import {isArray} from 'angular';

var pluck = function(arr, key) {
    if (!isArray(arr) || arr.length === 0) {
        return [];
    }
    if (!key) {
        return arr;
    }
    return arr.map(function(a) {
        return a[key];
    });
};

export default pluck;
