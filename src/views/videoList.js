var VideoListView = Backbone.View.extend({
  //initialize our view, then render that view on start
  initialize: function() {
    
    this.render({el: '.video-list'});
    //we will get a
  },
  
  render: function() {
    // new VideoListEntryView().render();
    // this.$el.children().detach();
    this.$el.html(this.template());
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
