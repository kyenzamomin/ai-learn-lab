"use client";
import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {

    (function (d, m) {
      var kommunicateSettings =
        { "appId": "14a16ff5df237b6b209ee1be0e445054a", "popupWidget": true, "automaticChatOpenOnNavigation": true };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

  }, []);

  return (
    <div>

    </div>
  );
};
export default Chat;
