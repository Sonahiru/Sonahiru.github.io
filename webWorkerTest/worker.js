// worker.js
console.log('🚀 Worker スレッドが正常に起動しました');

self.onmessage = function(e) {
    console.log('📥 Workerがデータを受信しました:', e.data);

    // 処理のシミュレーション
    try {
        const result = e.data * 2; // 例：2倍にする処理
        
        console.log('⚙️ 演算完了。メインスレッドへ返信します:', result);
        self.postMessage(result);
        
    } catch (err) {
        console.error('⚠️ Worker演算中にエラー:', err);
    }
};
