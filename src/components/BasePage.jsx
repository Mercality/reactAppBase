var React = require('react');
var NavBar = require('./nav/NavBar.jsx')
var PropTypes = React.PropTypes;
var LeadCapture = require('./forms/LeadCapture.jsx');

var navLinks = [{title: "Home",href: "/"},
                {title: "IOs Course", href: "/product/67"},
                {title: "Lol Coursse", href: "/product/98"}];

var BasePage = React.createClass({

    render: function() {
        return (
            <div>
                <NavBar bgColor="#FFF" titleColor="#3097d1" linkColor="" navData={navLinks} />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            {this.props.children}
                        </div>
                        <div className="col-sm-3">
                            <LeadCapture />
                        </div>
                    </div>

                </div>
            </div>
        );
    }

});

module.exports = BasePage;
