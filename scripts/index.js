/**
 * Created by hejing on 2016/11/6.
 */
$(function () {
    $(".experience-one").mouseover(function () {$("#col_0").css("fontWeight","bold");}).mouseout(function () {$("#col_0").css("fontWeight","normal");});
    $(".experience-two").mouseover(function () {$("#col_1").css("fontWeight","bold");}).mouseout(function () {$("#col_1").css("fontWeight","normal");});
    $(".experience-three").mouseover(function () {$("#col_2").css("fontWeight","bold");}).mouseout(function () {$("#col_2").css("fontWeight","normal");});
    $(".experience-four").mouseover(function () {$("#col_3").css("fontWeight","bold");}).mouseout(function () {$("#col_3").css("fontWeight","normal");});
    $(".experience-five").mouseover(function () {$("#col_4").css("fontWeight","bold");}).mouseout(function () {$("#col_4").css("fontWeight","normal");});
    $(".experience-six").mouseover(function () {$("#col_5").css("fontWeight","bold");}).mouseout(function () {$("#col_5").css("fontWeight","normal");});
    // 项目节点提示语淡入淡出
    $("#tips").fadeIn(1000).fadeOut(1000).fadeIn(2000).fadeOut(1000);

    //  个人经历处各个项目轮播
    $('.test-class').slick({
        autoplay: true,
        dots: true,
        // dotsClass: 'slick_dots',
        // appendDots: $('.slick_dots'),
        pauseOnDotsHover: true,
        draggable: false,
        autoplaySpeed: 4000,
    });


});
