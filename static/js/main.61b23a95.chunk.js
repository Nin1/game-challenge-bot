(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{35:function(e,t,n){e.exports=n(55)},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(25),s=n.n(i),c=(n(40),n(12)),o=n(8),d=n(13),g=n(14),u=n(16),l=n(15),m=n(21),f=n(26),h=n(20),v=n(31),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"renderExistingString",value:function(e,t,n){return r.a.createElement("div",{key:e.id},r.a.createElement(v.a,{className:"mb-3"},r.a.createElement(h.a.Control,{defaultValue:e.text,"aria-label":"String","aria-describedby":"basic-addon2",onChange:function(n){return t(e.id,n)}}),r.a.createElement(v.a.Append,null,r.a.createElement(f.a,{variant:"outline-secondary",onClick:function(t){return n(e.id)}},"X"))))}},{key:"renderStrings",value:function(e,t,n){var a=this;if(null!=e)return r.a.createElement(r.a.Fragment,null,e.map((function(e){return a.renderExistingString(e,t,n)})))}},{key:"render",value:function(){var e=this.props,t=e.strings,n=e.onAddButton,a=e.onStringChange,i=e.onStringDelete;return r.a.createElement(r.a.Fragment,null,this.renderStrings(t,a,i),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return n()},className:"btn btn-danger btn-sm m 2"},"Add"))}}]),n}(a.Component),S=n(17),y=n(27),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a.handleDeleteCategory=function(e,t,n){1!==t.length&&(t.find((function(t){return t.id===e})).isInherited||n(e))},a}return Object(g.a)(n,[{key:"renderDropdown",value:function(e,t,n,a,i,s){var c=r.a.createElement(h.a.Control,{value:t,"aria-label":"String","aria-describedby":"basic-addon2",onChange:function(e){return a(n,e)}});return s&&(c=r.a.createElement(h.a.Control,{readOnly:!0,value:"(Generic) "+t,"aria-label":"String","aria-describedby":"basic-addon2"})),r.a.createElement(y.a,{id:"dropdown-basic-button",title:t},c,e.map((function(e){return r.a.createElement(S.a.Item,{href:"#/action-1",key:e.id,onClick:function(){return i(e.id)}},e.isInherited?"(Generic) "+e.name:e.name)})))}},{key:"render",value:function(){var e=this.props,t=e.activeId,n=e.categories,a=e.onAddSegment,i=e.onEditSegment,s=e.onDeleteSegment,c=e.onAddCategory,o=e.onEditCategory,d=e.onDeleteCategory,g=e.onSwitchCategory,u=n.find((function(e){return e.id===t})),l=-1,m="<Missing>",f=[],h=!0;return null!=u&&(l=u.id,m=u.name,f=u.strings,h=u.isInherited),r.a.createElement(r.a.Fragment,null,this.renderDropdown(n,m,l,o,g,h),r.a.createElement("button",{onClick:function(){return c()},className:"btn btn-primary btn-sm m 2"},"Add Category"),r.a.createElement("button",{onClick:function(){return d(t,n)},className:"btn btn-danger btn-sm m 2"},"Delete Category"),r.a.createElement(b,{strings:f,onAddButton:function(){return a(l)},onStringChange:function(e,t){return i(l,e,t)},onStringDelete:function(e){return s(l,e)}}))}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a}return Object(g.a)(n,[{key:"renderDropdown",value:function(e,t,n,a,i){return r.a.createElement(y.a,{id:"dropdown-basic-button",title:t},r.a.createElement(h.a.Control,{value:t,"aria-label":"String","aria-describedby":"basic-addon2",onChange:function(e){return a(n,e)}}),e.map((function(e){return r.a.createElement(S.a.Item,{href:"#/action-1",key:e.id,onClick:function(){return i(e.id)}},e.name)})))}},{key:"render",value:function(){var e=this.props,t=e.activeGameId,n=e.activeCategoryId,a=e.games,i=e.onAddSegment,s=e.onEditSegment,c=e.onDeleteSegment,o=e.onAddCategory,d=e.onEditCategory,g=e.onDeleteCategory,u=e.onSwitchCategory,l=e.onAddGame,m=e.onEditGame,f=e.onDeleteGame,h=e.onSwitchGame,v=a.find((function(e){return e.id===t})),b=-1,S="<Missing>",y=[];return null!=v&&(b=v.id,S=v.name,y=v.segments),r.a.createElement(r.a.Fragment,null,this.renderDropdown(a,S,b,m,h),r.a.createElement("button",{onClick:function(){return l()},className:"btn btn-primary btn-sm m 2"},"Add Game"),r.a.createElement("button",{onClick:function(){return f(b)},className:"btn btn-danger btn-sm m 2"},"Delete Game"),r.a.createElement(p,{activeId:n,categories:y,onAddCategory:function(e){return o(b,e)},onEditCategory:function(e,t){return d(b,e,t)},onDeleteCategory:function(e){return g(b,e)},onSwitchCategory:function(e){return u(e)},onAddSegment:function(e){return i(b,e)},onEditSegment:function(e,t,n){return s(b,e,t,n)},onDeleteSegment:function(e,t){return c(b,e,t)},key:b}))}}]),n}(a.Component);function E(){var e=Math.floor(3*Math.random()),t=Math.floor(59*Math.random()),n=Math.floor(59*Math.random()),a="";return e>0&&(a+=e+":"),t<10&&(a+="0"),a+=t+":",n<10&&(a+="0"),a+=n}function G(e,t){for(var n=(" "+e).slice(1);n.includes("[");){var a=n.indexOf("[")+1,r=n.indexOf("]"),i=n.substring(a,r);if(i.includes("/")){var s=i.split("/");i=s[Math.floor(Math.random()*s.length)]}var c="";if("TIME"===i)c=E();else{if(!(i in t))return"-1";for(var d=Object(o.a)(t[i]),g=!1;!g;){if(0==d.length)return"-1";var u=Math.floor(Math.random()*d.length);"-1"==(c=G(d[u].text,t))?d.splice(u,1):g=!0}}n=n.substring(0,a-1)+c+n.substring(r+1)}return n}function I(e,t,n){for(var a=Object(o.a)(e);a.length>0;){for(var r=Math.floor(Math.random()*a.length),i=a[r].text,s=n[Math.floor(Math.random()*n.length)],c={},d=0;d<t.length;++d)if(t[d].name in c||(c[t[d].name]=[]),"strings"in t[d])for(var g=0;g<t[d].strings.length;++g)c[t[d].name].push(t[d].strings[g]);if("segments"in s)for(d=0;d<s.segments.length;++d)if(s.segments[d].name in c||(c[s.segments[d].name]=[]),"strings"in s.segments[d])for(g=0;g<s.segments[d].strings.length;++g)c[s.segments[d].name].push(s.segments[d].strings[g]);c.game=[{text:s.name}];var u=G(i,c);if("-1"!=u)return u;a.splice(r,1)}return"Error generating sentence"}var D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={activeGenericCategoryId:0,activeGameId:0,activeGameCategoryId:0,sentences:[],generics:[],games:[],generatedSentences:[]},e.inheritAllGenericsForAllGames=function(){var t=Object(o.a)(e.state.games),n=[];e.state.generics.forEach((function(a){t.forEach((function(t){var r=!1;if(t.segments.forEach((function(e){a.name==e.name&&(e.isInherited=!0,e.inheritedID=a.id,r=!0)})),!r){var i=e.findFirstUniqueID(n);n.push(i),t.segments.push({id:i,isInherited:!0,inheritedID:a.id,name:a.name,strings:[]})}}))})),e.setState({games:t})},e.handleSave=function(){m.database().ref("sentences/").set(e.state.sentences),m.database().ref("generics/").set(e.state.generics),m.database().ref("games/").set(e.state.games)},e.handleGenerate=function(){for(var t=[],n=0;n<5;++n)t.push({id:n,text:I(e.state.sentences,e.state.generics,e.state.games)});console.log(t),e.setState({generatedSentences:t})},e.handleAddSentence=function(){console.log("Adding new sentence");var t=Object(o.a)(e.state.sentences);t.push({id:e.findFirstUniqueID(),text:""}),e.setState({sentences:t})},e.handleSentenceChange=function(t,n){var a=Object(o.a)(e.state.sentences),r=a.findIndex((function(e){return e.id===t}));a[r].text=n.target.value,e.setState({sentences:a}),console.log("Edited sentence "+t+": "+a[r].text)},e.handleSentenceDelete=function(t){console.log("Delete called on sentence "+t);var n=e.state.sentences.filter((function(e){return e.id!==t}));e.setState({sentences:n})},e.handleAddGenericCategory=function(){var t=Object(o.a)(e.state.generics),n=e.findFirstUniqueID(),a=e.findFirstUniqueID([n]);t.push({id:n,name:"New Category",strings:[{id:a,text:""}]}),e.setState({generics:t}),e.setState({activeGenericCategoryId:n});var r=Object(o.a)(e.state.games),i=[n,a];return r.forEach((function(t){var a=e.findFirstUniqueID(i);i.push(a),t.segments.push({id:a,isInherited:!0,inheritedID:n,name:"New Category",strings:[]})})),e.setState({games:r}),n},e.handleEditGenericCategory=function(t,n){var a=e.state.generics.findIndex((function(e){return e.id===t})),r=e.state.generics;r[a].name=n.target.value,e.setState({generics:r});var i=Object(o.a)(e.state.games);i.forEach((function(e){e.segments.find((function(e){return e.isInherited&&e.inheritedID===t})).name=n.target.value})),e.setState({games:i})},e.handleDeleteGenericCategory=function(t){var n=e.state.generics.filter((function(e){return e.id!==t}));e.setState({activeGenericCategoryId:n[0].id}),e.setState({generics:n});var a=Object(o.a)(e.state.games);a.forEach((function(e){var n=e.segments.filter((function(e){return!e.isInherited||e.inheritedID!==t||e.strings.length>0}));e.segments=n,e.segments.forEach((function(e){e.isInherited&&e.inheritedID===t&&e.strings.length>0&&(e.isInherited=!1,e.inheritedID=-1)}))})),e.setState({games:a})},e.handleSwitchGenericCategory=function(t){e.setState({activeGenericCategoryId:t})},e.handleAddGenericSegment=function(t){var n=Object(o.a)(e.state.generics);Object(c.a)({},n.find((function(e){return e.id===t}))).strings.push({id:e.findFirstUniqueID(),text:""}),e.setState({generics:n})},e.handleDeleteGenericSegment=function(t,n){var a=e.state.generics.findIndex((function(e){return e.id===t})),r=e.state.generics[a].strings.filter((function(e){return e.id!==n})),i=e.state.generics;i[a].strings=r,e.setState({generics:i})},e.handleEditGenericSegment=function(t,n,a){var r=Object(o.a)(e.state.generics),i=Object(c.a)({},r.find((function(e){return e.id===t}))),s=i.strings.findIndex((function(e){return e.id===n}));i.strings[s].text=a.target.value,e.setState({generics:r}),console.log("Edited generic segment "+n+" in "+i.name+": "+i.strings[s].text)},e.handleAddGame=function(){var t=Object(o.a)(e.state.games),n=e.findFirstUniqueID(),a={id:n,name:"New Game",segments:[]},r=[n];return e.state.generics.forEach((function(t){var n=e.findFirstUniqueID(r);r.push(n),a.segments.push({id:n,isInherited:!0,inheritedID:t.id,name:t.name,strings:[]})})),t.push(a),e.setState({games:t}),e.setState({activeGameId:n}),e.setState({activeGameCategoryId:r[2]}),n},e.handleEditGame=function(t,n){var a=e.state.games.findIndex((function(e){return e.id===t})),r=e.state.games;r[a].name=n.target.value,e.setState({games:r})},e.handleDeleteGame=function(t){var n=e.state.games.filter((function(e){return e.id!==t}));e.setState({activeGameId:n[0].id}),e.setState({games:n})},e.handleSwitchGame=function(t){var n=e.state.games.find((function(e){return e.id===t}));e.setState({activeGameId:t}),e.setState({activeGameCategoryId:n.segments[0].id})},e.handleAddGameCategory=function(t){var n=Object(o.a)(e.state.games),a=Object(c.a)({},n.find((function(e){return e.id===t}))),r=e.findFirstUniqueID(),i=e.findFirstUniqueID([r]);return a.segments.push({id:r,name:"New Category",strings:[{id:i,text:""}]}),e.setState({games:n}),e.setState({activeGameCategoryId:r}),r},e.handleEditGameCategory=function(t,n,a){var r=Object(o.a)(e.state.games),i=r.findIndex((function(e){return e.id===t})),s=r[i].segments.findIndex((function(e){return e.id===n}));r[i].segments[s].name=a.target.value,e.setState({games:r})},e.handleDeleteGameCategory=function(t,n){var a=Object(o.a)(e.state.games),r=a.find((function(e){return e.id===t})),i=r.segments.filter((function(e){return e.id!==n||e.isInherited}));r.segments=i,e.setState({activeGameCategoryId:i[0].id}),e.setState({games:a})},e.handleSwitchGameCategory=function(t){e.setState({activeGameCategoryId:t})},e.handleAddGameSegment=function(t,n){if(-1!==t&&-1!==n){var a=Object(o.a)(e.state.games),r=Object(c.a)({},a.find((function(e){return e.id===t})));Object(c.a)({},r.segments.find((function(e){return e.id===n}))).strings.push({id:e.findFirstUniqueID(),text:""}),e.setState({games:a})}},e.handleDeleteGameSegment=function(t,n,a){var r=Object(o.a)(e.state.games),i=Object(c.a)({},r.find((function(e){return e.id===t}))),s=i.segments.findIndex((function(e){return e.id===n})),d=i.segments[s].strings.filter((function(e){return e.id!==a}));i.segments[s].strings=d,e.setState({games:r})},e.handleEditGameSegment=function(t,n,a,r){var i=Object(o.a)(e.state.games),s=Object(c.a)({},i.find((function(e){return e.id===t}))),d=Object(c.a)({},s.segments.find((function(e){return e.id===n}))),g=d.strings.findIndex((function(e){return e.id===a}));d.strings[g].text=r.target.value,e.setState({games:i})},e.findFirstUniqueID=function(t){var n=[];null!=t&&t.forEach((function(e){n.push(e)})),e.state.sentences.forEach((function(e){n.push(e.id)})),e.state.generics.forEach((function(e){n.push(e.id),e.strings.forEach((function(e){n.push(e.id)}))})),e.state.games.forEach((function(e){n.push(e.id),e.segments.forEach((function(e){n.push(e.id),e.strings.forEach((function(e){n.push(e.id)}))}))}));for(var a=0;;){for(var r=a,i=0;i<n.length;++i)n[i]===a&&a++;if(r===a)return a}},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.initializeApp({apiKey:"AIzaSyBOzIDUIUFpvYf-pZZFY7I9Ucb4nXEKyC4",authDomain:"game-challenge-bot.firebaseapp.com",databaseURL:"https://game-challenge-bot.firebaseio.com",projectId:"game-challenge-bot",storageBucket:"game-challenge-bot.appspot.com",messagingSenderId:"1047706421956",appId:"1:1047706421956:web:26b78b0b0b9630ba6a1791",measurementId:"G-LX0HVNR863"});var t=m.database().ref().child("/");t.child("sentences").once("value").then((function(t){e.setState({sentences:t.val()}),e.forceUpdate()})),t.child("generics").once("value").then((function(t){var n=t.val();n.forEach((function(e){null==e.strings&&(e.strings=[])})),e.setState({generics:n}),e.setState({activeGenericCategoryId:e.state.generics[0].id}),e.inheritAllGenericsForAllGames(),e.forceUpdate()})),t.child("games").once("value").then((function(t){var n=t.val();n.forEach((function(e){null==e.segments&&(e.segments=[]),e.segments.forEach((function(e){null==e.strings&&(e.strings=[])}))})),e.setState({games:n}),e.setState({activeGameId:e.state.games[0].id}),e.setState({activeGameCategoryId:e.state.games[0].segments[0].id}),e.inheritAllGenericsForAllGames(),e.forceUpdate()}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.handleSave()},className:"btn btn-primary btn-sm m 2"},"Save"),r.a.createElement("button",{onClick:function(){return e.handleGenerate()},className:"btn btn-primary btn-sm m 2"},"Generate sentences"),this.state.generatedSentences.map((function(e){return r.a.createElement("p",{key:e.id},e.text)})),r.a.createElement("h1",null,"Sentence Templates"),r.a.createElement(b,{strings:this.state.sentences,onAddButton:this.handleAddSentence,onStringChange:this.handleSentenceChange,onStringDelete:this.handleSentenceDelete}),r.a.createElement("h1",null,"Generic Segments"),r.a.createElement(p,{activeId:this.state.activeGenericCategoryId,categories:this.state.generics,onAddCategory:this.handleAddGenericCategory,onEditCategory:this.handleEditGenericCategory,onDeleteCategory:this.handleDeleteGenericCategory,onSwitchCategory:this.handleSwitchGenericCategory,onAddSegment:this.handleAddGenericSegment,onEditSegment:this.handleEditGenericSegment,onDeleteSegment:this.handleDeleteGenericSegment}),r.a.createElement("h1",null,"Game-Specific Segments"),r.a.createElement(C,{activeGameId:this.state.activeGameId,activeCategoryId:this.state.activeGameCategoryId,games:this.state.games,generics:this.state.generics,onAddGame:this.handleAddGame,onEditGame:this.handleEditGame,onDeleteGame:this.handleDeleteGame,onSwitchGame:this.handleSwitchGame,onAddCategory:this.handleAddGameCategory,onEditCategory:this.handleEditGameCategory,onDeleteCategory:this.handleDeleteGameCategory,onSwitchCategory:this.handleSwitchGameCategory,onAddSegment:this.handleAddGameSegment,onEditSegment:this.handleEditGameSegment,onDeleteSegment:this.handleDeleteGameSegment}))}}]),n}(a.Component);s.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.61b23a95.chunk.js.map