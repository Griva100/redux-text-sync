import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

function ComponentA() {
    return (
        <div>
            <h1>React Redux Task</h1>
            <ComponentB />
            <ComponentC />
        </div>
    );
}

export default ComponentA;
