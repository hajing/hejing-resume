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

    $("#tips").fadeIn(1000).fadeOut(1000).fadeIn(2000).fadeOut(1000);

});
