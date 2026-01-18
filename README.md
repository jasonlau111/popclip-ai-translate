[English](#english) | 简体中文

# PopClip AI Translate (AI 翻译扩展)

这是一个适用于 macOS PopClip 的简洁翻译扩展，基于 OpenAI 格式的 API 接口。

它比默认的翻译功能更灵活，支持自定义模型（如 GPT-4o-mini、Claude、Gemini），并且内置了优化过的提示词，能提供更符合技术人员习惯的译文（保留原有术语）。

## ✨ 功能特点

- **极简体验**：选中文字，点击图标，直接显示翻译结果
- **高度可配**：支持自定义 API 地址、密钥和模型名称
- **智能翻译**：内置 Prompt 经过优化，保留专业术语和品牌英文原名

## 🚀 安装方法

1. 下载本项目中的 `AITranslate.popclipext` 文件夹（或 Release 中的压缩包）
2. 双击 `AITranslate.popclipext` 文件
3. PopClip 会弹出确认框，点击 **"Install Extension"** 即可

## ⚙️ 配置说明

安装后，在 PopClip 的设置界面中找到 **"AI翻译"** 扩展，点击右侧的设置图标：

| 选项         | 说明                          | 默认值                      |
| ------------ | ----------------------------- | --------------------------- |
| **API 地址** | Base URL，必须包含 `/v1` 后缀 | `https://api.openai.com/v1` |
| **API 密钥** | 你的 Key (sk-...)             | 无                          |
| **模型名称** | 你想使用的模型                | `gpt-4o-mini`               |

## ⚠️ 常见问题

**Q: 为什么点击后显示 "Network Error"？**

请检查：
1. API 地址是否正确（是否漏了 `/v1`）
2. 如果使用本地 HTTP 服务，可能会因 macOS 安全策略被拦截，建议配置 HTTPS

**Q: 如何修改 Prompt？**

编辑 `translate.js` 文件中的 `systemPrompt` 变量即可。

---

<a name="english"></a>

English | [简体中文](#popclip-ai-translate-ai-翻译扩展)

# PopClip AI Translate

A powerful yet simple translation extension for PopClip on macOS, powered by OpenAI-compatible APIs.

It offers more flexibility than built-in tools, allowing you to use custom models (like GPT-4o-mini, Claude, Gemini) and delivering high-quality translations that preserve technical terminology.

## ✨ Features

- **Simple & Fast**: Select text, click the icon, and see the translation instantly
- **Fully Customizable**: Configure your own API Endpoint, API Key, and Model Name
- **Smart Prompts**: Built-in prompt optimized to keep technical terms in English

## 🚀 Installation

1. Download the `AITranslate.popclipext` folder (or the `.zip` release)
2. Double-click `AITranslate.popclipext`
3. Click **"Install Extension"** in the PopClip popup

## ⚙️ Configuration

After installation, go to PopClip Settings > Extensions, find **"AI翻译"**, and click the settings icon:

| Option           | Description                         | Default                     |
| ---------------- | ----------------------------------- | --------------------------- |
| **API Endpoint** | Base URL, must include `/v1` suffix | `https://api.openai.com/v1` |
| **API Key**      | Your API Key (sk-...)               | None                        |
| **Model Name**   | The model you want to use           | `gpt-4o-mini`               |

## ⚠️ FAQ

**Q: Why do I get "Network Error"?**

Please check:
1. Is the API Endpoint correct? (Did you forget `/v1`?)
2. Local HTTP services may be blocked by macOS security. Use HTTPS instead.

**Q: How to modify the Prompt?**

Edit the `systemPrompt` variable in `translate.js`.
