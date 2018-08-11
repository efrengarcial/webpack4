import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, DatePicker, message } from 'antd';
// The default locale is en-US, but we can change it to other language
import frFR from 'antd/lib/locale-provider/es_ES';
import moment from 'moment';
import 'moment/locale/es';

import styles from './style.scss';

moment.locale('es');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    };
  }
  handleChange(date) {
    message.info('Selected Date: ' + (date ? date.toString() : ''));
    this.setState({ date });
  }
  render() {
    return (
      <LocaleProvider locale={frFR}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>
            Date: {this.state.date && this.state.date.toString()}
          </div>
        </div>
      </LocaleProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
