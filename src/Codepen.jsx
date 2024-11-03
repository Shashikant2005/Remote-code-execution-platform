import React, { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import Result from './Result';

function Codepen() {
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');

  const onChangeHtml = useCallback((value) => {
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setJs_Edit(value);
  }, []);

  const srcCode = `
    <html>
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}<\/script>
    </html>
  `;

  return (
    <div className="p-2">
      <div className="flex md:flex-row flex-col sm:gap-2">
        {/* HTML Editor */}
        <div className="flex-1 bg-[#282c34] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
          <CodeMirror
            className="text-xl border-gray-700 border"
            value={html_edit}
            height="342px"
            theme="dark"
            extensions={[html(true)]}
            onChange={onChangeHtml}
          />
        </div>

        {/* CSS Editor */}
        <div className="flex-1 bg-[#282c34] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
          <CodeMirror
            className="text-xl border-gray-700 border"
            value={css_edit}
            height="342px"
            theme="dark"
            extensions={[css(true)]}
            onChange={onChangeCss}
          />
        </div>

        {/* JavaScript Editor */}
        <div className="flex-1 bg-[#282c34] p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
          <CodeMirror
            className="text-xl border-gray-700 border"
            value={js_edit}
            height="342px"
            theme="dark"
            extensions={[javascript(true)]}
            onChange={onChangeJavaScript}
          />
        </div>
      </div>

      {/* Result Component */}
      <div className="mt-4">
        <Result srcCode={srcCode} />
      </div>
    </div>
  );
}

export default Codepen;
