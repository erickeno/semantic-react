import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['top', 'middle', 'bottom'],
    flipped: ['horizontally', 'vertically'],
    floated: ['right', 'left'],
    rotated: ['clockwise', 'counterclockwise']
};

/**
 * Icon
 */
export default class Icon extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Vertical alignment of icon. Useful when child of other elements:
         * Item
         */
        aligned: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
        /**
         * An icon can be formatted to appear bordered
         */
        bordered: React.PropTypes.bool,
        /**
         * An icon can be formatted to appear circular
         */
        circular: React.PropTypes.bool,
        /**
         * An icon can be formatted with different colors
         */
        color: React.PropTypes.string,
        /**
         * Render as corner icon if used in <Icons/>
         */
        corner: React.PropTypes.bool,
        /**
         * Icon could be disabled or used as simple loader
         */
        state: React.PropTypes.oneOf(['disabled', 'loading']),
        /**
         * An icon can be fitted, without any space to the left or right of it.
         */
        fitted: React.PropTypes.bool,
        /**
         * Floated icon: Useful when child of other elements:
         * Item
         */
        floated: React.PropTypes.oneOf(['left', 'right']),
        /**
         * An icon can be flipped
         */
        flipped: React.PropTypes.oneOf(['horizontally', 'vertically']),
        /**
         * An icon can have its colors inverted for contrast
         */
        inverted: React.PropTypes.bool,
        /**
         * Could be formatted as link
         */
        link: React.PropTypes.bool,
        /**
         * Icon name
         */
        name: React.PropTypes.string,
        /**
         * Icon size
         */
        size: React.PropTypes.string,
        /**
         * An icon can be rotated
         */
        rotated: React.PropTypes.oneOf(['clockwise', 'counterclockwise'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'i'
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const {
            component, defaultClasses, children, aligned, bordered, circular, color, corner, state, fitted, floated, flipped,
            inverted, link, name, size, rotated, ...other
        } = this.props;
        let Component = component;
        other.className = classNames(other.className, this.getClasses());
        return (<Component {...other}>{children}</Component>);
    }

    getClasses() {
        let classes = {
            // default
            // variations
            aligned: this.props.aligned,
            bordered: this.props.bordered,
            circular: this.props.circular,
            corner: this.props.corner,
            disabled: this.props.state === 'disabled',
            fitted: this.props.fitted,
            floated: this.props.floated,
            link: this.props.link || this.props.onClick,
            inverted: this.props.inverted,
            loading: this.props.state === 'loading',

            // component
            icon: this.props.defaultClasses
        };

        // handle all string or mixed string/bool this.props

        // classes[this.this.props.aligned] = !!this.this.props.aligned;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.color] = !!this.props.color;
        classes[this.props.name] = !!this.props.name;
        classes[this.props.pointing] = !!this.props.pointing;

        return validateClassProps(classes, this.props, validProps);
    }
}
