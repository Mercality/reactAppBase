var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;

var NavItem = React.createClass({
    getInitialState: function() {
        return {};
    },
    hoverIn: function(e) {
        $(e.target).parent().addClass('active');
    },
    hoverOut: function(e) {
        $(e.target).parent().removeClass('active');
    },
    render: function() {
        return (
            <li onMouseEnter={this.hoverIn} onMouseLeave={this.hoverOut}>
                <Link style={this.props.aStyle} to={this.props.link.href}>{this.props.link.title}</Link>
            </li>
        );
    }

});

module.exports = NavItem;
