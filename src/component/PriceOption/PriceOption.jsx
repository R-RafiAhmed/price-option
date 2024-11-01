import Feature from "../Feature/Feature";
import PropTypes from 'prop-types';


const PriceOption = ({option}) => {

    const {price, featureName, features} = option;

    return (
        <div className="border-2 border-orange-600 rounded-2xl px-7 md:px-14 py-6 flex flex-col">
            <h2 className="text-2xl font-semibold mb-3">{featureName}</h2>
            <h2 className="mb-3">
                <span className="text-5xl font-bold text-orange-600">{price}</span>
                <span className="text-lg">/mon</span>
            </h2>
            <div className="space-y-2 flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="py-4 w-full bg-orange-600 text-xl font-medium rounded-xl mt-8 hover:bg-orange-900 transition duration-300 ease-in-out">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;