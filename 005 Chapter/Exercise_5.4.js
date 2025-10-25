function dominantDirection(text) {
    if (text.length === 0) return 'ltr';
    
    const directions = text.split('').map(char => {
        const code = char.codePointAt(0);
        if (code >= 0x0600 && code <= 0x06FF) return 'rtl';
        if (code >= 0x0590 && code <= 0x05FF) return 'rtl';
        return 'ltr';
    });
    
    const counts = directions.reduce((acc, dir) => {
        acc[dir] = (acc[dir] || 0) + 1;
        return acc;
    }, {});
    
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

// Testing
console.log(dominantDirection("Hello!") === "ltr");
console.log(dominantDirection("مرحبا") === "rtl");
console.log(dominantDirection("Hello مرحبا") === "ltr");
console.log(dominantDirection("") === "ltr");
