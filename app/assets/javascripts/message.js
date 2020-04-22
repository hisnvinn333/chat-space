$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="chat-main__messageList__userName" >
        ${message.user_name}
        <div class="chat-main__messageList__userName__date">
          ${message.created_at}
        </div>
      </div>
      <div class="chat-main__messageList__message">
        ${message.content}
      </div>
        <img class="chat-main__messageList__message__image" src="${message.image}">`
     return html;
   } else {
     var html =
      `<div class="chat-main__messageList__userName" >
        ${message.user_name}
          <div class="chat-main__messageList__userName__date">
            ${message.created_at}
          </div>
      </div>
      <div class="chat-main__messageList__message">
        ${message.content}
      </div>
      <img class="chat-main__messageList__message__image" src="">`
     return html;
   };
 }
  $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action');
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__messageList').append(html);
      $('form')[0].reset();
      $('.chat-main__messageForm__inputSpace__text__send').prop('disabled', false);
      $('.chat-main__messageList').animate({ scrollTop: $('.chat-main__messageList')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});
