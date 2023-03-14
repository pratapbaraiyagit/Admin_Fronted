import React from "react";
import { TiEdit } from 'react-icons/ti'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { BiPlus } from "react-icons/bi";
const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  Edit,
  Remove,
  onClick,
}) => {
  return (
    <div className="faq__question my-4" key={index}>
      <dt>
        <button
          aria-expanded={ariaExpanded}
          aria-controls={`faq${index + 1}_desc`}
          data-qa="faq__question-button"
          className={`faq__question-button ${fontWeightBold}`}

        >
          <div className="w-100 d-flex justify-content-between">
            <div className="">
              {index + 1 + '.       ' + item.question}
            </div>
            <div className="sss">
              <TiEdit className="Edit mx-2" onClick={Edit} size={24} />
              <RiDeleteBin7Fill className="Remove mx-2" onClick={Remove} size={24} />
              <BiPlus className="Remove mx-2" onClick={onClick} size={24} />
            </div>
          </div>
        </button>
      </dt>
      <dd>
        <p
          id={`faq${index + 1}_desc root1`}
          data-qa="faq__desc"
          className={`faq__desc ${showDescription}`}
        >
          {item.answer}
        </p>
      </dd>
    </div>
  )
};

export default AccordionItem;