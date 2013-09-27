/**
 * @fileoverview Test cases for the numeric tick-generating functions.
 * These were generated by adding logging code to the old ticker functions. The
 * tests serve to track existing behavior should it change in the future.
 *
 * @author danvdk@gmail.com (Dan Vanderkam)
 */

var NumericTickerTestCase = TestCase("numeric-ticker-tests");

NumericTickerTestCase.prototype.setUp = function() {
  document.body.innerHTML = "<div id='graph'></div>";
};

NumericTickerTestCase.prototype.createOptionsViewForAxis = function(axis, dict) {
  return function (x) {
    if (dict && dict.hasOwnProperty(x)) {
      return dict[x];
    }
    if (Dygraph.DEFAULT_ATTRS.axes[axis].hasOwnProperty(x)) {
      return Dygraph.DEFAULT_ATTRS.axes[axis][x];
    }
    if (Dygraph.DEFAULT_ATTRS.hasOwnProperty(x)) {
      return Dygraph.DEFAULT_ATTRS[x];
    }
    if (x == 'axisLabelFormatter') return null;
    throw "mysterious " + axis + "-axis option: " + x;
  };
};

NumericTickerTestCase.prototype.testBasicNumericTicker = function() {
  var opts = {"logscale":null,"labelsKMG2":false,"labelsKMB":false};
  var options = this.createOptionsViewForAxis('y', opts);

  var ticks = Dygraph.numericTicks(-0.4, 4.4, 320, options);
  var expected_ticks = [
    {"v":-0.5,"label":"-0.5"},
    {"v":0,"label":"0"},
    {"v":0.5,"label":"0.5"},
    {"v":1,"label":"1"},
    {"v":1.5,"label":"1.5"},
    {"v":2,"label":"2"},
    {"v":2.5,"label":"2.5"},
    {"v":3,"label":"3"},
    {"v":3.5,"label":"3.5"},
    {"v":4,"label":"4"},
    {"v":4.5,"label":"4.5"}];
  assertEquals(expected_ticks, ticks);

  ticks = Dygraph.numericTicks(1, 84, 540, options);
  var expected_ticks = [
    {"v":0,"label":"0"},
    {"v":5,"label":"5"},
    {"v":10,"label":"10"},
    {"v":15,"label":"15"},
    {"v":20,"label":"20"},
    {"v":25,"label":"25"},
    {"v":30,"label":"30"},
    {"v":35,"label":"35"},
    {"v":40,"label":"40"},
    {"v":45,"label":"45"},
    {"v":50,"label":"50"},
    {"v":55,"label":"55"},
    {"v":60,"label":"60"},
    {"v":65,"label":"65"},
    {"v":70,"label":"70"},
    {"v":75,"label":"75"},
    {"v":80,"label":"80"},
    {"v":85,"label":"85"}
  ];
  assertEquals(expected_ticks, ticks);
};