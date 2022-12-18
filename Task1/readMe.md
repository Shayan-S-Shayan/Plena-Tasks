# Task1
Task - You must transfer the MATIC available in the contract below to your Polygon address.
https://polygonscan.com/address/0x1085f28cfAf3e1C2E46EFF5956eeae835F70fF64


Approch I took to solve this Task

Steps:
    1: I read the contract and understand all the parameter of it
    2: To accomplish this task I figure out there is one delegate call in contract which is used to achieve this task 
    3: I created TransferFund.sol contract in which I wrote the logic of transfer 
    4: Then I generate the Payload for the transferFunds() function by using my metamask address as in parameter and amount 1 wei
    5: Now the final step is to call the TransferFund.sol contract with the below payload to transfer the fund 

    Calldata Payload : 990dc9db000000000000000000000000afd97c52e1ac658ebaaef0913aac69722d12cfc80000000000000000000000000000000000000000000000000000000000000001