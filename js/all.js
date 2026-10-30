     function showContent(text) {
            const displayBox = document.getElementById('content-display');
            displayBox.innerHTML = text;
            displayBox.style.display = 'block'; // 顯示容器
        }
        function changeText(newHtml) {
    // 找到下面那個內容容器，並把裡面的 HTML 換成我們傳入的新內容
    document.getElementById('content-display').innerHTML = newHtml;
}
function updateContent(targetId, newHtml) {
    // 1. 動態抓取傳進來的 ID（可能是 box1、box2 或 box3...）
    var displayBox = document.getElementById(targetId);
    
    if (displayBox) {
        displayBox.innerHTML = newHtml;     // 2. 塞入對應內容
        displayBox.style.display = 'block'; // 3. 顯示該區塊
    }
}