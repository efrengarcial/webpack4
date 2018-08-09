import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

class Hello extends React.Component {
  render() {
    return (
      <div>
        {this.props.hello}
        <DatePicker />
      </div>
    );
  }
}
Hello.propTypes = {
  hello: PropTypes.string
};
export default Hello;
