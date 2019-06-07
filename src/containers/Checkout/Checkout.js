import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        //console.log("Checkout routing props",this.props);
        this.props.history.replace('/checkout/contact-data');//replace replaces the existing pathe with the new path while push action pushes one path over another buidling a tree like structure and hence on going back the paths are popped out accoedingly
    }

    render() {
        let summary = <Redirect to="/" />;

        if (this.props.ings) {
            let purchasedRedirect = this.props.purchased ? <Redirect to = "/"/> : null
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            )
        }
        return summary
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased : state.order.purchased
    }
};

export default connect(mapStateToProps)(Checkout);