// document.addEventListener("DOMContentLoaded", async () => {
//     const API_ENDPOINT = "https://otenkiame.cdn.newt.so/v1/blog/article"; 
//     // https://<スペースのUID>.cdn.newt.so/v1/<AppのUID>/<モデルのUID>
//     const API_TOKEN = "K4euByk5DGqL5D7WfsaaL9HLN5bY6Kq8oev0OTnNWVk";
  
//     try {
//       const response = await fetch(API_ENDPOINT, {
//         headers: {
//           "Authorization": `Bearer ${API_TOKEN}`
//         }
//       });
//       const data = await response.json();
  
      // データをHTMLに表示
  //     const contentContainer = document.getElementById("content");
  //     contentContainer.innerHTML = data.items.map(item => `<h2>${item.title}</h2><p>${item.description}</p>`).join("");
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   }
  // });
  
  document.addEventListener("DOMContentLoaded", async () => {
    const API_ENDPOINT = "https://otenkiame.cdn.newt.so/v1/blog/article";
    const API_TOKEN = "K4euByk5DGqL5D7WfsaaL9HLN5bY6Kq8oev0OTnNWVk";

    // 定期更新の間隔（例: 30秒ごとにデータを更新）
    const UPDATE_INTERVAL = 30000;

    // APIからデータを取得して表示する関数
    const fetchAndDisplayData = async () => {
        try {
            const response = await fetch(API_ENDPOINT, {
                headers: {
                    "Authorization": `Bearer ${API_TOKEN}`
                }
            });
            const data = await response.json();
            const contentContainer = document.getElementById("content");

            // データをHTMLに反映
            contentContainer.innerHTML = data.items.map(item => 
                `<h2><a href="article.html?id=${item.id}">${item.title}</a></h2><p>${item.description}</p>`
            ).join("");
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    // 初回データ取得
    await fetchAndDisplayData();

    // 定期的にデータを取得して更新
    setInterval(fetchAndDisplayData, UPDATE_INTERVAL);
});
