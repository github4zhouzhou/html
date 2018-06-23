$("h1.hide_all").click(function() {
    $("h1").hide();
});

$("h1.hide_self").click(function() {
    $(this).hide();
});

$("h2#change_text").click(function() {
    var oldText = $(this).text();
    if (oldText.length > 10) {
        $(this).text(oldText);
    } else {
        var newText = "Old Text:" + oldText + ", New Text:" + "Hello, World!";
        $(this).text(newText);
    }
});

// html 和 text 的区别
$("h2.change_html").click(function() {
    var oldText = $(this).text();
    if (oldText.length < 20) {
        $(this).text("<a href=\"http://www.baidu.com\">百度</a>");
    } else {
        $(this).html("<a href=\"http://www.baidu.com\">百度</a>");
    }
});

$("h3.mouse_hover").hover(function() {
    $(this).css("color", "red");
});
$("h3.mouse_hover").mouseleave(function() {
    $(this).css("color", function(index, value) {
        return "blue";
    });
});

// text index
$("button.btn_change_text").click(function() {
    $("p.text_index").text(function(index, oldText) {
        return "这个 p 元素的 index 是：" + index;
    });
    $("p.text_index").toggle(1000);
});

// input value
$("button.btn_change_input").click(function() {
    $("input.input_change_value").val(function(index, oldText) {
        return "改变后的值";
    });
});
$("input.input_change_value").focus(function() {
    $(this).css("background-color", "#cccccc");
});
$("input.input_change_value").blur(function() {
    $(this).css("background-color", "#ffffff");
});

// fade in
$("button.btn_fade_in").click(function() {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});

// fade out
$("button.btn_fade_out").click(function() {
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
});

// slideToggle slideDown slideUp
$("button.btn_side_down").click(function() {
    $("#panel").slideToggle("slow", function() {
        $("#panel").text("OK");
    });
});

// $(selector).animate({params},speed,callback);
$("button.btn_animate").click(function() {
    $("div.animate").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '+=150px'
    });
});

// animate queue
$("button.btn_animate_queue").click(function() {
    var div = $("div.animate_queue");
    div.animate({ height: '300px', opacity: '0.4' }, "slow");
    div.animate({ width: '300px', opacity: '0.8' }, "slow");
    div.animate({ height: '100px', opacity: '0.4' }, "slow");
    div.animate({ width: '100px', opacity: '0.8' }, "slow");
});

// chaining
$("button.btn_chaining").click(function() {
    $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
});

// attr 修改属性
$("button.btn_attr").click(function() {
    $("#runoob").attr({
        "href": "https://www.runoob.com/jquery",
        "title": "jQuery 教程"
    });
    // 通过修改的 title 值来修改链接名称
    title = $("#runoob").attr('title');
    $("#runoob").html(title);
});

// append() & prepend()是在元素内插入内容（该内容变成该元素的子元素或节点），
// after() & before()是在元素的外面插入内容（其内容变成元素的兄弟节点）。
$("button.btn_element_insert").click(function() {
    $("p#p3").prepend("<b>在开头追加文本</b>。");
    $("p#p3").after("<p><b>在开头追加文本</b></p>");
    $("ol#ol2").prepend("<li>在开头添加列表项</li>");
});

function appendText() {
    var txt1 = "<p id=\"pr\" class=\"remove\">文本。</p>"; // 使用 HTML 标签创建文本
    var txt2 = $("<p id=\"pr\"></p>").text("文本。"); // 使用 jQuery 创建文本
    var txt3 = document.createElement("p");
    txt3.innerHTML = "文本。"; // 使用 DOM 创建文本 text with DOM
    $("body").append(txt1, txt2, txt3); // 追加新元素
}

// remove empty
$("button.btn_remove").click(function() {
    //$("#pr").remove();
    $("p").remove(".remove");
});

// addClass removeClass
$("button.btn_add_class").click(function() {
    $("p#blueb").toggleClass("blueb");
});

// filter
$("button.btn_filter").click(function() {
    //$("p").not(".blueb").css("background-color", "yellow");
    $("p").filter(".blueb").css({ "background-color": "yellow", "font-size": "200%" });
});

// 遍历 parent(), find(), children(), siblings(), next(), prev()
$("button.btn_parent").click(function() {
    // $("p.remove").parent().css({ "color": "blue", "border": "2px solid blue" });
    var p = $(this).prev();
    while (p) {
        var id = p.attr("id");
        if (id == "div_p1") {
            break;
        }
        p = p.prev();
    }
    if (p) {
        var p1 = p.find("p#p1");
        if (p1) {
            p1.css("color", "blue");
        }
    }
});

$("button.btn_children").click(function() {
    var divs = $(this).siblings("div");
    var div = divs.first();
    while (div.length !== 0) {
        if (div.attr("id") == "div_li") {
            var divc = div.children();
            var p = divc.first();
            while (p.length !== 0) {
                if (p.prop("tagName") == "ol" || p.prop("tagName") == "OL") {
                    p.children("li").css("color", "blue");
                    break;
                }
                p = p.next();
            }
            break;
        }
        div = div.next();
    }
    alert("here");
});