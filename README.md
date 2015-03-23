# Ember Modal Dialog

The ember-modal-dialog addon provides components to implement modal dialogs throughout an Ember application using a simple, consistent pattern.

### Example Usage

**Template**

```handlebars
<button {{action "toggleModal"}}>Toggle Modal</button>

{{#if isShowingModal}}
  {{#modal-dialog alignment='center'
                  translucentOverlay=true}}
    Oh hai there!
  {{/modal-dialog}}
{{/if}}
```

**Controller**

```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  actions: {
    toggleModal: function(){
      this.toggleProperty('isShowingModal');
    }
  }
});
```

## Wormholes

While modal dialogs are...

## Styles

Ember Modal Dialog provides default styles...

## Dependencies

TODO: Note requires Ember >= 1.11.0-beta.5

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
