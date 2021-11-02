# findPairs v0.0.2

- Finds all fuseswap pairs
- Gets current reserve for all pairs
- calculates if liquidity is at least ~ 10 cents
- exports CSV with columns: `liquid,symbol0,symbol1,reserve0,reserve1,token0,token1,pairAddress,lastBlock`

Example:

`node findPairs.js > pairs.csv`

# Requirements

- node - https://nodejs.org/
- ethers.js - https://docs.ethers.io/v5/

# Files

- [`contracts.js`](https://github.com/fusecrypto/fusecrypto/blob/main/scripts/findPairs/contracts.js) - list of contract info
- [`tokens.js`](https://github.com/fusecrypto/fusecrypto/blob/main/scripts/findPairs/tokens.js) - list of fuse network tokens
- [`tokensAccess.js`](https://github.com/fusecrypto/fusecrypto/blob/main/scripts/findPairs/tokensAccess.js) - functions to access token list
- [`findPairs.js`](https://github.com/fusecrypto/fusecrypto/blob/main/scripts/findPairs/findPairs.js) - main script to find all pairs and export
- [`example.pairs.csv`](https://github.com/fusecrypto/fusecrypto/blob/main/scripts/findPairs/example.pairs.csv) - example CSV export

