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
import "./BarChart.scss"
import Select from 'react-select';
import SelectCheckbox from "../SelectCheckbox"
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ['Cleaning', 'Salon', 'Mechanical', 'Painting', 'Repairing'];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Service Wise Orders',
    },
  },
};

const cityData = [
  { value: 'surat', label: 'Surat' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'valsad', label: 'Valsad' },
  { value: 'vapi', label: 'Vapi' },
  { value: 'delhi', label: 'Delhi' },
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
const yearData = [
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
]

const BarChart = (props) => {
  const { setIsSelected, isSelected, name } = props
  const [year, setYear] = useState()
  const [city, setCity] = useState();
  const [category, setCategory] = useState()
  const [subCategory, setSubCategory] = useState()
  // const data1=[12,45,41,52,63];
  const data1 = {
    labels,
    datasets: [
      {
        label: year?.label,
        data: [12, 45, 41, 52, 63],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: year?.label,
        data: [65, 85, 10, 22, 83],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  const [arrVal, setArrVal] = useState(data1);
  const [isFirst, setIsFirst] = useState(true)
  const handleClose = () => {
    setYear({ value: '2022', label: '2022' })
    setIsSelected('')
  }
  const handleFilter = () => {
    if (isFirst) {
      setArrVal(data2)
    } else {
      setArrVal(data1)
    }
    setIsFirst(!isFirst)
    setIsSelected('')
  }
  return (
    <>
      <Modal show={isSelected === 'bar' ? true : false}>
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
              <label className="lbl">Year:</label>
              <Select
                closeMenuOnSelect={false}
                value={year}
                onChange={(e) => setYear(e)}
                options={yearData}
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
              <label className="lbl">City:</label>
              <SelectCheckbox data={cityData} />
            </div>
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
                    border: '1px solid #808080'
                  }),
                }}
              />
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
export default BarChart