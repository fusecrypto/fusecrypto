#!/usr/bin/env node

const ethers = require('ethers');
const tokenAccess = require('./tokensAccess.js');
const contracts = require('./contracts.js');

const provider = new ethers.providers.JsonRpcProvider('https://rpc.fuse.io')
const factoryContract = new ethers.Contract(contracts.factory.address, contracts.factory.abi, provider);

const run = async() => {
    const events = await factoryContract.queryFilter(factoryContract.filters.PairCreated());

    console.log('liquid,symbol0,symbol1,reserve0,reserve1,token0,token1,pairAddress,lastBlock');

    let token0, token1, pairAddress, pairContract, reserves, reserve0, reserve1;
    for (const event of events) {

        token0 = event.args.token0;
        symbol0 = tokenAccess.getSymbolFromAddress(token0);
        decimals0 = tokenAccess.getDecimalsFromAddress(token0);

        token1 = event.args.token1;
        symbol1 = tokenAccess.getSymbolFromAddress(token1);
        decimals1 = tokenAccess.getDecimalsFromAddress(token1);

        pairAddress = event.args.pair;
        pairContract = new ethers.Contract(pairAddress, contracts.pair.abi, provider);

        reserves = await pairContract.getReserves();

        reserve0 = ethers.utils.formatUnits(reserves.reserve0, decimals0);
        reserve1 = ethers.utils.formatUnits(reserves.reserve1, decimals1);

        let liquid = '-';
        minLQ0 = tokenAccess.getMinLQFromAddress(token0);
        if (minLQ0 !== null) {
            liquid = minLQ0 > reserve0 ? 'N' : 'Y';
        }
        minLQ1 = tokenAccess.getMinLQFromAddress(token1);
        if (minLQ1 !== null) {
            liquid = minLQ1 > reserve1 ? 'N' : 'Y';
        }


        console.log(
            liquid + ',' +
            symbol0  + ',' + symbol1  + ',' +
            reserve0 + ',' + reserve1 + ',' +
            token0   + ',' + token1   + ',' + 
            pairAddress + ',' + reserves.blockTimestampLast
        );

        //process.exit(1);
    }
}

run().catch((error) => { console.log(error); })
