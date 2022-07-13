import React from "react";

const topbar = (props: any) => {
    const { address } = props;

    var test = "";
    if (address != null) {
        test = address.substring(0, 5) + "..." + address.substring(37, 42);
    }
    return (
        <nav className="flex justify-between items-center px-20 py-4 relative z-50" >
            <div className="flex p-auto">

                <img
                    src="/BareBear.png"
                    alt="BareBear-logo"
                    className="w-[50px] h-[50px] mr-4 "
                />
                <div>
                    <p className="text-black text-lg font-bold mt-2">BEARSWAP</p>
                </div>
            </div>

            <div className="flex space-x-24">
                <div className="flex space-x-2 lg:flex text-black">
                    <img
                        src="/Ice.png"
                        alt="Ice-logo"
                        className="w-[45px] h-[45px] mr-4 rounded-full"
                    />
                    <p className="mt-2">$</p>
                    <p className="mt-2">0.00</p>
                </div>
                <div className="border-black border-2 rounded-full w-full h-full p-2">
                    <p className="ml-10 text-black">{test}</p>
                </div>
            </div>
        </nav>


    );
};

export default topbar;