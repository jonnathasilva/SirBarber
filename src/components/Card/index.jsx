export const Card = ({ url, title, children }) => (
  <div className="w-auto h-auto flex flex-col">
    <div className="lg:flex-1">
      <img src={`./imgs/${url}.png`} alt={url} className="w-full h-auto" />
    </div>

    <div className="p-8 bg-White-300 space-y-2 h-full">
      <span className="font-bold text-xl text-Black-500">{title}</span>

      <p className="text-xs text-Black-300">{children}</p>
    </div>
  </div>
);
