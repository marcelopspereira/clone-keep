import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import feather from 'feather-icons';
import styled from "styled-components";
import "draft-js/dist/Draft.css";

const EditorButton = styled.button`
  background: #fff;
  border: none;
`;

const BLOCK_TYPES = [
  {label: 'Bold', icon: 'bold', style: 'BOLD'},
  {label: 'Italic', icon: 'italic', style: 'ITALIC'}
];

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  _toggleBlockType (blockType) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        blockType
      )
    )
  }

  _blockStyles (contentBlock) {
    const type = contentBlock.getType();

    if (type === 'unstyled') {
      return null
    }

    return `editor-style-${type}`;
  }

  render() {
    return (
      [
        <Editor
          key="editor-content"
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          blockStyleFn={this._blockStyles}
          placeholder="Create a note"
        />,
        <div key="editor-actions">
          {
            BLOCK_TYPES.map(type => (
              <EditorButton key={`editor-action-${type.style}`} onClick={() => this._toggleBlockType(type.style)} dangerouslySetInnerHTML={{__html: feather.toSvg(type.icon)}} />
            ))
          }
        </div>
      ]
    );
  }
}

export default MyEditor;
