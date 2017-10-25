var VideoListView = Backbone.View.extend({
  //initialize our view, then render that view on start
  initialize: function() {
    //this.render({el: '.video-list-entry'}); creates duplicates 
  },
  
  render: function(collection) {
    //should render ALL videos in collection  
    this.$el.children().detach();
    this.$el.html(this.template());
    var arrToAppend = [];
    
    exampleVideoData.forEach(function(value) {
      
      //we can log exampleVideoData

      arrToAppend.push(new VideoListEntryView({model: value}).render().el);
      
     
    });
     // this.$el.html(this.template());
    
    $('.video-list').append(arrToAppend); 
    // return exampleVideoData;
  },

  template: templateURL('src/templates/videoList.html')
 

});




    // return this;
    
    //new VideoListEntryView().render();
    //this.$el.children().detach();
    // this.$el.append(this.template());
    
    // return this;//