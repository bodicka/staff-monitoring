const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    return (
      <div
        className="p-2 text-sm rounded-lg shadow-lg"
        style={{
          backgroundColor: "var(--background)",
          border: "1px solid var(--foreground)",
        }}
      >
        <p className="font-semibold">{item.name}</p>
        <p>Время: {item.value.toFixed(1)} ч</p>
        <p>Доля: {item.payload.percentage.toFixed(1)}%</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
