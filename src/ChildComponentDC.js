import React, {useState} from "react";

const ChildComponentDC = () =>  {

    const [firstDiv, setFirstDiv] = useState('21');
    const [secondDiv, setSecondDiv] = useState('34');
    const [ThirdDiv, setThirdDiv] = useState('28');

    return(

        <div>
        <div className="w-[100%] h-[350px] relative grid pt-1 justify-center items-center"> 
        
        <div className="w-[140px] h-[120px] py-2 text-center rounded-lg ml-40 mb-28 shadow-lg absolute bg-white ">
        <h1 className="text-[12px]">New Project</h1>
        <h2 className="text-[40px] font-bold text-blue-500">{firstDiv}</h2>
        <h3 className="text-blue-500">Middle East</h3>
        </div>
        <div className="w-[140px] h-[120px] py-2 rounded-lg text-center absolute ml-48 mt-60 shadow-lg  bg-white">
        <h1 className="text-[12px]">New Project</h1>
        <h2 className="text-[40px] font-bold text-green-500">{secondDiv}</h2>
        <h3 className="text-green-500">Europe</h3></div>
        <div className="w-[140px] h-[120px] py-2 rounded-lg text-center absolute ml-72 mt-4 shadow-lg bg-white">
        <h1 className="text-[12px]">New Project</h1>
        <h2 className="text-[40px] font-bold text-amber-500">{ThirdDiv}</h2>
        <h3 className="text-amber-500">China</h3></div>
        
        </div>
        <div className="px-20 mt-6"> 
        <h1 className="text-[24px]">Global Coverage</h1>
        <p className="text-gray-600">Global coverage of the projects marketPlace can help you win contracts all over the world  </p>
        </div>
        </div>
    )
}
export default ChildComponentDC;