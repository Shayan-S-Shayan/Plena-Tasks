# Plena-Tasks

# Task1
Task - You must transfer the MATIC available in the contract below to your Polygon address.
https://polygonscan.com/address/0x1085f28cfAf3e1C2E46EFF5956eeae835F70fF64


Approch I took to solve this Task (Completed)

Steps:
    1: I read the contract and understand all the parameter of it
    2: To accomplish this task I figure out there is one delegate call in contract which is used to achieve this task 
    3: I created TransferFund.sol contract in which I wrote the logic of transfer 
    4: Then I generate the Payload for the transferFunds() function by using my metamask address as in parameter and amount 1 wei
    5: Now the final step is to call the TransferFund.sol contract with the below payload to transfer the fund 
    Calldata Payload : 990dc9db000000000000000000000000afd97c52e1ac658ebaaef0913aac69722d12cfc80000000000000000000000000000000000000000000000000000000000000001


# Task2
Task - Create a smart contract that swaps USDC to USDT and lends the received USDT on Compound Finance in one transaction. You also have to create a hardhat script which performs the above action.

Approch I used to solve this task (Not able to complete)

Steps:
    1: I read the problem and divide that into 2 sub-tasks one is swaping and another is Lending on Compound Finance  
    2: For swaping I understand uniswap and from there guide I try to used Uniswap single-swaps (But not able to swap)
    3: And for lending on Compound Finance I Research on Compound and studied about that 
    4: What I understand and planed for accompllish this task is 
        4.1: ERC20 and CErc20 Interface need to used.
        4.2: Then I need to approve the CERC token contract 
        4.3: Then For lending I need to call mint function of CERC token.
    So, the above steps I planned to achieve the second task but unfortunately not able to do so.