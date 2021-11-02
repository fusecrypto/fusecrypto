# findPairs v0.0.2

- Finds all fuseswap pairs
- exports CSV with columns: `liquid,symbol0,symbol1,reserve0,reserve1,token0,token1,pairAddress,lastBlock`

Example:

`node findPairs.js > pairs.csv`

# Requirements

- node - https://nodejs.org/
- ethers.js - https://docs.ethers.io/v5/

# Files

- `contracts.js` - list of contract info
- `tokens.js` - list of fuse network tokens
- `tokensAccess.js` - functions to access token list
- `findPairs.js` - main script to find all pairs and export
- `example.pairs.csv` - example CSV export

