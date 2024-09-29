import React from 'react';
import Widget from './Widget';

const WidgetList = ({ widgets, onRemove }) => {
  return (
    <>
      {widgets.map(widget => (
        <Widget key={widget.id} widget={widget} onRemove={onRemove} />
      ))}
    </>
  );
};

export default WidgetList;
