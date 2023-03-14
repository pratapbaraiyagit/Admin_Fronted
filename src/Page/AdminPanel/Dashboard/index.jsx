import React, { useEffect, useState } from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Dashboard.scss'
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import CountUp from 'react-countup';
import { TbChecklist } from 'react-icons/tb'
import { IoIosPeople } from 'react-icons/io'
import { FaHandsHelping } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'
import BarChart from "../../../Components/AdminPanel/BarChart";
import LineChart from "../../../Components/AdminPanel/LineChart"
import StackBar from "../../../Components/AdminPanel/StackBar";
import PieChart from "../../../Components/AdminPanel/PieChart"
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)


function Dashboard() {
    const [filter, setfilter] = useState('');
    const [isSelected, setIsSelected] = useState('');
    const handleFilter = (data) => {
        setIsSelected(data)
    }
    useEffect(() => {
        setfilter('');
    }, [])
    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 ' style={{ fontSize: '18px' }}><b>Dashboard</b></h5>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-4">
                    <div className="bg-light py-3 px-3 my-2 d-flex Orders" style={{ borderRadius: "8px" }} >
                        <div className="d-flex justify-content-center alight-items-center pe-1" style={{ width: '35%' }}>
                            <TbChecklist size={70} color={'#E74216'} />
                        </div>
                        <div className="ps-1" style={{ width: '65%' }}>
                            <h1 className='text' style={{ fontSize: '22px', fontWeight: "600" }}><CountUp end={52} duration={2} /></h1>
                            <h6 className='text' style={{ fontSize: '18px', fontWeight: "500" }}>Total Orders</h6>
                            <span className='text-muted' style={{ fontSize: '14px' }}><BiUpArrowAlt style={{ color: '#90C000', fontSize: "21px" }} />4% (62 days)</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-4">
                    <div className="bg-light py-3 px-3 my-2 d-flex Orders" style={{ borderRadius: "8px" }} >
                        <div className="d-flex justify-content-center alight-items-center pe-1" style={{ width: '35%' }}>
                            <IoIosPeople size={70} color={'#E74216'} />
                        </div>
                        <div className="ps-1" style={{ width: '65%' }}>
                            <h1 className='text' style={{ fontSize: '22px', fontWeight: "600" }}><CountUp end={70} duration={2} /></h1>
                            <h6 className='text' style={{ fontSize: '18px', fontWeight: "500" }}>Total Partners</h6>
                            <span className='text-muted' style={{ fontSize: '14px' }}><BiUpArrowAlt style={{ color: '#90C000', fontSize: "21px" }} />4% (62 days)</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-4">
                    <div className="bg-light py-3 px-3 my-2 d-flex Orders" style={{ borderRadius: "8px" }} >
                        <div className="d-flex justify-content-center alight-items-center pe-1" style={{ width: '35%' }}>
                            <FaHandsHelping size={70} color={'#E74216'} />
                        </div>
                        <div className="ps-1" style={{ width: '65%' }}>
                            <h1 className='text' style={{ fontSize: '22px', fontWeight: "600" }}><CountUp end={12} duration={2} /></h1>
                            <h6 className='text' style={{ fontSize: '18px', fontWeight: "500" }}>Total Customers</h6>
                            <span className='text-muted' style={{ fontSize: '14px' }}><BiUpArrowAlt style={{ color: '#90C000', fontSize: "21px" }} />4% (62 days)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 col-lg-7">
                    <div className="d-flex justify-content-between alight-items-center py-4">
                        <div className="">
                            <h5 className='mx-1 my-0 ' style={{ fontSize: '18px' }}><b>Total Earnings </b></h5>
                        </div>
                        <div className="" onClick={() => handleFilter('line')}><CgMenuRight style={{ fontSize: "24px" }} /></div>
                    </div>
                    <div className="bg-light p-4" style={{ display: 'flex', justifyContent: 'center' }}>
                        <LineChart setIsSelected={setIsSelected} isSelected={isSelected} name="Total Earning - Filter" />
                    </div>
                </div>
                <div className="col-12 col-lg-5">
                    <div className="d-flex justify-content-between alight-items-center py-4">
                        <div className="">
                            <h5 className='mx-1 my-0 ' style={{ fontSize: '18px' }}><b>Customer Rating </b></h5>
                        </div>
                        <div className="" onClick={() => handleFilter('pie')}><CgMenuRight style={{ fontSize: "24px" }} /></div>
                    </div>
                    <div className="bg-light p-4" style={{ display: 'flex', justifyContent: 'center', height: '490px' }}>
                        <PieChart setIsSelected={setIsSelected} isSelected={isSelected} name="Customer Rating - Filter" />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-between alight-items-center py-4">
                        <div className="">
                            <h5 className='mx-1 my-0 ' style={{ fontSize: '18px' }}><b>Service Wise Orders </b></h5>
                        </div>
                        <div className="" onClick={() => handleFilter('bar')}><CgMenuRight style={{ fontSize: "24px" }} /></div>
                    </div>
                    <div className="bg-light p-4" style={{ display: 'flex', justifyContent: 'center' }}>
                        <BarChart setIsSelected={setIsSelected} isSelected={isSelected} name="Service Wise Orders - Filter" />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-between alight-items-center py-4">
                        <div className="">
                            <h5 className='mx-1 my-0 ' style={{ fontSize: '18px' }}><b>City Wise Orders </b></h5>
                        </div>
                        <div className="" onClick={() => handleFilter('city')}><CgMenuRight style={{ fontSize: "24px" }} /></div>
                    </div>
                    <div className="bg-light p-4" style={{ display: 'flex', justifyContent: 'center' }}>
                        <StackBar setIsSelected={setIsSelected} isSelected={isSelected} name="City Wise Orders - Filter" />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-between alight-items-center py-4">
                        <div className="">
                            <h5 className='mx-1 my-0 ' style={{ fontSize: '18px' }}><b>Partner Rating</b></h5>
                        </div>
                        <div className="" onClick={() => handleFilter('partner')}><CgMenuRight style={{ fontSize: "24px" }} /></div>
                    </div>
                    <div className="bg-light p-4" style={{ display: 'flex', justifyContent: 'center' }} >
                        <StackBar setIsSelected={setIsSelected} isSelected={isSelected} name="Partner Rating - Filter" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard