import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword : '',
            contactData: [{
                name: 'Albert',
                phone: '010-1111-1010'
            },{
                name: 'Betty',
                phone: '010-1213-1456'
            },{
                name: 'Charlie',
                phone: '010-2244-5556'
            },{
                name: 'David',
                phone: '010-1213-2345'
            }]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    render() {
        const mapToComponents = (data) => {
            return data.map((contact, i) => {
                return (<ContactInfo contact={contact} key={i}/>);
            });
        };

        return (
            <div>
                <h1>Contact</h1>
                <input type="text"
                    name ="keyword"
                    placeholder="Search.."
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
            </div>
        );
    }
}
