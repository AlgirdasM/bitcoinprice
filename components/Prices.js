class Prices extends React.Component {
    state = {
        currency: 'EUR'
    };

    setCurrency = (e) => {
        this.setState({
            currency: e.target.value
        });
    };

    renderAvailableCurrencies = (bpi) => {
        const availableCurrencies = Object.values(bpi);
        return availableCurrencies.map(item => {
            if(!item.code) {
                return;
            }

            return (
                <option value={item.code}>{item.code}</option>
            )
        })
    };

    render() {
        const {bpi} = this.props;
        const selectedCurrency = bpi[this.state.currency];

        if(bpi.error || !selectedCurrency) {
            return (
                <div>
                    <p className="text-danger">
                        Oops something went wrong, please try again later.
                    </p>
                </div>
            )
        }

        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Bitcoin rate for {selectedCurrency.description} :
                        <span className="badge badge-primary ml-2 mr-2">{selectedCurrency.code}</span>
                        <strong>{selectedCurrency.rate}</strong>
                    </li>
                </ul>
                <br/>
                <select onChange={this.setCurrency} value={this.state.currency} className="form-control">
                    {this.renderAvailableCurrencies(bpi)}
                </select>
            </div>
        )
    }
 }

 export default Prices;