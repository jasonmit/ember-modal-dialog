import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingBasic: false,
  isShowingTranslucent: false,
  isShowingCustomStyles: false,
  actions: {
    toggleBasic: function(){
      this.toggleProperty('isShowingBasic');
    },
    toggleTranslucent: function(){
      this.toggleProperty('isShowingTranslucent');
    },
    toggleCustomStyles: function(){
      this.toggleProperty('isShowingCustomStyles');
    }
  }
});
