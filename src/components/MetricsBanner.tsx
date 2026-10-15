export function MetricsBanner() {
  const metrics = [
    {
      value: '+50',
      label: 'Projetos entregues',
    },
    {
      value: '+30',
      label: 'Clientes satisfeitos',
    },
    {
      value: '99%',
      label: 'Uptime dos nossos sistemas',
    },
    {
      value: '4.9/5',
      label: 'Avaliação dos clientes',
    },
  ];

  return (
    <section className="bg-[#071732] py-16 lg:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Title */}
          <div className="lg:col-span-4">
            <span className="text-[#38BDF8] font-bold text-xs tracking-[0.16em] uppercase block mb-2">
              EM NÚMEROS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.03em] leading-tight">
              Resultados que <br />
              falam por si.
            </h2>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 lg:gap-8">
              {metrics.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight mb-1 font-sans">
                    {item.value}
                  </div>
                  <div className="text-slate-300 text-xs sm:text-sm leading-snug font-normal">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
