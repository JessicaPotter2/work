define(function(require){require("common"),require("/static/component/logic/common/userinfo.js"),$(function(){$(".menuContent .item").mouseover(function(){$(".submenu").hide();var a=$(this).attr("data-id");$("."+a).show()}),$(".menuContent .item , .submenu").mouseleave(function(){$(".submenu").hide()}),$(".submenu ").mouseover(function(){$(".submenu").hide(),$(this).show()});var a=!1,c=0;$(document).delegate(".js-upAni","mouseenter",function(){var v=this;c=setTimeout(function(){if($(v).find(".js-upBox").css({top:"77px"}),$(v).find(".title").css({height:"auto","max-height":"48px",overflow:"hidden"}),$(v).find(".summary").css({margin:"0px"}),!a){$(v).find(".js-upBox").addClass("doing");var c=$(v).find(".js-upBox");$(v).find(".js-upBox").animate({top:"22px"},100,function(){$(v).find(".js-upBox").addClass("box_body_hover"),a=!1,c.hasClass("doing")||c.css("top","77px")})}return!1},200)}),$(document).delegate(".js-upAni","mouseleave",function(){window.clearInterval(c),$(this).find(".js-upBox").removeClass("box_body_hover"),$(this).find(".title").css("height","24px"),$(this).find(".summary").css({margin:"2px"}),$(".doing").css("top","77px"),$(".doing").removeClass("doing"),$(this).find(".js-upBox").css({top:"77px"});$(this).find(".js-upBox");return!1})}),$("#js-header-login").click(function(){require.async("login_sns",function(mod){mod.init()})}),$("#js-header-register").click(function(){require.async("login_sns",function(mod){mod.signup()})}),function(){function a(i){var a=j.filter(".slide-active");j.stop(!0,!0),a.removeClass("slide-active").fadeOut(600),j.eq(i).addClass("slide-active").fadeIn(800),g&&g.removeClass("active").eq(i).addClass("active")}function c(){y--,y=0>y?w-1:y,a(y)}function v(){y++,y=y>w-1?0:y,a(y)}function h(){k&&clearInterval(k),k=setInterval(function(){v()},_)}var g,b=$(".g-banner"),j=b.find(".banner-slide"),C=b.find(".banner-dots"),B="",w=j.length,y=-1,_=5e3,k=null;return 1==w?void v():(B="<span></span>",$.each(j,function(){C.append(B)}),g=C.find("span"),b.find(".banner-anchor").removeAttr("style"),b.on("click",".prev",function(){c()}).on("click",".next",function(){v()}).on("click",".banner-dots span",function(){if(!$(this).hasClass("active")){var i=$(this).index();y=i,a(i)}}),b.on("mouseenter",function(){k&&clearInterval(k)}).on("mouseleave",function(){h()}),v(),void h())}(),$(window).trigger("scroll")});