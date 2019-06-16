import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to Bitcoin price</h1>
            <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    try {
        const coinDeskApiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const result = await fetch(coinDeskApiUrl);
        const data = await result.json();

        return {
            bpi: data.bpi
        };
    }
    catch (error) {
        return {
            bpi: {
                error
            }
        };
    }
};

export default Index;