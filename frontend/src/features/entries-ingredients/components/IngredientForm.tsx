export default function IngredientForm() {
  return (
    <form className="space-y-4 bg-white p-4 rounded-md shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1 text-sm text-slate-700">
          Proveedor
          <input
            type="text"
            name="supplier"
            placeholder="Nombre del proveedor"
            className="border border-slate-200 rounded px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-slate-700">
          Fecha de entrada
          <input
            type="date"
            name="date"
            className="border border-slate-200 rounded px-3 py-2"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1 text-sm text-slate-700">
        Detalle
        <textarea
          name="notes"
          placeholder="Notas o elementos incluidos"
          className="border border-slate-200 rounded px-3 py-2 min-h-[96px]"
        />
      </label>

      <div className="flex justify-end">
        <button
          type="button"
          className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-900"
        >
          Guardar entrada (demo)
        </button>
      </div>
    </form>
  );
}
