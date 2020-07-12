import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import EditableStringList from "./editableStringList";

class SegmentList extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  /*
  handleAddCategory = onAddCategory => {
    this.setState({ activeCategoryId: onAddCategory() });
  };

  handleSwitchCategory = newCategoryId => {
    this.setState({ activeCategoryId: newCategoryId });
  };*/

  handleDeleteCategory = (activeId, categories, onDeleteCategory) => {
    // Can't delete last category
    if (categories.length === 1) return;
    // Can't delete inherited category
    if (
      categories.find(c => {
        return c.id === activeId;
      }).isInherited
    )
      return;
    onDeleteCategory(activeId);
  };

  renderDropdown(
    categories,
    activeCategoryName,
    activeCategoryId,
    onEditCategory,
    onSwitchCategory,
    categoryIsInherited
  ) {
    var formControl = (
      <Form.Control
        value={activeCategoryName}
        aria-label="String"
        aria-describedby="basic-addon2"
        onChange={e => onEditCategory(activeCategoryId, e)}
      />
    );
    if (categoryIsInherited) {
      formControl = (
        <Form.Control
          readOnly
          value={"(Generic) " + activeCategoryName}
          aria-label="String"
          aria-describedby="basic-addon2"
        />
      );
    }
    return (
      <DropdownButton id="dropdown-basic-button" title={activeCategoryName}>
        {formControl}
        {categories.map(c => {
          return (
            <Dropdown.Item
              href="#/action-1"
              key={c.id}
              onClick={() => onSwitchCategory(c.id)}
            >
              {c.isInherited ? "(Generic) " + c.name : c.name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    );
  }

  render() {
    const {
      activeId,
      categories,
      onAddSegment,
      onEditSegment,
      onDeleteSegment,
      onAddCategory,
      onEditCategory,
      onDeleteCategory,
      onSwitchCategory
    } = this.props;
    // Dropdown of categories
    // Add category button
    // Remove category button
    // Category edit field name (readOnly if inherited from generics)
    // Editable string list
    var activeCategory = categories.find(c => {
      return c.id === activeId;
    });
    // Need to be able to handle null case
    var activeCategoryId = -1;
    var activeCategoryName = "<Missing>";
    var activeCategoryStrings = [];
    var categoryIsInherited = true;
    if (activeCategory != null) {
      activeCategoryId = activeCategory.id;
      activeCategoryName = activeCategory.name;
      activeCategoryStrings = activeCategory.strings;
      categoryIsInherited = activeCategory.isInherited;
    }
    return (
      <React.Fragment>
        {this.renderDropdown(
          categories,
          activeCategoryName,
          activeCategoryId,
          onEditCategory,
          onSwitchCategory,
          categoryIsInherited
        )}
        <button
          onClick={() => onAddCategory()}
          className="btn btn-primary btn-sm m 2"
        >
          Add Category
        </button>
        <button
          onClick={() => onDeleteCategory(activeId, categories)}
          className="btn btn-danger btn-sm m 2"
        >
          Delete Category
        </button>
        <EditableStringList
          strings={activeCategoryStrings}
          onAddButton={() => onAddSegment(activeCategoryId)}
          onStringChange={(sId, e) => onEditSegment(activeCategoryId, sId, e)}
          onStringDelete={sId => onDeleteSegment(activeCategoryId, sId)}
        />
      </React.Fragment>
    );
  }
}

export default SegmentList;
