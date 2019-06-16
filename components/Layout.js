import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitcoin price</title>
            <link rel={'stylesheet'} href={'https://bootswatch.com/4/flatly/bootstrap.min.css'}/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;