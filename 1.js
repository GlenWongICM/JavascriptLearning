// 7/17/2023

var n = Math.random();
n = n * 6;
n = Math.floor(n);


var arr = [];

function fib(n) {
    arr = [];
    for (var i = 1; i < n; i++) {
        arr.push(helper(i));
    }
    
}

// 0, 1, 2

function helper(num) {
    if (num == 0 || num == 1) {
        return 0;
    } else if (num == 2) {
        return 1;
    } else {
        return helper(num - 1) + helper(num - 2);
    }
}


function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }

    }
    return output;
}




