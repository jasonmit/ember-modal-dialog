import Ember from 'ember';
import template from '../templates/components/modal-dialog';

var computed = Ember.computed;

export default Ember.Component.extend({
  tagName: '', // positioned-container is the container you're looking for
  layout: template,
  containerClassNames: ['ember-modal-dialog'],
  overlayClassNames: ['ember-modal-overlay'],
  concatenatedProperties: ['containerClassNames', 'overlayClassNames'],

  alignmentTarget: null, // view instance, passed in
  alignment: 'left', // passed in
  isPositioned: computed.notEmpty('alignmentTarget'),
  hasOverlay: true,
  translucentOverlay: false,

  actions: {
    close: function() {
      this.sendAction('close');
    }
  }
});

