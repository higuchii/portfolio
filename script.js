document.addEventListener("DOMContentLoaded", async () => {
    const API_ENDPOINT = "https://otenkiame.api.newt.so/v1/blog/article";
    // https://<スペースのUID>.cdn.newt.so/v1/<AppのUID>/<モデルのUID>
    const API_TOKEN = "K4euByk5DGqL5D7WfsaaL9HLN5bY6Kq8oev0OTnNWVk";
  
    try {
      const response = await fetch(API_ENDPOINT, {
        headers: {
          "Authorization": `Bearer ${API_TOKEN}`
        }
      });
      const data = await response.json();
  
      // データをHTMLに表示
      const contentContainer = document.getElementById("content");
      contentContainer.innerHTML = data.items.map(item => `<h2>${item.title}</h2><p>${item.description}</p>`).join("");
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  });
  