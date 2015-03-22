import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Component.extend({
  classNames: ['ember-modal-overlay-container'],

  translucent: false,

  containerElementId: 'modal-overlays',
  containerElement: computed('containerElementId', function() {
    return document.getElementById(this.get('containerElementId'));
  }),

  render: function(buffer) {
    var containerElement = this.get('containerElement');
    this._morph = buffer.dom.appendMorph(containerElement);
    this._super.apply(this, arguments);
  },

  willClearRender: function() {
    var morph = this._morph;
    Ember.run.schedule('render', morph, morph.destroy);
    this._super.apply(this);
  },

  actions: {
    close: function() {
      this.sendAction('close');
    }
  }
});
