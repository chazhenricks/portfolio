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
                    <span id="about_me_link" class="string_text">Learn More About Me!</span>
                    <span class="bracket">< /</span>
                    <span class="code_text">h1</span>
                    <span class="bracket">></span>
                </li>
                <li>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span class="bracket"><</span>
                <span class="code_text">h2</span>
                <span class="bracket">></span>
                <span class="string_text">Here are some personal projects</span>
                <span class="bracket">< /</span>
                <span class="code_text">h2</span>
                <span class="bracket">></span>
            </li>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="bracket"><</span>
                    <span class="code_text">ul</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="bracket"><</span>
                    <span class="code_text">li</span>
                    <span class="bracket">></span>
                    <a href="https://chazhenricks.github.io/BasicJSDrumkit/" target="_blank" class="link_text">Play Drums!</a>
                    <span class="bracket">< /</span>
                    <span class="code_text">li</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="bracket"><</span>
                    <span class="code_text">li</span>
                    <span class="bracket">></span>
                    <a href="https://chazhenricks.github.io/frontend-capstone/#!/" target="_blank" class="link_text">Shows Around</a>
                    <span class="bracket">< /</span>
                    <span class="code_text">li</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="bracket"><</span>
                    <span class="code_text">li</span>
                    <span class="bracket">></span>
                    <a href="" class="link_text">Backend Capstone</a>
                    <span class="bracket">< /</span>
                    <span class="code_text">li</span>
                    <span class="bracket">></span>
                </li>
                <li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="bracket">< /</span>
                    <span class="code_text">ul</span>
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