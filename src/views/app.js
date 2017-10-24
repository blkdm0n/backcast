var AppView = Backbone.View.extend({

  el: '#app',
  
  //in our appView instance we need to instantiate new instances of our
  //views - all of them!
  initialize: function() {
    this.videos = new Videos();
    //this.search.call(this,) = new SearchView();
    this.playerView = new VideoPlayerView();
    this.videoListView = new VideoListView();
    this.render();  //need this to render page
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html'),
  

});


var appView = new AppView();
appView.render();

