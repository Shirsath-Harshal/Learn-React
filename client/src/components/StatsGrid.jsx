function StatsGrid({ stats }) {
  return (
    <section className="stats-grid" aria-label="Library statistics">
      {stats.map((item) => (
        <article className="stat-card" key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </article>
      ))}
    </section>
  );
}

export default StatsGrid;
