import React, { Component } from 'react';
import { Form, Button, Message, FormField, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
    state = {
        value: '',
        desc: '',
        recipient: '',
        errmsg: '',
        loading: false
    };
    static async getInitialProps(props) {
        const address = props.query;
        return (address);
    }

    onSubmit = async event => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        const { desc, value, recipient } = this.state;
        this.setState({ loading: true, errmsg: '' })
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequest(desc, web3.utils.toWei(value), recipient)
                .send({ from: accounts[0] });

            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
            this.setState({ errmsg: err.message });
        }
        this.setState({ loading: false });

    };
    render() {
        return (
            <Layout>

                <h3>Create Request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errmsg}>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                            value={this.state.desc}
                            onChange={event => this.setState({ desc: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value in ether</label>
                        <Input
                            value={this.state.value}
                            onChange={event => this.setState({ value: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input
                            value={this.state.recipient}
                            onChange={event => this.setState({ recipient: event.target.value })}
                        />
                    </Form.Field>
                    <Message error header="oops!" content={this.state.errmsg} />
                    <Button primary loading={this.state.loading}>Create Request</Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;
