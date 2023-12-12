//Patel keyurkumar chunilal

"use strict";

$(document).ready(() => {
  $("#recipes").accordion({
    collapsible: true,
    heightStyle: "content"
  });

  $("#recipes h2").each((index, element) => {
    const $panel = $(element).next();
    const panelId = `panel-${index}`;
    $(element).attr({
      "aria-expanded": "false",
      "aria-controls": panelId
    });
    $panel.attr({
      "id": panelId,
      "role": "region",
      "aria-labelledby": $(element).attr("id")
    });
  });
});

$(function(){
    let current_image=1;
    let max_image=4;
    let slider_time=4000; //mili second

    setInterval(() => {
        $('.slide-image').removeClass('current');
        if(current_image < max_image){
            current_image=current_image+1;
        }
        else{
            current_image=1;
        }
        $('.slide-image-'+current_image).addClass('current');
    }, slider_time);
})