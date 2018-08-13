// src/components/contact-card.js

import React from 'react';
import { Card, Icon } from 'antd';
import PropTypes from 'prop-types';

export default function ContactCard({ contact }) {
  return (
    <Card.Grid>
      <Card title="{contact.name.first} {contact.name.last}">
        <p>
          <Icon type="link" /> {contact.phone}
        </p>
        <p>
          <Icon type="link" /> {contact.email}
        </p>
      </Card>
    </Card.Grid>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired
};
