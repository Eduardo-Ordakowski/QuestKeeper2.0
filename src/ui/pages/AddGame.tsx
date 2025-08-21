import React, { useState } from "react";

export default function AddGame() {
  const [busy, setBusy] = useState(false);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-pink-800">Adicionar um Jogo</h2>

      <form
        method="post"
        action="/InsertGame/CreateGame"
        onSubmit={() => setBusy(true)}
        className="card p-6 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-slate-600">Banner</span>
            <input name="BannerImgUrl" type="text" placeholder="https://..." className="mt-1 w-full rounded-xl border px-3 py-2"/>
          </label>

          <label className="block">
            <span className="text-sm text-slate-600">Icone</span>
            <input name="IconImg" type="text" placeholder="https://..." className="mt-1 w-full rounded-xl border px-3 py-2"/>
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm text-slate-600">Título</span>
            <input name="Name" type="text" className="mt-1 w-full rounded-xl border px-3 py-2" required/>
          </label>

          <label className="block">
            <span className="text-sm text-slate-600">Genêro</span>
            <input name="Genre" type="text" className="mt-1 w-full rounded-xl border px-3 py-2"/>
          </label>

          <label className="block">
            <span className="text-sm text-slate-600">Desenvolvedora</span>
            <input name="Developer" type="text" className="mt-1 w-full rounded-xl border px-3 py-2"/>
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm text-slate-600">Descrição</span>
            <textarea name="Description" rows={4} className="mt-1 w-full rounded-xl border px-3 py-2"/>
          </label>

          <label className="block">
            <span className="text-sm text-slate-600">Data de lançamento</span>
            <input name="RealeseDate" type="datetime-local" className="mt-1 w-full rounded-xl border px-3 py-2"/>
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button className="btn text-white" type="submit" disabled={busy}>
            {busy ? "Enviadno..." : "Enviar"}
          </button>
          <a href="http://localhost:5173/InsertGame" className="text-pink-700 underline">Ver jogos...</a>
        </div>

        <p className="text-xs text-slate-500">
          Após o envio, você será redirecionado para a lista de jogos.
        </p>
      </form>
    </section>
  );
}
