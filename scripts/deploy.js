const {ethers} = require('hardhat');
/** This is a function used to deploy contract */
const hre = require('hardhat');

async function main() {
  const Exchange = await hre.ethers.getContractFactory('Exchange');
  const _Exchange = await Exchange.deploy();
  console.log(
      'Exchange deployed to:',
      _Exchange.address,
  );
}

main().
    then(() => process.exit(0)).
    catch((error) => {
      console.error(error);
      process.exit(1);
    });