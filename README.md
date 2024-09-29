# My Dashboard App

This project is a dashboard application built with React and React Bootstrap. The dashboard allows users to add, remove, and search for widgets in specific categories, with each widget displaying a pie chart based on user input.

## Features

- Dynamically add and remove widgets from categories.
- Widgets are created from user input with a custom name and pie chart values.
- Each widget is displayed with a pie chart showing data provided by the user.
- Widgets can be searched using a search bar.
- Responsive UI using React Bootstrap components.
- Widgets are organized under multiple categories.

## Technologies Used

- *React* (version 18)
- *React Bootstrap* for UI components and styling.
- *Chart.js* for displaying pie charts.
- *Bootstrap* for layout and styling.
- *JSON* to store categories and widgets data.

## Project Structure

- *components/*
  - Dashboard.js: The main dashboard layout, showing categories and widgets, and including a sidebar for adding widgets.
  - AddWidgetSidebar.js: Sidebar component used to add a new widget to the dashboard.
  - Widget.js: Represents a single widget card that contains a pie chart and a remove button.
  - WidgetList.js: Displays a list of widgets.
  - PieChart.js: Renders a pie chart for each widget using Chart.js.
- *data/*
  - categories.json: Stores the initial categories and their corresponding widgets.
- *index.js*: Entry point of the React application.
- *index.css*: Custom styles for the dashboard background and widgets layout.
- *Dashboard.css*: Contains specific styles for the Dashboard components.
  
## Installation

1. Clone this repository:

    sh
    git clone <repository-url>
    

2. Navigate to the project directory:

    sh
    cd my-dashboard-app
    

3. Install dependencies:

    sh
    npm install
    

4. Start the development server:

    sh
    npm start
    

    The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- *Add Widgets*: Click the '+ Add Widget' button, fill in the details, and click 'Add Widget'.
- *Remove Widgets*: Click the 'X' button on the widget card to remove it.
- *Search Widgets*: Use the search bar to find a widget by name.

## Adding a Widget

To add a widget:
1. Click the "+ Add Widget" button at the top right of the dashboard.
2. Select a category from the dropdown.
3. Enter the widget name and provide labels and values for the pie chart.
4. Click the "Add Widget" button to add the widget to the selected category.

## File Overview

- *Dashboard.js*: This component renders the main layout of the dashboard, with the Navbar, search functionality, categories, and widgets.
- *AddWidgetSidebar.js*: A sidebar that opens from the right for adding new widgets. It includes input fields for widget names, labels, and values.
- *PieChart.js*: Displays a pie chart for each widget using Chart.js.
- *Widget.js*: Each widget contains a pie chart, widget name, and a remove button.
- *WidgetList.js*: Renders a list of widgets for each category.

## Customization

- *Widget Chart Colors*: The pie chart colors are defined in PieChart.js. You can modify them in the backgroundColor array in the chart data.
- *Dashboard Background*: The background color of the dashboard can be changed in index.css under the body selector.