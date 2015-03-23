import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingBasic: false,
  isShowingTranslucent: false,
  isShowingCustomStyles: false,
  isShowingAlignmentTarget: false,
  actions: {
    toggleBasic: function(){
      this.toggleProperty('isShowingBasic');
    },
    toggleTranslucent: function(){
      this.toggleProperty('isShowingTranslucent');
    },
    toggleCustomStyles: function(){
      this.toggleProperty('isShowingCustomStyles');
    },
    toggleAlignmentTarget: function(){
      this.toggleProperty('isShowingAlignmentTarget');
    }
  }
});
