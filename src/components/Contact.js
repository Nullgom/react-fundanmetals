import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
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
        this.handleClick  = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) {
        this.setState({
            selectedKey: key
        });
        console.log(key, 'is selectedKey');
    }

    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            return data.map((contact, i) => {
                return (<ContactInfo
                            contact={contact}
                            key={i}
                            onClick={()=> this.handleClick(i)}/>);
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
                <ContactDetails
                    isSelected={this.state.selectedKey != -1}
                    contact={this.state.contactData[this.state.selectedKey]}/>
            </div>
        );
    }
}
