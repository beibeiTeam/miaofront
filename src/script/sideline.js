$(function(){
    /*顶部菜单滑动线条*/
    $(".navigator li").each(function(){
        if($(this).find("a").text()==sessionStorage.pagecount){
            $(".sideline").css({left:$(this).position().left});
            $(".sideline").css({width:$(this).outerWidth()});
            $(this).addClass("nav_cur").siblings().removeClass("nav_cur");
            navName(sessionStorage.pagecount);
            return false
        }
        else{
            $(".sideline").css({left:0});
            $(".navigator li").eq(0).addClass("nav_cur").siblings().removeClass("nav_cur");
            var nav_w=$(".navigator li").first().width();
            $(".sideline").width(nav_w);
        }
    });
    $(".navigator li").on('click', function(){
       var nav_w=$(this).outerWidth();
        $(".sideline").stop(true);
        $(".sideline").animate({width:nav_w,left:$(this).position().left});
        $(this).addClass("nav_cur").siblings().removeClass("nav_cur");
        var c_nav=$(this).find("a").text();
        navName(c_nav);
    });
    /*左侧菜单滑动线条*/
    $(".menu-list li").each(function(i){
        if(i==0){
            var li_h=$(this).find('.link').outerHeight();
            var sb_h=$('.menu-sideline').height();
            $(".menu-sideline").css({top:(li_h-sb_h)/2});
            $(".menu-list li").eq(0).addClass("open").siblings().removeClass("open");
        }
    });
    $(".menu-list li").on('click',function(){
        var index = $(this).index();
        var li_h=$(this).find('.link').outerHeight();
        var sb_h=$('.menu-sideline').height();
        $(".menu-sideline").animate({top:(li_h-sb_h)/2 + li_h*index});
    });
    /*左侧菜单手风琴效果*/
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.menu-list-small').not($next).slideUp().parent().removeClass('open');
        };
    }   
    var accordion = new Accordion($('#accordion'), false);
    /*下拉显示/隐藏*/
    $(".handle>li:first").hover(function(){
        $(this).find('ul').stop(false,true).slideToggle(500);
    });
});
function navName(c_nav) {
    switch (c_nav) {
        case "TOEFL":
            sessionStorage.pagecount = "TOEFL";
            break;
        case "GRE":
            sessionStorage.pagecount = "GRE";
            break;
        case "GMAT":
            sessionStorage.pagecount = "GMAT";
            break;
        case "IELTS":
            sessionStorage.pagecount = "IELTS";
            break;
        case "SAT":
            sessionStorage.pagecount = "SAT";
            break;
        case "ACT":
            sessionStorage.pagecount = "ACT";
            break;
        case "个人中心":
            sessionStorage.pagecount = "个人中心";
            break;
    }
}