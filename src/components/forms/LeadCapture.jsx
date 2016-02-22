var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/Actions.jsx');
var EmailStore = require('../reflux/EmailStore.jsx');

var LeadCapture = React.createClass({
    //Reflux Listeners
    mixins: [Reflux.listenTo(EmailStore, 'onChange')],

    //Get the initial state of the LeadCapture Form
    getInitialState: function() {
        return {submitted: false};
    },

    //Function for submitting the email
    onSubmit: function(e) {
        if (!this.refs.fieldEmail.state.valid) {
            alert("You suck at filling out forms. Email is always required in a lead capture form. Dummy!");
        } else {
            //Send request to email host or server!
            var subscriber = {
                id: '',
                firstName: this.refs.fieldName.state.value,
                email: this.refs.fieldEmail.state.value

            };

            this.refs.fieldEmail.clear();
            this.refs.fieldName.clear();

            Actions.submitEmail(subscriber);
        }
    },

    //onChange function for triggering the Listener
    onChange: function(msg) {
        console.log(msg);
        this.setState({submitted: true});
    },

    //React render function.
    render: function() {
        var successStyle = {
            color: "green",
            visibility: this.state.submitted ? "visible" : "hidden",
        }
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>Get E-Book</h4>
                    </div>
                    <div className="panel-body">
                        <NameField type="First" ref="fieldName"/>
                        <br />
                        <EmailField ref="fieldEmail"/>
                        <div className="row">
                            <div className="col-sm-6">
                                <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                            </div>
                            <div style={successStyle} className="col-sm-2">
                                <h5>Success!</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;
