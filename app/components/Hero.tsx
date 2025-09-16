"use client"
import { signIn } from 'next-auth/react'

export default function Hero() {
  return (
    <section className="pt-16 pb-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Chronix</h1>
          <p className="mt-4 text-gray-600 max-w-xl">Track Bastions, browse the World Codex, and generate session recaps — all in one place. Built for storytellers and keepers of lore.</p>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => signIn('discord')}
              className="inline-flex items-center gap-3 rounded-md bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 font-medium shadow-sm"
            >
              Sign in with Discord
            </button>
            <a href="#preview" className="text-sm text-gray-600 hover:underline">See preview</a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-purple-100 to-white flex items-center justify-center shadow-lg">
            <img src="/logo.svg" alt="Chronix logo" width={160} height={160} className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
