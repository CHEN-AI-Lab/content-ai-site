'use client'

import { useState } from 'react'
import { PLATFORMS, WRITING_STYLES, TEMPLATES, FREE_DAILY_LIMIT } from '@content-ai/shared'
import { useMessages } from '@content-ai/shared'

function generateDemoContent(platform: string, _style: string, topic: string, keywords: string): string {
  const keywordList = keywords ? keywords.split(/[、,]/).filter(k => k.trim()) : []

  const templates: Record<string, (t: string, k: string[]) => string> = {
    xiaohongshu: (t, k) => `【${t}】🌸\n\n姐妹们！今天必须给你们分享一个宝藏！✨\n\n说到${t}，我真的有太多话要说了🙌\n\n✅ 真实体验：\n用了两周了，真的爱不释手！${k.length ? `\n\n💡 亮点：${k.join('、')}` : ''}\n\n📝 使用感受：\n刚开始也是抱着试试的心态没想到这么好用！\n\n👍 优点：\n1. 效果好，性价比高\n2. 方便实用\n3. 颜值也在线\n\n💰 价格：\n对学生党也很友好！\n\n姐妹们快冲！真的不踩雷！#${t.slice(0, 4)} #好物分享`,
    douyin: (t, k) => `家人们！${t}也太绝了吧！🎵\n\n姐妹们！今天必须让你们知道这个宝藏！\n用了两周效果真的太香了！\n\n${k.length ? `👉 关键词：${k.join(' ')}` : ''}\n\n✅ 真实测评：\n不是智商税！不是智商税！不是智商税！\n重要的事情说三遍！\n\n💰 性价比：\n这个价格还要什么自行车！\n\n👇 点击下方链接冲！`,
    twitter: (t, k) => `${t} 🔥\n\nJust tried this and it's amazing! ${k.length ? `#${k.join(' #')}` : ''}\n\nIf you're looking for ${t}, this is it!`,
    instagram: (t, k) => `✨ ${t} ✨\n\n${k.length ? `${k.join(' · ')}\n\n` : ''}Happy vibes only ☀️\n\n#${t.slice(0, 10)} #lifestyle #goodvibes`,
    weixin: (t, k) => `${t}\n\n作为从业者，今天来聊聊这个话题。\n\n📌 核心要点：\n\n1. ${t}的重要性\n${k.length ? `\n关键词：${k.join('、')}` : ''}\n\n2. 实际应用\n这段时间的体验下来，真的感觉很有收获。\n\n3. 总结建议\n总体来说是很值得尝试的。\n\n如果你也有类似的经验，欢迎在评论区分享！\n\n/ 往期精选 /\n· 更多优质内容正在整理中\n· 记得关注不迷路\n\n本文仅代表个人观点，供参考。`,
  }

  const template = templates[platform] || templates.xiaohongshu
  return template(topic, keywordList)
}

export default function GeneratePage() {
  const t = useMessages()
  const [selectedPlatform, setSelectedPlatform] = useState('xiaohongshu')
  const [selectedStyle, setSelectedStyle] = useState('planting')
  const [topic, setTopic] = useState('')
  const [keywords, setKeywords] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!topic.trim()) return
    setIsGenerating(true)
    setError('')
    setGeneratedContent('')

    await new Promise(resolve => setTimeout(resolve, 1500))
    const demoContent = generateDemoContent(selectedPlatform, selectedStyle, topic, keywords)
    setGeneratedContent(demoContent)
    setIsGenerating(false)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setError(t['generate.error.copy'] || '复制失败')
    }
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{t['generate.title'] || 'Generate'}</h1>
          <p className="opacity-60">{t['generate.subtitle'] || ''}</p>
        </div>

        <div className="card space-y-6">
          {/* Platform Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3">{t['generate.platformLabel'] || 'Platform'}</label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {PLATFORMS.map((platform) => (
                <button
                  key={platform.id}
                  className={`p-3 rounded-xl text-center transition-all ${
                    selectedPlatform === platform.id ? 'ring-2 ring-offset-2' : 'hover:scale-105'
                  }`}
                  style={{
                    background: selectedPlatform === platform.id ? platform.color : '#f5f5f5',
                    color: selectedPlatform === platform.id ? 'white' : 'var(--foreground)',
                    '--tw-ring-color': platform.color,
                  } as React.CSSProperties}
                  onClick={() => setSelectedPlatform(platform.id)}
                >
                  <div className="text-xl mb-1">{platform.icon}</div>
                  <div className="text-xs font-medium">{t[platform.nameKey] || platform.id}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Style Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3">{t['generate.styleLabel'] || 'Style'}</label>
            <div className="flex flex-wrap gap-2">
              {WRITING_STYLES.map((style) => (
                <button
                  key={style.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedStyle === style.id ? 'text-white' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={selectedStyle === style.id ? { background: 'var(--primary)' } : {}}
                  onClick={() => setSelectedStyle(style.id)}
                >
                  {t[style.nameKey] || style.id}
                </button>
              ))}
            </div>
          </div>

          {/* Topic Input */}
          <div>
            <label className="block text-sm font-semibold mb-3">{t['generate.topicLabel'] || 'Topic'}</label>
            <textarea
              className="input-field min-h-32 resize-none"
              placeholder={(() => {
                const p = PLATFORMS.find(x => x.id === selectedPlatform)
                return p?.placeholderKey ? (t[p.placeholderKey] || '') : ''
              })()}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-semibold mb-3">{t['generate.keywordsLabel'] || 'Keywords'}</label>
            <input
              type="text"
              className="input-field"
              placeholder={t['generate.keywordsHint'] || '用、分隔'}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>

          {/* Generate Button */}
          <button
            className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2"
            onClick={handleGenerate}
            disabled={isGenerating || !topic.trim()}
          >
            {isGenerating ? (
              <><div className="spinner" /> {t['generate.generating'] || 'Generating...'}</>
            ) : (
              <>{t['generate.button'] || 'Generate Now'}</>
            )}
          </button>

          {/* Usage Info */}
          <p className="text-center text-sm opacity-50">
            {(t['generate.remaining'] || '').replace('{used}', String(3)).replace('{total}', String(FREE_DAILY_LIMIT))}
          </p>
        </div>

        {/* Result */}
        {generatedContent && (
          <div className="card mt-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{t['generate.result'] || 'Result'}</h3>
              <button
                className="px-3 py-1 rounded-lg text-sm font-medium transition-all"
                style={{ background: 'var(--secondary)', color: 'white' }}
                onClick={handleCopy}
              >
                {copied ? (t['generate.copied'] || 'Copied') : (t['generate.copy'] || 'Copy')}
              </button>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 whitespace-pre-wrap text-sm leading-relaxed">
              {generatedContent}
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="card mt-6" style={{ background: '#fee', border: '1px solid #fcc' }}>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Templates */}
        <div className="mt-8">
          <h3 className="font-semibold mb-4">{t['generate.templates'] || 'Templates'}</h3>
          <div className="grid gap-3">
            {TEMPLATES.map((template) => (
              <button
                key={template.id}
                className="card text-left hover:scale-[1.01] transition-transform"
                onClick={() => setTopic(t[template.descKey] || '')}
              >
                <div className="font-medium">{t[template.titleKey] || template.id}</div>
                <div className="text-sm opacity-50">{t[template.descKey] || ''}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}