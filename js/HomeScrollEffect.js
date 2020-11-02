// JavaScript Document

//Title
var introTitle = document.getElementById('introFrontTitle'),
articleTitle = document.getElementById('articleFrontTitle'),
photographyTitle = document.getElementById('photographyFrontTitle');
var introbot = introTitle.style.bottom,
artbot = articleTitle.style.bottom,
photobot=photographyTitle.style.bottom;

addEvent(window,'scroll',onScroll);
onScroll();
 
function onScroll(e){
    var scrollTop = document.documentElement.scrollTop;
    //Title
    photographyTitle.style.bottom = introbot + (scrollTop*0.015) + 'rem';
    articleTitle.style.bottom = artbot+ (scrollTop*0.01)+'rem';
    introTitle.style.bottom = photobot + (scrollTop*0.0055)+'rem';
}
 
function addEvent(eventTarget, eventType, eventHandler) {
    if (eventTarget.addEventListener) {
        eventTarget.addEventListener(eventType, eventHandler, false);
    } else {
        if (eventTarget.attachEvent) {
            eventType = "on" + eventType;
            eventTarget.attachEvent(eventType, eventHandler);
        } else {
            eventTarget["on" + eventType] = eventHandler;
        }
    }
}