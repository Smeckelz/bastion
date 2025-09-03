// FILE: app/signin/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Sign in to Chronix
        </h1>

        <button
          onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
          className="w-full mb-6 rounded-lg border border-gray-300 py-3 font-semibold hover:bg-gray-50"
        >
          Continue with Discord
        </button>

        <div className="relative flex items-center justify-center mb-6">
          <span className="h-px w-full bg-gray-200" />
          <span className="absolute bg-white px-3 text-sm text-gray-500">or</span>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          New here?{" "}
          <a href="/register" className="text-purple-700 font-semibold hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </main>
  );
}
