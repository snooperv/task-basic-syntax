export function romanToInteger(str) {
    var ar = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var rom = [
        'I',
        'IV',
        'V',
        'IX',
        'X',
        'XL',
        'L',
        'XC',
        'C',
        'CD',
        'D',
        'CM',
        'M',
    ];
    let result = 0;
    let k = 0;
    let n = ar.length - 1;
    while (n >= 0 && k < str.length) {
        if (str.substr(k, rom[n].length) == rom[n]) {
            result += ar[n];
            k += rom[n].length;
        } else n--;
    }
    return result;
}
