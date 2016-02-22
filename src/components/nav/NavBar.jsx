var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var NavItem = require('./NavItem.jsx');


var NavBar = React.createClass({

    render: function() {
        var navStyle = {
            WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            boxShadow: "0 0 4px rgba(0,0,0,0.4)",
            borderRadius: 0
        }

        var titleStyle = {}
        var linkStyle = {}

        if (this.props.bgColor)
            navStyle.background = this.props.bgColor;

        if(this.props.titleColor)
            titleStyle.color = this.props.titleColor;

        if(this.props.titleColor)
            linkStyle.color = this.props.linkColor;


        var navItems = this.props.navData.map(function(item, index) {
            return <NavItem aStyle={linkStyle} key={item.title + index} link={item} />
        });



        return (
            <div>
                <nav style={navStyle} className="navbar navbar-default">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link style={titleStyle} to="/" className="navbar-brand">Product Shop</Link>
                    </div>
                    <div className="navbar-collapse collapse" id="nav-collapse">
                        <ul className="nav navbar-nav">{navItems}</ul>
                    </div>
                </nav>
            </div>
        );
    }

});

module.exports = NavBar;
