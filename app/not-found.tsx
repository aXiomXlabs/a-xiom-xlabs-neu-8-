import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-2xl w-full bg-card p-8 rounded-xl shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h1>
          <p className="text-lg mb-6">Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.</p>
          <Link href="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}
