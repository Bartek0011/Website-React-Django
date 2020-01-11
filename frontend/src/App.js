import React, {Component} from "react";
import axios from "axios";
import Header from "./Header";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                product_name: "",
                product_img: "",
                product_price: "",
                product_linkpay: "",
                product_description: ""
            },
            productsList: []
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get("http://localhost:8000/api/products/")
            .then(res => this.setState({productsList: res.data}))
            .catch(err => console.log(err));
    };

    renderItems = () => {
        const newItems = this.state.productsList;
        return newItems.map(item => (
            <div className="item" key={item.id}>
                <h3 className="product_name">{item.product_name}</h3>
                <img src={item.product_img}/>
                <div className="description">
                    <form action={item.product_linkpay}>
                        <input type="submit" value={item.product_price + " $"}/>
                    </form>
                    <p> {item.product_description} </p>
                </div>
            </div>

        ));
    };


    render() {
        return (
            <div className="App">
                <Header className="header"/>

                {this.renderItems()}
            </div>
        );
    }
}

export default App;