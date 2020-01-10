import React, { Component } from 'react';
import { Modal } from './../Modal/Modal';

import './summary.scss';
export class Summary extends Component {
  state = { showConfirmModal: false, showSuccesModal: false };

  calculateTaxes() {
    const { taxes, subTotal } = this.props;
    let totalTax = 0;
    taxes.forEach(tax => {
      totalTax += parseFloat(tax.tax_percentage);
    });

    return (subTotal * (totalTax / 100)).toFixed(2);
  }

  render() {
    return (
      <div className='summary'>
        <Modal
          actions={
            <React.Fragment>
              <button
                className='btn confirm-order'
                onClick={() => this.setState({ showSuccesModal: true, showConfirmModal: false })}
              >
                Yes! Order now!
              </button>
              <button className='btn' onClick={() => this.setState({ showConfirmModal: false })}>
                Cancel
              </button>
            </React.Fragment>
          }
          show={this.state.showConfirmModal}
          title='Buy Products'
          content='Are you soure you want to make this order?'
        />
        <Modal
          actions={
            <button className='btn' onClick={() => this.setState({ showSuccesModal: false })}>
              Close
            </button>
          }
          show={this.state.showSuccesModal}
          animation='fadeInDown'
          title='Thank you for buying'
          content={"You'll be recibing your products whithin 30 days!"}
        />
        <div className='header'>
          <h1>Order Summary</h1>
        </div>
        <div className='summary-detail'>
          <div className='sub-total'>
            <p>SubTotal:</p>
            <p>US ${this.props.subTotal}</p>
          </div>
          <div className='shipping'>
            <p>Shipping to El Salvador:</p>
            <p>Free!</p>
          </div>
          <div className='taxes'>
            <p>Taxes:</p>
            <p>US ${this.calculateTaxes()}</p>
          </div>
          <div className='total'>
            <p>Total:</p>
            <p>US ${this.calculateTaxes()}</p>
          </div>
        </div>
        <div className='summary-order-now'>
          {this.props.itemsCount > 0 ? (
            <button
              className='btn btn-order'
              onClick={() => this.setState({ showConfirmModal: true })}
            >
              Order Now!
            </button>
          ) : (
            <button className='btn btn-order disabled' disabled={true}>
              You don't have any product in your cart!
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Summary;
