import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Component.extend({

  alignmentTarget: null, // view instance, passed in
  alignment: null, // passed in; valid values are:
                   // left, right (relative to alignmentTarget)
                   // center (relative to container)
  isPositioned: computed('alignmentTarget', function(){
    if (this.get('alignmentTarget') && this.get('alignment')) {
      return true;
    }
    return this.get('alignment') === 'center';
  }),
  containerClassNamesString: computed('containerClassNames.[]', function() {
    var containerClassNames = this.get('containerClassNames');
    if (containerClassNames) {
      return this.get('containerClassNames').join(' ');
    }
  }),
  classNameBindings: ['containerClassNamesString'],

  didGetPositioned: function() {
    if (this._state !== 'inDOM') { return; }

    if (this.get('isPositioned')) {
      this.updateAlignment();
    } else {
      this.$().css('left', '').css('top', '');
    }
  }.observes('isPositioned').on('didInsertElement'),

  updateAlignment: function() {
    var alignmentTarget = this.get('alignmentTarget');
    var alignment = this.get('alignment');
    switch (alignment) {
      case 'left':
        var originOffset = alignmentTarget.$().offset();
        this.$().css('left', originOffset.left)
          .css('top', originOffset.top);
        break;
      case 'right':
        var originOffset = alignmentTarget.$().offset();
        var width = alignmentTarget.$().outerWidth();
        this.$().css('left', originOffset.left + width)
          .css('top', originOffset.top);
        break;
      case 'center':
        var elementWidth = this.$().outerWidth();
        var elementHeight = this.$().outerHeight();
        this.$().css('left', '50%')
          .css('top', '50%')
          .css('margin-left', elementWidth * -.5)
          .css('margin-top', elementHeight * -.5);
        break;
    }
  }

});
