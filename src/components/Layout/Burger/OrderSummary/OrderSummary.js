import React, { Component } from 'react'

import Aux from '../../../../hoc/FormerAux';
import Button from '../../../UI/Button/Button'

class OrderSummary extends Component {

    //This can be converted back to a functional component
    //Does not have to be a class based component
    
    UNSAFE_componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate')
    }

    render() {

            const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}: {this.props.ingredients[igKey]}</span>
            </li>
        });

            return (
                <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: £{this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
            );
        }
    }

export default OrderSummary;