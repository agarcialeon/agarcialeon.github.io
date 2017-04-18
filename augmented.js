$(".logo img").rotate(
{
  bind:
  {
    mouseover : function() 
    {
    $(this).rotate({animateTo:90})
    },
    mouseout : function() 
    {
      $(this).rotate({animateTo:0})
    }
  }
});

$(document).ready(function()
{
  $(".logo img").mouseover(function()   
  {
    $(".logo h3").animate({"opacity": 1
                          },400);
  });

  $(".logo img").mouseout(function()
  {
    $(".logo h3").animate({"opacity": 0
                          },400);
  });          
});
                 