(() => {
    const btn = document.getElementById("runTest");

    // いろいろな参照パターンの基礎変数
    const part1 = "lo";
    const part2 = "ca";
    const part3 = "tion";

    const locKey = part1 + part2 + part3;
    const win = window;

    // Proxyラップ（読み取りテスト用）
    const proxyWindow = new Proxy(win, {
        get(target, prop) {
            return target[prop];
        }
    });

    function logLocation(label, value) {
        console.log(label + ":", value);
    }

    function runTests() {

        console.log("=== Location Test Start ===");

        // ① 基本アクセス
        logLocation("basic href", location.href);

        // ② 文字列結合アクセス
        logLocation("concat href", window["loc" + "ation"].href);

        // ③ 変数結合キー
        logLocation("variable key href", window[locKey].href);

        // ④ 配列 join
        const arrKey = ["lo", "ca", "tion"].join("");
        logLocation("array join href", window[arrKey].href);

        // ⑤ window参照経由
        const w = window;
        logLocation("window ref href", w["loc" + "ation"].href);

        // ⑥ Proxy経由
        logLocation("proxy href", proxyWindow["loc" + "ation"].href);

        // ⑦ オブジェクトラップ
        const wrap = { inner: window["loc" + "ation"] };
        logLocation("wrap href", wrap.inner.href);

        // ⑧ 関数経由取得
        const getLoc = () => win["loc" + "ation"];
        logLocation("function href", getLoc().href);

        // ⑨ pathname テスト（安全）
        try {
            const target = window["loc" + "ation"];
            console.log("pathname before:", target.pathname);
            target.pathname = target.pathname;
            console.log("pathname after:", target.pathname);
        } catch(e) {
            console.log("pathname write error:", e.message);
        }

        // ⑩ replace テスト（コメント安全）
        console.log("replace test skipped (safe mode)");

        console.log("=== Location Test End ===");
    }

    btn.addEventListener("click", runTests);

})();
