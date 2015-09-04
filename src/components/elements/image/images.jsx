import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';

export class Images extends Component {
    static propTypes = {
        avatar: React.PropTypes.bool,
        bordered: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        size: React.PropTypes.string,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ])
    };

    static defaultProps = {
        defaultClasses: true
    };    

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // types

            // states
            hidden: this.props.hidden,
            disabled: this.props.disabled,

            // variations
            avatar: this.props.avatar,
            bordered: this.props.bordered,
            circular: this.props.circular,
            rounded: this.props.rounded,

            // component 
            images: this.props.defaultClasses
        };

        classes[this.props.size] = !!this.props.size;

        let Tag = returnTag(this.props.tag || React.DOM.div);

        let { avatar, bordered, children, circular, defaultClasses, disabled, hidden, rounded,
              size, tag, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, this.props.children);
    }

}