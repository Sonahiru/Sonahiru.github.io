const output = document.getElementById('output');

try {
    console.group('Web Worker 初期化プロセス');
    
    // 1. ワーカーのインスタンス作成
    const worker = new Worker('worker.js');
    console.log('✅ Worker インスタンスが作成されました:', worker);

    // 2. メッセージ受信の監視
    worker.onmessage = (event) => {
        console.group('📩 Worker からメッセージを受信');
        console.log('データ内容:', event.data);
        console.log('受信時刻:', new Date().toISOString());
        console.groupEnd();
        
        output.textContent = `結果: ${event.data}`;
    };

    // 3. エラーハンドリング（これが重要！）
    worker.onerror = (error) => {
        console.error('❌ Worker 内部でエラーが発生しました:');
        console.error(`ファイル: ${error.filename}`);
        console.error(`行番号: ${error.lineno}`);
        console.error(`メッセージ: ${error.message}`);
    };

    // 4. 送信の実行
    const data = 10;
    console.log('📤 Worker へ送信を開始:', data);
    worker.postMessage(data);

    console.groupEnd();

} catch (e) {
    console.error('🚫 Worker の起動自体に失敗しました:', e);
}
