import{connect as j}from"cloudflare:sockets";var C="351c9981-04b6-4103-aa4b-864aa9c91469",x="",E="443",A="",U=[],N=[],z=!1,K=!1,Q=!1,G=!0,h="",J="",q="",v=null,k={};var W=[{domain:"ProxyIP.US.CMLiussss.net",region:"US",regionCode:"US",port:443},{domain:"ProxyIP.SG.CMLiussss.net",region:"SG",regionCode:"SG",port:443},{domain:"ProxyIP.JP.CMLiussss.net",region:"JP",regionCode:"JP",port:443},{domain:"ProxyIP.HK.CMLiussss.net",region:"HK",regionCode:"HK",port:443},{domain:"ProxyIP.KR.CMLiussss.net",region:"KR",regionCode:"KR",port:443},{domain:"ProxyIP.DE.CMLiussss.net",region:"DE",regionCode:"DE",port:443},{domain:"ProxyIP.SE.CMLiussss.net",region:"SE",regionCode:"SE",port:443},{domain:"ProxyIP.NL.CMLiussss.net",region:"NL",regionCode:"NL",port:443},{domain:"ProxyIP.FI.CMLiussss.net",region:"FI",regionCode:"FI",port:443},{domain:"ProxyIP.GB.CMLiussss.net",region:"GB",regionCode:"GB",port:443},{domain:"ProxyIP.Oracle.cmliussss.net",region:"Oracle",regionCode:"Oracle",port:443},{domain:"ProxyIP.DigitalOcean.CMLiussss.net",region:"DigitalOcean",regionCode:"DigitalOcean",port:443},{domain:"ProxyIP.Vultr.CMLiussss.net",region:"Vultr",regionCode:"Vultr",port:443},{domain:"ProxyIP.Multacom.CMLiussss.net",region:"Multacom",regionCode:"Multacom",port:443}],le=[{name:"cloudflare.182682.xyz",domain:"cloudflare.182682.xyz"},{name:"speed.marisalnc.com",domain:"speed.marisalnc.com"},{domain:"freeyx.cloudflare88.eu.org"},{domain:"bestcf.top"},{domain:"cdn.2020111.xyz"},{domain:"cfip.cfcdn.vip"},{domain:"cf.0sm.com"},{domain:"cf.090227.xyz"},{domain:"cf.zhetengsha.eu.org"},{domain:"cloudflare.9jy.cc"},{domain:"cf.zerone-cdn.pp.ua"},{domain:"cfip.1323123.xyz"},{domain:"cnamefuckxxs.yuchen.icu"},{domain:"cloudflare-ip.mofashi.ltd"},{domain:"115155.xyz"},{domain:"cname.xirancdn.us"},{domain:"f3058171cad.002404.xyz"},{domain:"8.889288.xyz"},{domain:"cdn.tzpro.xyz"},{domain:"cf.877771.xyz"},{domain:"xn--b6gac.eu.org"}],ce=atob("aW52YWxpZCBkYXRh"),de=atob("aW52YWxpZCB1c2Vy"),pe=atob("Y29tbWFuZCBpcyBub3Qgc3VwcG9ydGVk"),fe=atob("VURQIHByb3h5IG9ubHkgZW5hYmxlIGZvciBETlMgd2hpY2ggaXMgcG9ydCA1Mw=="),ee=atob("aW52YWxpZCBhZGRyZXNzVHlwZQ=="),ue=atob("YWRkcmVzc1ZhbHVlIGlzIGVtcHR5"),me=atob("d2ViU29ja2V0LmVhZHlTdGF0ZSBpcyBub3Qgb3Blbg=="),ge=atob("U3RyaW5naWZpZWQgaWRlbnRpZmllciBpcyBpbnZhbGlk"),H=atob("SW52YWxpZCBTT0NLUyBhZGRyZXNzIGZvcm1hdA=="),ye=atob("bm8gYWNjZXB0YWJsZSBtZXRob2Rz"),he=atob("c29ja3Mgc2VydmVyIG5lZWRzIGF1dGg="),be=atob("ZmFpbCB0byBhdXRoIHNvY2tzIHNlcnZlcg=="),xe=atob("ZmFpbCB0byBvcGVuIHNvY2tzIGNvbm5lY3Rpb24="),te={},M=!1,ne=1,oe=2,ae=3;function L(t){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t)}function re(t){return!!(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t)||/^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(t)||/^::1$|^::$|^(?:[0-9a-fA-F]{1,4}:)*::(?:[0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4}$/.test(t))}async function we(t){if(t.C)try{v=t.C,await Ie()}catch(e){console.error("KV\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u5C06\u7981\u7528KV\u529F\u80FD:",e),v=null}}async function Ie(){if(v)try{let t=await v.get("c");t&&(k=JSON.parse(t))}catch(t){console.error("\u52A0\u8F7DKV\u914D\u7F6E\u5931\u8D25:",t),k={}}}async function ie(){if(v)try{await v.put("c",JSON.stringify(k))}catch(t){console.error("\u4FDD\u5B58KV\u914D\u7F6E\u5931\u8D25:",t)}}function w(t,e=""){return k[t]!==void 0?k[t]:e}async function $(t,e){k[t]=e,await ie()}async function B(t){try{let e=t.cf?.country;if(e){let o={US:"US",SG:"SG",JP:"JP",HK:"HK",KR:"KR",DE:"DE",SE:"SE",NL:"NL",FI:"FI",GB:"GB",CN:"HK",TW:"HK",AU:"SG",CA:"US",FR:"DE",IT:"DE",ES:"DE",CH:"DE",AT:"DE",BE:"NL",DK:"SE",NO:"SE",IE:"GB"};if(o[e])return o[e]}return"HK"}catch{return"HK"}}async function D(t=""){if(W.length===0)return null;let e=W.map(n=>({...n,available:!0}));if(G&&t){let n=Se(t,e);if(n.length>0)return n[0]}return e[0]}function Ce(t){return{US:["SG","JP","HK","KR"],SG:["JP","HK","KR","US"],JP:["SG","HK","KR","US"],HK:["SG","JP","KR","US"],KR:["JP","HK","SG","US"],DE:["NL","GB","SE","FI"],SE:["DE","NL","FI","GB"],NL:["DE","GB","SE","FI"],FI:["SE","DE","NL","GB"],GB:["DE","NL","SE","FI"]}[t]||[]}function ke(t){let e=Ce(t),o=["US","SG","JP","HK","KR","DE","SE","NL","FI","GB"];return[t,...e,...o.filter(n=>n!==t&&!e.includes(n))]}function Se(t,e){if(!G||!t)return e;let o=ke(t),n=[];for(let a of o){let d=e.filter(s=>s.regionCode===a);n.push(...d)}return n}function se(t){if(t.includes("[")&&t.includes("]")){let o=t.match(/^\[([^\]]+)\](?::(\d+))?$/);if(o)return{address:o[1],port:o[2]?parseInt(o[2],10):null}}let e=t.lastIndexOf(":");if(e>0){let o=t.substring(0,e),n=t.substring(e+1),a=parseInt(n,10);if(!isNaN(a)&&a>0&&a<=65535)return{address:o,port:a}}return{address:t,port:null}}var $e={async fetch(t,e,o){try{await we(e),C=(e.u||e.U||C).toLowerCase();let n=(e.d||e.D||C).toLowerCase(),a=e.p||e.P,d=!1,s=w("wk",e.wk||e.WK);s&&s.trim()?(J=s.trim().toUpperCase(),h=J):a&&a.trim()?(d=!0,h="CUSTOM"):h=await B(t);let p=e.rm||e.RM;p&&p.toLowerCase()==="no"&&(G=!1);let c=e.p||e.P;if(c){let l=c.toLowerCase();if(l.includes("]:")){let g=l.lastIndexOf(":");E=l.slice(g+1),x=l.slice(0,g)}else!l.includes("]:")&&!l.includes("]")?[x,E="443"]=l.split(":"):(x=l,E="443")}if(A=e.s||e.S||A,A)try{te=Ue(A),M=!0}catch{M=!1}let i=w("yx",e.yx||e.YX);if(i)try{let l=i.split(",").map(g=>g.trim()).filter(g=>g);U=[],N=[],l.forEach(g=>{let y="",S=g;if(g.includes("#")){let F=g.split("#");S=F[0].trim(),y=F[1].trim()}let{address:R,port:T}=se(S);y||(y="\u81EA\u5B9A\u4E49\u4F18\u9009-"+R+(T?":"+T:"")),re(R)?U.push({ip:R,port:T,isp:y}):N.push({domain:R,port:T,name:y})})}catch{U=[],N=[]}let r=e.qj||e.QJ;r&&r.toLowerCase()==="no"&&(z=!0);let f=w("dkby",e.dkby||e.DKBY);f&&f.toLowerCase()==="yes"&&(K=!0);let m=e.yxby||e.YXBY;m&&m.toLowerCase()==="yes"&&(Q=!0),q=w("yxURL",e.yxURL||e.YXURL)||"https://raw.githubusercontent.com/qwer-search/bestip/refs/heads/main/kejilandbestip.txt";let u=new URL(t.url);if(t.headers.get("Upgrade")==="websocket")return await Pe(t);if(u.pathname.includes("/api/config")){let l=u.pathname.split("/").filter(y=>y),g=l.indexOf("api");if(g>0){let y=l[g-1];if(L(y)&&y===C)return await Oe(t);if(L(y))return new Response(JSON.stringify({error:"UUID\u9519\u8BEF"}),{status:403,headers:{"Content-Type":"application/json"}})}return new Response(JSON.stringify({error:"\u65E0\u6548\u7684API\u8DEF\u5F84"}),{status:404,headers:{"Content-Type":"application/json"}})}if(u.pathname.includes("/api/preferred-ips")){let l=u.pathname.split("/").filter(y=>y),g=l.indexOf("api");if(g>0){let y=l[g-1];if(L(y)&&y===C)return await Ve(t);if(L(y))return new Response(JSON.stringify({error:"UUID\u9519\u8BEF"}),{status:403,headers:{"Content-Type":"application/json"}})}return new Response(JSON.stringify({error:"\u65E0\u6548\u7684API\u8DEF\u5F84"}),{status:404,headers:{"Content-Type":"application/json"}})}if(t.method==="GET"){if(u.pathname==="/region"){let l=w("p",e.p||e.P),g=w("wk",e.wk||e.WK);if(g&&g.trim())return new Response(JSON.stringify({region:g.trim().toUpperCase(),detectionMethod:"\u624B\u52A8\u6307\u5B9A\u5730\u533A",manualRegion:g.trim().toUpperCase(),timestamp:new Date().toISOString()}),{headers:{"Content-Type":"application/json"}});if(l&&l.trim())return new Response(JSON.stringify({region:"CUSTOM",detectionMethod:"\u81EA\u5B9A\u4E49ProxyIP\u6A21\u5F0F",customIP:l,timestamp:new Date().toISOString()}),{headers:{"Content-Type":"application/json"}});{let y=await B(t);return new Response(JSON.stringify({region:y,detectionMethod:"API\u68C0\u6D4B",timestamp:new Date().toISOString()}),{headers:{"Content-Type":"application/json"}})}}if(u.pathname==="/test-api")try{let l=await B(t);return new Response(JSON.stringify({detectedRegion:l,message:"API\u6D4B\u8BD5\u5B8C\u6210",timestamp:new Date().toISOString()}),{headers:{"Content-Type":"application/json"}})}catch(l){return new Response(JSON.stringify({error:l.message,message:"API\u6D4B\u8BD5\u5931\u8D25"}),{status:500,headers:{"Content-Type":"application/json"}})}if(u.pathname==="/"){let l=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\u7EC8\u7AEF</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: "Courier New", monospace;
            background: #000; color: #00ff00; min-height: 100vh;
            overflow-x: hidden; position: relative;
            display: flex; justify-content: center; align-items: center;
        }
        .matrix-bg {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(45deg, #000 0%, #001100 50%, #000 100%);
            z-index: -1;
            animation: bg-pulse 8s ease-in-out infinite;
        }
        @keyframes bg-pulse {
            0%, 100% { background: linear-gradient(45deg, #000 0%, #001100 50%, #000 100%); }
            50% { background: linear-gradient(45deg, #000 0%, #002200 50%, #000 100%); }
        }
        .matrix-rain {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px);
            animation: matrix-fall 20s linear infinite;
            z-index: -1;
        }
        @keyframes matrix-fall {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
        }
        .matrix-code-rain {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: -1;
            overflow: hidden;
        }
        .matrix-column {
            position: absolute; top: -100%; left: 0;
            color: #00ff00; font-family: "Courier New", monospace;
            font-size: 14px; line-height: 1.2;
            animation: matrix-drop 15s linear infinite;
            text-shadow: 0 0 5px #00ff00;
        }
        @keyframes matrix-drop {
            0% { top: -100%; opacity: 1; }
            10% { opacity: 1; }
            90% { opacity: 0.3; }
            100% { top: 100vh; opacity: 0; }
        }
        .matrix-column:nth-child(odd) {
            animation-duration: 12s;
            animation-delay: -2s;
        }
        .matrix-column:nth-child(even) {
            animation-duration: 18s;
            animation-delay: -5s;
        }
        .matrix-column:nth-child(3n) {
            animation-duration: 20s;
            animation-delay: -8s;
        }
        .terminal {
            width: 90%; max-width: 800px; height: 500px;
            background: rgba(0, 0, 0, 0.9);
            border: 2px solid #00ff00;
            border-radius: 8px;
            box-shadow: 0 0 30px rgba(0, 255, 0, 0.5), inset 0 0 20px rgba(0, 255, 0, 0.1);
            backdrop-filter: blur(10px);
            position: relative; z-index: 1;
            overflow: hidden;
        }
        .terminal-header {
            background: rgba(0, 20, 0, 0.8);
            padding: 10px 15px;
            border-bottom: 1px solid #00ff00;
            display: flex; align-items: center;
        }
        .terminal-buttons {
            display: flex; gap: 8px;
        }
        .terminal-button {
            width: 12px; height: 12px; border-radius: 50%;
            background: #ff5f57; border: none;
        }
        .terminal-button:nth-child(2) { background: #ffbd2e; }
        .terminal-button:nth-child(3) { background: #28ca42; }
        .terminal-title {
            margin-left: 15px; color: #00ff00;
            font-size: 14px; font-weight: bold;
        }
        .terminal-body {
            padding: 20px; height: calc(100% - 50px);
            overflow-y: auto; font-size: 14px;
            line-height: 1.4;
        }
        .terminal-line {
            margin-bottom: 8px; display: flex; align-items: center;
        }
        .terminal-prompt {
            color: #00ff00; margin-right: 10px;
            font-weight: bold;
        }
        .terminal-input {
            background: transparent; border: none; outline: none;
            color: #00ff00; font-family: "Courier New", monospace;
            font-size: 14px; flex: 1;
            caret-color: #00ff00;
        }
        .terminal-input::placeholder {
            color: #00aa00; opacity: 0.7;
        }
        .terminal-cursor {
            display: inline-block; width: 8px; height: 16px;
            background: #00ff00; animation: blink 1s infinite;
            margin-left: 2px;
        }
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        .terminal-output {
            color: #00aa00; margin: 5px 0;
        }
        .terminal-error {
            color: #ff4444; margin: 5px 0;
        }
        .terminal-success {
            color: #44ff44; margin: 5px 0;
        }
        .matrix-text {
            position: fixed; top: 20px; right: 20px;
            color: #00ff00; font-family: "Courier New", monospace;
            font-size: 0.8rem; opacity: 0.6;
            animation: matrix-flicker 3s infinite;
        }
        @keyframes matrix-flicker {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
    </style>
</head>
<body>
    <div class="matrix-bg"></div>
    <div class="matrix-rain"></div>
    <div class="matrix-code-rain" id="matrixCodeRain"></div>
    <div class="matrix-text">\u7EC8\u7AEF</div>
    <div class="terminal">
        <div class="terminal-header">
            <div class="terminal-buttons">
                <div class="terminal-button"></div>
                <div class="terminal-button"></div>
                <div class="terminal-button"></div>
            </div>
            <div class="terminal-title">\u7EC8\u7AEF</div>
        </div>
        <div class="terminal-body" id="terminalBody">
            <div class="terminal-line">
                <span class="terminal-prompt">root:~$</span>
                <span class="terminal-output">\u606D\u559C\u4F60\u6765\u5230\u8FD9</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-prompt">root:~$</span>
                <span class="terminal-output">\u8BF7\u8F93\u5165\u4F60U\u53D8\u91CF\u7684\u503C</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-prompt">root:~$</span>
                <span class="terminal-output">\u547D\u4EE4: connect [UUID]</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-prompt">root:~$</span>
                <input type="text" class="terminal-input" id="uuidInput" placeholder="\u8F93\u5165U\u53D8\u91CF\u7684\u5185\u5BB9\u5E76\u4E14\u56DE\u8F66..." autofocus>
                <span class="terminal-cursor"></span>
            </div>
        </div>
    </div>
    <script>
        function createMatrixRain() {
            const matrixContainer = document.getElementById('matrixCodeRain');
            const matrixChars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const columns = Math.floor(window.innerWidth / 18);
            
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.className = 'matrix-column';
                column.style.left = (i * 18) + 'px';
                column.style.animationDelay = Math.random() * 15 + 's';
                column.style.animationDuration = (Math.random() * 15 + 8) + 's';
                column.style.fontSize = (Math.random() * 4 + 12) + 'px';
                column.style.opacity = Math.random() * 0.8 + 0.2;
                
                let text = '';
                const charCount = Math.floor(Math.random() * 30 + 20);
                for (let j = 0; j < charCount; j++) {
                    const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                    const brightness = Math.random() > 0.1 ? '#00ff00' : '#00aa00';
                    text += '<span style="color: ' + brightness + ';">' + char + '</span><br>';
                }
                column.innerHTML = text;
                matrixContainer.appendChild(column);
            }
            
            setInterval(function() {
                const columns = matrixContainer.querySelectorAll('.matrix-column');
                columns.forEach(function(column) {
                    if (Math.random() > 0.95) {
                        const chars = column.querySelectorAll('span');
                        if (chars.length > 0) {
                            const randomChar = chars[Math.floor(Math.random() * chars.length)];
                            randomChar.style.color = '#ffffff';
                            setTimeout(function() {
                                randomChar.style.color = '#00ff00';
                            }, 200);
                        }
                    }
                });
            }, 100);
        }
        
        function isValidUUID(uuid) {
            const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
            return uuidRegex.test(uuid);
        }
        
        function addTerminalLine(content, type = 'output') {
            const terminalBody = document.getElementById('terminalBody');
            const line = document.createElement('div');
            line.className = 'terminal-line';
            
            const prompt = document.createElement('span');
            prompt.className = 'terminal-prompt';
            prompt.textContent = 'root:~$';
            
            const output = document.createElement('span');
            output.className = 'terminal-' + type;
            output.textContent = content;
            
            line.appendChild(prompt);
            line.appendChild(output);
            terminalBody.appendChild(line);
            
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
        
        function handleUUIDInput() {
            const input = document.getElementById('uuidInput');
            const uuid = input.value.trim();
            
            if (uuid) {
                addTerminalLine('connect ' + uuid, 'output');
                
                if (isValidUUID(uuid)) {
                    addTerminalLine('\u6B63\u5728\u5165\u4FB5...', 'output');
                    setTimeout(() => {
                        addTerminalLine('\u8FDE\u63A5\u6210\u529F\uFF01\u8FD4\u56DE\u7ED3\u679C...', 'success');
                        setTimeout(() => {
                            window.location.href = '/' + uuid;
                        }, 1000);
                    }, 500);
                } else {
                    addTerminalLine('\u9519\u8BEF: \u65E0\u6548\u7684UUID\u683C\u5F0F', 'error');
                    addTerminalLine('\u8BF7\u91CD\u65B0\u8F93\u5165\u6709\u6548\u7684UUID', 'output');
                }
                
                input.value = '';
            }
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            createMatrixRain();
            
            const input = document.getElementById('uuidInput');
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleUUIDInput();
                }
            });
        });
    <\/script>
</body>
</html>`;return new Response(l,{status:200,headers:{"Content-Type":"text/html; charset=utf-8"}})}if(u.pathname.length>1&&u.pathname!=="/"&&!u.pathname.includes("/sub")){let l=u.pathname.replace(/\/$/,"").substring(1);if(L(l))return l===C?await Ne(t,l):new Response(JSON.stringify({error:"UUID\u9519\u8BEF \u8BF7\u6CE8\u610F\u53D8\u91CF\u540D\u79F0\u662Fu\u4E0D\u662Fuuid"}),{status:403,headers:{"Content-Type":"application/json"}})}if(u.pathname.includes("/sub")){let l=u.pathname.split("/");if(l.length===2&&l[1]==="sub"){let g=l[0].substring(1);if(L(g))return g===C?await _(t,g,u):new Response(JSON.stringify({error:"UUID\u9519\u8BEF"}),{status:403,headers:{"Content-Type":"application/json"}})}}if(u.pathname.toLowerCase().includes(`/${n}`))return await _(t,C)}return new Response(JSON.stringify({error:"Not Found"}),{status:404,headers:{"Content-Type":"application/json"}})}catch(n){return new Response(n.toString(),{status:500})}}};async function _(t,e,o=null){o||(o=new URL(t.url));let n=[],a=o.hostname,d=o.searchParams.get("target")||"base64";if(h==="CUSTOM"){let i=[{ip:a,isp:"\u539F\u751F\u5730\u5740"}];n.push(...I(i,e,a))}else try{let i=[{ip:a,isp:"\u539F\u751F\u5730\u5740"}];n.push(...I(i,e,a))}catch{h||(h=await B(t));let r=await D(h);if(r){x=r.domain,E=r.port.toString();let f=[{ip:x,isp:"ProxyIP-"+h}];n.push(...I(f,e,a))}else{let f=[{ip:a,isp:"\u539F\u751F\u5730\u5740"}];n.push(...I(f,e,a))}}let s=U.length>0||N.length>0;if(!Q)if(s){if(U.length>0&&n.push(...I(U,e,a)),N.length>0){let i=N.map(r=>({ip:r.domain,isp:r.name||r.domain}));n.push(...I(i,e,a))}}else{let i=le.map(r=>({ip:r.domain,isp:r.name||r.domain}));n.push(...I(i,e,a));try{let r=await ve();r.length>0&&n.push(...I(r,e,a))}catch{h||(h=await B(t));let f=await D(h);if(f){x=f.domain,E=f.port.toString();let m=[{ip:x,isp:"ProxyIP-"+h}];n.push(...I(m,e,a))}}try{let r=await De();r.length>0&&n.push(...Ae(r,e,a))}catch{h||(h=await B(t));let f=await D(h);if(f){x=f.domain,E=f.port.toString();let m=[{ip:x,isp:"ProxyIP-"+h}];n.push(...I(m,e,a))}}}if(n.length===0){let f=`${atob("dmxlc3M=")}://00000000-0000-0000-0000-000000000000@127.0.0.1:80?encryption=none&security=none&type=ws&host=error.com&path=%2F#${encodeURIComponent("\u6240\u6709\u8282\u70B9\u83B7\u53D6\u5931\u8D25")}`;n.push(f)}let p,c="text/plain; charset=utf-8";switch(d.toLowerCase()){case atob("Y2xhc2g="):case atob("Y2xhc2hy"):p=await generateClashConfig(n),c="text/yaml; charset=utf-8";break;case atob("c3VyZ2Uy"):case atob("c3VyZ2Uz"):case atob("c3VyZ2U0"):p=generateSurgeConfig(n);break;case atob("cXVhbnR1bXVsdA=="):case atob("cXVhbnR1bXVsdHg="):p=generateQuantumultConfig(n);break;case atob("c3M="):case atob("c3Ny"):p=generateSSConfig(n);break;case atob("djJyYXk="):p=generateV2RayConfig(n);break;case atob("bG9vbg=="):p=generateLoonConfig(n);break;default:p=btoa(n.join(`
`))}return new Response(p,{headers:{"Content-Type":c,"Cache-Control":"no-store, no-cache, must-revalidate, max-age=0"}})}function I(t,e,o){let n=[80,8080,8880,2052,2082,2086,2095],a=[443,2053,2083,2087,2096,8443],d=[443],s=K?[]:[80],p=[],c=encodeURIComponent("/?ed=2048"),i=atob("dmxlc3M=");return t.forEach(r=>{let f=r.isp.replace(/\s/g,"_"),m=r.ip.includes(":")?`[${r.ip}]`:r.ip,u=[];if(r.port){let l=r.port;a.includes(l)?u.push({port:l,tls:!0}):n.includes(l)?K||u.push({port:l,tls:!1}):u.push({port:l,tls:!0})}else d.forEach(l=>{u.push({port:l,tls:!0})}),s.forEach(l=>{u.push({port:l,tls:!1})});u.forEach(({port:l,tls:g})=>{if(g){let y=`${f}-${l}-WS-TLS`,S=new URLSearchParams({encryption:"none",security:"tls",sni:o,fp:"chrome",type:"ws",host:o,path:c});p.push(`${i}://${e}@${m}:${l}?${S.toString()}#${encodeURIComponent(y)}`)}else{let y=`${f}-${l}-WS`,S=new URLSearchParams({encryption:"none",security:"none",type:"ws",host:o,path:c});p.push(`${i}://${e}@${m}:${l}?${S.toString()}#${encodeURIComponent(y)}`)}})}),p}async function ve(){let t="https://www.wetest.vip/page/cloudflare/address_v4.html",e="https://www.wetest.vip/page/cloudflare/address_v6.html",o=[];try{let[n,a]=await Promise.all([Y(t),Y(e)]);if(o=[...n,...a],o.length>0)return o}catch(n){console.error("Failed to fetch from wetest.vip:",n)}return[]}async function Y(t){try{let e=await fetch(t,{headers:{"User-Agent":"Mozilla/5.0"}});if(!e.ok)return console.error(`Failed to fetch ${t}, status: ${e.status}`),[];let o=await e.text(),n=[],a=/<tr[\s\S]*?<\/tr>/g,d=/<td data-label="线路名称">(.+?)<\/td>[\s\S]*?<td data-label="优选地址">([\d.:a-fA-F]+)<\/td>/,s;for(;(s=a.exec(o))!==null;){let c=s[0].match(d);c&&c[1]&&c[2]&&n.push({isp:c[1].trim().replace(/<.*?>/g,""),ip:c[2].trim()})}return n.length===0&&console.warn(`Warning: Could not parse any IPs from ${t}. The site structure might have changed.`),n}catch(e){return console.error(`Error parsing ${t}:`,e),[]}}async function Pe(t){let e=new WebSocketPair,[o,n]=Object.values(e);n.accept();let a={socket:null},d=!1,s=t.headers.get("sec-websocket-protocol")||"";return Te(n,s).pipeTo(new WritableStream({async write(c){if(d)return await Z(c,n,null);if(a.socket){let T=a.socket.writable.getWriter();await T.write(c),T.releaseLock();return}let{hasError:i,message:r,addressType:f,port:m,hostname:u,rawIndex:l,version:g,isUDP:y}=Re(c,C);if(i)throw new Error(r);if(y)if(m===53)d=!0;else throw new Error(fe);let S=new Uint8Array([g[0],0]),R=c.slice(l);if(d)return Z(R,n,S);await Ee(f,u,m,R,n,S,a)}})).catch(c=>{}),new Response(null,{status:101,webSocket:o})}async function Ee(t,e,o,n,a,d,s){async function p(i,r,f=!1){let m=f?await Le(t,i,r):j({hostname:i,port:r}),u=m.writable.getWriter();return await u.write(n),u.releaseLock(),m}async function c(){if(z&&M)try{let i=await p(e,o,!0);s.socket=i,i.closed.catch(()=>{}).finally(()=>P(a)),O(i,a,d,null);return}catch{let r=await D(h),f=r?r.domain:x||e,m=r?r.port:parseInt(E,10)||o;try{let u=await p(f,m,!1);s.socket=u,u.closed.catch(()=>{}).finally(()=>P(a)),O(u,a,d,null)}catch{P(a)}}else{let i=await D(h),r=i?i.domain:x||e,f=i?i.port:parseInt(E,10)||o;try{let m=await p(r,f,M);s.socket=m,m.closed.catch(()=>{}).finally(()=>P(a)),O(m,a,d,null)}catch{P(a)}}}try{let i=await p(e,o,z?!1:M);s.socket=i,O(i,a,d,c)}catch{c()}}function Re(t,e){if(t.byteLength<24)return{hasError:!0,message:ce};let o=new Uint8Array(t.slice(0,1));if(Me(new Uint8Array(t.slice(1,17)))!==e)return{hasError:!0,message:de};let n=new Uint8Array(t.slice(17,18))[0],a=new Uint8Array(t.slice(18+n,19+n))[0],d=!1;if(a!==1)if(a===2)d=!0;else return{hasError:!0,message:pe};let s=19+n,p=new DataView(t.slice(s,s+2)).getUint16(0),c=s+2,i=0,r=c+1,f="",m=new Uint8Array(t.slice(c,r))[0];switch(m){case ne:i=4,f=new Uint8Array(t.slice(r,r+i)).join(".");break;case oe:i=new Uint8Array(t.slice(r,r+1))[0],r+=1,f=new TextDecoder().decode(t.slice(r,r+i));break;case ae:i=16;let u=[],l=new DataView(t.slice(r,r+i));for(let g=0;g<8;g++)u.push(l.getUint16(g*2).toString(16));f=u.join(":");break;default:return{hasError:!0,message:`${ee}: ${m}`}}return f?{hasError:!1,addressType:m,port:p,hostname:f,isUDP:d,rawIndex:r+i,version:o}:{hasError:!0,message:`${ue}: ${m}`}}function Te(t,e){let o=!1;return new ReadableStream({start(n){t.addEventListener("message",s=>{o||n.enqueue(s.data)}),t.addEventListener("close",()=>{o||(P(t),n.close())}),t.addEventListener("error",s=>n.error(s));let{earlyData:a,error:d}=Be(e);d?n.error(d):a&&n.enqueue(a)},cancel(){o=!0,P(t)}})}async function O(t,e,o,n){let a=o,d=!1;await t.readable.pipeTo(new WritableStream({async write(s,p){d=!0,e.readyState!==1&&p.error(me),a?(e.send(await new Blob([a,s]).arrayBuffer()),a=null):e.send(s)},abort(s){console.error("Readable aborted:",s)}})).catch(s=>{console.error("Stream connection error:",s),P(e)}),!d&&n&&n()}async function Z(t,e,o){try{let n=j({hostname:"8.8.4.4",port:53}),a=o,d=n.writable.getWriter();await d.write(t),d.releaseLock(),await n.readable.pipeTo(new WritableStream({async write(s){e.readyState===1&&(a?(e.send(await new Blob([a,s]).arrayBuffer()),a=null):e.send(s))}}))}catch(n){console.error(`DNS forward error: ${n.message}`)}}async function Le(t,e,o){let{username:n,password:a,hostname:d,socksPort:s}=te,p=j({hostname:d,port:s}),c=p.writable.getWriter();await c.write(new Uint8Array(n?[5,2,0,2]:[5,1,0]));let i=p.readable.getReader(),r=(await i.read()).value;if(r[0]!==5||r[1]===255)throw new Error(ye);if(r[1]===2){if(!n||!a)throw new Error(he);let u=new TextEncoder,l=new Uint8Array([1,n.length,...u.encode(n),a.length,...u.encode(a)]);if(await c.write(l),r=(await i.read()).value,r[0]!==1||r[1]!==0)throw new Error(be)}let f=new TextEncoder,m;switch(t){case ne:m=new Uint8Array([1,...e.split(".").map(Number)]);break;case oe:m=new Uint8Array([3,e.length,...f.encode(e)]);break;case ae:m=new Uint8Array([4,...e.split(":").flatMap(u=>[parseInt(u.slice(0,2),16),parseInt(u.slice(2),16)])]);break;default:throw new Error(ee)}if(await c.write(new Uint8Array([5,1,0,...m,o>>8,o&255])),r=(await i.read()).value,r[1]!==0)throw new Error(xe);return c.releaseLock(),i.releaseLock(),p}function Ue(t){let[e,o]=t.split("@").reverse(),n,a,d,s;if(o){let c=o.split(":");if(c.length!==2)throw new Error(H);[n,a]=c}let p=e.split(":");if(s=Number(p.pop()),isNaN(s))throw new Error(H);if(d=p.join(":"),d.includes(":")&&!/^\[.*\]$/.test(d))throw new Error(H);return{username:n,password:a,hostname:d,socksPort:s}}async function Ne(t,e=null){e||(e=C);let o=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\u8BA2\u9605\u4E2D\u5FC3</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: "Courier New", monospace;
            background: #000; color: #00ff00; min-height: 100vh;
            overflow-x: hidden; position: relative;
        }
        .matrix-bg {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(45deg, #000 0%, #001100 50%, #000 100%);
            z-index: -1;
            animation: bg-pulse 8s ease-in-out infinite;
        }
        @keyframes bg-pulse {
            0%, 100% { background: linear-gradient(45deg, #000 0%, #001100 50%, #000 100%); }
            50% { background: linear-gradient(45deg, #000 0%, #002200 50%, #000 100%); }
        }
        .matrix-rain {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px);
            animation: matrix-fall 20s linear infinite;
            z-index: -1;
        }
        @keyframes matrix-fall {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
        }
        .matrix-code-rain {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: -1;
            overflow: hidden;
        }
        .matrix-column {
            position: absolute; top: -100%; left: 0;
            color: #00ff00; font-family: "Courier New", monospace;
            font-size: 14px; line-height: 1.2;
            animation: matrix-drop 15s linear infinite;
            text-shadow: 0 0 5px #00ff00;
        }
        @keyframes matrix-drop {
            0% { top: -100%; opacity: 1; }
            10% { opacity: 1; }
            90% { opacity: 0.3; }
            100% { top: 100vh; opacity: 0; }
        }
        .matrix-column:nth-child(odd) {
            animation-duration: 12s;
            animation-delay: -2s;
        }
        .matrix-column:nth-child(even) {
            animation-duration: 18s;
            animation-delay: -5s;
        }
        .matrix-column:nth-child(3n) {
            animation-duration: 20s;
            animation-delay: -8s;
        }
        .container { max-width: 900px; margin: 0 auto; padding: 20px; position: relative; z-index: 1; }
        .header { text-align: center; margin-bottom: 40px; }
        .title {
            font-size: 3.5rem; font-weight: bold;
            text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00;
            margin-bottom: 10px;
            animation: matrix-glow 1.5s ease-in-out infinite alternate, matrix-pulse 3s ease-in-out infinite;
            position: relative;
            background: linear-gradient(45deg, #00ff00, #00aa00, #00ff00);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        @keyframes matrix-glow {
            from { text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00; }
            to { text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 50px #00ff00; }
        }
        @keyframes matrix-pulse {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        .subtitle { color: #00aa00; margin-bottom: 30px; font-size: 1.2rem; }
        .card {
            background: rgba(0, 20, 0, 0.9);
            border: 2px solid #00ff00;
            border-radius: 0; padding: 30px; margin-bottom: 20px;
            box-shadow: 0 0 30px rgba(0, 255, 0, 0.5), inset 0 0 20px rgba(0, 255, 0, 0.1);
            position: relative;
            backdrop-filter: blur(10px);
            animation: card-glow 4s ease-in-out infinite;
        }
        @keyframes card-glow {
            0%, 100% { box-shadow: 0 0 30px rgba(0, 255, 0, 0.5), inset 0 0 20px rgba(0, 255, 0, 0.1); }
            50% { box-shadow: 0 0 40px rgba(0, 255, 0, 0.7), inset 0 0 30px rgba(0, 255, 0, 0.2); }
        }
        .card::before {
            content: ""; position: absolute; top: 0; left: 0;
            width: 100%; height: 100%;
            background: linear-gradient(45deg, transparent 49%, #00ff00 50%, transparent 51%);
            opacity: 0.2; pointer-events: none;
            animation: scan-line 3s linear infinite;
        }
        @keyframes scan-line {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .card-title {
            font-size: 1.8rem; margin-bottom: 20px;
            color: #00ff00; text-shadow: 0 0 5px #00ff00;
        }
        .client-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 15px; margin: 20px 0;
        }
        .client-btn {
            background: rgba(0, 20, 0, 0.8);
            border: 2px solid #00ff00;
            padding: 15px 20px; color: #00ff00;
            font-family: "Courier New", monospace; font-weight: bold;
            cursor: pointer; transition: all 0.4s ease;
            text-align: center; position: relative;
            overflow: hidden;
            text-shadow: 0 0 5px #00ff00;
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
        }
        .client-btn::before {
            content: ""; position: absolute; top: 0; left: -100%;
            width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0,255,0,0.4), transparent);
            transition: left 0.6s ease;
        }
        .client-btn::after {
            content: ""; position: absolute; top: 0; left: 0;
            width: 100%; height: 100%;
            background: linear-gradient(45deg, transparent 30%, rgba(0,255,0,0.1) 50%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .client-btn:hover::before { left: 100%; }
        .client-btn:hover::after { opacity: 1; }
        .client-btn:hover {
            background: rgba(0, 255, 0, 0.3);
            box-shadow: 0 0 25px #00ff00, 0 0 35px rgba(0, 255, 0, 0.5);
            transform: translateY(-3px) scale(1.05);
            text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
        }
        .generate-btn {
            background: rgba(0, 255, 0, 0.15);
            border: 2px solid #00ff00; padding: 15px 30px;
            color: #00ff00; font-family: "Courier New", monospace;
            font-weight: bold; cursor: pointer;
            transition: all 0.4s ease; margin-right: 15px;
            text-shadow: 0 0 8px #00ff00;
            box-shadow: 0 0 15px rgba(0, 255, 0, 0.4);
            position: relative;
            overflow: hidden;
        }
        .generate-btn::before {
            content: ""; position: absolute; top: 0; left: -100%;
            width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0,255,0,0.5), transparent);
            transition: left 0.8s ease;
        }
        .generate-btn:hover::before { left: 100%; }
        .generate-btn:hover {
            background: rgba(0, 255, 0, 0.4);
            box-shadow: 0 0 30px #00ff00, 0 0 40px rgba(0, 255, 0, 0.6);
            transform: translateY(-4px) scale(1.08);
            text-shadow: 0 0 15px #00ff00, 0 0 25px #00ff00;
        }
        .subscription-url {
            background: rgba(0, 0, 0, 0.9);
            border: 2px solid #00ff00; padding: 15px;
            word-break: break-all; font-family: "Courier New", monospace;
            color: #00ff00; margin-top: 20px; display: none;
            box-shadow: inset 0 0 15px rgba(0, 255, 0, 0.4), 0 0 20px rgba(0, 255, 0, 0.3);
            border-radius: 5px;
            animation: url-glow 2s ease-in-out infinite alternate;
            position: relative;
            overflow: hidden;
        }
        @keyframes url-glow {
            from { box-shadow: inset 0 0 15px rgba(0, 255, 0, 0.4), 0 0 20px rgba(0, 255, 0, 0.3); }
            to { box-shadow: inset 0 0 20px rgba(0, 255, 0, 0.6), 0 0 30px rgba(0, 255, 0, 0.5); }
        }
        .subscription-url::before {
            content: ""; position: absolute; top: 0; left: -100%;
            width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0,255,0,0.1), transparent);
            animation: url-scan 3s linear infinite;
        }
        @keyframes url-scan {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        .matrix-text {
            position: fixed; top: 20px; right: 20px;
            color: #00ff00; font-family: "Courier New", monospace;
            font-size: 0.8rem; opacity: 0.6;
            animation: matrix-flicker 3s infinite;
        }
        @keyframes matrix-flicker {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
    </style>
</head>
<body>
    <div class="matrix-bg"></div>
    <div class="matrix-rain"></div>
    <div class="matrix-code-rain" id="matrixCodeRain"></div>
    <div class="matrix-text">\u4EE3\u7406\u8BA2\u9605\u4E2D\u5FC3 v1.1</div>
    <div class="container">
        <div class="header">
            <h1 class="title">\u4EE3\u7406\u8BA2\u9605\u4E2D\u5FC3</h1>
            <p class="subtitle">\u591A\u5BA2\u6237\u7AEF\u652F\u6301 \u2022 \u667A\u80FD\u4F18\u9009 \u2022 \u4E00\u952E\u751F\u6210</p>
        </div>
        <div class="card">
            <h2 class="card-title">[ \u9009\u62E9\u5BA2\u6237\u7AEF ]</h2>
            <div class="client-grid">
                <button class="client-btn" onclick="generateClientLink(atob('Y2xhc2g='))">CLASH</button>
                <button class="client-btn" onclick="generateClientLink(atob('c3VyZ2U='))">SURGE</button>
                <button class="client-btn" onclick="generateClientLink(atob('c2luZ2JveA=='))">SING-BOX</button>
                <button class="client-btn" onclick="generateClientLink(atob('bG9vbg=='))">LOON</button>
                <button class="client-btn" onclick="generateClientLink(atob('djJyYXk='))">V2RAY</button>
            </div>
            <div class="subscription-url" id="clientSubscriptionUrl"></div>
        </div>
        <div class="card">
            <h2 class="card-title">[ \u5FEB\u901F\u83B7\u53D6 ]</h2>
            <button class="generate-btn" onclick="getBase64Subscription()">\u83B7\u53D6\u8BA2\u9605\u94FE\u63A5</button>
            <div class="subscription-url" id="base64SubscriptionUrl"></div>
        </div>
        <div class="card">
            <h2 class="card-title">[ \u7CFB\u7EDF\u72B6\u6001 ]</h2>
            <div id="systemStatus" style="margin: 20px 0; padding: 15px; background: rgba(0, 20, 0, 0.8); border: 2px solid #00ff00; box-shadow: 0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 15px rgba(0, 255, 0, 0.1); position: relative; overflow: hidden;">
                <div style="color: #00ff00; margin-bottom: 15px; font-weight: bold; text-shadow: 0 0 5px #00ff00;">[ \u7CFB\u7EDF\u68C0\u6D4B\u4E2D... ]</div>
                <div id="regionStatus" style="margin: 8px 0; color: #00ff00; font-family: 'Courier New', monospace; text-shadow: 0 0 3px #00ff00;">Worker\u5730\u533A: \u68C0\u6D4B\u4E2D...</div>
                <div id="geoInfo" style="margin: 8px 0; color: #00aa00; font-family: 'Courier New', monospace; font-size: 0.9rem; text-shadow: 0 0 3px #00aa00;">\u68C0\u6D4B\u65B9\u5F0F: \u68C0\u6D4B\u4E2D...</div>
                <div id="backupStatus" style="margin: 8px 0; color: #00ff00; font-family: 'Courier New', monospace; text-shadow: 0 0 3px #00ff00;">ProxyIP\u72B6\u6001: \u68C0\u6D4B\u4E2D...</div>
                <div id="currentIP" style="margin: 8px 0; color: #00ff00; font-family: 'Courier New', monospace; text-shadow: 0 0 3px #00ff00;">\u5F53\u524D\u4F7F\u7528IP: \u68C0\u6D4B\u4E2D...</div>
                <div id="regionMatch" style="margin: 8px 0; color: #00ff00; font-family: 'Courier New', monospace; text-shadow: 0 0 3px #00ff00;">\u5730\u533A\u5339\u914D: \u68C0\u6D4B\u4E2D...</div>
                <div id="selectionLogic" style="margin: 8px 0; color: #00aa00; font-family: 'Courier New', monospace; font-size: 0.9rem; text-shadow: 0 0 3px #00aa00;">\u9009\u62E9\u903B\u8F91: \u540C\u5730\u533A \u2192 \u90BB\u8FD1\u5730\u533A \u2192 \u5176\u4ED6\u5730\u533A</div>
            </div>
        </div>
        <div class="card" id="configCard" style="display: none;">
            <h2 class="card-title">[ \u914D\u7F6E\u7BA1\u7406 ]</h2>
            <div id="kvStatus" style="margin-bottom: 20px; padding: 10px; background: rgba(0, 20, 0, 0.8); border: 1px solid #00ff00; color: #00ff00;">
                \u68C0\u6D4BKV\u72B6\u6001\u4E2D...
            </div>
            <div id="configContent" style="display: none;">
                <form id="regionForm" style="margin-bottom: 20px;">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; color: #00ff00; font-weight: bold; text-shadow: 0 0 3px #00ff00;">\u6307\u5B9A\u5730\u533A (wk):</label>
                        <select id="wkRegion" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00ff00; color: #00ff00; font-family: 'Courier New', monospace; font-size: 14px;">
                            <option value="">\u81EA\u52A8\u68C0\u6D4B</option>
                            <option value="US">\u{1F1FA}\u{1F1F8} \u7F8E\u56FD</option>
                            <option value="SG">\u{1F1F8}\u{1F1EC} \u65B0\u52A0\u5761</option>
                            <option value="JP">\u{1F1EF}\u{1F1F5} \u65E5\u672C</option>
                            <option value="HK">\u{1F1ED}\u{1F1F0} \u9999\u6E2F</option>
                            <option value="KR">\u{1F1F0}\u{1F1F7} \u97E9\u56FD</option>
                            <option value="DE">\u{1F1E9}\u{1F1EA} \u5FB7\u56FD</option>
                            <option value="SE">\u{1F1F8}\u{1F1EA} \u745E\u5178</option>
                            <option value="NL">\u{1F1F3}\u{1F1F1} \u8377\u5170</option>
                            <option value="FI">\u{1F1EB}\u{1F1EE} \u82AC\u5170</option>
                            <option value="GB">\u{1F1EC}\u{1F1E7} \u82F1\u56FD</option>
                        </select>
                        <small id="wkRegionHint" style="color: #00aa00; font-size: 0.85rem; display: none;">\u26A0\uFE0F \u4F7F\u7528\u81EA\u5B9A\u4E49ProxyIP\u65F6\uFF0C\u5730\u533A\u9009\u62E9\u5DF2\u7981\u7528</small>
                    </div>
                    <button type="submit" style="background: rgba(0, 255, 0, 0.15); border: 2px solid #00ff00; padding: 12px 24px; color: #00ff00; font-family: 'Courier New', monospace; font-weight: bold; cursor: pointer; margin-right: 10px; text-shadow: 0 0 8px #00ff00; transition: all 0.4s ease;">\u4FDD\u5B58\u5730\u533A\u914D\u7F6E</button>
                </form>
                <form id="otherConfigForm" style="margin-bottom: 20px;">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; color: #00ff00; font-weight: bold; text-shadow: 0 0 3px #00ff00;">\u81EA\u5B9A\u4E49ProxyIP (p):</label>
                        <input type="text" id="customIP" placeholder="\u4F8B\u5982: 1.2.3.4:443" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00ff00; color: #00ff00; font-family: 'Courier New', monospace; font-size: 14px;">
                        <small style="color: #00aa00; font-size: 0.85rem;">\u81EA\u5B9A\u4E49ProxyIP\u5730\u5740\u548C\u7AEF\u53E3</small>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; color: #00ff00; font-weight: bold; text-shadow: 0 0 3px #00ff00;">\u4F18\u9009IP\u5217\u8868 (yx):</label>
                        <input type="text" id="preferredIPs" placeholder="\u4F8B\u5982: 1.2.3.4:443#\u9999\u6E2F\u8282\u70B9,5.6.7.8:80#\u7F8E\u56FD\u8282\u70B9,example.com:8443#\u65B0\u52A0\u5761\u8282\u70B9" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00ff00; color: #00ff00; font-family: 'Courier New', monospace; font-size: 14px;">
                        <small style="color: #00aa00; font-size: 0.85rem;">\u683C\u5F0F: IP:\u7AEF\u53E3#\u8282\u70B9\u540D\u79F0 \u6216 IP:\u7AEF\u53E3 (\u65E0#\u5219\u4F7F\u7528\u9ED8\u8BA4\u540D\u79F0)\u3002\u652F\u6301\u591A\u4E2A\uFF0C\u7528\u9017\u53F7\u5206\u9694\u3002<span style="color: #ffaa00;">API\u6DFB\u52A0\u7684IP\u4F1A\u81EA\u52A8\u663E\u793A\u5728\u8FD9\u91CC\u3002</span></small>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; color: #00ff00; font-weight: bold; text-shadow: 0 0 3px #00ff00;">\u4F18\u9009IP\u6765\u6E90URL (yxURL):</label>
                        <input type="text" id="preferredIPsURL" placeholder="\u9ED8\u8BA4: https://raw.githubusercontent.com/qwer-search/bestip/refs/heads/main/kejilandbestip.txt" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00ff00; color: #00ff00; font-family: 'Courier New', monospace; font-size: 14px;">
                        <small style="color: #00aa00; font-size: 0.85rem;">\u81EA\u5B9A\u4E49\u4F18\u9009IP\u5217\u8868\u6765\u6E90URL\uFF0C\u7559\u7A7A\u5219\u4F7F\u7528\u9ED8\u8BA4\u5730\u5740</small>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; color: #00ff00; font-weight: bold; text-shadow: 0 0 3px #00ff00;">SOCKS5\u914D\u7F6E (s):</label>
                        <input type="text" id="socksConfig" placeholder="\u4F8B\u5982: user:pass@host:port \u6216 host:port" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00ff00; color: #00ff00; font-family: 'Courier New', monospace; font-size: 14px;">
                        <small style="color: #00aa00; font-size: 0.85rem;">SOCKS5\u4EE3\u7406\u5730\u5740\uFF0C\u7528\u4E8E\u8F6C\u53D1\u6240\u6709\u51FA\u7AD9\u6D41\u91CF</small>
                    </div>
                    <button type="submit" style="background: rgba(0, 255, 0, 0.15); border: 2px solid #00ff00; padding: 12px 24px; color: #00ff00; font-family: 'Courier New', monospace; font-weight: bold; cursor: pointer; margin-right: 10px; text-shadow: 0 0 8px #00ff00; transition: all 0.4s ease;">\u4FDD\u5B58\u914D\u7F6E</button>
                </form>
                
                <h3 style="color: #00ff00; margin: 20px 0 15px 0; font-size: 1.2rem;">\u9AD8\u7EA7\u63A7\u5236</h3>
                <form id="advancedConfigForm" style="margin-bottom: 20px;">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; color: #00ff00; font-weight: bold; text-shadow: 0 0 3px #00ff00;">\u5141\u8BB8API\u7BA1\u7406 (apiEnabled):</label>
                        <select id="apiEnabled" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00ff00; color: #00ff00; font-family: 'Courier New', monospace; font-size: 14px;">
                            <option value="">\u9ED8\u8BA4\uFF08\u5173\u95EDAPI\uFF09</option>
                            <option value="yes">\u5F00\u542FAPI\u7BA1\u7406</option>
                        </select>
                        <small style="color: #ffaa00; font-size: 0.85rem;">\u26A0\uFE0F \u5B89\u5168\u63D0\u9192\uFF1A\u5F00\u542F\u540E\u5141\u8BB8\u901A\u8FC7API\u52A8\u6001\u6DFB\u52A0\u4F18\u9009IP\u3002\u5EFA\u8BAE\u4EC5\u5728\u9700\u8981\u65F6\u5F00\u542F\u3002</small>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; color: #00ff00; font-weight: bold; text-shadow: 0 0 3px #00ff00;">\u5730\u533A\u5339\u914D (rm):</label>
                        <select id="regionMatching" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00ff00; color: #00ff00; font-family: 'Courier New', monospace; font-size: 14px;">
                            <option value="">\u9ED8\u8BA4\uFF08\u542F\u7528\u5730\u533A\u5339\u914D\uFF09</option>
                            <option value="no">\u5173\u95ED\u5730\u533A\u5339\u914D</option>
                        </select>
                        <small style="color: #00aa00; font-size: 0.85rem;">\u8BBE\u7F6E\u4E3A"\u5173\u95ED"\u65F6\u4E0D\u8FDB\u884C\u5730\u533A\u667A\u80FD\u5339\u914D</small>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; color: #00ff00; font-weight: bold; text-shadow: 0 0 3px #00ff00;">\u964D\u7EA7\u63A7\u5236 (qj):</label>
                        <select id="downgradeControl" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00ff00; color: #00ff00; font-family: 'Courier New', monospace; font-size: 14px;">
                            <option value="">\u9ED8\u8BA4\uFF08\u4E0D\u542F\u7528\u964D\u7EA7\uFF09</option>
                            <option value="no">\u542F\u7528\u964D\u7EA7\u6A21\u5F0F</option>
                        </select>
                        <small style="color: #00aa00; font-size: 0.85rem;">\u8BBE\u7F6E\u4E3A"\u542F\u7528"\u65F6\uFF1ACF\u76F4\u8FDE\u5931\u8D25\u2192SOCKS5\u8FDE\u63A5\u2192fallback\u5730\u5740</small>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; color: #00ff00; font-weight: bold; text-shadow: 0 0 3px #00ff00;">TLS\u63A7\u5236 (dkby):</label>
                        <select id="portControl" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00ff00; color: #00ff00; font-family: 'Courier New', monospace; font-size: 14px;">
                            <option value="">\u9ED8\u8BA4\uFF08\u4FDD\u7559\u6240\u6709\u8282\u70B9\uFF09</option>
                            <option value="yes">\u4EC5TLS\u8282\u70B9</option>
                        </select>
                        <small style="color: #00aa00; font-size: 0.85rem;">\u8BBE\u7F6E\u4E3A"\u4EC5TLS\u8282\u70B9"\u65F6\u53EA\u751F\u6210\u5E26TLS\u7684\u8282\u70B9\uFF0C\u4E0D\u751F\u6210\u975ETLS\u8282\u70B9\uFF08\u598280\u7AEF\u53E3\uFF09</small>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; color: #00ff00; font-weight: bold; text-shadow: 0 0 3px #00ff00;">\u4F18\u9009\u63A7\u5236 (yxby):</label>
                        <select id="preferredControl" style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00ff00; color: #00ff00; font-family: 'Courier New', monospace; font-size: 14px;">
                            <option value="">\u9ED8\u8BA4\uFF08\u542F\u7528\u4F18\u9009\uFF09</option>
                            <option value="yes">\u5173\u95ED\u4F18\u9009</option>
                        </select>
                        <small style="color: #00aa00; font-size: 0.85rem;">\u8BBE\u7F6E\u4E3A"\u5173\u95ED\u4F18\u9009"\u65F6\u53EA\u4F7F\u7528\u539F\u751F\u5730\u5740\uFF0C\u4E0D\u751F\u6210\u4F18\u9009IP\u548C\u57DF\u540D\u8282\u70B9</small>
                    </div>
                    <button type="submit" style="background: rgba(0, 255, 0, 0.15); border: 2px solid #00ff00; padding: 12px 24px; color: #00ff00; font-family: 'Courier New', monospace; font-weight: bold; cursor: pointer; margin-right: 10px; text-shadow: 0 0 8px #00ff00; transition: all 0.4s ease;">\u4FDD\u5B58\u9AD8\u7EA7\u914D\u7F6E</button>
                </form>
                <div id="currentConfig" style="background: rgba(0, 0, 0, 0.9); border: 1px solid #00ff00; padding: 15px; margin: 10px 0; font-family: 'Courier New', monospace; color: #00ff00;">
                    \u52A0\u8F7D\u4E2D...
                </div>
                <button onclick="loadCurrentConfig()" style="background: rgba(0, 255, 0, 0.15); border: 2px solid #00ff00; padding: 12px 24px; color: #00ff00; font-family: 'Courier New', monospace; font-weight: bold; cursor: pointer; margin-right: 10px; text-shadow: 0 0 8px #00ff00; transition: all 0.4s ease;">\u5237\u65B0\u914D\u7F6E</button>
                <button onclick="resetAllConfig()" style="background: rgba(255, 0, 0, 0.15); border: 2px solid #ff0000; padding: 12px 24px; color: #ff0000; font-family: 'Courier New', monospace; font-weight: bold; cursor: pointer; text-shadow: 0 0 8px #ff0000; transition: all 0.4s ease;">\u91CD\u7F6E\u914D\u7F6E</button>
            </div>
            <div id="statusMessage" style="display: none; padding: 10px; margin: 10px 0; border: 1px solid #00ff00; background: rgba(0, 20, 0, 0.8); color: #00ff00; text-shadow: 0 0 5px #00ff00;"></div>
        </div>
        
        <div class="card">
            <h2 class="card-title">[ \u76F8\u5173\u94FE\u63A5 ]</h2>
            <div style="text-align: center; margin: 20px 0;">
                <a href="https://github.com/byJoey/cfnew" target="_blank" style="color: #00ff00; text-decoration: none; margin: 0 20px; font-size: 1.2rem; text-shadow: 0 0 5px #00ff00;">GitHub \u9879\u76EE</a>
                <a href="https://www.youtube.com/@joeyblog" target="_blank" style="color: #00ff00; text-decoration: none; margin: 0 20px; font-size: 1.2rem; text-shadow: 0 0 5px #00ff00;">YouTube @joeyblog</a>
            </div>
        </div>
    </div>
    <script>
        function generateClientLink(clientType) {
            var currentUrl = window.location.href;
            var subscriptionUrl = currentUrl + "/sub";
            
            if (clientType === atob('djJyYXk=')) {
                document.getElementById("clientSubscriptionUrl").textContent = subscriptionUrl;
                document.getElementById("clientSubscriptionUrl").style.display = "block";
                navigator.clipboard.writeText(subscriptionUrl).then(function() {
                    alert("V2Ray \u8BA2\u9605\u94FE\u63A5\u5DF2\u590D\u5236");
                });
            } else {
                var encodedUrl = encodeURIComponent(subscriptionUrl);
                var apiUrl = "https://s.jhb.edu.kg/sub?target=" + clientType + "&url=" + encodedUrl + "&insert=false";
                document.getElementById("clientSubscriptionUrl").textContent = apiUrl;
                document.getElementById("clientSubscriptionUrl").style.display = "block";
                navigator.clipboard.writeText(apiUrl).then(function() {
                    var displayName = clientType.toUpperCase();
                    if (clientType === atob('c3VyZ2U=')) displayName = 'SURGE';
                    if (clientType === atob('c2luZ2JveA==')) displayName = 'SING-BOX';
                    alert(displayName + " \u8BA2\u9605\u94FE\u63A5\u5DF2\u590D\u5236");
                });
            }
        }
        function getBase64Subscription() {
            var currentUrl = window.location.href;
            var subscriptionUrl = currentUrl + "/sub";
            
            fetch(subscriptionUrl)
                .then(function(response) {
                    return response.text();
                })
                .then(function(base64Content) {
                    document.getElementById("base64SubscriptionUrl").textContent = base64Content;
                    document.getElementById("base64SubscriptionUrl").style.display = "block";
                    navigator.clipboard.writeText(base64Content).then(function() {
                        alert("Base64\u8BA2\u9605\u5185\u5BB9\u5DF2\u590D\u5236");
                    });
                })
                .catch(function(error) {
                    console.error("\u83B7\u53D6\u8BA2\u9605\u5931\u8D25:", error);
                    alert("\u83B7\u53D6\u8BA2\u9605\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
                });
        }
        
        function createMatrixRain() {
            const matrixContainer = document.getElementById('matrixCodeRain');
            const matrixChars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const columns = Math.floor(window.innerWidth / 18);
            
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.className = 'matrix-column';
                column.style.left = (i * 18) + 'px';
                column.style.animationDelay = Math.random() * 15 + 's';
                column.style.animationDuration = (Math.random() * 15 + 8) + 's';
                column.style.fontSize = (Math.random() * 4 + 12) + 'px';
                column.style.opacity = Math.random() * 0.8 + 0.2;
                
                let text = '';
                const charCount = Math.floor(Math.random() * 30 + 20);
                for (let j = 0; j < charCount; j++) {
                    const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                    const brightness = Math.random() > 0.1 ? '#00ff00' : '#00aa00';
                    text += '<span style="color: ' + brightness + ';">' + char + '</span><br>';
                }
                column.innerHTML = text;
                matrixContainer.appendChild(column);
            }
            
            setInterval(function() {
                const columns = matrixContainer.querySelectorAll('.matrix-column');
                columns.forEach(function(column) {
                    if (Math.random() > 0.95) {
                        const chars = column.querySelectorAll('span');
                        if (chars.length > 0) {
                            const randomChar = chars[Math.floor(Math.random() * chars.length)];
                            randomChar.style.color = '#ffffff';
                            setTimeout(function() {
                                randomChar.style.color = '#00ff00';
                            }, 200);
                        }
                    }
                });
            }, 100);
        }
        
        async function checkSystemStatus() {
            try {
                const cfStatus = document.getElementById('cfStatus');
                const regionStatus = document.getElementById('regionStatus');
                const geoInfo = document.getElementById('geoInfo');
                const backupStatus = document.getElementById('backupStatus');
                const currentIP = document.getElementById('currentIP');
                const regionMatch = document.getElementById('regionMatch');
                
                const regionNames = {
                    'US': '\u{1F1FA}\u{1F1F8} \u7F8E\u56FD', 'SG': '\u{1F1F8}\u{1F1EC} \u65B0\u52A0\u5761', 'JP': '\u{1F1EF}\u{1F1F5} \u65E5\u672C', 'HK': '\u{1F1ED}\u{1F1F0} \u9999\u6E2F',
                    'KR': '\u{1F1F0}\u{1F1F7} \u97E9\u56FD', 'DE': '\u{1F1E9}\u{1F1EA} \u5FB7\u56FD', 'SE': '\u{1F1F8}\u{1F1EA} \u745E\u5178', 'NL': '\u{1F1F3}\u{1F1F1} \u8377\u5170',
                    'FI': '\u{1F1EB}\u{1F1EE} \u82AC\u5170', 'GB': '\u{1F1EC}\u{1F1E7} \u82F1\u56FD'
                };
                
                let detectedRegion = 'US'; // \u9ED8\u8BA4\u503C
                let isCustomIPMode = false;
                let isManualRegionMode = false;
                try {
                    const response = await fetch('/region');
                    const data = await response.json();
                    
                    
                    if (data.region === 'CUSTOM') {
                        isCustomIPMode = true;
                        detectedRegion = 'CUSTOM';
                        
                        // \u83B7\u53D6\u81EA\u5B9A\u4E49IP\u7684\u8BE6\u7EC6\u4FE1\u606F
                        const customIPInfo = data.customIP || '\u672A\u77E5';
                        
                        geoInfo.innerHTML = '\u68C0\u6D4B\u65B9\u5F0F: <span style="color: #ffaa00;">\u2699\uFE0F \u81EA\u5B9A\u4E49ProxyIP\u6A21\u5F0F (p\u53D8\u91CF\u542F\u7528)</span>';
                        regionStatus.innerHTML = 'Worker\u5730\u533A: <span style="color: #ffaa00;">\u{1F527} \u81EA\u5B9A\u4E49IP\u6A21\u5F0F (\u5DF2\u7981\u7528\u5730\u533A\u5339\u914D)</span>';
                        
                        // \u663E\u793A\u81EA\u5B9A\u4E49IP\u914D\u7F6E\u72B6\u6001\uFF0C\u5305\u542B\u5177\u4F53IP
                        if (backupStatus) backupStatus.innerHTML = 'ProxyIP\u72B6\u6001: <span style="color: #ffaa00;">\u{1F527} \u4F7F\u7528\u81EA\u5B9A\u4E49ProxyIP: ' + customIPInfo + '</span>';
                        if (currentIP) currentIP.innerHTML = '\u5F53\u524D\u4F7F\u7528IP: <span style="color: #ffaa00;">\u2705 ' + customIPInfo + ' (p\u53D8\u91CF\u914D\u7F6E)</span>';
                        if (regionMatch) regionMatch.innerHTML = '\u5730\u533A\u5339\u914D: <span style="color: #ffaa00;">\u26A0\uFE0F \u81EA\u5B9A\u4E49IP\u6A21\u5F0F\uFF0C\u5730\u533A\u9009\u62E9\u5DF2\u7981\u7528</span>';
                        
                        return; // \u63D0\u524D\u8FD4\u56DE\uFF0C\u4E0D\u6267\u884C\u540E\u7EED\u7684\u5730\u533A\u5339\u914D\u903B\u8F91
                    } else if (data.detectionMethod === '\u624B\u52A8\u6307\u5B9A\u5730\u533A') {
                        isManualRegionMode = true;
                        detectedRegion = data.region;
                        
                        geoInfo.innerHTML = '\u68C0\u6D4B\u65B9\u5F0F: <span style="color: #44aa44;">\u624B\u52A8\u6307\u5B9A\u5730\u533A</span>';
                        regionStatus.innerHTML = 'Worker\u5730\u533A: <span style="color: #44ff44;">\u{1F3AF} ' + regionNames[detectedRegion] + ' (\u624B\u52A8\u6307\u5B9A)</span>';
                        
                        // \u663E\u793A\u914D\u7F6E\u72B6\u6001\u800C\u4E0D\u662F\u68C0\u6D4B\u72B6\u6001
                        if (backupStatus) backupStatus.innerHTML = 'ProxyIP\u72B6\u6001: <span style="color: #44ff44;">\u2705 10/10 \u53EF\u7528 (ProxyIP\u57DF\u540D\u9884\u8BBE\u53EF\u7528)</span>';
                        if (currentIP) currentIP.innerHTML = '\u5F53\u524D\u4F7F\u7528IP: <span style="color: #44ff44;">\u2705 \u667A\u80FD\u5C31\u8FD1\u9009\u62E9\u4E2D</span>';
                        if (regionMatch) regionMatch.innerHTML = '\u5730\u533A\u5339\u914D: <span style="color: #44ff44;">\u2705 \u540C\u5730\u533AIP\u53EF\u7528 (1\u4E2A)</span>';
                        
                        return; // \u63D0\u524D\u8FD4\u56DE\uFF0C\u4E0D\u6267\u884C\u540E\u7EED\u7684\u5730\u533A\u5339\u914D\u903B\u8F91
                    } else if (data.region && regionNames[data.region]) {
                        detectedRegion = data.region;
                    }
                    
                    geoInfo.innerHTML = '\u68C0\u6D4B\u65B9\u5F0F: <span style="color: #44ff44;">Cloudflare\u5185\u7F6E\u68C0\u6D4B</span>';
                    
                } catch (e) {
                    geoInfo.innerHTML = '\u68C0\u6D4B\u65B9\u5F0F: <span style="color: #ff4444;">\u68C0\u6D4B\u5931\u8D25</span>';
                }
                
                regionStatus.innerHTML = 'Worker\u5730\u533A: <span style="color: #44ff44;">\u2705 ' + regionNames[detectedRegion] + '</span>';
                
                
                // \u76F4\u63A5\u663E\u793A\u914D\u7F6E\u72B6\u6001\uFF0C\u4E0D\u518D\u8FDB\u884C\u68C0\u6D4B
                if (backupStatus) {
                    backupStatus.innerHTML = 'ProxyIP\u72B6\u6001: <span style="color: #44ff44;">\u2705 10/10 \u53EF\u7528 (ProxyIP\u57DF\u540D\u9884\u8BBE\u53EF\u7528)</span>';
                }
                
                if (currentIP) {
                    currentIP.innerHTML = '\u5F53\u524D\u4F7F\u7528IP: <span style="color: #44ff44;">\u2705 \u667A\u80FD\u5C31\u8FD1\u9009\u62E9\u4E2D</span>';
                }
                
                if (regionMatch) {
                    regionMatch.innerHTML = '\u5730\u533A\u5339\u914D: <span style="color: #44ff44;">\u2705 \u540C\u5730\u533AIP\u53EF\u7528 (1\u4E2A)</span>';
                }
                
            } catch (error) {
                console.error('\u72B6\u6001\u68C0\u6D4B\u5931\u8D25:', error);
                document.getElementById('regionStatus').innerHTML = 'Worker\u5730\u533A: <span style="color: #ff4444;">\u274C \u68C0\u6D4B\u5931\u8D25</span>';
                document.getElementById('geoInfo').innerHTML = '\u5730\u7406\u4F4D\u7F6E: <span style="color: #ff4444;">\u274C \u68C0\u6D4B\u5931\u8D25</span>';
                document.getElementById('backupStatus').innerHTML = 'ProxyIP\u72B6\u6001: <span style="color: #ff4444;">\u274C \u68C0\u6D4B\u5931\u8D25</span>';
                document.getElementById('currentIP').innerHTML = '\u5F53\u524D\u4F7F\u7528IP: <span style="color: #ff4444;">\u274C \u68C0\u6D4B\u5931\u8D25</span>';
                document.getElementById('regionMatch').innerHTML = '\u5730\u533A\u5339\u914D: <span style="color: #ff4444;">\u274C \u68C0\u6D4B\u5931\u8D25</span>';
            }
        }
        
        async function testAPI() {
            try {
                const response = await fetch('/test-api');
                const data = await response.json();
                
                
                if (data.detectedRegion) {
                    alert('API\u68C0\u6D4B\u7ED3\u679C: ' + data.detectedRegion + '\\n\u68C0\u6D4B\u65F6\u95F4: ' + data.timestamp);
                } else {
                    alert('API\u68C0\u6D4B\u5931\u8D25: ' + (data.error || '\u672A\u77E5\u9519\u8BEF'));
                }
            } catch (error) {
                console.error('API\u6D4B\u8BD5\u5931\u8D25:', error);
                alert('API\u6D4B\u8BD5\u5931\u8D25: ' + error.message);
            }
        }
        
        // \u914D\u7F6E\u7BA1\u7406\u76F8\u5173\u51FD\u6570
        async function checkKVStatus() {
            const apiUrl = window.location.pathname + '/api/config';
            console.log('\u{1F50D} \u8C03\u8BD5\u4FE1\u606F - \u68C0\u67E5KV\u72B6\u6001');
            console.log('\u8BF7\u6C42URL:', apiUrl);
            
            try {
                const response = await fetch(apiUrl);
                console.log('\u54CD\u5E94\u72B6\u6001:', response.status);
                console.log('\u54CD\u5E94\u5934:', Object.fromEntries(response.headers.entries()));
                
                if (response.status === 503) {
                    // KV\u672A\u914D\u7F6E
                    console.log('\u274C KV\u5B58\u50A8\u672A\u914D\u7F6E (503)');
                    document.getElementById('kvStatus').innerHTML = '<span style="color: #ffaa00;">\u26A0\uFE0F KV\u5B58\u50A8\u672A\u542F\u7528\u6216\u672A\u914D\u7F6E</span>';
                    document.getElementById('configCard').style.display = 'block';
                    document.getElementById('currentConfig').textContent = 'KV\u5B58\u50A8\u672A\u914D\u7F6E\uFF0C\u65E0\u6CD5\u4F7F\u7528\u914D\u7F6E\u7BA1\u7406\u529F\u80FD\u3002\\n\\n\u8BF7\u5728Cloudflare Workers\u4E2D:\\n1. \u521B\u5EFAKV\u547D\u540D\u7A7A\u95F4\\n2. \u7ED1\u5B9A\u73AF\u5883\u53D8\u91CF C\\n3. \u91CD\u65B0\u90E8\u7F72\u4EE3\u7801';
                } else if (response.ok) {
                    const data = await response.json();
                    console.log('\u54CD\u5E94\u6570\u636E:', data);
                    console.log('kvEnabled:', data.kvEnabled);
                    
                    // \u68C0\u67E5\u54CD\u5E94\u662F\u5426\u5305\u542BKV\u914D\u7F6E\u4FE1\u606F
                    if (data && data.kvEnabled === true) {
                        console.log('\u2705 KV\u5B58\u50A8\u5DF2\u542F\u7528');
                        document.getElementById('kvStatus').innerHTML = '<span style="color: #44ff44;">\u2705 KV\u5B58\u50A8\u5DF2\u542F\u7528\uFF0C\u53EF\u4EE5\u4F7F\u7528\u914D\u7F6E\u7BA1\u7406\u529F\u80FD</span>';
                        document.getElementById('configContent').style.display = 'block';
                        document.getElementById('configCard').style.display = 'block';
                        await loadCurrentConfig();
                    } else {
                        console.log('\u274C KV\u5B58\u50A8\u672A\u542F\u7528 (\u54CD\u5E94\u4E2DkvEnabled\u4E0D\u4E3Atrue)');
                        document.getElementById('kvStatus').innerHTML = '<span style="color: #ffaa00;">\u26A0\uFE0F KV\u5B58\u50A8\u672A\u542F\u7528\u6216\u672A\u914D\u7F6E</span>';
                        document.getElementById('configCard').style.display = 'block';
                        document.getElementById('currentConfig').textContent = 'KV\u5B58\u50A8\u672A\u914D\u7F6E';
                    }
                } else {
                    console.log('\u274C \u54CD\u5E94\u9519\u8BEF:', response.status, response.statusText);
                    document.getElementById('kvStatus').innerHTML = '<span style="color: #ffaa00;">\u26A0\uFE0F KV\u5B58\u50A8\u672A\u542F\u7528\u6216\u672A\u914D\u7F6E</span>';
                    document.getElementById('configCard').style.display = 'block';
                    document.getElementById('currentConfig').textContent = 'KV\u5B58\u50A8\u68C0\u6D4B\u5931\u8D25 - \u72B6\u6001\u7801: ' + response.status;
                }
            } catch (error) {
                console.log('\u274C \u8BF7\u6C42\u5931\u8D25:', error);
                document.getElementById('kvStatus').innerHTML = '<span style="color: #ffaa00;">\u26A0\uFE0F KV\u5B58\u50A8\u672A\u542F\u7528\u6216\u672A\u914D\u7F6E</span>';
                document.getElementById('configCard').style.display = 'block';
                document.getElementById('currentConfig').textContent = 'KV\u5B58\u50A8\u68C0\u6D4B\u5931\u8D25 - \u9519\u8BEF: ' + error.message;
            }
        }
        
        async function loadCurrentConfig() {
            const apiUrl = window.location.pathname + '/api/config';
            console.log('\u{1F4E5} \u8C03\u8BD5\u4FE1\u606F - \u52A0\u8F7D\u914D\u7F6E');
            console.log('\u8BF7\u6C42URL:', apiUrl);
            
            try {
                const response = await fetch(apiUrl);
                console.log('\u52A0\u8F7D\u54CD\u5E94\u72B6\u6001:', response.status);
                
                if (response.status === 503) {
                    console.log('\u274C KV\u5B58\u50A8\u672A\u914D\u7F6E\uFF0C\u65E0\u6CD5\u52A0\u8F7D\u914D\u7F6E');
                    document.getElementById('currentConfig').textContent = 'KV\u5B58\u50A8\u672A\u914D\u7F6E\uFF0C\u65E0\u6CD5\u52A0\u8F7D\u914D\u7F6E';
                    return;
                }
                if (!response.ok) {
                    console.log('\u274C \u52A0\u8F7D\u914D\u7F6E\u5931\u8D25\uFF0C\u72B6\u6001\u7801:', response.status);
                    document.getElementById('currentConfig').textContent = '\u52A0\u8F7D\u914D\u7F6E\u5931\u8D25';
                    return;
                }
                const config = await response.json();
                console.log('\u52A0\u8F7D\u7684\u914D\u7F6E\u6570\u636E:', config);
                
                // \u8FC7\u6EE4\u6389\u5185\u90E8\u5B57\u6BB5 kvEnabled
                const displayConfig = {};
                for (const [key, value] of Object.entries(config)) {
                    if (key !== 'kvEnabled') {
                        displayConfig[key] = value;
                    }
                }
                
                let configText = '\u5F53\u524D\u914D\u7F6E:\\n';
                if (Object.keys(displayConfig).length === 0) {
                    configText += '(\u6682\u65E0\u914D\u7F6E)';
                } else {
                    for (const [key, value] of Object.entries(displayConfig)) {
                        configText += key + ': ' + (value || '(\u672A\u8BBE\u7F6E)') + '\\n';
                    }
                }
                
                document.getElementById('currentConfig').textContent = configText;
                
                // \u66F4\u65B0\u8868\u5355\u503C
                document.getElementById('wkRegion').value = config.wk || '';
                document.getElementById('customIP').value = config.p || '';
                document.getElementById('preferredIPs').value = config.yx || '';
                document.getElementById('preferredIPsURL').value = config.yxURL || '';
                document.getElementById('socksConfig').value = config.s || '';
                document.getElementById('apiEnabled').value = config.apiEnabled || '';
                document.getElementById('regionMatching').value = config.rm || '';
                document.getElementById('downgradeControl').value = config.qj || '';
                document.getElementById('portControl').value = config.dkby || '';
                document.getElementById('preferredControl').value = config.yxby || '';
                
                // \u68C0\u67E5p\u53D8\u91CF\uFF0C\u5982\u679C\u6709\u503C\u5219\u7981\u7528wk\u5730\u533A\u9009\u62E9
                updateWkRegionState();
                
            } catch (error) {
                document.getElementById('currentConfig').textContent = '\u52A0\u8F7D\u914D\u7F6E\u5931\u8D25: ' + error.message;
            }
        }
        
        // \u66F4\u65B0wk\u5730\u533A\u9009\u62E9\u7684\u542F\u7528/\u7981\u7528\u72B6\u6001
        function updateWkRegionState() {
            const customIP = document.getElementById('customIP');
            const wkRegion = document.getElementById('wkRegion');
            const wkRegionHint = document.getElementById('wkRegionHint');
            
            if (customIP && wkRegion) {
                const hasCustomIP = customIP.value.trim() !== '';
                wkRegion.disabled = hasCustomIP;
                
                // \u6DFB\u52A0\u89C6\u89C9\u53CD\u9988
                if (hasCustomIP) {
                    wkRegion.style.opacity = '0.5';
                    wkRegion.style.cursor = 'not-allowed';
                    wkRegion.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                    // \u663E\u793A\u63D0\u793A\u4FE1\u606F
                    if (wkRegionHint) {
                        wkRegionHint.style.display = 'block';
                        wkRegionHint.style.color = '#ffaa00';
                    }
                } else {
                    wkRegion.style.opacity = '1';
                    wkRegion.style.cursor = 'pointer';
                    wkRegion.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                    // \u9690\u85CF\u63D0\u793A\u4FE1\u606F
                    if (wkRegionHint) {
                        wkRegionHint.style.display = 'none';
                    }
                }
            }
        }
        
        async function saveConfig(configData) {
            const apiUrl = window.location.pathname + '/api/config';
            console.log('\u{1F4BE} \u8C03\u8BD5\u4FE1\u606F - \u4FDD\u5B58\u914D\u7F6E');
            console.log('\u8BF7\u6C42URL:', apiUrl);
            console.log('\u914D\u7F6E\u6570\u636E:', configData);
            
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(configData)
                });
                
                console.log('\u4FDD\u5B58\u54CD\u5E94\u72B6\u6001:', response.status);
                console.log('\u4FDD\u5B58\u54CD\u5E94\u5934:', Object.fromEntries(response.headers.entries()));
                
                if (response.status === 503) {
                    console.log('\u274C KV\u5B58\u50A8\u672A\u914D\u7F6E\uFF0C\u65E0\u6CD5\u4FDD\u5B58');
                    showStatus('KV\u5B58\u50A8\u672A\u914D\u7F6E\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u914D\u7F6E\u3002\u8BF7\u5148\u5728Cloudflare Workers\u4E2D\u914D\u7F6EKV\u5B58\u50A8\u3002', 'error');
                    return;
                }
                
                const result = await response.json();
                console.log('\u4FDD\u5B58\u54CD\u5E94\u6570\u636E:', result);
                
                showStatus(result.message, result.success ? 'success' : 'error');
                
                if (result.success) {
                    console.log('\u2705 \u4FDD\u5B58\u6210\u529F\uFF0C\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E');
                    await loadCurrentConfig();
                    // \u66F4\u65B0wk\u5730\u533A\u9009\u62E9\u72B6\u6001
                    updateWkRegionState();
                    // \u4FDD\u5B58\u6210\u529F\u540E\u5237\u65B0\u9875\u9762\u4EE5\u66F4\u65B0\u7CFB\u7EDF\u72B6\u6001
                    setTimeout(function() {
                        window.location.reload();
                    }, 1500);
                } else {
                    console.log('\u274C \u4FDD\u5B58\u5931\u8D25:', result.message);
                }
            } catch (error) {
                console.log('\u274C \u4FDD\u5B58\u8BF7\u6C42\u5931\u8D25:', error);
                showStatus('\u4FDD\u5B58\u5931\u8D25: ' + error.message, 'error');
            }
        }
        
        function showStatus(message, type) {
            const statusDiv = document.getElementById('statusMessage');
            statusDiv.textContent = message;
            statusDiv.style.display = 'block';
            statusDiv.style.color = type === 'success' ? '#00ff00' : '#ff0000';
            statusDiv.style.borderColor = type === 'success' ? '#00ff00' : '#ff0000';
            
            setTimeout(function() {
                statusDiv.style.display = 'none';
            }, 3000);
        }
        
        async function resetAllConfig() {
            if (confirm('\u786E\u5B9A\u8981\u91CD\u7F6E\u6240\u6709\u914D\u7F6E\u5417\uFF1F\u8FD9\u5C06\u6E05\u7A7A\u6240\u6709KV\u914D\u7F6E\uFF0C\u6062\u590D\u4E3A\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\u3002')) {
                try {
                    const response = await fetch(window.location.pathname + '/api/config', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            wk: '',
                            p: '',
                            yx: '',
                            yxURL: '',
                            s: '',
                            apiEnabled: '',
                            rm: '',
                            qj: '',
                            dkby: '',
                            yxby: ''
                        })
                    });
                    
                    if (response.status === 503) {
                        showStatus('KV\u5B58\u50A8\u672A\u914D\u7F6E\uFF0C\u65E0\u6CD5\u91CD\u7F6E\u914D\u7F6E\u3002', 'error');
                        return;
                    }
                    
                    const result = await response.json();
                    showStatus(result.message || '\u914D\u7F6E\u5DF2\u91CD\u7F6E', result.success ? 'success' : 'error');
                    
                    if (result.success) {
                        await loadCurrentConfig();
                        // \u66F4\u65B0wk\u5730\u533A\u9009\u62E9\u72B6\u6001
                        updateWkRegionState();
                        // \u5237\u65B0\u9875\u9762\u4EE5\u66F4\u65B0\u7CFB\u7EDF\u72B6\u6001
                        setTimeout(function() {
                            window.location.reload();
                        }, 1500);
                    }
                } catch (error) {
                    showStatus('\u91CD\u7F6E\u5931\u8D25: ' + error.message, 'error');
                }
            }
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            createMatrixRain();
            checkSystemStatus();
            checkKVStatus();
            
            // \u76D1\u542CcustomIP\u8F93\u5165\u6846\u53D8\u5316\uFF0C\u5B9E\u65F6\u66F4\u65B0wk\u5730\u533A\u9009\u62E9\u72B6\u6001
            const customIPInput = document.getElementById('customIP');
            if (customIPInput) {
                customIPInput.addEventListener('input', function() {
                    updateWkRegionState();
                });
            }
            
            // \u7ED1\u5B9A\u8868\u5355\u4E8B\u4EF6
            const regionForm = document.getElementById('regionForm');
            if (regionForm) {
                regionForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    const wkRegion = document.getElementById('wkRegion').value;
                    await saveConfig({ wk: wkRegion });
                });
            }
            
            const otherConfigForm = document.getElementById('otherConfigForm');
            if (otherConfigForm) {
                otherConfigForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    const configData = {
                        p: document.getElementById('customIP').value,
                        yx: document.getElementById('preferredIPs').value,
                        yxURL: document.getElementById('preferredIPsURL').value,
                        s: document.getElementById('socksConfig').value
                    };
                    await saveConfig(configData);
                });
            }
            
            const advancedConfigForm = document.getElementById('advancedConfigForm');
            if (advancedConfigForm) {
                advancedConfigForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    const configData = {
                        apiEnabled: document.getElementById('apiEnabled').value,
                        rm: document.getElementById('regionMatching').value,
                        qj: document.getElementById('downgradeControl').value,
                        dkby: document.getElementById('portControl').value,
                        yxby: document.getElementById('preferredControl').value
                    };
                    await saveConfig(configData);
                });
            }
        });
    <\/script>
</body>
</html>`;return new Response(o,{status:200,headers:{"Content-Type":"text/html; charset=utf-8"}})}function Be(t){if(!t)return{error:null};try{return t=t.replace(/-/g,"+").replace(/_/g,"/"),{earlyData:Uint8Array.from(atob(t),e=>e.charCodeAt(0)).buffer,error:null}}catch(e){return{error:e}}}function P(t){try{(t.readyState===1||t.readyState===2)&&t.close()}catch{}}var b=Array.from({length:256},(t,e)=>(e+256).toString(16).slice(1));function Me(t,e=0){let o=(b[t[e]]+b[t[e+1]]+b[t[e+2]]+b[t[e+3]]+"-"+b[t[e+4]]+b[t[e+5]]+"-"+b[t[e+6]]+b[t[e+7]]+"-"+b[t[e+8]]+b[t[e+9]]+"-"+b[t[e+10]]+b[t[e+11]]+b[t[e+12]]+b[t[e+13]]+b[t[e+14]]+b[t[e+15]]).toLowerCase();if(!L(o))throw new TypeError(ge);return o}async function De(){let t=q||"https://raw.githubusercontent.com/qwer-search/bestip/refs/heads/main/kejilandbestip.txt";try{let e=await fetch(t);if(!e.ok)return[];let o=await e.text(),n=[],a=o.trim().replace(/\r/g,"").split(`
`),d=/^([^:]+):(\d+)#(.*)$/;for(let s of a){let p=s.trim();if(!p)continue;let c=p.match(d);c&&n.push({ip:c[1],port:parseInt(c[2],10),name:c[3].trim()||c[1]})}return n}catch{return[]}}function Ae(t,e,o){let n=[80,8080,8880,2052,2082,2086,2095],a=[443,2053,2083,2087,2096,8443],d=[],s=encodeURIComponent("/?ed=2048"),p=atob("dmxlc3M=");return t.forEach(c=>{let i=c.name.replace(/\s/g,"_"),r=c.port;if(a.includes(r)){let f=`${i}-${r}-WS-TLS`,m=`${p}://${e}@${c.ip}:${r}?encryption=none&security=tls&sni=${o}&fp=chrome&type=ws&host=${o}&path=${s}#${encodeURIComponent(f)}`;d.push(m)}else if(n.includes(r)){if(!K){let f=`${i}-${r}-WS`,m=`${p}://${e}@${c.ip}:${r}?encryption=none&security=none&type=ws&host=${o}&path=${s}#${encodeURIComponent(f)}`;d.push(m)}}else{let f=`${i}-${r}-WS-TLS`,m=`${p}://${e}@${c.ip}:${r}?encryption=none&security=tls&sni=${o}&fp=chrome&type=ws&host=${o}&path=${s}#${encodeURIComponent(f)}`;d.push(m)}}),d}async function Oe(t){if(t.method==="GET")return v?new Response(JSON.stringify({...k,kvEnabled:!0}),{headers:{"Content-Type":"application/json"}}):new Response(JSON.stringify({error:"KV\u5B58\u50A8\u672A\u914D\u7F6E",kvEnabled:!1}),{status:503,headers:{"Content-Type":"application/json"}});if(t.method==="POST"){if(!v)return new Response(JSON.stringify({success:!1,message:"KV\u5B58\u50A8\u672A\u914D\u7F6E\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u914D\u7F6E"}),{status:503,headers:{"Content-Type":"application/json"}});try{let e=await t.json();for(let[o,n]of Object.entries(e))n===""||n===null||n===void 0?delete k[o]:k[o]=n;return await ie(),new Response(JSON.stringify({success:!0,message:"\u914D\u7F6E\u5DF2\u4FDD\u5B58",config:k}),{headers:{"Content-Type":"application/json"}})}catch(e){return new Response(JSON.stringify({success:!1,message:"\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25: "+e.message}),{status:500,headers:{"Content-Type":"application/json"}})}}return new Response(JSON.stringify({error:"Method not allowed"}),{status:405,headers:{"Content-Type":"application/json"}})}async function Ve(t){if(!v)return new Response(JSON.stringify({success:!1,error:"KV\u5B58\u50A8\u672A\u914D\u7F6E",message:"\u9700\u8981\u914D\u7F6EKV\u5B58\u50A8\u624D\u80FD\u4F7F\u7528\u6B64\u529F\u80FD"}),{status:503,headers:{"Content-Type":"application/json"}});if(!(w("apiEnabled","")==="yes"))return new Response(JSON.stringify({success:!1,error:"API\u529F\u80FD\u672A\u542F\u7528",message:'\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u4F18\u9009IP API\u529F\u80FD\u9ED8\u8BA4\u5173\u95ED\u3002\u8BF7\u5728\u914D\u7F6E\u7BA1\u7406\u9875\u9762\u5F00\u542F"\u5141\u8BB8API\u7BA1\u7406"\u9009\u9879\u540E\u4F7F\u7528\u3002'}),{status:403,headers:{"Content-Type":"application/json"}});try{if(t.method==="GET"){let o=w("yx",""),n=V(o);return new Response(JSON.stringify({success:!0,count:n.length,data:n}),{headers:{"Content-Type":"application/json"}})}else if(t.method==="POST"){let o=await t.json(),n=Array.isArray(o)?o:[o];if(n.length===0)return new Response(JSON.stringify({success:!1,error:"\u8BF7\u6C42\u6570\u636E\u4E3A\u7A7A",message:"\u8BF7\u63D0\u4F9BIP\u6570\u636E"}),{status:400,headers:{"Content-Type":"application/json"}});let a=w("yx",""),d=V(a),s=[],p=[],c=[];for(let i of n){if(!i.ip){c.push({ip:"\u672A\u77E5",reason:"IP\u5730\u5740\u662F\u5FC5\u9700\u7684"});continue}let r=i.port||443,f=i.name||`API\u4F18\u9009-${i.ip}:${r}`;if(!re(i.ip)&&!Ke(i.ip)){c.push({ip:i.ip,reason:"\u65E0\u6548\u7684IP\u6216\u57DF\u540D\u683C\u5F0F"});continue}if(d.some(l=>l.ip===i.ip&&l.port===r)){p.push({ip:i.ip,port:r,reason:"\u5DF2\u5B58\u5728"});continue}let u={ip:i.ip,port:r,name:f,addedAt:new Date().toISOString()};d.push(u),s.push(u)}if(s.length>0){let i=X(d);await $("yx",i)}return new Response(JSON.stringify({success:s.length>0,message:`\u6210\u529F\u6DFB\u52A0 ${s.length} \u4E2AIP`,added:s.length,skipped:p.length,errors:c.length,data:{addedIPs:s,skippedIPs:p.length>0?p:void 0,errors:c.length>0?c:void 0}}),{headers:{"Content-Type":"application/json"}})}else if(t.method==="DELETE"){let o=await t.json();if(o.all===!0){let i=w("yx",""),f=V(i).length;return await $("yx",""),new Response(JSON.stringify({success:!0,message:`\u5DF2\u6E05\u7A7A\u6240\u6709\u4F18\u9009IP\uFF0C\u5171\u5220\u9664 ${f} \u4E2A`,deletedCount:f}),{headers:{"Content-Type":"application/json"}})}if(!o.ip)return new Response(JSON.stringify({success:!1,error:"IP\u5730\u5740\u662F\u5FC5\u9700\u7684",message:'\u8BF7\u63D0\u4F9B\u8981\u5220\u9664\u7684ip\u5B57\u6BB5\uFF0C\u6216\u4F7F\u7528 {"all": true} \u6E05\u7A7A\u6240\u6709'}),{status:400,headers:{"Content-Type":"application/json"}});let n=o.port||443,a=w("yx",""),d=V(a),s=d.length,p=d.filter(i=>!(i.ip===o.ip&&i.port===n));if(p.length===s)return new Response(JSON.stringify({success:!1,error:"\u4F18\u9009IP\u4E0D\u5B58\u5728",message:`${o.ip}:${n} \u672A\u627E\u5230`}),{status:404,headers:{"Content-Type":"application/json"}});let c=X(p);return await $("yx",c),new Response(JSON.stringify({success:!0,message:"\u4F18\u9009IP\u5DF2\u5220\u9664",deleted:{ip:o.ip,port:n}}),{headers:{"Content-Type":"application/json"}})}else return new Response(JSON.stringify({success:!1,error:"\u4E0D\u652F\u6301\u7684\u8BF7\u6C42\u65B9\u6CD5",message:"\u652F\u6301\u7684\u65B9\u6CD5: GET, POST, DELETE"}),{status:405,headers:{"Content-Type":"application/json"}})}catch(o){return new Response(JSON.stringify({success:!1,error:"\u5904\u7406\u8BF7\u6C42\u5931\u8D25",message:o.message}),{status:500,headers:{"Content-Type":"application/json"}})}}function V(t){if(!t||!t.trim())return[];let e=t.split(",").map(n=>n.trim()).filter(n=>n),o=[];for(let n of e){let a="",d=n;if(n.includes("#")){let c=n.split("#");d=c[0].trim(),a=c[1].trim()}let{address:s,port:p}=se(d);a||(a=s+(p?":"+p:"")),o.push({ip:s,port:p||443,name:a,addedAt:new Date().toISOString()})}return o}function X(t){return!t||t.length===0?"":t.map(e=>{let o=e.port||443;return`${e.ip}:${o}#${e.name}`}).join(",")}function Ke(t){return/^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/.test(t)}export{$e as default};
