import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/60 border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#/" className="text-xl font-bold text-pink-700">QuestKeeper</a>
        <nav className="flex items-center gap-3">
          <a className="px-3 py-2 rounded-xl hover:bg-pink-100" href="#/">Tela Inicial</a>
          <a className="px-3 py-2 rounded-xl hover:bg-pink-100" href="http://localhost:5173/InsertGame" target="_self">Jogos</a>
          <a className="px-3 py-2 rounded-xl hover:bg-pink-100" href="#/add">Adicionar Jogo</a>
        </nav>
      </div>
    </header>
  );
}
