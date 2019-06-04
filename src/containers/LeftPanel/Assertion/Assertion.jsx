import React from 'react';
import LastAssertion from './LastAssertion';
import { Draggable } from 'react-beautiful-dnd';

const Assertion = ({ id, index, dispatchToTestCase }) => {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <LastAssertion id={id} dispatchToTestCase={dispatchToTestCase} />
        </div>
      )}
    </Draggable>
  );
};

export default Assertion;
