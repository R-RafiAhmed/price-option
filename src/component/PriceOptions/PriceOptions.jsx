import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch('priceoptions.json')
        .then(res => res.json())
        .then(data => setOptions(data));
    } ,[])

    return (
        <div className="my-12 text-white">
            <h1 className="text-7xl font-bold text-center mb-10">Best Prices For You</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                {
                    options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;