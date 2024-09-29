import React, { useState } from 'react';
import { Offcanvas, Button, Form } from 'react-bootstrap';

const AddWidgetSidebar = ({ show, handleClose, categories, addWidget }) => {
  const [widgetName, setWidgetName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [labels, setLabels] = useState(['']);
  const [values, setValues] = useState(['']);

  const handleLabelChange = (index, value) => {
    const newLabels = [...labels];
    newLabels[index] = value;
    setLabels(newLabels);
  };

  const handleValueChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const addNewLabelValue = () => {
    setLabels([...labels, '']);
    setValues([...values, '']);
  };

  const handleAddWidget = () => {
    const total = values.reduce((acc, val) => acc + parseFloat(val || 0), 0);
    if (total !== 100) {
      alert("The percentages must sum up to 100.");
      return;
    }
    const widget = {
      id: Date.now(),
      name: widgetName,
      labels,
      values: values.map(val => parseFloat(val)),
    };
    console.log("Widget created: ", widget);
    addWidget(categoryId, widget);
    handleClose();
    setWidgetName('');
    setCategoryId('');
    setLabels(['']);
    setValues(['']);
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Add Widget</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <Form.Group controlId="widgetName">
            <Form.Label>Widget Name</Form.Label>
            <Form.Control
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              placeholder="Enter widget name"
            />
          </Form.Group>
          <Form.Group controlId="categorySelect" className="mt-3">
            <Form.Label>Select Category</Form.Label>
            <Form.Control
              as="select"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          {labels.map((label, index) => (
            <div key={index} className="mt-3">
              <Form.Group controlId={`label${index}`}>
                <Form.Label>Label {index + 1}</Form.Label>
                <Form.Control
                  type="text"
                  value={label}
                  onChange={(e) => handleLabelChange(index, e.target.value)}
                  placeholder="Enter label"
                />
              </Form.Group>
              <Form.Group controlId={`value${index}`}>
                <Form.Label>Value {index + 1} (%)</Form.Label>
                <Form.Control
                  type="number"
                  value={values[index]}
                  onChange={(e) => handleValueChange(index, e.target.value)}
                  placeholder="Enter percentage"
                  min="0"
                  max="100"
                />
              </Form.Group>
            </div>
          ))}
          <Button variant="secondary" onClick={addNewLabelValue} className="mt-3">
            Add Another Label/Value
          </Button>
          <Button variant="primary" onClick={handleAddWidget} className="mt-3">
            Add Widget
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default AddWidgetSidebar;
