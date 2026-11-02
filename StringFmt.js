

function cleanText(text) {
    const word = text.trim()
    return word
}

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase()
}

function formatDisplayName(text) {
    const cleanedText = cleanText(text)
    return capitalize(cleanedText)
}
console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));