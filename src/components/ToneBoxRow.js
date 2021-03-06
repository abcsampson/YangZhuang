import PropTypes from 'prop-types';
import React from 'react';

import UITextConstants from '../constants/UITextConstants';
import ToneBoxUtil from '../util/ToneBoxUtil';

const { PhonationToTableClass } = UITextConstants;

export default class ToneBoxRow extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    title: '',
    children: [],
  };

  render() {
    return (
      <tr>
        <td className={PhonationToTableClass[this.props.title]}>
          {this.props.title}
        </td>
        {this.props.children.map((cell, index) => (
          <td key={index} style={ToneBoxUtil.getToneStyleObject(cell)}>{cell}</td>
        ))}
      </tr>
    );
  }
}
