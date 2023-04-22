// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

// My Solution:
String.prototype.vowel = function () {
    return this.length === 1 && /[AEIOUaeiou]/.test(this);
};

//Other way:
String.prototype.vowel = function () {
    return /^[aeiou]$/i.test(this)
}