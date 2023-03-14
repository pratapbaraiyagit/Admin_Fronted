import React, { useState } from "react";
import { Chart } from "react-google-charts";
import Modal from 'react-bootstrap/Modal';
import "./PieChart.scss"
import Select from 'react-select';

const yearData = [
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
]

const PieChart = (props) => {
  const { setIsSelected, isSelected, name } = props
  const [year, setYear] = useState()


  const rating = [
    ["5 Star", "Hours per Day"],
    ["4 Star", 11],
    ["3 Star", 2],
    ["2 Star", 2],
    ["1 Start", 2],
  ];
  const rating1 = [
    ["5 Star", "Hours per Day"],
    ["4 Star", 5],
    ["3 Star", 8],
    ["2 Star", 3],
    ["1 Start", 12],
  ]
  const [arrVal, setArrVal] = useState(rating);
  const [isFirst, setIsFirst] = useState(true)
  const options = {
    title: "",
    is3D: true,
  };

  const handleClose = () => {
    setYear({ value: '2022', label: '2022' })
    setIsSelected('')
  }
  const handleFilter = () => {
    if (isFirst) {
      setArrVal(rating)
    } else {
      setArrVal(rating1)
    }
    setIsFirst(!isFirst)
    setIsSelected('')
  }

  return (
    <>
      <Modal show={isSelected === 'pie' ? true : false}>
        <div className="modal-dialog modal-confirm">
          <div className="modal-content" style={{ width: '350px' }}>
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
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
              <button type="button" className="btn btn-success" onClick={() => handleFilter()}>Apply</button>
            </div>
          </div>
        </div>
      </Modal>
      <Chart
        chartType="PieChart"
        data={arrVal}
        options={options}
        width={"100%"}
        height={"100%"}
      />
    </>
  )
}
export default PieChart