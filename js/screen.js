"use strict";
var screenDIV = document.querySelector(".screen_content");
var screenHTML = `
    <div class="screen">
        <div class="screen-content">
            <ol class="info">
                <li>
                    <span class="bracket"><</span>
                    <span class="code_text">html</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;
                    <span class="bracket"><</span>
                    <span class="code_text">head</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="bracket"><</span>
                    <span class="code_text">meta</span>
                    <span class="attribute">name</span>
                    <span class="bracket">=</span> 
                    <span class="attribute_text">'author'</span>
                    <span class="attribute"> content</span>
                    <span class="bracket">=</span> 
                    <span class="attribute_text">'Chaz Henricks &lt;<a href='mailto:chazhenricks@gmail.com' id="email">chazhenricks@gmail.com</a>&gt;'</span>
                    <span class="code_text">title</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="bracket"><</span>
                    <span class="code_text">title</span>
                    <span class="bracket">></span>
                    <span class="string_text">Chaz Henricks Portfoloio</span> 
                    <span class="bracket">< /</span>
                    <span class="code_text">title</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;
                    <span class="bracket">< /</span>
                    <span class="code_text">head</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;
                    <span class="bracket"><</span>
                    <span class="code_text">body</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="bracket"><</span>
                    <span class="code_text">h1</span>
                    <span class="bracket">></span>
                    <a href="../shit.html" class="string_text">Some Shit I've Written</span>
                    <span class="bracket">< /</span>
                    <span class="code_text">h1</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;
                    <span class="bracket">< /</span>
                    <span class="code_text">body</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    <span class="bracket">< /</span>
                    <span class="code_text">html</span>
                    <span class="bracket">></span>
                </li>
            </ol>  
        </div>
    </div>`;
screenDIV.innerHTML = screenHTML;
