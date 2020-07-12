(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{35:function(e,t,n){e.exports=n(55)},55:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(25),s=n.n(r),c=(n(40),n(12)),o=n(8),d=n(13),u=n(14),g=n(16),l=n(15),m=n(21),f=n(26),h=n(20),v=n(31),S=function(e){Object(g.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderExistingString",value:function(e,t,n){return i.a.createElement("div",{key:e.id},i.a.createElement(v.a,{className:"mb-3"},i.a.createElement(h.a.Control,{defaultValue:e.text,"aria-label":"String","aria-describedby":"basic-addon2",onChange:function(n){return t(e.id,n)}}),i.a.createElement(v.a.Append,null,i.a.createElement(f.a,{variant:"outline-secondary",onClick:function(t){return n(e.id)}},"X"))))}},{key:"renderStrings",value:function(e,t,n){var a=this;if(null!=e)return i.a.createElement(i.a.Fragment,null,e.map((function(e){return a.renderExistingString(e,t,n)})))}},{key:"render",value:function(){var e=this.props,t=e.strings,n=e.onAddButton,a=e.onStringChange,r=e.onStringDelete;return i.a.createElement(i.a.Fragment,null,this.renderStrings(t,a,r),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return n()},className:"btn btn-danger btn-sm m 2"},"Add"))}}]),n}(a.Component),b=n(17),y=n(27),C=function(e){Object(g.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a.handleDeleteCategory=function(e,t,n){1!==t.length&&(t.find((function(t){return t.id===e})).isInherited||n(e))},a}return Object(u.a)(n,[{key:"renderDropdown",value:function(e,t,n,a,r,s){var c=i.a.createElement(h.a.Control,{value:t,"aria-label":"String","aria-describedby":"basic-addon2",onChange:function(e){return a(n,e)}});return s&&(c=i.a.createElement(h.a.Control,{readOnly:!0,value:"(Generic) "+t,"aria-label":"String","aria-describedby":"basic-addon2"})),i.a.createElement(y.a,{id:"dropdown-basic-button",title:t},c,e.map((function(e){return i.a.createElement(b.a.Item,{href:"#/action-1",key:e.id,onClick:function(){return r(e.id)}},e.isInherited?"(Generic) "+e.name:e.name)})))}},{key:"render",value:function(){var e=this.props,t=e.activeId,n=e.categories,a=e.onAddSegment,r=e.onEditSegment,s=e.onDeleteSegment,c=e.onAddCategory,o=e.onEditCategory,d=e.onDeleteCategory,u=e.onSwitchCategory,g=n.find((function(e){return e.id===t})),l=-1,m="<Missing>",f=[],h=!0;return null!=g&&(l=g.id,m=g.name,f=g.strings,h=g.isInherited),i.a.createElement(i.a.Fragment,null,this.renderDropdown(n,m,l,o,u,h),i.a.createElement("button",{onClick:function(){return c()},className:"btn btn-primary btn-sm m 2"},"Add Category"),i.a.createElement("button",{onClick:function(){return d(t,n)},className:"btn btn-danger btn-sm m 2"},"Delete Category"),i.a.createElement(S,{strings:f,onAddButton:function(){return a(l)},onStringChange:function(e,t){return r(l,e,t)},onStringDelete:function(e){return s(l,e)}}))}}]),n}(a.Component),G=function(e){Object(g.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"renderDropdown",value:function(e,t,n,a,r){return i.a.createElement(y.a,{id:"dropdown-basic-button",title:t},i.a.createElement(h.a.Control,{value:t,"aria-label":"String","aria-describedby":"basic-addon2",onChange:function(e){return a(n,e)}}),e.map((function(e){return i.a.createElement(b.a.Item,{href:"#/action-1",key:e.id,onClick:function(){return r(e.id)}},e.name)})))}},{key:"render",value:function(){var e=this.props,t=e.activeGameId,n=e.activeCategoryId,a=e.games,r=e.onAddSegment,s=e.onEditSegment,c=e.onDeleteSegment,o=e.onAddCategory,d=e.onEditCategory,u=e.onDeleteCategory,g=e.onSwitchCategory,l=e.onAddGame,m=e.onEditGame,f=e.onDeleteGame,h=e.onSwitchGame,v=a.find((function(e){return e.id===t})),S=-1,b="<Missing>",y=[];return null!=v&&(S=v.id,b=v.name,y=v.segments),i.a.createElement(i.a.Fragment,null,this.renderDropdown(a,b,S,m,h),i.a.createElement("button",{onClick:function(){return l()},className:"btn btn-primary btn-sm m 2"},"Add Game"),i.a.createElement("button",{onClick:function(){return f(S)},className:"btn btn-danger btn-sm m 2"},"Delete Game"),i.a.createElement(C,{activeId:n,categories:y,onAddCategory:function(e){return o(S,e)},onEditCategory:function(e,t){return d(S,e,t)},onDeleteCategory:function(e){return u(S,e)},onSwitchCategory:function(e){return g(e)},onAddSegment:function(e){return r(S,e)},onEditSegment:function(e,t,n){return s(S,e,t,n)},onDeleteSegment:function(e,t){return c(S,e,t)},key:S}))}}]),n}(a.Component),E=function(e){Object(g.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={activeGenericCategoryId:0,activeGameId:0,activeGameCategoryId:0,sentences:[],generics:[],games:[]},e.inheritAllGenericsForAllGames=function(){var t=Object(o.a)(e.state.games),n=[];e.state.generics.forEach((function(a){t.forEach((function(t){var i=!1;if(t.segments.forEach((function(e){a.name==e.name&&(e.isInherited=!0,e.inheritedID=a.id,i=!0)})),!i){var r=e.findFirstUniqueID(n);n.push(r),t.segments.push({id:r,isInherited:!0,inheritedID:a.id,name:a.name,strings:[]})}}))})),e.setState({games:t})},e.handleSave=function(){m.database().ref("sentences/").set(e.state.sentences),m.database().ref("generics/").set(e.state.generics),m.database().ref("games/").set(e.state.games)},e.handleAddSentence=function(){console.log("Adding new sentence");var t=Object(o.a)(e.state.sentences);t.push({id:e.findFirstUniqueID(),text:""}),e.setState({sentences:t})},e.handleSentenceChange=function(t,n){var a=Object(o.a)(e.state.sentences),i=a.findIndex((function(e){return e.id===t}));a[i].text=n.target.value,e.setState({sentences:a}),console.log("Edited sentence "+t+": "+a[i].text)},e.handleSentenceDelete=function(t){console.log("Delete called on sentence "+t);var n=e.state.sentences.filter((function(e){return e.id!==t}));e.setState({sentences:n})},e.handleAddGenericCategory=function(){var t=Object(o.a)(e.state.generics),n=e.findFirstUniqueID(),a=e.findFirstUniqueID([n]);t.push({id:n,name:"New Category",strings:[{id:a,text:""}]}),e.setState({generics:t}),e.setState({activeGenericCategoryId:n});var i=Object(o.a)(e.state.games),r=[n,a];return i.forEach((function(t){var a=e.findFirstUniqueID(r);r.push(a),t.segments.push({id:a,isInherited:!0,inheritedID:n,name:"New Category",strings:[]})})),e.setState({games:i}),n},e.handleEditGenericCategory=function(t,n){var a=e.state.generics.findIndex((function(e){return e.id===t})),i=e.state.generics;i[a].name=n.target.value,e.setState({generics:i});var r=Object(o.a)(e.state.games);r.forEach((function(e){e.segments.find((function(e){return e.isInherited&&e.inheritedID===t})).name=n.target.value})),e.setState({games:r})},e.handleDeleteGenericCategory=function(t){var n=e.state.generics.filter((function(e){return e.id!==t}));e.setState({activeGenericCategoryId:n[0].id}),e.setState({generics:n});var a=Object(o.a)(e.state.games);a.forEach((function(e){var n=e.segments.filter((function(e){return!e.isInherited||e.inheritedID!==t||e.strings.length>0}));e.segments=n,e.segments.forEach((function(e){e.isInherited&&e.inheritedID===t&&e.strings.length>0&&(e.isInherited=!1,e.inheritedID=-1)}))})),e.setState({games:a})},e.handleSwitchGenericCategory=function(t){e.setState({activeGenericCategoryId:t})},e.handleAddGenericSegment=function(t){var n=Object(o.a)(e.state.generics);Object(c.a)({},n.find((function(e){return e.id===t}))).strings.push({id:e.findFirstUniqueID(),text:""}),e.setState({generics:n})},e.handleDeleteGenericSegment=function(t,n){var a=e.state.generics.findIndex((function(e){return e.id===t})),i=e.state.generics[a].strings.filter((function(e){return e.id!==n})),r=e.state.generics;r[a].strings=i,e.setState({generics:r})},e.handleEditGenericSegment=function(t,n,a){var i=Object(o.a)(e.state.generics),r=Object(c.a)({},i.find((function(e){return e.id===t}))),s=r.strings.findIndex((function(e){return e.id===n}));r.strings[s].text=a.target.value,e.setState({generics:i}),console.log("Edited generic segment "+n+" in "+r.name+": "+r.strings[s].text)},e.handleAddGame=function(){var t=Object(o.a)(e.state.games),n=e.findFirstUniqueID(),a={id:n,name:"New Game",segments:[]},i=[n];return e.state.generics.forEach((function(t){var n=e.findFirstUniqueID(i);i.push(n),a.segments.push({id:n,isInherited:!0,inheritedID:t.id,name:t.name,strings:[]})})),t.push(a),e.setState({games:t}),e.setState({activeGameId:n}),e.setState({activeGameCategoryId:i[2]}),n},e.handleEditGame=function(t,n){var a=e.state.games.findIndex((function(e){return e.id===t})),i=e.state.games;i[a].name=n.target.value,e.setState({games:i})},e.handleDeleteGame=function(t){var n=e.state.games.filter((function(e){return e.id!==t}));e.setState({activeGameId:n[0].id}),e.setState({games:n})},e.handleSwitchGame=function(t){var n=e.state.games.find((function(e){return e.id===t}));e.setState({activeGameId:t}),e.setState({activeGameCategoryId:n.segments[0].id})},e.handleAddGameCategory=function(t){var n=Object(o.a)(e.state.games),a=Object(c.a)({},n.find((function(e){return e.id===t}))),i=e.findFirstUniqueID(),r=e.findFirstUniqueID([i]);return a.segments.push({id:i,name:"New Category",strings:[{id:r,text:""}]}),e.setState({games:n}),e.setState({activeGameCategoryId:i}),i},e.handleEditGameCategory=function(t,n,a){var i=Object(o.a)(e.state.games),r=i.findIndex((function(e){return e.id===t})),s=i[r].segments.findIndex((function(e){return e.id===n}));i[r].segments[s].name=a.target.value,e.setState({games:i})},e.handleDeleteGameCategory=function(t,n){var a=Object(o.a)(e.state.games),i=a.find((function(e){return e.id===t})),r=i.segments.filter((function(e){return e.id!==n||e.isInherited}));i.segments=r,e.setState({activeGameCategoryId:r[0].id}),e.setState({games:a})},e.handleSwitchGameCategory=function(t){e.setState({activeGameCategoryId:t})},e.handleAddGameSegment=function(t,n){if(-1!==t&&-1!==n){var a=Object(o.a)(e.state.games),i=Object(c.a)({},a.find((function(e){return e.id===t})));Object(c.a)({},i.segments.find((function(e){return e.id===n}))).strings.push({id:e.findFirstUniqueID(),text:""}),e.setState({games:a})}},e.handleDeleteGameSegment=function(t,n,a){var i=Object(o.a)(e.state.games),r=Object(c.a)({},i.find((function(e){return e.id===t}))),s=r.segments.findIndex((function(e){return e.id===n})),d=r.segments[s].strings.filter((function(e){return e.id!==a}));r.segments[s].strings=d,e.setState({games:i})},e.handleEditGameSegment=function(t,n,a,i){var r=Object(o.a)(e.state.games),s=Object(c.a)({},r.find((function(e){return e.id===t}))),d=Object(c.a)({},s.segments.find((function(e){return e.id===n}))),u=d.strings.findIndex((function(e){return e.id===a}));d.strings[u].text=i.target.value,e.setState({games:r})},e.findFirstUniqueID=function(t){var n=[];null!=t&&t.forEach((function(e){n.push(e)})),e.state.sentences.forEach((function(e){n.push(e.id)})),e.state.generics.forEach((function(e){n.push(e.id),e.strings.forEach((function(e){n.push(e.id)}))})),e.state.games.forEach((function(e){n.push(e.id),e.segments.forEach((function(e){n.push(e.id),e.strings.forEach((function(e){n.push(e.id)}))}))}));for(var a=0;;){for(var i=a,r=0;r<n.length;++r)n[r]===a&&a++;if(i===a)return a}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.initializeApp({apiKey:"AIzaSyBOzIDUIUFpvYf-pZZFY7I9Ucb4nXEKyC4",authDomain:"game-challenge-bot.firebaseapp.com",databaseURL:"https://game-challenge-bot.firebaseio.com",projectId:"game-challenge-bot",storageBucket:"game-challenge-bot.appspot.com",messagingSenderId:"1047706421956",appId:"1:1047706421956:web:26b78b0b0b9630ba6a1791",measurementId:"G-LX0HVNR863"});var t=m.database().ref().child("/");t.child("sentences").once("value").then((function(t){e.setState({sentences:t.val()}),e.forceUpdate()})),t.child("generics").once("value").then((function(t){var n=t.val();n.forEach((function(e){null==e.strings&&(e.strings=[])})),e.setState({generics:n}),e.setState({activeGenericCategoryId:e.state.generics[0].id}),e.inheritAllGenericsForAllGames(),e.forceUpdate()})),t.child("games").once("value").then((function(t){var n=t.val();n.forEach((function(e){null==e.segments&&(e.segments=[]),e.segments.forEach((function(e){null==e.strings&&(e.strings=[])}))})),e.setState({games:n}),e.setState({activeGameId:e.state.games[0].id}),e.setState({activeGameCategoryId:e.state.games[0].segments[0].id}),e.inheritAllGenericsForAllGames(),e.forceUpdate()}))}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{onClick:function(){return e.handleSave()},className:"btn btn-primary btn-sm m 2"},"Save"),i.a.createElement("h1",null,"Sentence Templates"),i.a.createElement(S,{strings:this.state.sentences,onAddButton:this.handleAddSentence,onStringChange:this.handleSentenceChange,onStringDelete:this.handleSentenceDelete}),i.a.createElement("h1",null,"Generic Segments"),i.a.createElement(C,{activeId:this.state.activeGenericCategoryId,categories:this.state.generics,onAddCategory:this.handleAddGenericCategory,onEditCategory:this.handleEditGenericCategory,onDeleteCategory:this.handleDeleteGenericCategory,onSwitchCategory:this.handleSwitchGenericCategory,onAddSegment:this.handleAddGenericSegment,onEditSegment:this.handleEditGenericSegment,onDeleteSegment:this.handleDeleteGenericSegment}),i.a.createElement("h1",null,"Game-Specific Segments"),i.a.createElement(G,{activeGameId:this.state.activeGameId,activeCategoryId:this.state.activeGameCategoryId,games:this.state.games,generics:this.state.generics,onAddGame:this.handleAddGame,onEditGame:this.handleEditGame,onDeleteGame:this.handleDeleteGame,onSwitchGame:this.handleSwitchGame,onAddCategory:this.handleAddGameCategory,onEditCategory:this.handleEditGameCategory,onDeleteCategory:this.handleDeleteGameCategory,onSwitchCategory:this.handleSwitchGameCategory,onAddSegment:this.handleAddGameSegment,onEditSegment:this.handleEditGameSegment,onDeleteSegment:this.handleDeleteGameSegment}))}}]),n}(a.Component);s.a.render(i.a.createElement(E,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.13cd01d7.chunk.js.map