
document.addEventListener("DOMContentLoaded", () => {
  const loadValine = () => {
    if (window.Valine) {
      new Valine({
        el: '#valine-comments',
        appId: 'DrainbKvXB5MK0ZdBIhtNV5B-MdYXbMMI',
        appKey: 'WV4VjqiJbpDFs1lYivGzRYwA',
        serverURLs: 'https://drainbkv.api.lncldglobal.com',
        placeholder: '欢迎留言或提问...',
        avatar: 'mp',
        path: location.pathname,
        lang: 'zh-cn',
        meta: ['nick', 'mail'],
        pageSize: 10
      });
    } else {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/valine/dist/Valine.min.js";
      script.onload = loadValine;
      document.body.appendChild(script);
    }
  };
  loadValine();
});
