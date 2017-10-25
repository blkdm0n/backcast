var AppView = Backbone.View.extend({

  el: '#app',
  
  //in our appView instance we need to instantiate new instances of our
  //views - all of them!
  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();  //need this to render page
  },


  render: function() {
    this.$el.html(this.template());
    //in our inital load we want views in the render method
    //we have to tell our templates WHERE to render
    new SearchView({el: '.search'}).render();
    new VideoPlayerView({el: '.player'}).render();
    new VideoListView({el: '.list'}).render();
    new VideoListEntryView({el: 'video-list-entry'}).render();
    return this;
  },
  
  template: templateURL('src/templates/app.html') 

});




