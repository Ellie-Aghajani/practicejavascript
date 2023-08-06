function sum(...args) {
    return args.reduce((a, b) => a+b);
}

consolee.log(sum(1, 2, 3, 4));