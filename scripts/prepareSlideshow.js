/**
 * Created by hejing on 2016/10/26.
 */
function prepareSlideshow(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("linklist")) return false;
    //if(!document.getElementById("preview")) return false;
    //var preview = document.getElementById("preview");
    //preview.style.position = "absolute";
    //preview.style.left = "0px";
    //preview.style.top = "0px";
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("id","preview");
    preview.setAttribute("src","images/topics.png");
    preview.setAttribute("alt","看的一些书籍");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    var listParent = list.parentNode;
    insertAfter(slideshow,listParent);
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function(){
        moveElement("preview",-208,0,10);
    }
    links[1].onmouseover = function(){
        moveElement("preview",-416,0,10);
    }
    links[2].onmouseover = function(){
        moveElement("preview",-624,0,10);
    }
    links[3].onmouseover = function(){
        moveElement("preview",-832,0,10);
    }
    links[4].onmouseover = function(){
        moveElement("preview",-1045,0,10);
    }
    links[5].onmouseover = function(){
        moveElement("preview",-1252,0,10);
    }
    links[6].onmouseover = function(){
        moveElement("preview",-1460,0,10);
    }
}
addLoadEvent(prepareSlideshow);