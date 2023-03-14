import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
const Accordion = ({
    questionsAnswers,
    onSubmitEdit,
    handlerDelete,
    currentRows
}) => {
    const [activeIndex, setActiveIndex] = useState();

    const renderedQuestionsAnswers = questionsAnswers && currentRows
        .map((item, index) => {
            const showDescription = index === activeIndex ? "show-description" : "";
            const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
            const ariaExpanded = index === activeIndex ? "true" : "false";
            return (
                <AccordionItem
                    key={item}
                    showDescription={showDescription}
                    fontWeightBold={fontWeightBold}
                    ariaExpanded={ariaExpanded}
                    item={item}
                    index={index}
                    onClick={() => {
                        if (activeIndex !== index) {
                            setActiveIndex(index);
                        } else {
                            setActiveIndex();
                        }
                    }}
                    Edit={() => onSubmitEdit(index, item)}
                    Remove={() => handlerDelete(item._id)}
                />
            );
        });

    return (
        <div className="faq">
            <dl className="faq__list">{renderedQuestionsAnswers}</dl>
        </div>
    );
};

export default Accordion;