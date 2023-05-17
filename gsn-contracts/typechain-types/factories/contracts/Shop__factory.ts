/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Shop, ShopInterface } from "../../contracts/Shop";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_shopWebsite",
        type: "string",
      },
      {
        internalType: "string",
        name: "_shopAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "_shopPhoneNumber",
        type: "string",
      },
      {
        internalType: "address",
        name: "_forwarder",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "creditUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "deleteUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTrustedForwarder",
    outputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "registerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shopAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "shopPhoneNumber",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "shopWebsite",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_shopWebsite",
        type: "string",
      },
      {
        internalType: "string",
        name: "_shopAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "_shopPhoneNumber",
        type: "string",
      },
    ],
    name: "updateMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002c5738038062002c5783398181016040528101906200003791906200048c565b858581600390816200004a91906200080e565b5080600490816200005c91906200080e565b5050506200007f62000073620000d260201b60201c565b620000ee60201b60201c565b83600790816200009091906200080e565b508260089081620000a291906200080e565b508160099081620000b491906200080e565b50620000c681620001b460201b60201c565b505050505050620008f5565b6000620000e9620001f860201b62000afc1760201c565b905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060146000369050101580156200021d57506200021c336200023a60201b60201c565b5b156200023357601436033560601c905062000237565b3390505b90565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002fd82620002b2565b810181811067ffffffffffffffff821117156200031f576200031e620002c3565b5b80604052505050565b60006200033462000294565b9050620003428282620002f2565b919050565b600067ffffffffffffffff821115620003655762000364620002c3565b5b6200037082620002b2565b9050602081019050919050565b60005b838110156200039d57808201518184015260208101905062000380565b60008484015250505050565b6000620003c0620003ba8462000347565b62000328565b905082815260208101848484011115620003df57620003de620002ad565b5b620003ec8482856200037d565b509392505050565b600082601f8301126200040c576200040b620002a8565b5b81516200041e848260208601620003a9565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004548262000427565b9050919050565b620004668162000447565b81146200047257600080fd5b50565b60008151905062000486816200045b565b92915050565b60008060008060008060c08789031215620004ac57620004ab6200029e565b5b600087015167ffffffffffffffff811115620004cd57620004cc620002a3565b5b620004db89828a01620003f4565b965050602087015167ffffffffffffffff811115620004ff57620004fe620002a3565b5b6200050d89828a01620003f4565b955050604087015167ffffffffffffffff811115620005315762000530620002a3565b5b6200053f89828a01620003f4565b945050606087015167ffffffffffffffff811115620005635762000562620002a3565b5b6200057189828a01620003f4565b935050608087015167ffffffffffffffff811115620005955762000594620002a3565b5b620005a389828a01620003f4565b92505060a0620005b689828a0162000475565b9150509295509295509295565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200061657607f821691505b6020821081036200062c576200062b620005ce565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000657565b620006a2868362000657565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620006ef620006e9620006e384620006ba565b620006c4565b620006ba565b9050919050565b6000819050919050565b6200070b83620006ce565b620007236200071a82620006f6565b84845462000664565b825550505050565b600090565b6200073a6200072b565b6200074781848462000700565b505050565b5b818110156200076f576200076360008262000730565b6001810190506200074d565b5050565b601f821115620007be57620007888162000632565b620007938462000647565b81016020851015620007a3578190505b620007bb620007b28562000647565b8301826200074c565b50505b505050565b600082821c905092915050565b6000620007e360001984600802620007c3565b1980831691505092915050565b6000620007fe8383620007d0565b9150826002028217905092915050565b6200081982620005c3565b67ffffffffffffffff811115620008355762000834620002c3565b5b620008418254620005fd565b6200084e82828562000773565b600060209050601f83116001811462000886576000841562000871578287015190505b6200087d8582620007f0565b865550620008ed565b601f198416620008968662000632565b60005b82811015620008c05784890151825560018201915060208501945060208101905062000899565b86831015620008e05784890151620008dc601f891682620007d0565b8355505b6001600288020188555050505b505050505050565b61235280620009056000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a9059cbb1161007c578063a9059cbb146103a4578063ce1b815f146103d4578063db2a4570146103f2578063dd62ed3e1461040e578063f2fde38b1461043e578063fa0b5e551461045a5761014d565b806370a08231146102e0578063715018a61461031057806382af28411461031a5780638da5cb5b1461033857806395d89b4114610356578063a457c2d7146103745761014d565b806323b872dd1161011557806323b872dd146101f8578063313ce567146102285780633950935114610246578063572b6c05146102765780635c60f226146102a6578063661dda92146102c25761014d565b806306fdde0314610152578063095ea7b31461017057806318160ddd146101a05780632113b139146101be57806322446fb8146101da575b600080fd5b61015a610476565b604051610167919061150e565b60405180910390f35b61018a600480360381019061018591906115d8565b610508565b6040516101979190611633565b60405180910390f35b6101a861052b565b6040516101b5919061165d565b60405180910390f35b6101d860048036038101906101d391906115d8565b610535565b005b6101e2610543565b6040516101ef919061150e565b60405180910390f35b610212600480360381019061020d9190611678565b6105d1565b60405161021f9190611633565b60405180910390f35b610230610600565b60405161023d91906116e7565b60405180910390f35b610260600480360381019061025b91906115d8565b610609565b60405161026d9190611633565b60405180910390f35b610290600480360381019061028b9190611702565b610640565b60405161029d9190611633565b60405180910390f35b6102c060048036038101906102bb9190611702565b61069a565b005b6102ca6106af565b6040516102d7919061150e565b60405180910390f35b6102fa60048036038101906102f59190611702565b61073d565b604051610307919061165d565b60405180910390f35b610318610785565b005b610322610799565b60405161032f919061150e565b60405180910390f35b610340610827565b60405161034d919061173e565b60405180910390f35b61035e610851565b60405161036b919061150e565b60405180910390f35b61038e600480360381019061038991906115d8565b6108e3565b60405161039b9190611633565b60405180910390f35b6103be60048036038101906103b991906115d8565b61095a565b6040516103cb9190611633565b60405180910390f35b6103dc61097d565b6040516103e9919061173e565b60405180910390f35b61040c6004803603810190610407919061188e565b6109a7565b005b61042860048036038101906104239190611935565b6109e4565b604051610435919061165d565b60405180910390f35b61045860048036038101906104539190611702565b610a6b565b005b610474600480360381019061046f91906115d8565b610aee565b005b606060038054610485906119a4565b80601f01602080910402602001604051908101604052809291908181526020018280546104b1906119a4565b80156104fe5780601f106104d3576101008083540402835291602001916104fe565b820191906000526020600020905b8154815290600101906020018083116104e157829003601f168201915b5050505050905090565b600080610513610b33565b9050610520818585610b42565b600191505092915050565b6000600254905090565b61053f8282610d0b565b5050565b60088054610550906119a4565b80601f016020809104026020016040519081016040528092919081815260200182805461057c906119a4565b80156105c95780601f1061059e576101008083540402835291602001916105c9565b820191906000526020600020905b8154815290600101906020018083116105ac57829003601f168201915b505050505081565b6000806105dc610b33565b90506105e9858285610e61565b6105f4858585610eed565b60019150509392505050565b60006012905090565b600080610614610b33565b905061063581858561062685896109e4565b6106309190611a04565b610b42565b600191505092915050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6106ac816106a78361073d565b611163565b50565b600780546106bc906119a4565b80601f01602080910402602001604051908101604052809291908181526020018280546106e8906119a4565b80156107355780601f1061070a57610100808354040283529160200191610735565b820191906000526020600020905b81548152906001019060200180831161071857829003601f168201915b505050505081565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61078d611330565b61079760006113ae565b565b600980546107a6906119a4565b80601f01602080910402602001604051908101604052809291908181526020018280546107d2906119a4565b801561081f5780601f106107f45761010080835404028352916020019161081f565b820191906000526020600020905b81548152906001019060200180831161080257829003601f168201915b505050505081565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610860906119a4565b80601f016020809104026020016040519081016040528092919081815260200182805461088c906119a4565b80156108d95780601f106108ae576101008083540402835291602001916108d9565b820191906000526020600020905b8154815290600101906020018083116108bc57829003601f168201915b5050505050905090565b6000806108ee610b33565b905060006108fc82866109e4565b905083811015610941576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093890611aaa565b60405180910390fd5b61094e8286868403610b42565b60019250505092915050565b600080610965610b33565b9050610972818585610eed565b600191505092915050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6109af611330565b82600790816109be9190611c76565b5081600890816109ce9190611c76565b5080600990816109de9190611c76565b50505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610a73611330565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ae2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad990611dba565b60405180910390fd5b610aeb816113ae565b50565b610af88282610d0b565b5050565b60006014600036905010158015610b185750610b1733610640565b5b15610b2c57601436033560601c9050610b30565b3390505b90565b6000610b3d610afc565b905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610bb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba890611e4c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1790611ede565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610cfe919061165d565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7190611f4a565b60405180910390fd5b610d8660008383611474565b8060026000828254610d989190611a04565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e49919061165d565b60405180910390a3610e5d60008383611479565b5050565b6000610e6d84846109e4565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ee75781811015610ed9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed090611fb6565b60405180910390fd5b610ee68484848403610b42565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5390612048565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fcb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc2906120da565b60405180910390fd5b610fd6838383611474565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561105c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110539061216c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161114a919061165d565b60405180910390a361115d848484611479565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c9906121fe565b60405180910390fd5b6111de82600083611474565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125b90612290565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611317919061165d565b60405180910390a361132b83600084611479565b505050565b611338610b33565b73ffffffffffffffffffffffffffffffffffffffff16611356610827565b73ffffffffffffffffffffffffffffffffffffffff16146113ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a3906122fc565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114b857808201518184015260208101905061149d565b60008484015250505050565b6000601f19601f8301169050919050565b60006114e08261147e565b6114ea8185611489565b93506114fa81856020860161149a565b611503816114c4565b840191505092915050565b6000602082019050818103600083015261152881846114d5565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061156f82611544565b9050919050565b61157f81611564565b811461158a57600080fd5b50565b60008135905061159c81611576565b92915050565b6000819050919050565b6115b5816115a2565b81146115c057600080fd5b50565b6000813590506115d2816115ac565b92915050565b600080604083850312156115ef576115ee61153a565b5b60006115fd8582860161158d565b925050602061160e858286016115c3565b9150509250929050565b60008115159050919050565b61162d81611618565b82525050565b60006020820190506116486000830184611624565b92915050565b611657816115a2565b82525050565b6000602082019050611672600083018461164e565b92915050565b6000806000606084860312156116915761169061153a565b5b600061169f8682870161158d565b93505060206116b08682870161158d565b92505060406116c1868287016115c3565b9150509250925092565b600060ff82169050919050565b6116e1816116cb565b82525050565b60006020820190506116fc60008301846116d8565b92915050565b6000602082840312156117185761171761153a565b5b60006117268482850161158d565b91505092915050565b61173881611564565b82525050565b6000602082019050611753600083018461172f565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61179b826114c4565b810181811067ffffffffffffffff821117156117ba576117b9611763565b5b80604052505050565b60006117cd611530565b90506117d98282611792565b919050565b600067ffffffffffffffff8211156117f9576117f8611763565b5b611802826114c4565b9050602081019050919050565b82818337600083830152505050565b600061183161182c846117de565b6117c3565b90508281526020810184848401111561184d5761184c61175e565b5b61185884828561180f565b509392505050565b600082601f83011261187557611874611759565b5b813561188584826020860161181e565b91505092915050565b6000806000606084860312156118a7576118a661153a565b5b600084013567ffffffffffffffff8111156118c5576118c461153f565b5b6118d186828701611860565b935050602084013567ffffffffffffffff8111156118f2576118f161153f565b5b6118fe86828701611860565b925050604084013567ffffffffffffffff81111561191f5761191e61153f565b5b61192b86828701611860565b9150509250925092565b6000806040838503121561194c5761194b61153a565b5b600061195a8582860161158d565b925050602061196b8582860161158d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806119bc57607f821691505b6020821081036119cf576119ce611975565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611a0f826115a2565b9150611a1a836115a2565b9250828201905080821115611a3257611a316119d5565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611a94602583611489565b9150611a9f82611a38565b604082019050919050565b60006020820190508181036000830152611ac381611a87565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611b2c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611aef565b611b368683611aef565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611b73611b6e611b69846115a2565b611b4e565b6115a2565b9050919050565b6000819050919050565b611b8d83611b58565b611ba1611b9982611b7a565b848454611afc565b825550505050565b600090565b611bb6611ba9565b611bc1818484611b84565b505050565b5b81811015611be557611bda600082611bae565b600181019050611bc7565b5050565b601f821115611c2a57611bfb81611aca565b611c0484611adf565b81016020851015611c13578190505b611c27611c1f85611adf565b830182611bc6565b50505b505050565b600082821c905092915050565b6000611c4d60001984600802611c2f565b1980831691505092915050565b6000611c668383611c3c565b9150826002028217905092915050565b611c7f8261147e565b67ffffffffffffffff811115611c9857611c97611763565b5b611ca282546119a4565b611cad828285611be9565b600060209050601f831160018114611ce05760008415611cce578287015190505b611cd88582611c5a565b865550611d40565b601f198416611cee86611aca565b60005b82811015611d1657848901518255600182019150602085019450602081019050611cf1565b86831015611d335784890151611d2f601f891682611c3c565b8355505b6001600288020188555050505b505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611da4602683611489565b9150611daf82611d48565b604082019050919050565b60006020820190508181036000830152611dd381611d97565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611e36602483611489565b9150611e4182611dda565b604082019050919050565b60006020820190508181036000830152611e6581611e29565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ec8602283611489565b9150611ed382611e6c565b604082019050919050565b60006020820190508181036000830152611ef781611ebb565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611f34601f83611489565b9150611f3f82611efe565b602082019050919050565b60006020820190508181036000830152611f6381611f27565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611fa0601d83611489565b9150611fab82611f6a565b602082019050919050565b60006020820190508181036000830152611fcf81611f93565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612032602583611489565b915061203d82611fd6565b604082019050919050565b6000602082019050818103600083015261206181612025565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006120c4602383611489565b91506120cf82612068565b604082019050919050565b600060208201905081810360008301526120f3816120b7565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612156602683611489565b9150612161826120fa565b604082019050919050565b6000602082019050818103600083015261218581612149565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006121e8602183611489565b91506121f38261218c565b604082019050919050565b60006020820190508181036000830152612217816121db565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b600061227a602283611489565b91506122858261221e565b604082019050919050565b600060208201905081810360008301526122a98161226d565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006122e6602083611489565b91506122f1826122b0565b602082019050919050565b60006020820190508181036000830152612315816122d9565b905091905056fea264697066735822122084139341d9ba88c997e2d216009da00b8a32833079da24ac5b0497f57b58d07564736f6c63430008120033";

type ShopConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShopConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Shop__factory extends ContractFactory {
  constructor(...args: ShopConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    _shopWebsite: PromiseOrValue<string>,
    _shopAddress: PromiseOrValue<string>,
    _shopPhoneNumber: PromiseOrValue<string>,
    _forwarder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Shop> {
    return super.deploy(
      name,
      symbol,
      _shopWebsite,
      _shopAddress,
      _shopPhoneNumber,
      _forwarder,
      overrides || {}
    ) as Promise<Shop>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    _shopWebsite: PromiseOrValue<string>,
    _shopAddress: PromiseOrValue<string>,
    _shopPhoneNumber: PromiseOrValue<string>,
    _forwarder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      _shopWebsite,
      _shopAddress,
      _shopPhoneNumber,
      _forwarder,
      overrides || {}
    );
  }
  override attach(address: string): Shop {
    return super.attach(address) as Shop;
  }
  override connect(signer: Signer): Shop__factory {
    return super.connect(signer) as Shop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopInterface {
    return new utils.Interface(_abi) as ShopInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Shop {
    return new Contract(address, _abi, signerOrProvider) as Shop;
  }
}
