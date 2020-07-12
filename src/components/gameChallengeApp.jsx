import React, { Component } from "react";
import * as firebase from "firebase";
import EditableStringList from "./editableStringList";
import SegmentList from "./segmentList";
import GameList from "./gameList";

class GameChallengeApp extends Component {
  state = {
    activeGenericCategoryId: 0,
    activeGameId: 0,
    activeGameCategoryId: 0,

    sentences: [],
    generics: [],
    games: []
  };

  componentDidMount() {
    // Load from database
    const firebaseConfig = {
      apiKey: "AIzaSyBOzIDUIUFpvYf-pZZFY7I9Ucb4nXEKyC4",
      authDomain: "game-challenge-bot.firebaseapp.com",
      databaseURL: "https://game-challenge-bot.firebaseio.com",
      projectId: "game-challenge-bot",
      storageBucket: "game-challenge-bot.appspot.com",
      messagingSenderId: "1047706421956",
      appId: "1:1047706421956:web:26b78b0b0b9630ba6a1791",
      measurementId: "G-LX0HVNR863"
    };
    firebase.initializeApp(firebaseConfig);
    const rootRef = firebase
      .database()
      .ref()
      .child("/");
    const sentenceRef = rootRef.child("sentences");
    sentenceRef.once("value").then(snap => {
      this.setState({ sentences: snap.val() });
      this.forceUpdate();
    });
    const genericsRef = rootRef.child("generics");
    genericsRef.once("value").then(snap => {
      var generics = snap.val();
      generics.forEach(cat => {
        if (cat.strings == null) {
          cat.strings = [];
        }
      });
      this.setState({ generics });
      this.setState({ activeGenericCategoryId: this.state.generics[0].id });
      this.inheritAllGenericsForAllGames();
      this.forceUpdate();
    });
    const gamesRef = rootRef.child("games");
    gamesRef.once("value").then(snap => {
      var games = snap.val();
      games.forEach(game => {
        if (game.segments == null) {
          game.segments = [];
        }
        game.segments.forEach(cat => {
          if (cat.strings == null) {
            cat.strings = [];
          }
        });
      });
      this.setState({ games });
      this.setState({ activeGameId: this.state.games[0].id });
      this.setState({
        activeGameCategoryId: this.state.games[0].segments[0].id
      });
      this.inheritAllGenericsForAllGames();
      this.forceUpdate();
    });
  }

  inheritAllGenericsForAllGames = () => {
    const games = [...this.state.games];
    // Make sure each game is inheriting generics
    var usedIDs = [];
    this.state.generics.forEach(cat => {
      games.forEach(game => {
        var alreadyExists = false;
        game.segments.forEach(gCat => {
          if (cat.name == gCat.name) {
            gCat.isInherited = true;
            gCat.inheritedID = cat.id;
            alreadyExists = true;
          }
        });
        if (!alreadyExists) {
          var gameCatId = this.findFirstUniqueID(usedIDs);
          usedIDs.push(gameCatId);
          game.segments.push({
            id: gameCatId,
            isInherited: true,
            inheritedID: cat.id,
            name: cat.name,
            strings: []
          });
        }
      });
    });
    this.setState({ games });
  };

  handleSave = () => {
    firebase
      .database()
      .ref("sentences/")
      .set(this.state.sentences);
    firebase
      .database()
      .ref("generics/")
      .set(this.state.generics);
    firebase
      .database()
      .ref("games/")
      .set(this.state.games);
  };

  /**
   *
   * Sentence events
   *
   */

  // Adds a new empty sentence to the list of sentences
  handleAddSentence = () => {
    console.log("Adding new sentence");
    // Create copy of sentences array for local modification
    const sentences = [...this.state.sentences];
    sentences.push({ id: this.findFirstUniqueID(), text: "" });
    // Update state
    this.setState({ sentences });
  };

  // Updates a sentence whenever its input field is changed
  handleSentenceChange = (stringId, event) => {
    const sentences = [...this.state.sentences];
    const index = sentences.findIndex(s => {
      return s.id === stringId;
    });
    sentences[index].text = event.target.value;
    this.setState({ sentences });
    console.log("Edited sentence " + stringId + ": " + sentences[index].text);
  };

  // Deletes a sentence whenever its delete button is pressed
  handleSentenceDelete = stringId => {
    console.log("Delete called on sentence " + stringId);
    const sentences = this.state.sentences.filter(s => s.id !== stringId);
    this.setState({ sentences });
  };

  /**
   *
   * Generics events
   *
   */

  handleAddGenericCategory = () => {
    const generics = [...this.state.generics];
    var newCategoryId = this.findFirstUniqueID();
    var newSegmentId = this.findFirstUniqueID([newCategoryId]);
    generics.push({
      id: newCategoryId,
      name: "New Category",
      strings: [{ id: newSegmentId, text: "" }]
    });
    this.setState({ generics });
    this.setState({ activeGenericCategoryId: newCategoryId });
    // Add this category to every game
    const games = [...this.state.games];
    var usedIDs = [newCategoryId, newSegmentId];
    games.forEach(game => {
      var gameCatId = this.findFirstUniqueID(usedIDs);
      usedIDs.push(gameCatId);
      game.segments.push({
        id: gameCatId,
        isInherited: true,
        inheritedID: newCategoryId,
        name: "New Category",
        strings: []
      });
    });
    this.setState({ games });
    // Return category ID
    return newCategoryId;
  };

  handleEditGenericCategory = (categoryId, event) => {
    const categoryIndex = this.state.generics.findIndex(c => {
      return c.id === categoryId;
    });
    let generics = this.state.generics;
    generics[categoryIndex].name = event.target.value;
    this.setState({ generics });
    // Update name for all games too
    const games = [...this.state.games];
    games.forEach(game => {
      game.segments.find(c => {
        return c.isInherited && c.inheritedID === categoryId;
      }).name = event.target.value;
    });
    this.setState({ games });
  };

  handleDeleteGenericCategory = categoryId => {
    const generics = this.state.generics.filter(c => c.id !== categoryId);
    this.setState({ activeGenericCategoryId: generics[0].id });
    this.setState({ generics });
    // Delete this category from any games, unless they have custom segments (in which case, set uninherited)
    var games = [...this.state.games];
    games.forEach(game => {
      // Filter out matching empty category
      const categories = game.segments.filter(
        c =>
          !c.isInherited || c.inheritedID !== categoryId || c.strings.length > 0
      );
      game.segments = categories;
      game.segments.forEach(c => {
        // Un-inherit any matching category that has custom strings
        if (
          c.isInherited &&
          c.inheritedID === categoryId &&
          c.strings.length > 0
        ) {
          c.isInherited = false;
          c.inheritedID = -1;
        }
      });
    });
    this.setState({ games });
  };

  handleSwitchGenericCategory = newCategoryId => {
    this.setState({ activeGenericCategoryId: newCategoryId });
  };

  handleAddGenericSegment = categoryId => {
    const generics = [...this.state.generics];
    const category = {
      ...generics.find(c => {
        return c.id === categoryId;
      })
    };
    category.strings.push({
      id: this.findFirstUniqueID(),
      text: ""
    });
    this.setState({ generics });
  };

  handleDeleteGenericSegment = (categoryId, segmentId) => {
    const categoryIndex = this.state.generics.findIndex(c => {
      return c.id === categoryId;
    });
    const newStrings = this.state.generics[categoryIndex].strings.filter(
      s => s.id !== segmentId
    );
    let generics = this.state.generics;
    generics[categoryIndex].strings = newStrings;
    this.setState({ generics });
  };

  // Updates a segment from the generic list whenever its input field is changed
  handleEditGenericSegment = (categoryId, stringId, event) => {
    const generics = [...this.state.generics];
    const category = {
      ...generics.find(c => {
        return c.id === categoryId;
      })
    };
    const index = category.strings.findIndex(s => {
      return s.id === stringId;
    });
    category.strings[index].text = event.target.value;
    this.setState({ generics });
    console.log(
      "Edited generic segment " +
        stringId +
        " in " +
        category.name +
        ": " +
        category.strings[index].text
    );
  };

  /**
   *
   * Game-specific events
   *
   */

  handleAddGame = () => {
    const games = [...this.state.games];
    var newGameId = this.findFirstUniqueID();
    var game = {
      id: newGameId,
      name: "New Game",
      segments: []
    };
    // Make sure new game is inheriting generics
    var usedIDs = [newGameId];
    this.state.generics.forEach(cat => {
      var gameCatId = this.findFirstUniqueID(usedIDs);
      usedIDs.push(gameCatId);
      game.segments.push({
        id: gameCatId,
        isInherited: true,
        inheritedID: cat.id,
        name: cat.name,
        strings: []
      });
    });
    games.push(game);
    this.setState({ games });
    this.setState({ activeGameId: newGameId });
    this.setState({ activeGameCategoryId: usedIDs[2] });
    return newGameId;
  };

  handleEditGame = (gameId, event) => {
    const gameIndex = this.state.games.findIndex(g => {
      return g.id === gameId;
    });
    let games = this.state.games;
    games[gameIndex].name = event.target.value;
    this.setState({ games });
  };

  handleDeleteGame = gameId => {
    const games = this.state.games.filter(g => g.id !== gameId);
    this.setState({ activeGameId: games[0].id });
    this.setState({ games });
  };

  handleSwitchGame = newGameId => {
    const game = this.state.games.find(g => {
      return g.id === newGameId;
    });
    this.setState({ activeGameId: newGameId });
    this.setState({ activeGameCategoryId: game.segments[0].id });
  };

  handleAddGameCategory = gameId => {
    const games = [...this.state.games];
    const game = {
      ...games.find(g => {
        return g.id === gameId;
      })
    };
    var newCategoryId = this.findFirstUniqueID();
    var newSegmentId = this.findFirstUniqueID([newCategoryId]);
    game.segments.push({
      id: newCategoryId,
      name: "New Category",
      strings: [{ id: newSegmentId, text: "" }]
    });
    this.setState({ games });
    this.setState({ activeGameCategoryId: newCategoryId });
    return newCategoryId;
  };

  handleEditGameCategory = (gameId, categoryId, event) => {
    const games = [...this.state.games];
    const gameIndex = games.findIndex(g => {
      return g.id === gameId;
    });
    const categoryIndex = games[gameIndex].segments.findIndex(c => {
      return c.id === categoryId;
    });
    games[gameIndex].segments[categoryIndex].name = event.target.value;
    this.setState({ games });
  };

  handleDeleteGameCategory = (gameId, categoryId) => {
    const games = [...this.state.games];
    let game = games.find(g => {
      return g.id === gameId;
    });
    const categories = game.segments.filter(
      c => c.id !== categoryId || c.isInherited
    );
    game.segments = categories;
    this.setState({ activeGameCategoryId: categories[0].id });
    this.setState({ games });
  };

  handleSwitchGameCategory = newCategoryId => {
    this.setState({ activeGameCategoryId: newCategoryId });
  };

  handleAddGameSegment = (gameId, categoryId) => {
    if (gameId === -1 || categoryId === -1) return;
    const games = [...this.state.games];
    const game = {
      ...games.find(g => {
        return g.id === gameId;
      })
    };
    const category = {
      ...game.segments.find(c => {
        return c.id === categoryId;
      })
    };
    category.strings.push({
      id: this.findFirstUniqueID(),
      text: ""
    });
    this.setState({ games });
  };

  handleDeleteGameSegment = (gameId, categoryId, segmentId) => {
    const games = [...this.state.games];
    const game = {
      ...games.find(g => {
        return g.id === gameId;
      })
    };
    const categoryIndex = game.segments.findIndex(c => {
      return c.id === categoryId;
    });
    const newStrings = game.segments[categoryIndex].strings.filter(
      s => s.id !== segmentId
    );
    game.segments[categoryIndex].strings = newStrings;
    this.setState({ games });
  };

  // Updates a segment from the generic list whenever its input field is changed
  handleEditGameSegment = (gameId, categoryId, stringId, event) => {
    const games = [...this.state.games];
    const game = {
      ...games.find(g => {
        return g.id === gameId;
      })
    };
    const category = {
      ...game.segments.find(c => {
        return c.id === categoryId;
      })
    };
    const index = category.strings.findIndex(s => {
      return s.id === stringId;
    });
    category.strings[index].text = event.target.value;
    this.setState({ games });
  };

  /**
   *
   * Render
   *
   */

  render() {
    return (
      // Sentence templates (list of strings with 1 entry field)

      // Generic segments (as above but wrapped in a frame for segment type)

      // Game-specific segments (as above but wrapped in another frame for game type)
      <React.Fragment>
        <button
          onClick={() => this.handleSave()}
          className="btn btn-primary btn-sm m 2"
        >
          Save
        </button>
        <h1>Sentence Templates</h1>
        <EditableStringList
          strings={this.state.sentences}
          onAddButton={this.handleAddSentence}
          onStringChange={this.handleSentenceChange}
          onStringDelete={this.handleSentenceDelete}
        />
        <h1>Generic Segments</h1>
        <SegmentList
          activeId={this.state.activeGenericCategoryId}
          categories={this.state.generics}
          onAddCategory={this.handleAddGenericCategory}
          onEditCategory={this.handleEditGenericCategory}
          onDeleteCategory={this.handleDeleteGenericCategory}
          onSwitchCategory={this.handleSwitchGenericCategory}
          onAddSegment={this.handleAddGenericSegment}
          onEditSegment={this.handleEditGenericSegment}
          onDeleteSegment={this.handleDeleteGenericSegment}
        />
        <h1>Game-Specific Segments</h1>
        <GameList
          activeGameId={this.state.activeGameId}
          activeCategoryId={this.state.activeGameCategoryId}
          games={this.state.games}
          generics={this.state.generics}
          onAddGame={this.handleAddGame}
          onEditGame={this.handleEditGame}
          onDeleteGame={this.handleDeleteGame}
          onSwitchGame={this.handleSwitchGame}
          onAddCategory={this.handleAddGameCategory}
          onEditCategory={this.handleEditGameCategory}
          onDeleteCategory={this.handleDeleteGameCategory}
          onSwitchCategory={this.handleSwitchGameCategory}
          onAddSegment={this.handleAddGameSegment}
          onEditSegment={this.handleEditGameSegment}
          onDeleteSegment={this.handleDeleteGameSegment}
        />
      </React.Fragment>
    );
  }

  findFirstUniqueID = reservedIDs => {
    // Create a list of objects to iterate over
    var objects = [];
    if (reservedIDs != null) {
      reservedIDs.forEach(s => {
        objects.push(s);
      });
    }
    this.state.sentences.forEach(s => {
      objects.push(s.id);
    });
    this.state.generics.forEach(g => {
      objects.push(g.id);
      g.strings.forEach(t => {
        objects.push(t.id);
      });
    });
    this.state.games.forEach(g => {
      objects.push(g.id);
      g.segments.forEach(s => {
        objects.push(s.id);
        s.strings.forEach(t => {
          objects.push(t.id);
        });
      });
    });

    // Find first free ID
    var id = 0;
    while (true) {
      var startId = id;
      for (var i = 0; i < objects.length; ++i) {
        if (objects[i] === id) {
          id++;
        }
      }
      if (startId === id) {
        return id;
      }
    }
  };

  /*
  // Create a list of relevant categories from the generics and active game
  CreateCategoryList(generics, game) {
    var categoryList = [];
    generics.map(g => {
      categoryList.push(g.name);
    });
    // Game will be null when creating just the generics list
    if (game !== null) {
      game.map(g => {
        categoryList.push(g.name);
      });
    }
    return categoryList;
  }*/
}

export default GameChallengeApp;
