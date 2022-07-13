import { ethers } from "ethers";

declare global {
    interface Window {
      ethereum: any; 
    }
  }
  export const getEthereum = () => {
    if (typeof window.ethereum !== "undefined") {
      return window.ethereum;
    }
    return null;
  }

  export const connectWallet = () => {
    return getEthereum()?.request({
      method: "eth_requestAccounts",
    }) as Promise<string>;
  };
  
  export const getWalletAddress = () => {
    return getEthereum()?.selectedAddress as string;
  };