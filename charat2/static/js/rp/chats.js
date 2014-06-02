var current_mode;

function chatsUpdate(first) {
    $('#under-page').empty();
    
    if ($('body').addClass()) {
        mode = $('body').addClass();
    } else {
        mode = 'none';
    }
    
    if (current_mode == mode || first) {
        if ($('body.mobile').length>0) {
            $('<div>').addClass('section').prop('id', 'column-1').appendTo('#under-page');
            for(chat in chats) {
                $('<div>').addClass('card chat').prop('id', 'chat-'+chat.url).appendTo('#column-1');
                $('</a>').addClass('title').prop('href','/'+chat.url).text(chat.url+(chat.unread ? ' '+chat.url : '')).appendTo('#chat-'+chat.url);
                if (chat.type == 'group') {
                    $('<div>').addClass('topic').text(chat.topic).appendTo('#chat-'+chat.url);
                }
            }
        } else if ($('body.nobile').length>0) {
            $('<div>').addClass('section').prop('id', 'column-1').appendTo('#under-page');
            $('<div>').addClass('section').prop('id', 'column-2').appendTo('#under-page');
            for (var i=0; i<chats.length; i+=2) {
                chat = chats[i];
                $('<div>').addClass('card chat').prop('id', 'chat-'+chat.url).appendTo('#column-1');
                $('</a>').addClass('title').prop('href','/'+chat.url).text(chat.url+(chat.unread ? ' '+chat.url : '')).appendTo('#chat-'+chat.url);
                if (chat.type == 'group') {
                    $('<div>').addClass('topic').text(chat.topic).appendTo('#chat-'+chat.url);
                }
            }
            for (var i=1; i<chats.length; i+=2) {
                chat = chats[i];
                $('<div>').addClass('card chat').prop('id', 'chat-'+chat.url).appendTo('#column-2');
                $('</a>').addClass('title').prop('href','/'+chat.url).text(chat.url+(chat.unread ? ' '+chat.url : '')).append('#column-2');
                if (chat.type == 'group') {
                    $('<div>').addClass('topic').text(chat.topic).appendTo('#chat-'+chat.url);
                }
            }
        } else {
            $('<div>').addClass('section').prop('id', 'column-1').appendTo('#under-page');
            $('<div>').addClass('section').prop('id', 'column-2').appendTo('#under-page');
            $('<div>').addClass('section').prop('id', 'column-3').appendTo('#under-page');
            for (var i=0; i<chats.length; i+=3) {
                chat = chats[i];
                $('<div>').addClass('card chat').prop('id', 'chat-'+chat.url).appendTo('#column-1');
                $('</a>').addClass('title').prop('href','/'+chat.url).text(chat.url+(chat.unread ? ' '+chat.url : '')).appendTo('#chat-'+chat.url);
                if (chat.type == 'group') {
                    $('<div>').addClass('topic').text(chat.topic).appendTo('#chat-'+chat.url);
                }
            }
            for (var i=1; i<chats.length; i+=3) {
                chat = chats[i];
                $('<div>').addClass('card chat').prop('id', 'chat-'+chat.url).appendTo('#column-2');
                $('</a>').addClass('title').prop('href','/'+chat.url).text(chat.url+(chat.unread ? ' '+chat.url : '')).appendTo('#chat-'+chat.url);
                if (chat.type == 'group') {
                    $('<div>').addClass('topic').text(chat.topic).appendTo('#chat-'+chat.url);
                }
            }
            for (var i=2; i<chats.length; i+=3) {
                chat = chats[i];
                $('<div>').addClass('card chat').prop('id', 'chat-'+chat.url).appendTo('#column-3');
                $('</a>').addClass('title').prop('href','/'+chat.url).text(chat.url+(chat.unread ? ' '+chat.url : '')).appendTo('#chat-'+chat.url);
                if (chat.type == 'group') {
                    $('<div>').addClass('topic').text(chat.topic).appendTo('#chat-'+chat.url);
                }
            }
        }
    }
    current_mode = mode;
}

$(function(){
    if ($('body').addClass()) {
        current_mode = $('body').addClass();
    } else {
        current_mode = 'none';
    }
    
    chatsUpdate(true);
});