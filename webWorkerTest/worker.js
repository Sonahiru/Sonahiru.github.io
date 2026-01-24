// メッセージ受信
onmessage = (event) => {
    const num = event.data;
    console.log('メインスレッドから受信:', num);

    // ちょっと重い処理の例（平方計算）
    const result = num * num;

    // 結果をメインスレッドに送信
    postMessage(result);
};
