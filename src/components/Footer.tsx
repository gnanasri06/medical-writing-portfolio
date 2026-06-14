export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-[#E9EBED] py-8 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#8A949C] text-center md:text-left leading-[1.6]">
          Medical Writer · Pharma Content Writer · Medical Communication Specialist · Clinical Writing · Healthcare Content Expert
        </p>
        <p className="text-xs text-[#8A949C] flex-shrink-0">
          © {year} Gnanasri. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
