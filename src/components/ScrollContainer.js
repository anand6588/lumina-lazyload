import React from "react";

const ScrollContainer = (props) => {
    return (
        <div onScroll={props.handleScroll} className="scroll-container" style={{height: props.height+"px"}}>
            <div style={{height: (props.rowHeight*props.numOfRows)+"px"}}>
                {props.children}
            </div>
        </div>
    )
};
export default ScrollContainer;