/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import Table from './Table/Table';
const tableData = require('./table.json');
import Modal from './Modal/Modal';
import './index.scss';

export default class index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tableData,
            filterData: [],
            searchText: "",
            showModal: false
        };
        this.addNewInsurance = this.addNewInsurance.bind(this);
        this.handleModalToggle = this.handleModalToggle.bind(this);
        this.handleGlobalSearch = this.handleGlobalSearch.bind(this);
    }
    addNewInsurance (params) {
        const tableData = this.state.tableData;
        const showModal = this.state.showModal;
        tableData.push({
            "industry": {
                name: params.industryName,
                type: params.industryType
            },
            "issuance": params.issuanceType,
            "target": `$${params.targetRaised}`,
            'pre-moneyValuation': `$${params.preMoneyValuation}`,
            "amountRaised": `$${params.amountRaised}`,
            "location": params.location,
            "status": params.status
        });
        this.setState({ tableData, showModal: !showModal });
    }
    handleModalToggle () {
        const showModal = this.state.showModal;
        this.setState({ showModal: !showModal });
    }
    handleGlobalSearch (event) {
        const filterData = this.state.tableData.filter(filterObj => {
            let isPresent = false;
            Object.keys(filterObj).some(elem => {
                if (elem === 'industry') {
                    isPresent = filterObj[elem].name.indexOf(event.target.value) !== -1 ||
                        filterObj[elem].type.indexOf(event.target.value) !== -1;
                } else {
                    isPresent = filterObj[elem].indexOf(event.target.value) !== -1;
                }
                return isPresent;
            });
            return isPresent;
        });
        this.setState({ filterData, searchText: event.target.value });
    }
    render () {
        const { filterData, tableData, searchText } = this.state;
        return (
            <div className={"table"} >
                <span className={"navigation-bar"}>
                    <header>
                        <div className="header-container">
                            <h3>Liquidity Digital</h3>
                        </div>
                    </header>
                </span>
                <Table
                    tableData={searchText === "" ? tableData : filterData}
                    handleModalToggle={this.handleModalToggle}
                    addNewData={this.addNewInsurance}
                    handleGlobalSearch={this.handleGlobalSearch}
                />
                {this.state.showModal ?
                    <Modal
                        {...this.state}
                        handleModalToggle={this.handleModalToggle}
                        addNewData={this.addNewInsurance}
                    /> : ""
                }
            </div>
        );
    }
}

