$(window).load(function() {
    $('.bookmark').each(function(index) { 
        var text = this.innerText;
        var ref = "#"+$(this).attr("id");
        $('#pageNav').append('<a class="navItem scroll" href="' + ref + '"><span>' + text + '</span></a>');
    });
    jQuery("#name").fitText(1.0, { minFontSize: '40px', maxFontSize: '80px' })
    var cw = $('.extLink').css('height');
    $('.LeadLetter').css({'width':cw});
    if($(window).width() > 600) {
        var container = document.querySelector('.MasonryIfAvail');
        var msnry = new Masonry( container, {
            itemSelector: '.MasonryElem'
        });
        container = document.querySelector('#LinkContainer .MasonryIfAvail');
        var msnry2 = new Masonry( container, {
            itemSelector: '.MasonryElem'
        });
    }
    var posts = "http://blog.snydern.com/feeds/posts/default?alt=json-in-script";
    $.getJSON( posts + '&callback=?', function(data) {
      processPosts(data);
    });
    var lastFmUrl = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=snyderxc&api_key=ca6c0590c64bb1f0221d946dc9486678&format=json";
    $.getJSON( lastFmUrl + '&callback=?', function(data) {
      processMusic(data);
    });
    twitterFetcher.fetch('363096063986503681', 'latestTweet', 1, true, false, true, function(data){return data;}, false, writeTweet);
    var width = 0;
    $(".updateTitle").each(function( index ) {
      if($(this).width() > width) {
          width = $(this).width();
      }
    });
    $(".updateTitle").css('width', width+"px");
    $(".scroll").click(function(event){
        event.preventDefault();
        var aTag = $("#"+((this.href).split("#"))[1]);
        console.log(aTag);
        if($(window).width() > 600) {
            $('html,body').animate({scrollTop: aTag.offset().top-$('#pageNav').height()},'slow');
        } else {
            $('html,body').animate({scrollTop: aTag.offset().top},'slow');
        }
    })   
    $(window).scroll(function() { //when window is scrolled
        $('.bookmark').each(function(index) {
            var offset = $(this).offset().top - $(window).scrollTop(); //get the offset top of the element
            if(offset < 100) {
                $(".navItem[href='#" + $(this).attr('id') + "']").addClass('active');
                $(".navItem[href='#" + $(this).attr('id') + "']").prev().removeClass('active');
            } else {
                $(".navItem[href='#" + $(this).attr('id') + "']").removeClass('active');
            }
        });
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            var last = $('.bookmark').last();
            $(".navItem[href='#" + $(last).attr('id') + "']").addClass('active');
            $(".navItem[href='#" + $(last).attr('id') + "']").prev().removeClass('active');
        }
    });
});

/*********************************************************************
*  #### Twitter Post Fetcher v10.0 ####
*  Coded by Jason Mayes 2013. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here: 
*  http://www.jasonmayes.com/projects/twitterApi/
*  Updates will be posted to this site.
*********************************************************************/
var twitterFetcher=function(){function x(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(c,e){return e}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function p(e,c){for(var g=[],f=RegExp("(^| )"+c+"( |$)"),a=e.getElementsByTagName("*"),h=0,d=a.length;h<d;h++)f.test(a[h].className)&&g.push(a[h]);return g}var y="",l=20,s=!0,k=[],t=!1,q=!0,r=!0,u=null,v=!0,z=!0,w=null,A=!0;return{fetch:function(e,c,g,f,a,h,d,b,m,n){void 0===g&&(g=20);void 0===f&&(s=!0);void 0===a&&(a=
!0);void 0===h&&(h=!0);void 0===d&&(d="default");void 0===b&&(b=!0);void 0===m&&(m=null);void 0===n&&(n=!0);t?k.push({id:e,domId:c,maxTweets:g,enableLinks:f,showUser:a,showTime:h,dateFunction:d,showRt:b,customCallback:m,showInteraction:n}):(t=!0,y=c,l=g,s=f,r=a,q=h,z=b,u=d,w=m,A=n,c=document.createElement("script"),c.type="text/javascript",c.src="//cdn.syndication.twimg.com/widgets/timelines/"+e+"?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(c))},
callback:function(e){var c=document.createElement("div");c.innerHTML=e.body;"undefined"===typeof c.getElementsByClassName&&(v=!1);e=[];var g=[],f=[],a=[],h=[],d=0;if(v)for(c=c.getElementsByClassName("tweet");d<c.length;){0<c[d].getElementsByClassName("retweet-credit").length?a.push(!0):a.push(!1);if(!a[d]||a[d]&&z)e.push(c[d].getElementsByClassName("e-entry-title")[0]),h.push(c[d].getAttribute("data-tweet-id")),g.push(c[d].getElementsByClassName("p-author")[0]),f.push(c[d].getElementsByClassName("dt-updated")[0]);
d++}else for(c=p(c,"tweet");d<c.length;)e.push(p(c[d],"e-entry-title")[0]),h.push(c[d].getAttribute("data-tweet-id")),g.push(p(c[d],"p-author")[0]),f.push(p(c[d],"dt-updated")[0]),0<p(c[d],"retweet-credit").length?a.push(!0):a.push(!1),d++;e.length>l&&(e.splice(l,e.length-l),g.splice(l,g.length-l),f.splice(l,f.length-l),a.splice(l,a.length-l));c=[];d=e.length;for(a=0;a<d;){if("string"!==typeof u){var b=new Date(f[a].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),b=u(b);
f[a].setAttribute("aria-label",b);if(e[a].innerText)if(v)f[a].innerText=b;else{var m=document.createElement("p"),n=document.createTextNode(b);m.appendChild(n);m.setAttribute("aria-label",b);f[a]=m}else f[a].textContent=b}b="";s?(r&&(b+='<div class="user">'+x(g[a].innerHTML)+"</div>"),b+='<p class="tweet">'+x(e[a].innerHTML)+"</p>",q&&(b+='<p class="timePosted">'+f[a].getAttribute("aria-label")+"</p>")):e[a].innerText?(r&&(b+='<p class="user">'+g[a].innerText+"</p>"),b+='<p class="tweet">'+e[a].innerText+
"</p>",q&&(b+='<p class="timePosted">'+f[a].innerText+"</p>")):(r&&(b+='<p class="user">'+g[a].textContent+"</p>"),b+='<p class="tweet">'+e[a].textContent+"</p>",q&&(b+='<p class="timePosted">'+f[a].textContent+"</p>"));A&&(b+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+h[a]+'" class="twitter_reply_icon">Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+h[a]+'" class="twitter_retweet_icon">Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+
h[a]+'" class="twitter_fav_icon">Favorite</a></p>');c.push(b);a++}if(null==w){e=c.length;g=0;f=document.getElementById(y);for(h="<ul>";g<e;)h+="<li>"+c[g]+"</li>",g++;f.innerHTML=h+"</ul>"}else w(c);t=!1;0<k.length&&(twitterFetcher.fetch(k[0].id,k[0].domId,k[0].maxTweets,k[0].enableLinks,k[0].showUser,k[0].showTime,k[0].dateFunction,k[0].showRt,k[0].customCallback,k[0].showInteraction),k.splice(0,1))}}}();

$(window).resize(function () {
    var cw = $('.extLink').css('height');
    $('.LeadLetter').css({'width':cw});
    if($(window).width() > 600) {
        var container = document.querySelector('.MasonryIfAvail');
        var msnry = new Masonry( container, {
            itemSelector: '.MasonryElem'
        });
        container = document.querySelector('#LinkContainer .MasonryIfAvail');
        var msnry2 = new Masonry( container, {
            itemSelector: '.MasonryElem'
        });
    }
});
function processPosts(posts) {
    $('#latestPostTitle').html('<a href="'+ posts.feed.entry[0].link[4].href + '">' + posts.feed.entry[0].title.$t + '</a>');
}
function processMusic(playlist) {
    var track = playlist.recenttracks.track;
    if(track.length==2) {
        $('#lastFMPlayingStatus').text('Now Playing:');
        $('#lastFMLastPlayed').html('<a href="' + track[0].url + '">' + track[0].name + '</a> &mdash; ' + track[0].artist['#text']);
    } else {    
        $('#lastFMLastPlayed').html('<a href="">' + track.name + '</a> &mdash; <a href="">' + track.artist['#text'] + '</a>');
    }
}
function writeTweet(data) {
    var html = $.parseHTML(data[0]);
    $('#latestTweet').html(html[0].innerHTML);
}