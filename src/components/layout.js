// Layout.js
import React from 'react';
import "../App.css";

function Layout() {
    return (
        <header>
            <div class="links">
                <a href="http://localhost:3000/">Home</a>
                <a href="http://localhost:3000/workflow/create">New Workflow</a>
                <a href="http://localhost:3000/howToUse">How to use</a>
            </div>
        </header>
    );
}

export default Layout;