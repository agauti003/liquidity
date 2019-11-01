import React from 'react';
import TableBody from './TableBody';
import PropTypes from 'prop-types';
import './Table.scss';

export default function Table (props) {
    let tableBody = (<tr><td colSpan={7} className={"no-data"}>
        {'No Data To Display'}</td></tr>);

    if (props.tableData.length > 0) {
        tableBody = props.tableData.map((elem, index) => (
            <TableBody elem={elem} key={index} />
        ));
    }

    return (
        <div className="table-container">
            <div className="input-group mb-3">
                <button
                    className="button-container btn btn-dark"
                    onClick={props.handleModalToggle}
                > Add Issuance
                </button>
                <span className={"button-container col-md-6"} />
                <input type="text"
                    className="form-control col-md-6"
                    placeholder="Enter text to search"
                    aria-label="Enter text to search"
                    aria-describedby="basic-addon2"
                    onChange={props.handleGlobalSearch}
                />
            </div>
            <div className="table-continer-main">
                <table className="table table-bordered">
                    <thead>
                        <tr className="thead-dark">
                            <th scope="col" className="table-column-header">
                                Name & Industry Type
                            </th>
                            <th scope="col" className="table-column-header">
                                Issuance Type
                            </th>
                            <th scope="col" className="table-column-header">
                                Target Raise
                            </th>
                            <th scope="col" className="table-column-header">
                                Pre-Money Valuation
                            </th>
                            <th scope="col" className="table-column-header">
                                Amount Raised
                            </th>
                            <th scope="col" className="table-column-header">
                                Location
                            </th>
                            <th scope="col" className="table-column-header">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>{tableBody}</tbody>
                </table>
            </div>
        </div>
    );
}
Table.propTypes = {
    tableData: PropTypes.array,
    handleModalToggle: PropTypes.func,
    handleGlobalSearch: PropTypes.func
};
