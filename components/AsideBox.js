export default function AsideBox({ title = "Side note", children }) {
  return (
    <div className="bg-gray-200 rounded px-5 py-4 my-4 text-base">
      <div className="space-y-2">
        <div className="font-bold text-gray-600 uppercase">{title}</div>
        {children}
      </div>
    </div>
  );
}
