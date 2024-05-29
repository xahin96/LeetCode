const reverseVowels = function(s) {
    const vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
    let left = 0;
    let right = s.length - 1;
    let chars = s.split('');

    while (left < right) {
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }
        while (left < right && !vowels.has(chars[right])) {
            right--;
        }
        if (left < right) {
            // Swap vowels
            let temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
    }

    return chars.join('');
};
