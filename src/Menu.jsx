import React, { Component } from 'react';
import { button } from 'react-blessed';
import log from './log';
import { Grid, Map } from 'react-blessed-contrib';

export default class Menu extends Component {
  state = {
    selected: 'version'
  }

  render() {
    const { selected } = this.state;
    return (
      <box
        height={3}
      >
        <Grid rows={1} cols={12}>
          <button
            row={0}
            col={0}
            rowSpan={1}
            colSpan={3}
            align="center"
            style={{
              bold: selected === 'version',
              border: { fg: selected === 'version' ? 'red' : 'blue' }
            }}
            mouse={true}
            onPress={this.handlePress.bind(this, 'version')}
          >
            VERSION
          </button>
          <button
            ref="hi"
            row={0}
            col={3}
            rowSpan={1}
            colSpan={3}
            align="center"
            style={{
              bold: selected === 'book',
              border: { fg: selected === 'book' ? 'red' : 'blue' }
            }}
            mouse={true}
            onPress={this.handlePress.bind(this, 'book')}
          >
            BOOK
          </button>
          <button
            row={0}
            col={6}
            rowSpan={1}
            colSpan={3}
            align="center"
            style={{
              bold: selected === 'chapter',
              border: { fg: selected === 'chapter' ? 'red' : 'blue' }
            }}
            mouse={true}
            onPress={this.handlePress.bind(this, 'chapter')}
          >
            CHAPTER
          </button>
          <button
            row={0}
            col={9}
            rowSpan={1}
            colSpan={3}
            align="center"
            style={{
              bold: selected === 'verse',
              border: { fg: selected === 'verse' ? 'red' : 'blue' }
            }}
            mouse={true}
            onPress={this.handlePress.bind(this, 'verse')}
          >
            VERSE
          </button>
        </Grid>
      </box>
    );
  }

  handlePress(selected) {
    this.setState({ selected });
  }
}
