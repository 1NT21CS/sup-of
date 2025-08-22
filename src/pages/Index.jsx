import React, { useState, useMemo } from "react";

// Family‑Friendly Prank Subscription Page
// Tech: React + TailwindCSS only (no external CSS)
// How to use:
// 1) Make sure Tailwind is configured in your project.
// 2) Drop this component into your app and render it at "/".
// 3) Replace FRIEND_NAME and AVATAR_URL to personalize.

const FRIEND_NAME = "Suprith"; // ▶ change this
const AVATAR_URL = "/image.png"; // ▶ replace if you want

export default function PrankSubscriptionApp() {
  const [showReveal, setShowReveal] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [clickedThumb, setClickedThumb] = useState(null);

  // generate some fake clickbait tiles
  const tiles = useMemo(
    () => [
      { t: "Exclusive behind‑the‑scenes!", s: "Totally epic reveal" },
      { t: "Can you believe #3?", s: "Shocking…but wholesome" },
      { t: "Early access premiere", s: "Members only (or is it?)" },
      { t: "Top 10 moments", s: "#7 will make you smile" },
      { t: "Unreleased bloopers", s: "The funniest bits" },
      { t: "VIP live stream", s: "Starting… sometime" },
      { t: "  secret drop", s: "Pinky promise, no spoilers" },
      { t: "Bonus content", s: "Definitely not a rickroll" },
      { t: "24/7 fan cam", s: "Nothing to see here" },
      { t: "Mystery trailer", s: "Just 0:00 long" },
      { t: "Legendary collab", s: "Featuring… surprise!" },
      { t: "Ultra HD reveal", s: "Loading forever…" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-200 to-white text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-indigo-600 text-white grid place-items-center font-bold">F</div>
            <h1 className="text-lg sm:text-xl font-semibold">FSuper Star Only Fan</h1>
          </div>
          <button
            onClick={() => setShowSubscribe(true)}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
          >
            Subscribe
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-4">
        <div className="grid md:grid-cols-[280px,1fr] gap-6 items-center">
          <div className="relative">
            <img
              src={AVATAR_URL}
              alt={`${FRIEND_NAME} avatar`}
              className="h-56 w-56 md:h-64 md:w-64 object-cover rounded-2xl shadow"
            />
            <span className="absolute -bottom-2 -right-2 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow">
              Verified Nice Human ✅
            </span>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              {FRIEND_NAME}'s Super‑Exclusive OnlyFan Page
            </h2>
            <p className="mt-2 text-slate-600 max-w-prose">
              Welcome to a playful, wholesome surprise page celebrating {FRIEND_NAME}! It looks like a premium
              subscription hub… but it’s actually a friendly prank. No fees, no tracking, no real content—just smiles. 🥳
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => setShowSubscribe(true)}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => setShowReveal(true)}
                className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-white transition shadow-sm"
              >
                What is this?
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              By tapping anything here, you agree to our ultra‑serious Terms of Fun. No purchases or data are collected.
            </p>
          </div>
        </div>
      </section>

      {/* Clickbait Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Members‑Only Videos</h3>
          <span className="text-xs text-slate-500">*Totally not real</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tiles.map((tile, i) => (
            <button
              key={i}
              onClick={() => setClickedThumb(i)}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow hover:shadow-lg transition"
            >
              <div className="aspect-video w-full bg-slate-200 grid place-items-center">
                <div className="h-10 w-16 bg-black/70 rounded grid place-items-center">
                  <div className="h-0 w-0 border-l-[10px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                </div>
              </div>
              <div className="p-3 text-left">
                <p className="text-sm font-medium line-clamp-1">{tile.t}</p>
                <p className="text-xs text-slate-500 line-clamp-1">{tile.s}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute top-2 left-2 text-[10px] uppercase tracking-wide bg-amber-400 text-black px-2 py-0.5 rounded-md shadow">
                New
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-lg font-semibold mb-4">Frequently Asked (Silly) Questions</h4>
          <ul className="space-y-4 text-sm text-slate-700">
            <li>
              <p className="font-medium">Is there any real content here?</p>
              <p>Nope! This page is a light‑hearted prank made with love. 💖</p>
            </li>
            <li>
              <p className="font-medium">Are you charging me money?</p>
              <p>Absolutely not. No payments are processed and no personal data is stored.</p>
            </li>
            <li>
              <p className="font-medium">Am I in trouble?</p>
              <p>Not at all. You’re safe! This is 100% friendly and respectful.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-500">
          <p>
            Disclaimer: This playful page is for wholesome fun between friends. If you’d like it removed, just ask the creator kindly and it’ll vanish faster than a snack at a movie night.
          </p>
        </div>
      </footer>

      {/* Modals */}
      {showReveal && (
        <Modal onClose={() => setShowReveal(false)} title="Surprise!">
          <p className="text-sm text-slate-700">
            You’ve landed on a family‑friendly prank page. There are no real videos, nothing gets recorded, and no
            subscriptions are taken. It’s all in good fun to make you smile. 💫
          </p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setShowReveal(false)}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
            >
              Got it
            </button>
          </div>
        </Modal>
      )}

      {showSubscribe && (
        <Modal onClose={() => setShowSubscribe(false)} title="Start Your Totally Free Trial">
          <div className="space-y-3">
            <label className="block text-sm text-slate-700">Email (for pretend access):</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={() => {
                setShowSubscribe(false);
                setShowReveal(true);
              }}
              className="w-full px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow"
            >
              Continue
            </button>
            <p className="text-xs text-slate-500">
              Promise: We don’t store anything. This is just for the giggles.
            </p>
          </div>
        </Modal>
      )}

      {clickedThumb !== null && (
        <Modal onClose={() => setClickedThumb(null)} title="Gotcha!">
          <p className="text-sm text-slate-700">
            There’s no actual video—only good vibes. Have a laugh with {FRIEND_NAME} and enjoy the day! 🎉
          </p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setClickedThumb(null)}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
            >
              LOL okay
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <h5 className="text-lg font-semibold">{title}</h5>
          <button
            onClick={onClose}
            className="h-8 w-8 grid place-items-center rounded-lg hover:bg-slate-100"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            ✕
          </button>
        </div>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}
