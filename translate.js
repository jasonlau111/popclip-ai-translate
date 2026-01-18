// AI翻译 - 使用 OpenAI 兼容 API
const axios = require("axios");

// 获取设置
const options = popclip.options;
const apiBase = options.apiBase || "https://api.openai.com/v1";
const apiKey = options.apiKey || "";
const model = options.model || "gpt-4o-mini";
const text = popclip.input.text;

// 检查必填项
if (!apiKey) {
    throw new Error("请先在设置中填写 API 密钥");
}

// 系统提示词
const systemPrompt = "你是一个专业翻译。将内容翻译成简体中文。专业术语保留英文原文。只输出译文。";

try {
    // 调用 API
    const response = await axios({
        method: "POST",
        url: apiBase + "/chat/completions",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
        },
        data: {
            model: model,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: text }
            ],
            temperature: 0.3
        },
        timeout: 30000
    });

    // 返回翻译结果
    return response.data.choices[0].message.content.trim();

} catch (error) {
    // 显示具体错误信息（不会触发设置界面）
    if (error.response) {
        // API 返回了错误
        const msg = error.response.data?.error?.message || JSON.stringify(error.response.data);
        throw new Error("API错误: " + msg);
    } else if (error.code === "ECONNABORTED") {
        throw new Error("请求超时，请重试");
    } else {
        throw new Error("网络错误: " + error.message);
    }
}
