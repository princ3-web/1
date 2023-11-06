import React, { useEffect } from 'react';

const FacebookMessengerChat = () => {
  useEffect(() => {
    // Add the Facebook Messenger Chat code here
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "171312262727053");
    chatbox.setAttribute("attribution", "biz_inbox");

    // Add the Facebook SDK initialization code here
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
};

export default FacebookMessengerChat;