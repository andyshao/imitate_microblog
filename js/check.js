$(function(){
    // 焦点
    $("#say").focus(function(){
        $(this).parent().addClass( 'focus' );
    }).blur(function(){
        $(this).parent().removeClass( 'focus' );
    });

    //ctrl+center发布
    $("#say").keydown(function(e){
        var code = e.charCode || e.which || e.keyCode;
        if(e.ctrlKey && code == 13) { 
            Manager.submit();
            return false;
        } 

        var text = $(this).val(),
            len = text.length,
            limit = 140,
            s = limit-len,
            $limit = $("#limit");

        if(s<=10 && s>5){
            $limit.removeClass( 'rank0' ).addClass( 'rank1' );
        }else if(s>0 && s<=5){
            $limit.removeClass( 'rank1' ).addClass( 'rank0' );
        }else if(s<=0){
            code!==8 && $(this).val(text.substr(0, limit));
        }else{
            $limit.removeClass( 'rank0 rank1' );
        }
        s = s<=0 ? 0 : s;
        $("#limit").html(s);
    });

    //摁按钮发布
    $("#submit").click(function(){
        Manager.submit();
    });

    // 绑定删除事件
    $(".content").delegate(".delBtn", "click", function(){
        $(this).parents('li').slideUp('slow', function() {
            $(this).remove();
        });
    });

    $(".express").click(function(){
        $(".exp_list").fadeIn();
    })
})

var Manager = {
    submit : function(){
        var word = $.trim($("#say").val()),
            datetime = '',
            timer = null;
        if(word=="" || word.length==0){
            $("#say").addClass( "warning" );
            
            timer && clearTimeout(timer);
            setTimeout(function(){
                $("#say").removeClass( "warning" );
            }, 800);
            return;
        }
        $("#submit").attr({"disabled":"disabled"});//暂时禁用按钮
        
        datetime = this.getNowtime();

        var $ul = $("#talklist");
        $ul.append('<li class="item"><p>'+word+'</p><div class="info"><span class="datetime fl">'+datetime+'</span><div class="fr"><a class="delBtn" href="javascript:;"">删除</a></div></div></li>');
        var $lastli  = $ul.find("li:last");
        var $firstli = $ul.find("li:first");
        var liHeight = $lastli.height();
        
        $firstli.after($lastli);
        $lastli.hide();
        $lastli.slideDown('slow');
        
        
        this.reset();
    },

    // 获取事件
    getNowtime : function(){
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth()+1,
            day = date.getDay(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds();

        return year+'/'+this.fillzero(month)+'/'+this.fillzero(day)+' '+this.fillzero(hour)+':'+this.fillzero(minute)+':'+this.fillzero(second);
    },

    fillzero : function(num){
        return num<10 ? '0'+num : num;
    },

    // 重置
    reset:function(){
        $("#say").val("");        //清除输入框的内容
        $("#say").focus();        //输入框获取焦点
        $("#submit").removeAttr('disabled');//按钮可以使用
        $("#limit").html(140).removeClass( 'rank0 rank1' );
    }
}