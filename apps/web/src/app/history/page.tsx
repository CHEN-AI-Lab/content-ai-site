'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useMessages } from '@content-ai/shared'

const platformIcons: Record<string, string> = {
  xiaohongshu: '📕',
  douyin: '🎵',
  twitter: '𝕏',
  instagram: '📸',
  weixin: '💬',
}

const initialItems = [
  { id: 1, platform: 'xiaohongshu', content: '姐妹们！今天必须给你们分享一个宝藏！✨\n\n说到护肤，我有太多话要说了...', createdAt: '2024-01-15 14:30' },
  { id: 2, platform: 'douyin', content: '家人们！这个也太绝了吧！🎵\n\n姐妹们！今天必须让你们知道这个宝藏！', createdAt: '2024-01-15 12:20' },
  { id: 3, platform: 'twitter', content: "AI is changing the world 🔥\n\nJust tried this and it's amazing!", createdAt: '2024-01-14 18:45' },
  { id: 4, platform: 'xiaohongshu', content: '【护肤心得】🌸 姐妹们！今天来聊聊敏感肌护理...', createdAt: '2024-01-14 10:00' },
  { id: 5, platform: 'instagram', content: '✨ Weekend vibes ✨\n\nHappy moments captured 📸', createdAt: '2024-01-13 22:15' },
]

export default function HistoryPage() {
  const t = useMessages()
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())
  const [items, setItems] = useState(initialItems)

  const toggleSelect = (id: number) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const deleteSelected = () => {
    setItems(prev => prev.filter(item => !selectedIds.has(item.id)))
    setSelectedIds(new Set())
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">{t['history.title'] || 'History'}</h1>
            <p className="opacity-60">{t['history.subtitle'] || 'Your generated content'}</p>
          </div>
          {selectedIds.size > 0 && (
            <button
              className="px-4 py-2 rounded-xl text-sm font-medium text-white"
              style={{ background: '#e74c3c' }}
              onClick={deleteSelected}
            >
              {t['history.delete'] || 'Delete'} ({selectedIds.size})
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <p className="opacity-60 mb-4">{t['history.empty'] || 'No history yet'}</p>
            <Link href="/generate" className="btn-primary px-6 py-3 inline-block">
              {t['history.generate'] || 'Generate Now'}
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card flex gap-4 items-start">
                <input
                  type="checkbox"
                  checked={selectedIds.has(item.id)}
                  onChange={() => toggleSelect(item.id)}
                  className="mt-1 cursor-pointer"
                />
                <div className="text-2xl">{platformIcons[item.platform] || '📄'}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm whitespace-pre-wrap line-clamp-2 opacity-70 mb-1">
                    {item.content}
                  </p>
                  <p className="text-xs opacity-40">{item.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}