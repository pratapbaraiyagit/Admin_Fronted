import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import "./StackBar.scss"
import SelectCheckbox from "../SelectCheckbox"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Surat', 'Navsari', 'Baroda', 'Mumbai', 'Vapi', 'Valsad', 'Vadodara'];

export const data = {
  labels,
  datasets: [
    {
      label: '2022',
      data: [10, 45, 85, 63, 78, 52, 96],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '2021',
      data: [85, 52, 63, 95, 15, 75, 42],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: '2020',
      data: [10, 52, 63, 89, 65, 41, 65],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

export const data1 = {
  labels,
  datasets: [
    {
      label: '2022',
      data: [89, 25, 55, 13, 68, 12, 10],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '2021',
      data: [35, 72, 63, 45, 95, 35, 82],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: '2020',
      data: [40, 72, 33, 99, 75, 41, 44],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};
const StackBar = (props) => {
  const { setIsSelected, isSelected, name } = props
  const [year, setYear] = useState()
  const [service, setService] = useState();
  const [category, setCategory] = useState()
  const [subCategory, setSubCategory] = useState()
  const [arrVal, setArrVal] = useState(data);
  const [startYear, setStartYear] = useState()
  const [endYear, setEndYear] = useState()
  const [error, setError] = useState('')
  const handleClose = () => {
    setYear({ value: '2022', label: '2022' })
    setIsSelected(false)
  }
  const serviceData = [
    { value: 'hairCut', label: 'Hair Cut' },
    { value: 'hairColor', label: 'Hair Color' },
    { value: 'carWash', label: 'Car Wash' },
    { value: 'housePaint', label: 'House Paint' },
    { value: 'housePlumbing', label: 'House Plumbing' },
  ]
  const categoryData = [
    { value: 'plumbing', label: 'Plumbing' },
    { value: 'cleaning', label: 'Cleaning' },
    { value: 'painting', label: 'Painting' }
  ]
  const subCategoryData = [
    { value: 'menSalon', label: 'Men Salon' },
    { value: 'houseCleaning', label: 'House Cleaning' },
    { value: 'carCleaning', label: 'Car Cleaning' },
    { value: 'housePainting', label: 'House Painting' }
  ]
  const handleFilter = () => {
    setIsSelected('')
    if (arrVal === data1) {
      setArrVal(data)
    } else {
      setArrVal(data1)
    }
  }

  const handleStartYear = (e) => {
    setError('')
    let year = e.target.value;
    if (year.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
    if (year.length === 4) {
      setStartYear(year)
      if (endYear - year > 3 || endYear - year < 0) {
        setError('Year Gap should be 3 years.')
      }
    }
  }
  const handleEndYear = (e) => {
    setError('')
    let year = e.target.value;
    if (year.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)

    }
    if (year.length === 4) {
      setEndYear(year)
      if (year - startYear > 3 || year - startYear < 0) {
        setError('Year Gap should be 3 years.')
      }
    }
  }

  return (
    <>
      <Modal show={isSelected === 'city' ? true : false}>
        <div className="modal-dialog modal-confirm">
          <div className="modal-content" style={{ width: '450px' }}>
            <div className="modal-header flex-column">
              <div className="icon-box">
                <h4 className="material-icons">
                  {name}
                </h4>
              </div>
            </div>
            <div className="modal-body filterOptions">
              <label className="lbl">From Year:</label>
              <input onChange={(e) => handleStartYear(e)} className="input" maxLength={4} type="number" />
              <label className="lbl">To Year:</label>
              <input onChange={(e) => handleEndYear(e)} className="input" maxLength={4} type="number" />
            </div>
            {error && <p className="p-0 m-0 error">{error}</p>}
            <div className="modal-body filterOptions">
              <label className="lbl">Category:</label>
              <Select
                closeMenuOnSelect={false}
                options={categoryData}
                value={category}
                onChange={(e) => setCategory(e)}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: '200px',
                    height: '30px',
                    border: '1px solid #808080'
                  }),
                }}
              />
            </div>
            <div className="modal-body filterOptions">
              <label className="lbl">Sub Category:</label>
              <Select
                closeMenuOnSelect={false}
                options={subCategoryData}
                value={subCategory}
                onChange={(e) => setSubCategory(e)}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: '200px',
                    height: '30px',
                    border: '1px solid #808080',
                  }),
                }}
              />
            </div>
            <div className="modal-body filterOptions">
              <label className="lbl">Service:</label>
              <SelectCheckbox data={serviceData} />
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
              <button type="button" className="btn btn-success" onClick={() => handleFilter()}>Apply</button>
            </div>
          </div>
        </div>
      </Modal>
      <Bar options={options} data={arrVal} />
    </>

  )
}
export default StackBar