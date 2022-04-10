import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';


class ContributeForm extends Component {
    state = {
        value: '',
        errmsg: '',
        loading: false
    };
    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        this.setState({ loading: true, errmsg: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            Router.replaceRoute(`/campaign/${this.props.address}`);

        } catch (err) {
            this.setState({ errmsg: err.message });
        }

        this, this.setState({ loading: false, value: '' });

    }

    render() {

        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errmsg}>
                <Form.Field>
                    <h3>Amount to contribue:</h3>
                    <Input
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })}
                        label="ether"
                        labelPosition='right' />
                </Form.Field>
                <Message error="Oops!" content={this.state.errmsg} />
                <Button primary loading={this.state.loading}>Contribute!</Button>
            </Form>
        );
    }
}

export default ContributeForm;