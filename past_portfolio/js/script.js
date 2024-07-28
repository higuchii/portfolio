/*ハンバーガーメニュー*/
$(function () {
    $("#js-button").click(function () {
    $(".spNav").toggleClass("show");
    $(this).toggleClass("active");
    return false;
    });
    });


/*スムーススクロール*/
$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 800;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});

/*ふわっと表示*/
$(function () {
    $(window).scroll(function() {//スクロールのたびに実行される
        $('.fadein').each(function() {//フェードインがついたクラス/それぞれに実行する
            var targetElement = $(this).offset().top;//画面から要素までの距離
            var scroll = $(window).scrollTop();//どのくらいスクロールしたのか
            var windowHeihgt = $(window).height();//
            if (scroll > targetElement - windowHeihgt + 100) {
                $(this).addClass('scrollin');
            }
        });
    });
  });

// /*スクロールでヘッダー色変える*/ 
//   $(function() {
//     let gNav_all     = $('.gNav_all');
  
//     $(window).scroll(function () {
//       // 画面をトップから100px以上スクロールした時
//       if ($(this).scrollTop() >= 100) {
//         // ヘッダーのbackground-colorを白に変更し、boxshadowをつける
//         gNav_all.css({'background':'rgb(255,255,255,80%)', 'box-shadow':'0 1px 5px gray'});
//       } else {
//         // 画面がトップから100px以下の時は、上記と逆の処理を行う
//         gNav_all.css({'background':'rgba(250, 250, 250, 0)', 'box-shadow':'none'});
//       }
//     });
//   });

  // アニメーション
$(function () {
    $(window).scroll(function () {
        $('.animation').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('on');
            }
        });
    });
});

// var
// cursor = $(".cursor"),
// cWidth = 20, //カーソルの大きさ
// mouseX = 0, //マウスのX座標
// mouseY = 0; //マウスのY座標

// $(document).on('mousemove', function(e) {
//   mouseX = e.pageX;
//   mouseY = e.pageY;
//   cursor.css({
//     //カーソルの真ん中に座標軸が来るよう、
//     //カーソルの大きさの半分を引きます
//     left: mouseX - (cWidth / 2),
//     top: mouseY - (cWidth / 2)
//   })
// });


// $(document).on('mousemove', function(e) {
//     $('#cursor').css('transform', `translate(${e.pageX - 10}px, ${e.pageY - 10}px)`)
//   });

  $(function(){
	
	//マウスカーソルの変更
	//=================================
	//カーソル要素
	var cursor=$("#cursor");
	//mousemoveイベントでカーソル要素を移動
	$(document).on("mousemove",function(e){
		//マウス位置を取得するプロパティ
		var x=e.clientX;
		var y=e.clientY;
		//カーソル要素のcssを書き換え。重複しなければtransformを使うのがおすすめ
		cursor.css({
			"opacity":"1",
			"top":y+"px",
			"left":x+"px"
		});
	});

	//aタグホバー
	$("a").on({
		"mouseenter": function() {
			//activeクラス付与
			cursor.addClass("active");
		},
		"mouseleave": function() {
			cursor.removeClass("active");
		}
	});
});