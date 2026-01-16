# PopClip AI Translate Extension

[🇨🇳 中文指南 (Chinese README)](README_ZH.md)

---

A powerful yet simple translation extension for [PopClip on macOS](https://mp.weixin.qq.com/s/M0aBdUqfQ6J440BvE2n0WA), powered by OpenAI-compatible APIs.  
It offers more flexibility than built-in tools, allowing you to use custom models (like GPT-4o-mini, Claude, Gemini) and delivering high-quality translations that preserve technical terminology.

## ✨ Features

*   **Simple & Fast**: Select text, click the icon, and see the translation instantly.
*   **Fully Customizable**: Configure your own API Endpoint, API Key, and Model Name.
*   **Smart Prompts**: The built-in prompt is optimized to keep technical terms and brand names in English while providing natural translations for the rest.

## 🚀 Installation

1.  Download the `AITranslate.popclipext` folder (or the `.zip` release) from this repository.
2.  Double-click `AITranslate.popclipext`.
3.  Click **"Install Extension"** in the PopClip popup.

## ⚙️ Configuration

After installation, go to PopClip Settings > Extensions, find **"AI翻译" (AI Translate)**, and click the settings icon:

| Option           | Description                                                                                                        | Default                     |
| :--------------- | :----------------------------------------------------------------------------------------------------------------- | :-------------------------- |
| **API Endpoint** | The Base URL. **Note: Must include `/v1` suffix (e.g. `https://api.openai.com/v1`). HTTPS is highly recommended.** | `https://api.openai.com/v1` |
| **API Key**      | Your API Key (sk-...)                                                                                              | None                        |
| **Model Name**   | The model ID you wish to use (e.g., `gpt-4o`, `claude-3-5-sonnet`)                                                 | `gpt-4o-mini`               |

## ⚠️ FAQ

**Q: Why do I get a "Network Error"?**
A: Please check:
1.  Is the API Endpoint correct? (Did you forget `/v1`?)
2.  Does your API require HTTPS? macOS apps are often restricted from making insecure HTTP requests.
