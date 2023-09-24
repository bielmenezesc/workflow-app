import React, { useState } from 'react';
import Layout from '../components/layout.js';
import "../App.css";

function InfoBox() {


    return (
        <div className="App">
            <Layout></Layout>
            <header className="App-header">
                <div class="infoBox">
                    <h2 style={{ 'text-decoration': 'underline'}}>How to Create a Flow?</h2>
                    <div>
                        <p>In a straightforward workflow like:</p>
                        <p><b>"start" -&gt; "action 1" -&gt; "action 2" -&gt; "end";</b></p>
                        <p>There are no conditions involved, and the flow proceeds linearly.</p>
                        <p>However, when introducing a condition, such as:</p>
                        <p><b>"start" -&gt; "action 1" -&gt; "condition 1" -&gt; "action 2" -&gt; "action 3" -&gt; "end";</b></p>
                        <p>You need to create a new alternative flow after the first one, starting from where the condition is inserted. In this case, it starts at "action 1".</p>
                        <p>Therefore, you would have:</p>
                        <p><b>"start" -&gt; "action 1" -&gt; "condition 1" -&gt; "action 2" -&gt; "action 3" -&gt; "end"; "action 1" -&gt; "condition 2" -&gt; "action 4" -&gt; "end";</b></p>
                        <p>Each alternative represents a possible flow the workflow can take, depending on the conditions. This creates a decision tree structure within your workflow.</p>
                        <p><b>OBS: </b>It's essential to enclose each step within double quotation marks ("") and use a semicolon (;) to signify the completion of a flow.</p>
                        <p><b>You may want to create a workflow using the provided examples to visualize how the workflow will appear.</b></p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default InfoBox;