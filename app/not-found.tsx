"use client"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"

// Komponente, die useSearchParams verwendet
function NotFoundContent() {
  const searchParams = useSearchParams()
  const referrer = searchParams.get("from") || ""

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h1>
      <p className="text-lg mb-6">
        Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        {referrer && <span> Sie kamen von: {referrer}</span>}
      </p>
      <Link href="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        Zurück zur Startseite
      </Link>
    </div>
  )
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-card p-8 rounded-xl shadow-lg"
      >
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h1>
              <p className="text-lg mb-6">Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.</p>
              <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Zurück zur Startseite
              </Link>
            </div>
          }
        >
          <NotFoundContent />
        </Suspense>
      </motion.div>
    </div>
  )
}
