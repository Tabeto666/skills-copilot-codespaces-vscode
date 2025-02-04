function calculateNumbers(var1, var2) {
    var1 = parseInt(var1);
    var2 = parseInt(var2);
    if (isNaN(var1) || isNaN(var2)) {
        return "Invalid input";
    }
    return var1 + var2;
}