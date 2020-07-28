// import React from 'react';
// import BootstrapTable from 'react-bootstrap-table-next';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

// class Case1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { rowCount: products.length };
//   }

//   handleDataChange = ({ dataSize }) => {
//     this.setState({ rowCount: dataSize });
//   }

//   render() {
//     return (
//       <div>
//         <h5>Row Count:<span className="badge">{ this.state.rowCount }</span></h5>
//         <BootstrapTable
//           onDataSizeChange={ this.handleDataChange }
//           keyField="id"
//           data={ products }
//           columns={ columns }
//           filter={ filterFactory() }
//         />
//         <Code>{ sourceCode }</Code>
//       </div>
//     );
//   }
// }

// export default Case1