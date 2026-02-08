const container = document.getElementById('container');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  // 新しいカード要素作成
  const card = document.createElement('div');
  card.className = 'card';

  // 画像追加
  const img = document.createElement('img');
  img.src = 'https://via.placeholder.com/100'; // サンプル画像URL
  img.alt = 'サンプル画像';

  // テキスト追加
  const text = document.createElement('p');
  text.textContent = 'これはサンプルカードです';

  // カードに画像とテキストを追加
  card.appendChild(img);
  card.appendChild(text);

  // コンテナにカードを追加
  container.appendChild(card);
});
