const hbs = require("hbs");

// CUSTOM HELPERS

// function below: add the ternary operator functionnality to .hbs files
// usage : {{ternary true "yay" "nay "}} => prints yay
// usage : {{ternary NaN "yay" "nay "}} => prints nay
hbs.registerHelper("ternary", (test, yes, no) => (test ? yes : no));

// add comparison operator feature to hbs templates
/* 

USAGE =>

{{#compare 1 10 operator="<"}}
awesome, 1 is less thant 10 !!!
{{/compare}}

*/

hbs.registerHelper("handleSizes", (array, options) => {
  if (!options.hash.handleSelect) {
    let str = "";
    array.forEach((el) => {
      str += `<option value='${el}'>${el}</option>`;
    });
    return str;
  } else {
    let str = "";
    array.forEach((el) => {
      if (options.hash.sizes.includes(el)) {
        str += `<option selected value='${el}'>${el}</option>`;
      } else {
        str += `<option value='${el}'>${el}</option>`;
      }
    });
    return str;
  }
});

hbs.registerHelper("isSelected", (lvalue, rvalue, options) => {
  const isArray = Array.isArray(lvalue);
  if (isArray) {
    return lvalue.includes(rvalue.toString()) ? "selected" : "";
  } else {
    return lvalue === rvalue ? "selected" : "";
  }
});

hbs.registerHelper("compare", function (lvalue, rvalue, options) {
  if (arguments.length < 3)
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

  var operator = options.hash.operator || "==";

  var operators = {
    "==": function (l, r) {
      return l == r;
    },
    "===": function (l, r) {
      return l === r;
    },
    "!=": function (l, r) {
      return l != r;
    },
    "<": function (l, r) {
      return l < r;
    },
    ">": function (l, r) {
      return l > r;
    },
    "<=": function (l, r) {
      return l <= r;
    },
    ">=": function (l, r) {
      return l >= r;
    },
    typeof: function (l, r) {
      return typeof l == r;
    },
  };

  if (!operators[operator])
    throw new Error(
      "Handlerbars Helper 'compare' doesn't know the operator " + operator
    );

  var result = operators[operator](lvalue, rvalue);

  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper("totalPrice", function (items, options) {
  items.forEach((i) => console.log(i.price));
  return items.reduce((acc, curr) => (acc += curr.price), 0);
});
