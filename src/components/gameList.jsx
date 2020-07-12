import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import SegmentList from "./segmentList";

class GameList extends Component {
  state = {};

  constructor(props) {
    super(props);
  }
  /*
  handleAddGame = onAddGame => {
    this.setState({ activeGameId: onAddGame() });
  };

  handleSwitchGame = newGameId => {
    this.setState({ activeGameId: newGameId });
  };

  handleDeleteGame = (gameId, games, onDeleteGame) => {
    // Can't delete last game
    if (games.length === 1) return;
    // Update activeCategoryId
    //let activeGame = games.find(g => {
    //  return g.id !== this.state.activeGameId;
    //});
    //this.setState({ activeGameId: activeGame.id });
    // Delete
    onDeleteGame(gameId);
  };

  handleDeleteCategory = (gameId, categoryId, onDeleteCategory) => {
    onDeleteCategory(gameId, categoryId);
  };
*/
  renderDropdown(
    games,
    activeGameName,
    activeGameId,
    onEditGame,
    onSwitchGame
  ) {
    return (
      <DropdownButton id="dropdown-basic-button" title={activeGameName}>
        <Form.Control
          value={activeGameName}
          aria-label="String"
          aria-describedby="basic-addon2"
          onChange={e => onEditGame(activeGameId, e)}
        />
        {games.map(g => {
          return (
            <Dropdown.Item
              href="#/action-1"
              key={g.id}
              onClick={() => onSwitchGame(g.id)}
            >
              {g.name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    );
  }

  render() {
    const {
      activeGameId,
      activeCategoryId,
      games,
      onAddSegment,
      onEditSegment,
      onDeleteSegment,
      onAddCategory,
      onEditCategory,
      onDeleteCategory,
      onSwitchCategory,
      onAddGame,
      onEditGame,
      onDeleteGame,
      onSwitchGame
    } = this.props;

    var activeGame = games.find(g => {
      return g.id === activeGameId;
    });
    // Need to be able to handle null case
    var actualGameId = -1;
    var actualGameName = "<Missing>";
    var actualGameCategories = [];
    if (activeGame != null) {
      actualGameId = activeGame.id;
      actualGameName = activeGame.name;
      actualGameCategories = activeGame.segments;
    }

    return (
      <React.Fragment>
        {this.renderDropdown(
          games,
          actualGameName,
          actualGameId,
          onEditGame,
          onSwitchGame
        )}
        <button
          onClick={() => onAddGame()}
          className="btn btn-primary btn-sm m 2"
        >
          Add Game
        </button>
        <button
          onClick={() => onDeleteGame(actualGameId)}
          className="btn btn-danger btn-sm m 2"
        >
          Delete Game
        </button>
        <SegmentList
          activeId={activeCategoryId}
          categories={actualGameCategories}
          onAddCategory={cId => onAddCategory(actualGameId, cId)}
          onEditCategory={(cId, e) => onEditCategory(actualGameId, cId, e)}
          onDeleteCategory={cId => onDeleteCategory(actualGameId, cId)}
          onSwitchCategory={cId => onSwitchCategory(cId)}
          onAddSegment={cId => onAddSegment(actualGameId, cId)}
          onEditSegment={(cId, sId, e) =>
            onEditSegment(actualGameId, cId, sId, e)
          }
          onDeleteSegment={(cId, sId) =>
            onDeleteSegment(actualGameId, cId, sId)
          }
          key={actualGameId}
        />
      </React.Fragment>
    );
  }
}

export default GameList;
