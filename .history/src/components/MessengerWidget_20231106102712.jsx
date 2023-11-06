import React, { useEffect } from 'react';

function FacebookChatWidget() {
  useEffect(() => {
    // Initialize Facebook SDK and Messenger chat
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v18.0',
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <script>
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute('page_id', 'YOUR_PAGE_ID');
        chatbox.setAttribute('attribution', 'biz_inbox');
      </script>
    </div>
  );
}

export default FacebookChatWidget;
