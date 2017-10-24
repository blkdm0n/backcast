var VideoListView = Backbone.View.extend({
  //initialize our view, then render that view on start
  initialize: function() {
    this.videoListEntries = new VideoListEntryView();
    this.render();
    //we will get a
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
