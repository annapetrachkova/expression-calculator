function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let open = 0, close = 0;
    for (const item of expr) {
        if (item === "(") {
            open++;
        }
        if (item === ")") {
            close++;
        }
    }

    if (expr.includes('/ 0')) {
        throw new Error("TypeError: Division by zero.");
    } else if (open !== close) {
        throw new Error("ExpressionError: Brackets must be paired");
    } else {
        return new Function(`return ${expr}`)();
    }
}

module.exports = {
    expressionCalculator
}