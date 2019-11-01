import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
const modalData = require('./modal.json');

export default class Modal extends PureComponent {
    constructor (props) {
        super(props);
        this.state = { ...modalData };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit (event) {
        event.preventDefault();
        const stateParams = { ...this.state };
        let isReadyToSubmit = true;
        Object.keys(stateParams).forEach(elem => {
            if (stateParams[elem] === '') {
                stateParams[`${elem}Err`] = true;
                isReadyToSubmit = false;
            } else {
                stateParams[`${elem}Err`] = false;
            }
        });
        if (isReadyToSubmit) {
            this.props.addNewData({ ...this.state });
        } else {
            this.setState({ ...stateParams });
        }
    }
    render () {
        return (
            <form
                className="needs-validation"
                noValidate
                onSubmit={this.handleSubmit} >
                <div
                    className={`modal fade${this.props.showModal ? 'show' : ''}`}
                    tabIndex={-1}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Issuance</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={this.props.handleModalToggle}
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className={'form-group'}>
                                    <div className="input-group col-md-12">
                                        <label className={'col-md-4'}>{'Industry Name'}</label>
                                        <input
                                            className={'form-control'}
                                            onChange={this.handleChange}
                                            name={'industryName'}
                                            type="text"
                                            value={this.state.industryName}
                                            required
                                        />
                                        {this.state.industryNameErr && (
                                            <div className="invalid-feedback">
                                                Please Enter Industry Name
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={'form-group'}>
                                    <div className="input-group col-md-12">
                                        <label className={'col-md-4'}>{'Industry Type'}</label>
                                        <input
                                            className={'form-control'}
                                            onChange={this.handleChange}
                                            name={'industryType'}
                                            type="text"
                                            value={this.state.industryType}
                                        />
                                        {this.state.industryTypeErr && (
                                            <div className="invalid-feedback">
                                                Please Enter Industry Type
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={'form-group'}>
                                    <div className="input-group col-md-12">
                                        <label className={'col-md-4'}>{'Issuance Type'}</label>
                                        <input
                                            className={'form-control'}
                                            onChange={this.handleChange}
                                            name={'issuanceType'}
                                            type="text"
                                            value={this.state.issuanceType}
                                        />
                                        {this.state.issuanceTypeErr && (
                                            <div className="invalid-feedback">
                                                Please Enter Issuance Type
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={'form-group'}>
                                    <div className="input-group col-md-12">
                                        <label className={'col-md-4'}>{'Target Raise'}</label>
                                        <input
                                            className={'form-control'}
                                            onChange={this.handleChange}
                                            name={'targetRaised'}
                                            type="text"
                                            value={this.state.targetRaised}
                                        />
                                        {this.state.targetRaisedErr && (
                                            <div className="invalid-feedback">
                                                Please Enter Target Raised
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={'form-group'}>
                                    <div className="input-group col-md-12">
                                        <label className={'col-md-4'}>
                                            {'Pre-Money Valuation'}
                                        </label>
                                        <input
                                            className={'form-control'}
                                            onChange={this.handleChange}
                                            name={'preMoneyValuation'}
                                            type="text"
                                            value={this.state.preMoneyValuation}
                                        />
                                        {this.state.preMoneyValuationErr && (
                                            <div className="invalid-feedback">
                                                Please Enter Pre Money Valuation
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={'form-group'}>
                                    <div className="input-group col-md-12">
                                        <label className={'col-md-4'}>{'Amount Raised'}</label>
                                        <input
                                            className={'form-control'}
                                            onChange={this.handleChange}
                                            name={'amountRaised'}
                                            type="text"
                                            value={this.state.amountRaised}
                                        />
                                        {this.state.amountRaisedErr && (
                                            <div className="invalid-feedback">
                                                Please Enter Amount Raised
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={'form-group'}>
                                    <div className="input-group col-md-12">
                                        <label className={'col-md-4'}>{'Location'}</label>
                                        <input
                                            className={'form-control'}
                                            onChange={this.handleChange}
                                            name={'location'}
                                            type="text"
                                            value={this.state.location}
                                        />
                                        {this.state.locationErr && (
                                            <div className="invalid-feedback">
                                                Please Enter Location
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={'form-group'}>
                                    <div className="input-group col-md-12">
                                        <label className={'col-md-4'}>{'Status'}</label>
                                        <select
                                            onChange={this.handleChange}
                                            name={'status'}
                                            className={'custom-select'}
                                            value={this.state.status}
                                        >
                                            <option value={''} disabled>{'Please Select status'}</option>
                                            <option value={'In Progress'}>{'In Progress'}</option>
                                            <option value={'Closed'}>{'Closed'}</option>
                                        </select>
                                        {this.state.statusErr && (
                                            <div className="invalid-feedback">
                                                Please Select Status
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-dark"
                                    data-dismiss="modal"
                                    onClick={this.props.handleModalToggle}
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={this.handleSubmit}
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

Modal.propTypes = {
    addNewData: PropTypes.func,
    showModal: PropTypes.bool,
    handleModalToggle: PropTypes.func
};
