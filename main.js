var Sky = "linear-gradient(135deg, #1493FC 0%, #54B0FD 25%,#81D0FD 50%,#ADE8FD 75%)"; 
var animationType = "moveUpMenu";
var colorType = Sky;


FullMenu({
    list: [ {title:"Home",url:"#"},
            {title:"About",url:"#"},
            {title:"Contact",url:"#"},
            {title:"Work",url:"#"},
           ],
    DavidMenuAnimation:"moveUpMenu",
    DavidBackground: Sky,
    
});

function FullMenu(content){
  
  $('body').append('<div class="menu-container"><nav><ul class="menu-list"></ul></nav></div>');
  
    for(var i = 0; i < content.list.length;i++){
      $('.menu-container ul').append("<li><a href=" + content.list[i].url +  ">" + content.list[i].title + "</a></li>");
    }
};

$('.menu-button').on( "click",function() {

  $(this).css("z-index", 3)
  $('.menu-button').toggleClass("addOnMenu");
  $('.menu-container').toggleClass("showOnMenu");
  $('.menu-container').css("background",colorType);
  $('.menu-container nav').toggleClass(animationType);
  
});