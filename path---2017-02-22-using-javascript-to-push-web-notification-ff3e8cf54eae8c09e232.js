webpackJsonp([0xd98e681ef0ff],{382:function(n,t){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99">參考資料</a></li>\n</ul>',internal:{content:'---\ntitle: 利用JavaScript推送Web Notification\ndate: 2017-02-22 15:20:41\ntags: Web\n---\n\n如果要推送通知的話，我們首先要請求權限：`Notification.requestPermission()`\n\n之後檢查`Notification.permission`來查看是否擁有權限。該值會是下面三個其中之一：\n\n1. default: 從未詢問用戶\n1. granted: 用戶授權顯示通知的權限\n1. denied: 用戶不授權。。。\n\n創造一個通知很簡單，`new Notification(text)`可以了。\n```\nvar text = "Hello, world";\nnew Notification(text);\n```\n![Imgur](https://i.imgur.com/l1lVFXZ.png)\n\n沒有圖片的話會比較空虛，可以加入options。\n\n```\nfunction push() {\n  var title = "這是一個標題。。。";\n\tvar options = {\n\t\tbody: "Calpa 寫了一篇文章XD",\n\t\ticon: "https://calpa.github.io/img/profile.png"\n\t}\n\tvar n = new Notification(title, options);\n}\n\npush();\n```\n![Imgur](https://i.imgur.com/uuNPUoB.png)\n\n如果要增加與用戶的互動，可以利用Notification的事件：\n1. onshow\n1. onclick\n1. onclose\n1. onerror\n\n我們可以監聽`onclick`，當用戶點擊通知，瀏覽器就會跳到目標頁面。\n```\nn.onclick = (event) => {\n\tevent.preventDefault();\n\twindow.open(\'https://calpa.github.io/\', \'_blank\');\n}\n```\n\n## 參考資料\n1. [Using the Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)\n'},frontmatter:{title:"利用JavaScript推送Web Notification"}}},pathContext:{slug:"/using-javascript-to-push-web-notification/"}}}});
//# sourceMappingURL=path---2017-02-22-using-javascript-to-push-web-notification-ff3e8cf54eae8c09e232.js.map