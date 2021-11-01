const tokens = require('./tokens.js');

module.exports = {
    getAddressFromSymbol: (symbol) => {
        for (const token of tokens.tokenList) {
            if (symbol.toUpperCase() === token.symbol.toUpperCase()) {
                return token.address;
            }
        }
        
        return '';
    },
    getDecimalsFromAddress: (address) => {
        for (const token of tokens.tokenList) {
            if (address.toUpperCase() === token.address.toUpperCase()) {
                return token.decimals;
            }
        }
        
        return 0;
    },
    getDecimalsFromSymbol: (symbol) => {
        for (const token of tokens.tokenList) {
            if (symbol.toUpperCase() === token.symbol.toUpperCase()) {
                return token.decimals;
            }
        }
        
        return 0;
    },
    getSymbolFromAddress: (address) => {
        for (const token of tokens.tokenList) {
            if (address.toUpperCase() === token.address.toUpperCase()) {
                return token.displaySymbol ?? token.symbol;
            }
        }
        
        return '---';
    },
    getMinLQFromAddress: (address) => {
        for (const token of tokens.tokenList) {
            if (address.toUpperCase() === token.address.toUpperCase()) {
                return token.minLQ ?? null;
            }
        }
        
        return null;
    },
    getMinLQFromSymbol: (symbol) => {
        for (const token of tokens.tokenList) {
            if (symbol.toUpperCase() === token.symbol.toUpperCase()) {
                return token.minLQ ?? null;
            }
        }
        
        return null;
    },
};
