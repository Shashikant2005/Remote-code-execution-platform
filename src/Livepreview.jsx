import React from 'react';
import './livep.css'
const Livepreview = () => {
    const run = () => {
        const htmlCode = document.getElementById("html-code").value;
        const cssCode = document.getElementById("css-code").value;
        const jsCode = document.getElementById("js-code").value;
        const output = document.getElementById("output");

        output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
        output.contentWindow.eval(jsCode);
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row h-screen">
                <div className="md:w-1/2 w-full ">
                    <label>
                        <i className="fa-brands fa-html5"></i> HTML
                    </label>
                    <textarea id="html-code" className="w-full h-48" onKeyUp={run}></textarea>

                    <label>
                        <i className="fa-brands fa-css3-alt"></i> CSS
                    </label>
                    <textarea id="css-code" className="w-full h-32" onKeyUp={run}></textarea>

                    <label>
                        <i className="fa-brands fa-js"></i> JavaScript
                    </label>
                    <textarea id="js-code" className="w-full h-32" onKeyUp={run}></textarea>
                </div>
                <div className="md:w-1/2 w-full">
                    <label>
                        <i className="fa-solid fa-play"></i> Output
                    </label>
                    <iframe id="output" className="w-full h-full" title="output"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Livepreview;
