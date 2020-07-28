import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;
//...

const products = ['One', 'Two','Three'];
const columns = ['Index', 'Name'];

<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  search
>
  {
    props => (
      <div>
        <h3>Input something at below input field:</h3>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>

// This is my custom search component
const MySearch = (props) => {
  let input;
  const handleClick = () => {
    props.onSearch(input.value);
  };
  return (
    <div>
      <input
        className="form-control"
        style={ { backgroundColor: 'pink' } }
        ref={ n => input = n }
        type="text"
      />
      <button className="btn btn-warning" onClick={ handleClick }>Click to Search!!</button>
    </div>
  );
};

export const MyTable = () => (
    <ToolkitProvider
      keyField="id"
      data={ products }
      columns={ columns }
      search
    >
      {
        props => (
          <div>
            <BootstrapTable
              { ...props.baseProps }
            />
            <MySearch { ...props.searchProps } />
            <br />
          </div>
        )
      }
    </ToolkitProvider>
);

export default MySearch