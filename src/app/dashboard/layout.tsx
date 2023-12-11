export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav>subheader</nav>
        {children}
      </section>
    )
  }