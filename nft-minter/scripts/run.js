const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("EpicNft");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    console.log(`Deployed EpicNft at ${nftContract.address}`);

    let txn = await nftContract.mintNft();
    await txn.wait();

    txn = await nftContract.mintNft();
    await txn.wait();
}

const runMain = async () => {
    try {
        await main();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
runMain();