import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from "prop-types";
import * as serviceWorker from './serviceWorker';

const products=[ { category: "Electronics ", price: " 1500dt", name: "PcPotable" },
{ category: "Clothes ", price: " 100dt", name: "veste" },
];
const ProductTable = props => {
  return (
    <div >
     
      <table style={{ marginLeft:"400px", marginTop:"200px",border:" solid 3px black",backgroundColor:props.backgroundColor
     ,height:props.height,width:props.width}}>
        <tbody>
          <tr>
            <td style={{border:" solid 3px black", textAlign: "center",}}>Name</td>
            <td style={{border:" solid 3px black", textAlign: "center",}}>Category</td>
            <td style={{border:" solid 3px black", textAlign: "center",}}>Price</td>
          </tr>
          
          {props.table.map((x) => (
            <tr style={{border:" solid 3px black", textAlign: "center",}}>
              <td style={{border:" solid 3px black", textAlign: "center",}}>{x.name}</td>
              <td style={{border:" solid 3px black", textAlign: "center",}}>{x.category}</td>
              <td style={{border:" solid 3px black", textAlign: "center",}}>{x.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
ProductTable.propTypes = {
  Table: PropTypes.array,
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string
};

ReactDOM.render(
  <React.StrictMode>
    <ProductTable table={products} height="250px" width="400px" backgroundColor="rgba(255, 0, 0, 0.493)"
    >
      
    </ProductTable>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
