import React, { useState }  from 'react'
import {Input} from "antd"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Select, Tag } from 'antd';
const options = [
  {
    value: 'tuhin',
  },
  {
    value: 'lime',
  },
  {
    value: 'green',
  },
  {
    value: 'cyan',
  },
];
const AddProduct = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  }
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginInlineEnd: 4,
        }}
      >
        {label}
      </Tag>
    );
  };
  return (
    <>
    <h3>Product Name :</h3>
    <Input placeholder="Product Name" />
    <h3>Product Description : </h3>
    <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <h3>Store</h3>
      <Select
    mode="single"
    tagRender={tagRender}
    style={{
      width: '100%',
    }}
    options={options}
  />
    </>

  )
}

export default AddProduct