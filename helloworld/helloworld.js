// helloworld.js
document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");

    // fetchでサンプルデータ取得
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            if (!response.ok) throw new Error("ネットワークエラー");
            return response.json();
        })
        .then(data => {
            output.textContent = `Hello World! データ取得成功: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            output.textContent = `エラー発生: ${error}`;
        });
});
