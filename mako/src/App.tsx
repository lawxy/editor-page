import React from 'react';

import {
  FormEditor,
  Material,
  Settings,
  FormCanvas,
} from '@roddan/form-editor';


function App() {
  return (
    <FormEditor mode="design">
      <Material />
      <FormCanvas />
      <Settings />
    </FormEditor>
  );
}

export { App };
