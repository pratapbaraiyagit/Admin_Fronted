import React, { useState } from "react";
import { components } from "react-select";
import Select from 'react-select';
import "./SelectCheckbox.scss"
export const CheckboxComp = (props)=>{
  return(
    <input
      type="checkbox"
      checked={props.isSelected}
      onChange={() => null}
      className={'inpt'}
     style={{height:'15px',width:'15px'}}
    />
  )
}
const Option = (props) => {
  return (
   <div >
      <components.Option {...props}>
        <div className="checkList">
          <CheckboxComp isSelected={props.isSelected}/>
          <label className="lblCheck"><span>{' '}</span>{props.label}</label>
        </div>
      </components.Option>
    </div>
  );
};

const ValueContainer = ({ index, getValue, ...props }) => {
  const maxToShow = 0;
  const overflow = getValue()
    .slice(maxToShow)
    .map((x) => x.label);
const length = overflow.length;
  const label = length === 0 ? 'Select...':` ${length} item${length !== 1 ? "s" : ""} selected`;
  return(
    <p className="p-2 m-0">
      {label}
    </p>
  )
};
const SelectCheckbox = (props) => {
  const {data}=props;
  const [optionSelected,setOptionSelected]=useState()
  const handleChange = (selected) => {
    setOptionSelected(selected)
   };
  return(
    <Select 
      components={{ ValueContainer:ValueContainer, Option:Option }} 
      isMulti 
      options={data} 
      hideSelectedOptions={false}
      onChange={(e)=>handleChange(e)}
      styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width:'200px',
            minHeight:'30px',
            border:'1px solid #808080'
          }),
        }}/>
  )
}
export default SelectCheckbox