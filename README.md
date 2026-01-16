# PopClip AI Translate Extension / AI 翻译扩展

[English](#english) | [中文](#中文)

---

<a name="english"></a>

## 🇬🇧 English

A powerful yet simple translation extension for [PopClip on macOS](https://mp.weixin.qq.com/s/M0aBdUqfQ6J440BvE2n0WA), powered by OpenAI-compatible APIs.  
It offers more flexibility than built-in tools, allowing you to use custom models (like GPT-4o-mini, Claude, Gemini) and delivering high-quality translations that preserve technical terminology.

### ✨ Features

*   **Simple & Fast**: Select text, click the icon, and see the translation instantly.
*   **Fully Customizable**: Configure your own API Endpoint, API Key, and Model Name.
*   **Smart Prompts**: The built-in prompt is optimized to keep technical terms and brand names in English while providing natural translations for the rest.

### 🚀 Installation

1.  Download the `AITranslate.popclipext` folder (or the `.zip` release) from this repository.
2.  Double-click `AITranslate.popclipext`.
3.  Click **"Install Extension"** in the PopClip popup.

### ⚙️ Configuration

After installation, go to PopClip Settings > Extensions, find **"AI翻译" (AI Translate)**, and click the settings icon:

| Option           | Description                                                                                                        | Default                     |
| :--------------- | :----------------------------------------------------------------------------------------------------------------- | :-------------------------- |
| **API Endpoint** | The Base URL. **Note: Must include `/v1` suffix (e.g. `https://api.openai.com/v1`). HTTPS is highly recommended.** | `https://api.openai.com/v1` |
| **API Key**      | Your API Key (sk-...)                                                                                              | None                        |
| **Model Name**   | THe model ID you wish to use (e.g., `gpt-4o`, `claude-3-5-sonnet`)                                                 | `gpt-4o-mini`               |

### ⚠️ FAQ

**Q: Why do I get a "Network Error"?**
A: Please check:
1.  Is the API Endpoint correct? (Did you forget `/v1`?)
2.  Does your API require HTTPS? macOS apps are often restricted from making insecure HTTP requests.

---

<a name="中文"></a>

## 🇨🇳 中文

这是一个适用于 macOS PopClip 的简洁翻译扩展，基于 OpenAI 格式的 API 接口。  
它比默认的翻译功能更灵活，支持自定义模型（如 GPT-4o-mini、Claude、Gemini），并且内置了优化过的提示词，能提供更符合技术人员习惯的译文（保留原有术语）。

### ✨ 功能特点

*   **极简体验**：选中文字，点击图标，直接显示翻译结果。
*   **高度可配**：支持自定义 API 地址、密钥和模型名称。
*   **智能翻译**：内置 Prompt 经过优化，保留专业术语和品牌英文原名，更适合阅读技术文档。

### 🚀 安装方法

1.  下载本项目中的 `AITranslate.popclipext` 文件夹（或者 Release 中的压缩包）。
2.  双击 `AITranslate.popclipext` 文件。
3.  PopClip 会弹出确认框，点击 **"Install Extension"** 即可。

### ⚙️ 配置说明

安装后，在 PopClip 的设置界面中找到 **"AI翻译"** 扩展，点击右侧的设置图标（铅笔/齿轮）：

| 选项         | 说明                                                                                                                      | 默认值                      |
| :----------- | :------------------------------------------------------------------------------------------------------------------------ | :-------------------------- |
| **API 地址** | 也就是 Base URL。**注意：必须包含 `/v1` 后缀（如 `https://api.openai.com/v1`）。建议使用 HTTPS 协议以避免安全限制问题。** | `https://api.openai.com/v1` |
| **API 密钥** | 你的 Key (sk-...)                                                                                                         | 无                          |
| **模型名称** | 你想使用的模型，例如 `gpt-4o`, `claude-3-5-sonnet` 等                                                                     | `gpt-4o-mini`               |

### ⚠️ 常见问题

**Q: 为什么点击后显示 "Network Error"？**
A: 请检查：
1.  这里填写的 API 地址是否正确（是否漏了 `/v1`）。
2.  如果你使用的是本地搭建的 HTTP 服务（如 `http://127.0.0.1`），可能会因为 macOS 的安全策略被拦截。建议为本地服务配置 HTTPS 反代。

**Q: 如何修改 Prompt？**
A: 右键点击扩展文件夹中的 `translate.js`，修改里面的 `systemPrompt` 变量即可。
