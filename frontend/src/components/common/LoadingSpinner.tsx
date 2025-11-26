export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-6 h-6 rounded-full border-2 border-slate-400 border-t-transparent animate-spin" />
    </div>
  );
}
