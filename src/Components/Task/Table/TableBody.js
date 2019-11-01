
import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody ({ elem }) {
    return (
        <tr className="table-row">
            <td className="table-body-cell" >
                <div className="industry-name">
                    {elem.industry.name}
                </div>
                <div className="industry-type">
                    {elem.industry.type}
                </div>
            </td>
            <td className="table-body-cell" >
                {elem.issuance}
            </td>
            <td className="table-body-cell" >
                {elem.target}
            </td>
            <td className="table-body-cell" >
                {elem['pre-moneyValuation']}
            </td>
            <td className="table-body-cell" >
                {elem.amountRaised}
            </td>
            <td className="table-body-cell" >
                {elem.location}
            </td>
            <td className="table-body-cell" >
                {elem.status === "closed" ?
                    <span className={"dot-closed"} /> :
                    <span className={"dot-progress"} />
                }
                {elem.status}
            </td>
        </tr>
    );
}
TableBody.propTypes = {
    elem: PropTypes.object
};
