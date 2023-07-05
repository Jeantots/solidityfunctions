
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

contract Functions {

    function add(uint A, uint B) public pure returns (uint) {
        return A + B;
    }
    function sub(uint A, uint B) public pure returns (uint) {
        return A - B;
    }
    function mul(uint A, uint B) public pure returns (uint) {
        return A * B;
    }
    function div(uint A, uint B) public pure returns (uint) {
        return A / B;
    }
}
