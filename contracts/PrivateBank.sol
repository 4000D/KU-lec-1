pragma solidity >=0.4.21 <0.6.0;

contract PrivateBank {
  mapping (address => uint) public balances;

  function deposit() public payable {
      balances[msg.sender]+=msg.value;
  }

  function cashOut(uint _am) public {
      if(_am<=balances[msg.sender]) {

          bool suc;
          bytes memory res;
          (suc, res) = msg.sender.call.value(_am)("");

          if(suc) {
              balances[msg.sender]-=_am;
          }
      }
  }

  function() external payable{}
}