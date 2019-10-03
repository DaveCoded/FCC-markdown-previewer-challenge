import React, { useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState('This is just some text for now.');

  const handleChange = e => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <h1>Markdown Previewer</h1>
      <textarea
        name='editor'
        id='editor'
        cols='100'
        rows='20'
        onChange={handleChange}
        value={markdown}
      />
      <div id='preview'>{markdown}</div>
    </>
  );
}

export default App;
