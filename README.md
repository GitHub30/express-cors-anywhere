# Usage

curl https://corsproxy.deta.dev/https://example.com/

```javascript
html = await fetch('https://corsproxy.deta.dev/https://example.com/').then(r=>r.text())
console.log(html)
```


POST request

```bash
curl -X POST -H "Content-Type: application/json" -d '{"Name":"John Doe", "Age":"5"}' https://corsproxy.deta.dev/https://httpbin.org/post
```

```javascript
res = await fetch('https://corsproxy.deta.dev/https://httpbin.org/post', {method: 'POST', body: '{"Name":"John Doe", "Age":"5"}'}).then(r=>r.json())
console.log(res)
```

Status code

https://corsproxy.deta.dev/https://httpbin.org/status/404


Deploy
```bash
deta deploy
```