import React from "react";

// Base component
class BaseComponent extends React.Component {
  render() {
    return <h1>Base Component</h1>;
  }
}

// Derived component inheriting from BaseComponent
export class DerivedComponent extends BaseComponent {
  render() {
    return (
      <React.Fragment>
        <h2>Derived Component</h2>
        {super.render()}
      </React.Fragment>
    );
  }
}
