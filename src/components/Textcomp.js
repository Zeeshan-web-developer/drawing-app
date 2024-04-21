"use client"
import React from 'react';
import { Stage, Layer, Text } from 'react-konva';

const DraggableText = ({ text, x, y, fontSize, draggable, onDragStart, onDragEnd }) => {
  return (
    <Text
      text={text}
      x={x}
      y={y}
      fontSize={fontSize}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

class App extends React.Component {
  state = {
    texts: [
      { id: 1, text: "Drag me!", x: 50, y: 50, fontSize: 20 },
      { id: 2, text: "I'm draggable too!", x: 150, y: 150, fontSize: 20 }
    ]
  };

  handleDragStart = (e) => {
    e.target.setAttrs({
      shadowOffset: {
        x: 5,
        y: 5
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };

  handleDragEnd = (e) => {
    e.target.to({
      duration: 0.5,
      easing: 'elasticOut',
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {this.state.texts.map(({ id, text, x, y, fontSize }) => (
            <DraggableText
              key={id}
              text={text}
              x={x}
              y={y}
              fontSize={fontSize}
              draggable={true}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    );
  }
}

export default App;
