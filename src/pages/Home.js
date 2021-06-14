import React from "react";
import Table from '../components/Table'

// Creating dummy data array to mimic the real scenario
// Returns - [1,2,3...100]
const generateRowData = (numOfRows) => {
    let rows = [];
    for(let i=1; i<=numOfRows; i++ ) {
        rows.push( i );
    }
    return rows;
}

const Home = () => (
    // Passing dummy array as 'data'
    // Number of items to display at screen is configured using 'displayItems'. Table height will get adjust based on this input.
    <Table data={generateRowData(100)} rowHeight={50} displayItems={5} />
);
export default Home;