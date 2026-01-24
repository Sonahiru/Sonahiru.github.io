const output = document.getElementById('output');

// ワーカーを作成
const worker = new Worker('worker.js');

// ワーカーからのメッセージ受信
worker.onmessage = (event) => {
    console.log('ワーカーからの結果:', event.data);
    output.textContent = `ワーカーの結果: ${event.data}`;
};

// ワーカーにデータを送信
const data = 10;
console.log('ワーカーに送信:', data);
worker.postMessage(data);
