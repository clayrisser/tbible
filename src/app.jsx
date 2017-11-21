import React, { Component } from 'react';
import blessed from 'blessed';
import { render, box } from 'react-blessed';
import log from './log';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <box
        width="100%"
        height="100%"
      >
        <Menu />
      </box>
    );
  }
}

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Google Shell'
});

screen.key(['escape', 'q', 'C-c'], (ch, key) => {
  process.exit(0);
});

const component = render(<App />, screen);
