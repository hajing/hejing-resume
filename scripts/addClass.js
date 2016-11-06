/**
 * Created by hejing on 2016/11/6.
 */
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName+= " ";
        newClassName+= value;
        element.className = newClassName;
    }
}