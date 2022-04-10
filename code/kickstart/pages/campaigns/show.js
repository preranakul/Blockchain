import React, { Component } from "react";
import { Card, Grid, GridColumn, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from '../../ethereum/campaign';
import web3 from "../../ethereum/web3";
import ContributeForm from '../../components/contributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    console.log(props.query.address);
    const campaign = Campaign(props.query.address);
    const manager = await campaign.methods.manager().call();
    console.log("@@@@@");
    console.log(manager);
    const summary = await campaign.methods.getSummary().call();
    //console.log(summary);
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'address of mngr',
        description: 'created campaign and can create and approve requests',
        style: { overflowWrap: 'break-word' }

      },
      {
        header: minimumContribution,
        meta: 'min contr',
        description: 'you have to pay ',
        style: { overflowWrap: 'break-word' }

      },
      {
        header: approversCount,
        meta: 'No. of approvers',
        description: 'No. of approvers',
        style: { overflowWrap: 'break-word' }

      }, {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'balance',
        description: 'balance available to spen on requests',
        style: { overflowWrap: 'break-word' }

      }

    ];
    return <Card.Group items={items} />;
  }



  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <GridColumn width={10}>
              {this.renderCards()}
            </GridColumn>
            <GridColumn width={6}>
              <ContributeForm address={this.props.address} />
            </GridColumn>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
