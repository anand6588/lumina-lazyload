import React, { useEffect, useState } from "react";
import ScrollContainer from '../components/ScrollContainer'

const Table = (props) => {
    const rowHeight =   props.rowHeight;
    const height    =   (rowHeight * props.displayItems);

    const [rows, setRowsState] = useState(null);
    
    // To recreate table rows based on scroll position.
    const handleScroll = (event) => {
        const scrollTop  = event.target.scrollTop;
        const startIndex = Math.round( scrollTop / rowHeight );
        generateRows( props.data ,  startIndex );
    }

    // To create table rows
    const generateRows = ( data, startIndex ) => {
        let rows = [],
            i = 0,
            endIndex = startIndex + props.displayItems;

        for (var rowData of data) {
            if( i>=startIndex &&  i<=endIndex ) {
                rows.push(
                    <tr key={i}>
                        <td>Rows : {rowData}</td>
                    </tr>
                );
            }
            i++;
        }
        setRowsState( rows );
    }

    // To render the initial rows
    useEffect( ()=> {
        generateRows( props.data , 0 );
    },[]);

    return (
        <ScrollContainer height={height} numOfRows={props.data.length} rowHeight={rowHeight} handleScroll={handleScroll}>
            <table className="table-row" style={{position:"absolute"}}>
                <tbody>
                    { rows }
                </tbody>
            </table>
        </ScrollContainer>
    );
}
    

export default Table;