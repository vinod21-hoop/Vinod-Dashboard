import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import AddWidgetSidebar from './AddWidgetSidebar';
import WidgetList from './WidgetList';
import categoriesData from '../data/categories.json';
import '../Dashboard.css';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCategories(categoriesData.categories);
  }, []);

  const handleAddWidget = (categoryId, widget) => {
    setCategories(prevCategories => {
      const updatedCategories = prevCategories.map(cat =>
        Number(cat.id) === Number(categoryId) ? { ...cat, widgets: [...cat.widgets, widget] } : cat
      );
      return updatedCategories;
    });
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    setCategories(prevCategories =>
      prevCategories.map(cat =>
        cat.id === categoryId ? { ...cat, widgets: cat.widgets.filter(w => w.id !== widgetId) } : cat
      )
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container className="dashboard-container">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search widgets..."
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row className="mt-4">
        <Col className="text-end">
          <Button onClick={() => setShowSidebar(true)}>+ Add Widget</Button>
        </Col>
      </Row>

      <Row className="mt-4">
        {categories.map(category => (
          <Col key={category.id} md={12} className="mb-4">
            <h3>{category.name}</h3>
            <div className="widgets-container">
              <WidgetList
                widgets={category.widgets.filter(widget => widget.name.toLowerCase().includes(searchTerm.toLowerCase()))}
                onRemove={(id) => handleRemoveWidget(category.id, id)}
              />
            </div>
          </Col>
        ))}
      </Row>

      <AddWidgetSidebar
        show={showSidebar}
        handleClose={() => setShowSidebar(false)}
        categories={categories}
        addWidget={handleAddWidget}
      />
    </Container>
  );
};

export default Dashboard;
