import type { NextPage } from "next";
import * as ethers from "ethers";
import { useState, useEffect } from "react";
import { connectWallet, getWalletAddress } from "../services/wallet-service";
import Topbar from "../components/topbar";
import SwapForm from "../components/SwapForm";

const Home: NextPage = () => {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const addr = getWalletAddress();
    setAddress(addr);
  }, []);

  return (
    <div>
      <Topbar address={address} />
      <div className="bg-green-100 min-h-screen pt-4">
        {address ? (
          <div>
            <SwapForm />
          </div>
        ) : (
          <div className="rounded-3xl shadow-inner w-1/3 max-w-4xl p-12 mt-6 mx-auto bg-white border border-gray-400 z-20 relative">
            <div className="flex justify-center">
              <img
                src="/BareBear.png"
                alt="BareBear-logo"
                className="w-[200px] h-[200px] mr-4 "
              />
            </div>
            <div className="flex justify-center">
              <p className="text-black font-extrabold text-2xl">Connect Metamask</p>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="rounded-3xl bg-green-500 text-white px-12 py-4 mt-6"
                onClick={connectWallet}
              >
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;