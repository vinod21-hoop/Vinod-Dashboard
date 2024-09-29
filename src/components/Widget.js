import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';
import PieChart from './PieChart';

const Widget = ({ widget, onRemove }) => {
  return (
    <Card className="widget-card m-2" style={{ minWidth: '500px', maxWidth: '500px', height: '370px', position: 'relative' }}>
      <CloseButton
        onClick={() => onRemove(widget.id)}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="widget-pie" style={{ flex: 1 }}>
          <PieChart labels={widget.labels} values={widget.values} />
        </div>
        <div
          className="widget-details d-flex flex-column justify-content-center align-items-center"
          style={{ marginTop: '1rem' }}
        >
          <Card.Title>{widget.name}</Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Widget;
