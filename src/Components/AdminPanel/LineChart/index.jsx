import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import "./LineChart.scss"
import SelectCheckbox from "../SelectCheckbox"


const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: " 2019",
      data: [4, 55, 2, 4, 55, 2, 75, 85, 12, 41, 63, 29],
      borderColor: "#e94486",
      fill: false,
      tension: 0.4
    },
    {
      label: "2020",
      data: [33, 25, 35, 51, 2, 76, 45, 10, 74, 98, 52, 63],
      borderColor: "#7abf00",
      fill: false,
      tension: 0.4
    },
    {
      label: " 2021",
      data: [33, 25, 35, 16, 12, 76, 45, 85, 64, 38, 72, 63],
      borderColor: "#3abff5",
      fill: false,
      tension: 0.4
    },
    {
      label: " 2022",
      data: [93, 25, 35, 71, 32, 76, 45, 90, 24, 68, 78, 13],
      borderColor: "#fab788",
      fill: false,
      tension: 0.4
    }
  ],
};
const data1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: " 2015",
      data: [40, 25, 72, 34, 95, 12, 5, 65, 72, 31, 53, 80],
      borderColor: "#e94486",
      fill: false,
      tension: 0.4
    },
    {
      label: "2016",
      data: [63, 95, 35, 51, 72, 6, 75, 40, 24, 38, 42, 73],
      borderColor: "#7abf00",
      fill: false,
      tension: 0.4
    },
    {
      label: " 2017",
      data: [33, 78, 35, 16, 41, 76, 99, 85, 64, 38, 52, 20],
      borderColor: "#3abff5",
      fill: false,
      tension: 0.4
    },
    {
      label: " 2018",
      data: [30, 70, 60, 40, 56, 21, 70, 90, 50, 20, 55, 88],
      borderColor: "#fab788",
      fill: false,
      tension: 0.4
    }
  ],
};

const LineChart = (props) => {
  const { setIsSelected, isSelected, name } = props
  const [year, setYear] = useState()
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
    { value: 'housePainting', label: 'House Painting' },
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
      <Modal show={isSelected === 'line' ? true : false}>
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
                    border: '1px solid #808080'
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
      <Line
        data={arrVal}
        options={{
          plugins: {
            legend: {
              position: "top",
              align: "end",
              labels: {
                usePointStyle: true,
                boxWidth: 55,
                fontSize: 20,
                padding: 9
              },
            },

          }
        }}
      />
    </>
  )
}
export default LineChart