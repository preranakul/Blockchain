import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5c3eBbBf62EcE8D6Afc94935dAE2212BE9B92b64'//'0x90e2b94532734E2999D4919Ea1b5263Bf35d4B0d'
);

export default instance;
