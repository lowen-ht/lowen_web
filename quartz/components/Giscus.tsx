import { QuartzComponentConstructor } from "./types"

// 这里的配置完全对应你提供的 script 标签内容
const options = {
  repo: "lowen-ht/lowen_web",
  repoId: "R_kgDORjCHrQ",
  category: "Announcements",
  categoryId: "DIC_kwDORjCHrc4C4Ggt",
  mapping: "title",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
  lang: "zh-CN",
  loading: "lazy",
}

export default (() => {
  function Giscus() {
    // 生成 Giscus Script 标签
    const script = document.createElement("script")
    script.src = "https://giscus.app/client.js"
    script.setAttribute("data-repo", options.repo)
    script.setAttribute("data-repo-id", options.repoId)
    script.setAttribute("data-category", options.category)
    script.setAttribute("data-category-id", options.categoryId)
    script.setAttribute("data-mapping", options.mapping)
    script.setAttribute("data-strict", options.strict)
    script.setAttribute("data-reactions-enabled", options.reactionsEnabled)
    script.setAttribute("data-emit-metadata", options.emitMetadata)
    script.setAttribute("data-input-position", options.inputPosition)
    script.setAttribute("data-lang", options.lang)
    script.setAttribute("data-loading", options.loading)
    
    // 关键：设置 crossorigin
    script.setAttribute("crossorigin", "anonymous")
    
    // 容器
    const container = document.createElement("div")
    container.classList.add("giscus-container") // 添加类名方便你自定义 CSS
    container.appendChild(script)

    // --- 自动主题切换逻辑 ---
    // 监听 Quartz 的主题变化事件
    document.addEventListener("nav", () => {
      // 获取当前主题 (Quartz 将主题存在 localStorage)
      const theme = localStorage.getItem("theme") === "dark" ? "dark" : "light"
      
      // 向 Giscus iframe 发送消息以切换主题
      const iframe = container.querySelector("iframe")
      if (iframe) {
        iframe.contentWindow?.postMessage(
          { giscus: { setConfig: { theme: theme } } },
          "https://giscus.app"
        )
      }
    })

    // 初始主题设置
    const initTheme = localStorage.getItem("theme") === "dark" ? "dark" : "light"
    script.setAttribute("data-theme", initTheme)

    return container
  }

  return Giscus
})() satisfies QuartzComponentConstructor