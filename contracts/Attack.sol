pragma solidity >=0.4.21 <0.6.0;

import "./PrivateBank.sol";

contract Attack {
  PrivateBank public target;

  constructor(address payable _target) public {
    target = PrivateBank(_target);
  }
}