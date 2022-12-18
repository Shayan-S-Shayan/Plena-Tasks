// SPDX-License-Identifier: GPL-3.0

/**
 * @title ReceiveEth
 * @dev Called by Delegate call to transfer the balance
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract ReceiveEth
{

//Called function from delegeate call of contract which transfer the contract balance to my wallet address
function transferFunds(address _address, uint amount) external{
    address rec = payable(_address);
    payable(rec).transfer(amount);
}
}