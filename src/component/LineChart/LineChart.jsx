import { useEffect, useState } from "react";
// import { LineChart as LChart, Line } from 'recharts';
import { IoBarChart } from "react-icons/io5";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { Puff } from 'react-loader-spinner';


const LineChart = () => {

    const [chart, setChart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('chartdata.json')
        .then(res => res.json())
        .then(data => setChart(data));
        setLoading(false);
    },[])

    return (
        <div className="my-28">
            <h2 className="text-6xl font-bold text-white text-center mb-20">Price Chart</h2>
            {loading && <Puff
            visible={true}
            height="80"
            width="80"
            color="#f37517"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />}
            <div className="flex gap-14">
                <div>
                    <BarChart width={1000} height={500} data={chart}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Bar dataKey="basic" fill="lightBlue"></Bar>
                        <Bar dataKey="standard" fill="yellow"></Bar>
                        <Bar dataKey="premium" fill="orange"></Bar>
                        <Bar dataKey="vip" fill="red"></Bar>
                    </BarChart>
                    {/* <LChart width={800} height={400} data={chart}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Line dataKey="basic" stroke="lightBlue"></Line>
                        <Line dataKey="standard" stroke="yellow"></Line>
                        <Line dataKey="premium" stroke="orange"></Line>
                        <Line dataKey="vip" stroke="red"></Line>
                    </LChart> */}
                </div>
                <div>
                    <ul className="text-2xl">
                        <li className="flex items-center gap-1 text-blue-200"><IoBarChart></IoBarChart>Basic</li>
                        <li className="flex items-center gap-1 text-yellow-300"><IoBarChart></IoBarChart>Standard</li>
                        <li className="flex items-center gap-1 text-orange-400"><IoBarChart></IoBarChart>Premium</li>
                        <li className="flex items-center gap-1 text-red-600"><IoBarChart></IoBarChart>VIP</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LineChart;