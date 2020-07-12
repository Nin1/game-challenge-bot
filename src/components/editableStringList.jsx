import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Displays a list of strings.
// Each string has an 'x' button to remove it.
// An ADD button at the bottom allows you to add to the list.
class EditableStringList extends Component {
  renderExistingString(s, onStringChange, onStringDelete) {
    return (
      <div key={s.id}>
        <InputGroup className="mb-3">
          <Form.Control
            defaultValue={s.text}
            aria-label="String"
            aria-describedby="basic-addon2"
            onChange={e => onStringChange(s.id, e)}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={e => onStringDelete(s.id)}
            >
              X
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }

  renderStrings(strings, onStringChange, onStringDelete) {
    if (strings != null) {
      return (
        <React.Fragment>
          {strings.map(s => {
            return this.renderExistingString(s, onStringChange, onStringDelete);
          })}
        </React.Fragment>
      );
    }
  }

  render() {
    const { strings, onAddButton, onStringChange, onStringDelete } = this.props;
    return (
      <React.Fragment>
        {this.renderStrings(strings, onStringChange, onStringDelete)}
        <br />
        <button
          onClick={() => onAddButton()}
          className="btn btn-danger btn-sm m 2"
        >
          Add
        </button>
      </React.Fragment>
    );
  }
}

export default EditableStringList;
