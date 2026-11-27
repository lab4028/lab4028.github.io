/* Lab 4028 차트: 글 안의 {{< echart >}} 자리에 ECharts 차트를 그린다.
   차트 설정은 JSON 파일(static/charts/...)에 두고, 여기서는 공통 색·글꼴만 더한다.
   불러오기에 실패하면 같은 차트의 PNG 이미지(data-img)를 대신 보여 준다. */
(function () {
  var PALETTE = ["#1f3a68", "#c0504d", "#7f8c8d", "#2e7d4f", "#a9bad6", "#4f6f9f"];
  var FONT = "'Noto Sans KR', 'Pretendard', -apple-system, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

  function fallback(el) {
    var img = el.getAttribute("data-img");
    if (!img) { el.textContent = "차트를 불러오지 못했습니다."; el.className += " echart-error"; return; }
    var pic = document.createElement("img");
    pic.src = img;
    pic.alt = el.getAttribute("aria-label") || "차트";
    el.replaceWith(pic);
  }

  function draw(el) {
    if (typeof echarts === "undefined") { fallback(el); return; }
    fetch(el.getAttribute("data-src"))
      .then(function (r) { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then(function (option) {
        var chart = echarts.init(el, null, { renderer: "svg" });
        var base = {
          color: PALETTE,
          textStyle: { fontFamily: FONT, color: "#16181d" },
          animationDuration: 500
        };
        var merged = Object.assign({}, base, option);
        merged.textStyle = Object.assign({}, base.textStyle, option.textStyle || {});
        chart.setOption(merged);
        window.addEventListener("resize", function () { chart.resize(); });
      })
      .catch(function () { fallback(el); });
  }

  var nodes = document.querySelectorAll(".echart[data-src]");
  for (var i = 0; i < nodes.length; i++) draw(nodes[i]);
})();
