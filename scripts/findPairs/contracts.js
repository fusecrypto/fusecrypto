module.exports = {
    factory: {
        // https://docs.uniswap.org/protocol/V2/reference/smart-contracts/factory
        // https://explorer.fuse.io/address/0x1d1f1A7280D67246665Bb196F38553b469294f3a/read-contract
        address: '0x1d1f1A7280D67246665Bb196F38553b469294f3a',
        abi: [
            "event PairCreated(address indexed token0, address indexed token1, address pair, uint)",
            "function getPair(address tokenA, address tokenB) external view returns (address pair)",
            "function allPairs(uint) external view returns (address pair)",
            "function allPairsLength() external view returns (uint)",
        ]
    },
    pair: {
        // https://docs.uniswap.org/protocol/V2/reference/smart-contracts/pair
        abi: [
            "event Sync(uint112 reserve0, uint112 reserve1)",
            "function factory() external view returns (address)",
            "function token0() external view returns (address)",
            "function token1() external view returns (address)",
            "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
            "function price0CumulativeLast() external view returns (uint)",
            "function price1CumulativeLast() external view returns (uint)",
            "function kLast() external view returns (uint)",
            "function skim(address to) external",
        ]
    },
    erc20: {
         abi: [
            "function balanceOf(address owner) view returns (uint256)",
            "function decimals() view returns (uint8)",
            "function symbol() view returns (string)",
        ]
    }
}
