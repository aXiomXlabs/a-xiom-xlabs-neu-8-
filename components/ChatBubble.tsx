"use client"

import type React from "react"
import { useState, useCallback, useRef, useEffect } from "react"
import { Bot, X, Send, AlertTriangle, Info, Zap, Shield, Repeat, Clock, Globe, Cpu, DollarSign } from "lucide-react"
import { chatWithGrokAI, type Message } from "@/app/actions/grok-ai"

// Definiere Kategorien für detaillierte Informationen
type InfoCategory =
  | "copy-trading"
  | "bloxroute"
  | "same-block"
  | "bdn-network"
  | "advantages"
  | "security"
  | "pricing"
  | "technical"
  | "getting-started"

// Detaillierte Informationen nach Kategorien
const detailedInfo: Record<InfoCategory, string> = {
  "copy-trading": `# Copy Trading bei Rust Rocket

Unser Copy Trading System ist eine revolutionäre Funktion, die Ihnen ermöglicht, automatisch die Trades erfolgreicher Händler zu kopieren.

## Wie es funktioniert:

1. **Echtzeit-Wallet-Analyse**: Unsere KI analysiert kontinuierlich tausende Solana-Wallets, um Top-Performer zu identifizieren.

2. **Fortschrittliche Filterung**: Wir filtern nach verschiedenen Metriken wie:
   • Historische Rendite
   • Risikomanagement
   • Handelsvolumen
   • Konsistenz der Performance
   • Diversifikation der Assets

3. **Same-Block Execution**: Wenn ein Top-Trader eine Position eröffnet, kopiert unser System den Trade in demselben Solana-Block - das bedeutet keine Verzögerung!

4. **Anpassbare Parameter**: Sie können festlegen:
   • Maximales Investment pro Trade
   • Stop-Loss und Take-Profit Levels
   • Welche Arten von Assets kopiert werden sollen
   • Maximale Anzahl gleichzeitiger Positionen

5. **Risikomanagement**: Unser System implementiert automatisch Risikomanagement-Strategien, um Ihr Kapital zu schützen.

## Vorteile gegenüber herkömmlichen Copy Trading Systemen:

• **Geschwindigkeit**: Durch Same-Block Execution gibt es keine Verzögerung zwischen dem Original-Trade und Ihrem kopierten Trade.
• **Präzision**: Exakte Replikation der Trades ohne Slippage oder Preisunterschiede.
• **Skalierbarkeit**: Sie können mehrere Top-Trader gleichzeitig kopieren.
• **Transparenz**: Vollständige Einsicht in die Performance-Metriken der Trader.
• **Anpassbarkeit**: Umfangreiche Einstellungsmöglichkeiten für Ihre individuellen Bedürfnisse.

Unser Copy Trading System ist besonders effektiv für Memecoins auf Solana, wo Geschwindigkeit und Präzision entscheidend sind.`,

  bloxroute: `# Bloxroute Integration bei Rust Rocket

Rust Rocket nutzt die fortschrittliche Bloxroute-Technologie, um einen entscheidenden Vorteil im Solana-Ökosystem zu bieten.

## Was ist Bloxroute?

Bloxroute ist ein spezialisiertes Blockchain-Distributionsnetzwerk (BDN), das entwickelt wurde, um Transaktionen mit minimaler Latenz zu übertragen. Es fungiert als eine Art "Überholspur" für Blockchain-Transaktionen.

## Wie wir Bloxroute implementieren:

1. **Direkte Integration**: Rust Rocket hat eine direkte Integration mit Bloxroute's BDN, was uns privilegierten Zugang zu einem Hochgeschwindigkeitsnetzwerk für Transaktionsübermittlung gibt.

2. **Optimierte Routing-Algorithmen**: Unsere proprietären Algorithmen wählen automatisch den schnellsten Pfad durch das Bloxroute-Netzwerk für jede Transaktion.

3. **Strategische Server-Platzierung**: Wir betreiben Server an strategischen Standorten in der Nähe von Solana-Validatoren, um die Latenz weiter zu reduzieren.

4. **Priorisierte Transaktionsverarbeitung**: Durch Bloxroute erhalten unsere Transaktionen Priorität in der Verarbeitungsqueue.

5. **Redundante Pfade**: Wir nutzen mehrere redundante Pfade durch das Bloxroute-Netzwerk, um 100% Zuverlässigkeit zu gewährleisten.

## Technische Vorteile:

• **Latenzreduktion um bis zu 95%**: Im Vergleich zu Standard-RPC-Endpunkten.
• **Garantierte Blockpriorität**: Ihre Transaktionen werden in den frühestmöglichen Block aufgenommen.
• **Frontrunning-Schutz**: Durch direkte Verbindungen zu Validatoren wird das Risiko des Frontrunnings minimiert.
• **Skalierbarkeit**: Das System kann problemlos tausende gleichzeitige Transaktionen verarbeiten.

Die Bloxroute-Integration ist ein zentraler Bestandteil unserer Same-Block-Execution-Technologie und gibt Rust Rocket einen technologischen Vorsprung, den andere Trading-Bots einfach nicht erreichen können.`,

  "same-block": `# Same-Block Execution Technologie

Die Same-Block Execution ist das Herzstück von Rust Rocket und revolutioniert das Trading auf Solana.

## Was bedeutet Same-Block Execution?

Bei Solana werden Transaktionen in "Blöcken" gruppiert, die etwa alle 400 Millisekunden erzeugt werden. Same-Block Execution bedeutet, dass Rust Rocket Ihre Transaktion im exakt gleichen Block wie die Zieltransaktion platzieren kann.

## Wie wir es erreichen:

1. **Ultraschnelle Erkennung**: Unser System erkennt relevante Transaktionen in der Mempool, bevor sie in einen Block aufgenommen werden.

2. **Optimierte Transaktionsstruktur**: Wir verwenden eine hochoptimierte Transaktionsstruktur, die minimale Verarbeitungszeit benötigt.

3. **Direkte Validator-Verbindungen**: Rust Rocket unterhält direkte Verbindungen zu führenden Solana-Validatoren.

4. **Priorisierte Gebührenstruktur**: Unser System berechnet automatisch die optimale Transaktionsgebühr, um Priorität zu erhalten.

5. **Parallelisierte Ausführung**: Mehrere redundante Transaktionspfade werden gleichzeitig genutzt, um Erfolg zu garantieren.

## Technische Details:

• **Latenz: <10ms**: Von Erkennung bis Transaktionsübermittlung.
• **Erfolgsrate: >99.8%**: Für Same-Block Execution unter normalen Netzwerkbedingungen.
• **Skalierbarkeit**: Kann hunderte gleichzeitige Transaktionen verarbeiten.
• **Anpassbare Priorität**: Sie können wählen, wie aggressiv das System Ihre Transaktionen priorisieren soll.

## Warum es entscheidend ist:

Bei volatilen Memecoins kann der Unterschied zwischen demselben Block und dem nächsten Block den Unterschied zwischen Gewinn und Verlust bedeuten. Preisbewegungen können innerhalb von Millisekunden stattfinden, und Same-Block Execution gibt Ihnen den entscheidenden Vorteil.

Kein anderer Trading-Bot auf dem Markt kann konsistent Same-Block Execution mit unserer Erfolgsrate garantieren.`,

  "bdn-network": `# Das Block Dependent Network (BDN) von Rust Rocket

Unser proprietäres Block Dependent Network (BDN) ist ein globales Netzwerk von strategisch platzierten Solana-Gateways, das Rust Rocket einen beispiellosen Geschwindigkeitsvorteil verschafft.

## Netzwerkarchitektur:

1. **15 Globale Standorte**: Unsere BDN-Knoten sind strategisch auf 5 Kontinenten platziert, um minimale Latenz zu gewährleisten:
   • Nordamerika (4 Standorte)
   • Europa (4 Standorte)
   • Asien (4 Standorte)
   • Australien (2 Standorte)
   • Südamerika (1 Standort)

2. **Direkte Validator-Verbindungen**: Jeder BDN-Knoten unterhält direkte Hochgeschwindigkeitsverbindungen zu mehreren Solana-Validatoren.

3. **Redundante Pfade**: Jede Transaktion wird über mehrere Pfade gesendet, um 100% Zuverlässigkeit zu gewährleisten.

4. **Adaptive Routing**: Unser System wählt automatisch den schnellsten Pfad basierend auf aktuellen Netzwerkbedingungen.

5. **Proprietäre Hardware**: Wir verwenden spezialisierte Hardware mit optimierten Netzwerkkarten und CPUs für minimale Latenz.

## Technische Spezifikationen:

• **Durchschnittliche Latenz: <15ms** weltweit
• **Netzwerkkapazität: >10.000 TPS** (Transaktionen pro Sekunde)
• **Verfügbarkeit: 99.99%** durch redundante Systeme
• **Automatisches Failover**: Bei Ausfall eines Knotens werden Transaktionen automatisch umgeleitet

## Vorteile gegenüber Standard-RPC-Endpunkten:

• **5-10x schnellere Transaktionsübermittlung**
• **Priorisierte Verarbeitung** durch direkte Validator-Verbindungen
• **Reduziertes Frontrunning-Risiko**
• **Höhere Erfolgsrate** bei Transaktionen während Netzwerküberlastung

Unser BDN-Netzwerk ist ein entscheidender Bestandteil unserer Technologie und ermöglicht die Same-Block Execution, die Rust Rocket von anderen Trading-Bots unterscheidet.`,

  advantages: `# Warum Rust Rocket besser ist als alle anderen Trading-Bots

Rust Rocket hebt sich durch mehrere entscheidende Vorteile von der Konkurrenz ab:

## 1. Technologischer Vorsprung

• **Same-Block Execution**: Als einziger Bot garantieren wir Ausführung im selben Block - andere Bots sind mindestens 1-2 Blöcke langsamer.
• **Proprietäres BDN-Netzwerk**: Unser globales Netzwerk bietet Geschwindigkeitsvorteile, die andere Bots nicht erreichen können.
• **Bloxroute-Integration**: Direkter Zugang zu einem spezialisierten Hochgeschwindigkeitsnetzwerk.
• **Optimierte Codebasis**: In Rust geschrieben für maximale Performance und minimale Latenz.

## 2. Fortschrittliches Copy Trading

• **KI-gestützte Trader-Auswahl**: Unsere KI identifiziert die profitabelsten Wallets in Echtzeit.
• **Anpassbare Parameter**: Umfangreiche Einstellungsmöglichkeiten, die andere Bots nicht bieten.
• **Risikomanagement-Algorithmen**: Automatischer Schutz vor übermäßigen Verlusten.
• **Multi-Wallet-Tracking**: Verfolgen Sie gleichzeitig mehrere erfolgreiche Trader.

## 3. Sicherheit und Zuverlässigkeit

• **Keine Verwahrung von Geldern**: Ihr Kapital bleibt immer in Ihrer Kontrolle.
• **Open-Source-Audit**: Unser Code wurde von unabhängigen Sicherheitsexperten geprüft.
• **Verschlüsselte Verbindungen**: Alle Daten werden mit militärischer Verschlüsselung übertragen.
• **99.9% Uptime**: Unsere Infrastruktur ist für maximale Zuverlässigkeit ausgelegt.

## 4. Benutzerfreundlichkeit

• **Intuitive Benutzeroberfläche**: Einfach zu bedienen, auch für Anfänger.
• **Umfassende Dokumentation**: Detaillierte Anleitungen für alle Funktionen.
• **Responsive Support**: Unser Team ist 24/7 verfügbar.
• **Regelmäßige Updates**: Kontinuierliche Verbesserungen und neue Funktionen.

## 5. Transparenz und Fairness

• **Klare Preisstruktur**: Keine versteckten Gebühren oder Überraschungen.
• **Performance-Metriken**: Vollständige Transparenz über die Leistung des Systems.
• **Community-Fokus**: Wir hören auf Feedback und setzen es um.
• **Keine Bevorzugung**: Alle Benutzer erhalten die gleiche Leistung und Priorität.

Während andere Bots einzelne dieser Funktionen anbieten mögen, ist Rust Rocket der einzige, der alle diese Vorteile in einer Plattform vereint, optimiert für die einzigartige Geschwindigkeit und Volatilität des Solana-Ökosystems.`,

  security: `# Sicherheitsfeatures von Rust Rocket

Sicherheit hat bei Rust Rocket höchste Priorität. Unsere umfassenden Sicherheitsmaßnahmen schützen Ihr Kapital und Ihre Daten.

## Architektonische Sicherheit

1. **Non-Custodial Design**: Rust Rocket hat niemals direkten Zugriff auf Ihre Gelder. Sie behalten volle Kontrolle über Ihre privaten Schlüssel.

2. **Sichere Wallet-Integration**: Unterstützung für Hardware-Wallets wie Ledger und Trezor für maximale Sicherheit.

3. **Isolierte Ausführungsumgebung**: Jede Benutzerinstanz läuft in einer isolierten Container-Umgebung.

4. **Mehrschichtige Firewall**: Fortschrittliche Firewall-Systeme schützen vor unbefugtem Zugriff.

5. **DDoS-Schutz**: Robuste Abwehrmechanismen gegen Distributed Denial of Service Angriffe.

## Datensicherheit

1. **Ende-zu-Ende-Verschlüsselung**: Alle Daten werden mit AES-256 verschlüsselt.

2. **Zero-Knowledge-Architektur**: Sensible Daten werden lokal verarbeitet, nicht auf unseren Servern.

3. **Regelmäßige Sicherheitsaudits**: Unabhängige Experten überprüfen regelmäßig unseren Code.

4. **Bug-Bounty-Programm**: Wir belohnen die Entdeckung von Sicherheitslücken.

5. **Datenschutz-Compliance**: Vollständige Einhaltung der DSGVO und anderer Datenschutzbestimmungen.

## Transaktionssicherheit

1. **Transaktionsvalidierung**: Mehrfache Überprüfung jeder Transaktion vor der Ausführung.

2. **Automatische Anomalieerkennung**: KI-gestützte Erkennung verdächtiger Aktivitäten.

3. **Anpassbare Risikostufen**: Sie bestimmen, wie konservativ oder aggressiv das System handelt.

4. **Notfall-Killswitch**: Sofortige Deaktivierung aller Aktivitäten im Notfall.

5. **Transaktionslimits**: Definieren Sie maximale Handelsvolumina pro Zeiteinheit.

## Betriebssicherheit

1. **Redundante Infrastruktur**: Mehrfach redundante Server und Netzwerkverbindungen.

2. **Regelmäßige Backups**: Automatische Sicherung aller kritischen Daten.

3. **Disaster Recovery Plan**: Umfassende Strategien für verschiedene Notfallszenarien.

4. **24/7-Überwachung**: Unser Sicherheitsteam überwacht das System rund um die Uhr.

5. **Regelmäßige Sicherheitsupdates**: Kontinuierliche Aktualisierung aller Sicherheitskomponenten.

Rust Rocket setzt neue Maßstäbe für Sicherheit im Bereich der Trading-Bots und gibt Ihnen die Gewissheit, dass Ihr Kapital und Ihre Daten bestmöglich geschützt sind.`,

  pricing: `# Preisgestaltung und Verfügbarkeit von Rust Rocket

Rust Rocket bietet flexible Preispläne, die auf verschiedene Handelsbedürfnisse und Budgets zugeschnitten sind.

## Aktuelle Pläne

### Starter Plan
• **Preis**: $99/Monat
• **Features**:
  - Same-Block Execution
  - Basis Copy Trading (bis zu 3 Wallets)
  - Standard API-Limits
  - E-Mail-Support
  - Tägliche Handelsberichte

### Pro Plan
• **Preis**: $249/Monat
• **Features**:
  - Alles im Starter Plan
  - Erweiterte Copy Trading (bis zu 10 Wallets)
  - Höhere API-Limits
  - Prioritäts-Support
  - Stündliche Handelsberichte
  - Anpassbare Handelsstrategien
  - Telegram-Benachrichtigungen

### Enterprise Plan
• **Preis**: $499/Monat
• **Features**:
  - Alles im Pro Plan
  - Unbegrenztes Copy Trading
  - Höchste API-Priorität
  - Dedizierter Account Manager
  - Echtzeit-Handelsberichte
  - Benutzerdefinierte Integrationen
  - Telefonischer Support
  - Erweiterte Risikomanagement-Tools

## Zahlungsoptionen

• **Kryptowährungen**: BTC, ETH, SOL, USDT, USDC
• **Traditionelle Zahlungsmethoden**: Kreditkarte, PayPal, Banküberweisung
• **Rabatte**: 20% Rabatt bei jährlicher Zahlung

## Verfügbarkeit

Rust Rocket befindet sich derzeit in der finalen Testphase. Die offizielle Markteinführung ist für Q2 2023 geplant.

### Waitlist-Vorteile

Durch Beitritt zur Waitlist erhalten Sie:
• **Early Access**: Zugang vor der offiziellen Veröffentlichung
• **25% Rabatt**: Auf Ihren ersten Monat
• **Kostenlose Testphase**: 14-tägige kostenlose Testphase
• **Exklusive Tutorials**: Zugang zu speziellen Schulungsmaterialien
• **Prioritäts-Onboarding**: Persönliche Einrichtungshilfe

## Geld-zurück-Garantie

Wir bieten eine 30-tägige Geld-zurück-Garantie für alle Pläne. Wenn Sie mit Rust Rocket nicht zufrieden sind, erstatten wir Ihnen den vollen Betrag.

## Enterprise-Lösungen

Für institutionelle Kunden bieten wir maßgeschneiderte Lösungen mit:
• Dedizierte Infrastruktur
• Angepasste Funktionen
• SLA-Garantien
• Compliance-Dokumentation
• Integrationsunterstützung

Kontaktieren Sie unser Vertriebsteam für ein individuelles Angebot.`,

  technical: `# Technische Details von Rust Rocket

Rust Rocket ist auf maximale Performance und Zuverlässigkeit ausgelegt, mit einer hochoptimierten Architektur.

## Programmiersprache und Frameworks

• **Backend**: Entwickelt in Rust für maximale Geschwindigkeit und Speichereffizienz
• **Smart Contracts**: Solana Program Library (SPL) mit benutzerdefinierten Optimierungen
• **Frontend**: React mit TypeScript für Typensicherheit
• **API**: GraphQL für flexible und effiziente Datenabfragen
• **Datenbank**: TimescaleDB für Hochgeschwindigkeits-Zeitreihendaten

## Infrastruktur

• **Server**: Bare-Metal-Server mit Intel Xeon Prozessoren und NVIDIA GPUs für ML-Berechnungen
• **Netzwerk**: 10 Gbit/s Netzwerkverbindungen mit redundanten Pfaden
• **Speicher**: NVMe SSDs in RAID-Konfiguration für maximale I/O-Performance
• **Caching**: Redis und Memcached für Hochgeschwindigkeits-Datenzugriff
• **Load Balancing**: HAProxy mit benutzerdefinierten Routing-Algorithmen

## Solana-Integration

• **RPC-Verbindungen**: Direkte Verbindungen zu über 50 Solana-Validatoren
• **Transaktionsverarbeitung**: Proprietäre Pipelining-Technologie für minimale Latenz
• **Block-Synchronisation**: Echtzeit-Synchronisation mit dem Solana-Netzwerk
• **Mempool-Monitoring**: Kontinuierliche Überwachung der Mempool für frühzeitige Transaktionserkennung
• **Gebührenoptimierung**: Dynamische Anpassung der Transaktionsgebühren basierend auf Netzwerkbedingungen

## Algorithmen und KI

• **Trader-Identifikation**: Proprietäre ML-Algorithmen zur Identifikation erfolgreicher Trader
• **Preisvorhersage**: Zeitreihenanalyse mit LSTM-Netzwerken
• **Risikobewertung**: Monte-Carlo-Simulationen für Risikoquantifizierung
• **Anomalieerkennung**: Unüberwachtes Lernen zur Erkennung ungewöhnlicher Marktbedingungen
• **Optimierung**: Genetische Algorithmen zur kontinuierlichen Strategieoptimierung

## Performance-Metriken

• **Latenz**: <10ms von Ereigniserkennung bis Transaktionsübermittlung
• **Durchsatz**: Verarbeitung von >1000 Transaktionen pro Sekunde
• **Erfolgsrate**: >99.8% erfolgreiche Same-Block Execution
• **Uptime**: 99.99% Systemverfügbarkeit
• **Skalierbarkeit**: Horizontale Skalierung für unbegrenzte Benutzerkapazität

## Sicherheitsimplementierung

• **Verschlüsselung**: AES-256 für Daten in Ruhe, TLS 1.3 für Daten in Bewegung
• **Authentifizierung**: Multi-Faktor-Authentifizierung mit Hardware-Token-Unterstützung
• **Netzwerksicherheit**: IDS/IPS-Systeme mit KI-gestützter Bedrohungserkennung
• **Code-Sicherheit**: Statische und dynamische Codeanalyse, regelmäßige Penetrationstests
• **Compliance**: SOC 2 Typ II-konform, GDPR-konform

Rust Rocket setzt auf modernste Technologie in jeder Komponente, um einen Trading-Bot zu schaffen, der in Bezug auf Geschwindigkeit, Zuverlässigkeit und Sicherheit unübertroffen ist.`,

  "getting-started": `# Erste Schritte mit Rust Rocket

Folgen Sie dieser Anleitung, um mit Rust Rocket zu beginnen und das Beste aus unserem Trading-Bot herauszuholen.

## 1. Registrierung und Onboarding

• **Waitlist beitreten**: Melden Sie sich auf unserer Website für die Waitlist an.
• **Einladung**: Sie erhalten eine Einladungs-E-Mail, sobald Zugang verfügbar ist.
• **Konto erstellen**: Folgen Sie dem Link in der E-Mail, um Ihr Konto zu erstellen.
• **KYC-Prozess**: Schließen Sie den Know-Your-Customer-Prozess ab (falls erforderlich).
• **Abonnement wählen**: Wählen Sie den für Sie passenden Preisplan.

## 2. Wallet-Einrichtung

• **Unterstützte Wallets**: Phantom, Solflare, Ledger, Trezor
• **Wallet verbinden**: Verbinden Sie Ihre Solana-Wallet mit Rust Rocket.
• **Berechtigungen einrichten**: Konfigurieren Sie die Handelsberechtigungen.
• **Kapital zuweisen**: Bestimmen Sie, wie viel Kapital für den Trading-Bot verfügbar sein soll.
• **Sicherheitseinstellungen**: Konfigurieren Sie zusätzliche Sicherheitsmaßnahmen.

## 3. Trading-Strategie konfigurieren

• **Copy Trading einrichten**:
  - Wählen Sie Wallets zum Kopieren aus unserer kurierten Liste.
  - Oder geben Sie spezifische Wallet-Adressen ein, die Sie verfolgen möchten.
  - Legen Sie Allokationsparameter fest (z.B. 10% Ihres Kapitals pro kopiertem Trade).

• **Risikomanagement**:
  - Setzen Sie maximale Verlustgrenzen pro Trade und pro Tag.
  - Konfigurieren Sie Stop-Loss und Take-Profit-Parameter.
  - Legen Sie maximale Positionsgrößen fest.

• **Asset-Filter**:
  - Wählen Sie, welche Token-Typen gehandelt werden sollen.
  - Setzen Sie Mindestliquiditätsschwellen.
  - Konfigurieren Sie Marktkapitalisierungsfilter.

## 4. Überwachung und Optimierung

• **Dashboard**: Überwachen Sie Ihre Trades in Echtzeit über das Dashboard.
• **Benachrichtigungen einrichten**:
  - E-Mail-Benachrichtigungen
  - Telegram-Benachrichtigungen
  - Push-Benachrichtigungen in der App

• **Performance-Analyse**:
  - Überprüfen Sie tägliche/wöchentliche Performance-Berichte.
  - Analysieren Sie erfolgreiche und nicht erfolgreiche Trades.
  - Identifizieren Sie Optimierungsmöglichkeiten.

• **Strategie anpassen**:
  - Passen Sie Parameter basierend auf Performance-Daten an.
  - Testen Sie verschiedene Copy-Trading-Quellen.
  - Verfeinern Sie Ihre Risikomanagement-Einstellungen.

## 5. Fortgeschrittene Funktionen

• **API-Integration**: Nutzen Sie unsere API für benutzerdefinierte Integrationen.
• **Backtesting**: Testen Sie Strategien mit historischen Daten.
• **Steuerberichte**: Generieren Sie Berichte für Steuerzwecke.
• **Portfolioanalyse**: Erhalten Sie Einblicke in Ihre Gesamtportfolioperformance.

## Support und Ressourcen

• **Dokumentation**: Umfassende Dokumentation unter docs.rustrocket.io
• **Video-Tutorials**: Schritt-für-Schritt-Anleitungen auf unserem YouTube-Kanal
• **Community-Forum**: Austausch mit anderen Benutzern und dem Team
• **Support-Team**: Erreichbar per E-Mail, Chat und Telefon (Enterprise-Plan)

Beginnen Sie noch heute mit Rust Rocket und erleben Sie den Unterschied, den Same-Block Execution und fortschrittliches Copy Trading für Ihre Trading-Ergebnisse machen können.`,
}

export default function ChatBubble() {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Willkommen bei Rust Rocket! Ich bin Ihr KI-Assistent, entwickelt mit fortschrittlicher Technologie, um Ihnen bei allen Fragen zu Rust Rocket zu helfen. Ich kann Ihnen detaillierte Informationen zu unserem Solana Trading Bot, Copy-Trading-Funktionen und Same-Block-Execution geben. Fragen Sie mich einfach, was Sie wissen möchten!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [apiStatus, setApiStatus] = useState<"unchecked" | "connected" | "error">("unchecked")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [activeCategory, setActiveCategory] = useState<InfoCategory | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Test API connection on component mount
  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log("Testing AI connection...")
        setApiStatus("unchecked")

        // Verwende einen einfachen Test, um die API-Verbindung zu prüfen
        const testMessage = { role: "user" as const, content: "Hello, this is a connection test." }

        try {
          const response = await chatWithGrokAI([testMessage])
          console.log("AI test response:", response)

          if (response.success) {
            console.log("AI connection successful!")
            setApiStatus("connected")
          } else {
            console.error("AI connection failed:", response.error)
            setApiStatus("error")
          }
        } catch (error) {
          console.error("Error in test connection:", error)
          setApiStatus("error")
        }
      } catch (error) {
        console.error("Error testing AI connection:", error)
        setApiStatus("error")
      }
    }

    testConnection()
  }, [])

  // Sende automatisch eine Folgenachricht nach 3 Sekunden, wenn der Chat geöffnet wird
  useEffect(() => {
    if (isOpen && messages.length === 1) {
      const timer = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Ich kann Ihnen detaillierte Informationen zu folgenden Themen geben:\n\n• Copy Trading\n• Bloxroute-Technologie\n• Same-Block Execution\n• BDN Netzwerk\n• Vorteile gegenüber Konkurrenten\n• Sicherheitsfeatures\n• Preisgestaltung\n• Technische Details\n• Erste Schritte\n\nWas interessiert Sie am meisten?",
          },
        ])
        setShowSuggestions(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isOpen, messages])

  // Inaktivitäts-Timer für Vorschläge
  useEffect(() => {
    if (isOpen && messages.length > 1 && !isLoading) {
      const inactivityTimer = setTimeout(() => {
        if (!showSuggestions) {
          setShowSuggestions(true)
        }
      }, 15000) // 15 Sekunden Inaktivität

      return () => clearTimeout(inactivityTimer)
    }
  }, [isOpen, messages, isLoading, showSuggestions])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!input.trim() && !activeCategory) return
      setIsLoading(true)
      setShowSuggestions(false)

      let userContent = input.trim()

      // Wenn eine Kategorie aktiv ist, verwende diese statt der Benutzereingabe
      if (activeCategory) {
        userContent = `Erzähle mir mehr über ${activeCategory}`
        setActiveCategory(null)
      }

      // Add user message
      const userMessage: Message = { role: "user", content: userContent }
      setMessages((prev) => [...prev, userMessage])
      setInput("")

      try {
        // Prüfe auf Schlüsselwörter für detaillierte Informationen
        const lowerCaseInput = userContent.toLowerCase()

        // Prüfe auf Kategorie-Anfragen
        let foundDetailedInfo = false
        const categoryMatches: Record<string, InfoCategory> = {
          "copy trading": "copy-trading",
          "kopie trading": "copy-trading",
          "copy-trading": "copy-trading",
          bloxroute: "bloxroute",
          "same block": "same-block",
          "same-block": "same-block",
          execution: "same-block",
          bdn: "bdn-network",
          netzwerk: "bdn-network",
          network: "bdn-network",
          vorteile: "advantages",
          besser: "advantages",
          advantages: "advantages",
          sicherheit: "security",
          security: "security",
          preis: "pricing",
          kosten: "pricing",
          pricing: "pricing",
          technisch: "technical",
          technical: "technical",
          technik: "technical",
          starten: "getting-started",
          anfangen: "getting-started",
          "getting started": "getting-started",
        }

        for (const [keyword, category] of Object.entries(categoryMatches)) {
          if (lowerCaseInput.includes(keyword)) {
            setMessages((prev) => [...prev, { role: "assistant", content: detailedInfo[category] }])
            foundDetailedInfo = true
            break
          }
        }

        // Wenn keine detaillierte Info gefunden wurde, prüfe auf allgemeine Fragen
        if (!foundDetailedInfo) {
          // Erweiterte lokale Fallback-Antworten für häufige Fragen
          const localResponses: Record<string, string> = {
            "tell me about yourself":
              "Ich bin der Rust Rocket AI-Assistent, entwickelt mit modernster KI-Technologie. Ich wurde speziell trainiert, um Experte für Rust Rocket und seine Funktionen zu sein. Ich kann Ihnen detaillierte Informationen zu unserem Solana Trading Bot, Copy-Trading und Same-Block-Execution geben. Ich lerne kontinuierlich dazu und verbessere meine Antworten basierend auf Benutzerinteraktionen. Mein Ziel ist es, Ihnen die bestmögliche Unterstützung zu bieten!",
            "what is rust rocket":
              "Rust Rocket ist ein fortschrittlicher Solana Trading Bot mit Same-Block Execution und Copy-Trading-Funktionen. Wir nutzen proprietäre Technologie wie unser BDN-Netzwerk und Bloxroute-Integration, um Ihnen einen entscheidenden Vorteil im schnelllebigen Solana-Memecoin-Markt zu verschaffen. Unsere Technologie ermöglicht es, Trades im exakt gleichen Block wie die Zieltransaktion auszuführen - ein Vorteil, den kein anderer Bot bieten kann.",
            "how does copy trading work":
              "Unser Copy-Trading-System identifiziert automatisch Top-Performer auf Solana und führt dieselben Trades für Sie mit Blitzgeschwindigkeit aus. Die KI analysiert tausende Wallets in Echtzeit, filtert nach Metriken wie historischer Rendite und Risikomanagement, und kopiert Trades mit Same-Block Execution - ohne Verzögerung! Sie können Parameter wie maximales Investment pro Trade und Stop-Loss-Levels anpassen. Für detaillierte Informationen fragen Sie mich nach 'Copy Trading Details'.",
            "what is same-block execution":
              "Same-Block Execution bedeutet, dass Ihre Trades im exakt gleichen Solana-Block wie das ursprüngliche Ereignis ausgeführt werden. Bei Solana werden Blöcke etwa alle 400ms erzeugt - unsere Technologie erkennt relevante Transaktionen in der Mempool, bevor sie in einen Block aufgenommen werden, und platziert Ihre Transaktion im selben Block. Dies gibt Ihnen maximale Geschwindigkeit und Präzision beim Trading von Memecoins. Für technische Details fragen Sie nach 'Same-Block Technische Details'.",
            "when will rust rocket launch":
              "Rust Rocket befindet sich derzeit in der finalen Testphase und wird in Kürze starten. Die offizielle Markteinführung ist für Q2 2023 geplant. Durch Beitritt zur Waitlist erhalten Sie Early Access vor der offiziellen Veröffentlichung, 25% Rabatt auf Ihren ersten Monat, eine 14-tägige kostenlose Testphase, Zugang zu exklusiven Tutorials und persönliche Einrichtungshilfe. Melden Sie sich auf unserer Website für die Waitlist an, um als Erster benachrichtigt zu werden.",
            "how much does it cost":
              "Rust Rocket bietet flexible Preispläne: Der Starter Plan für $99/Monat bietet Same-Block Execution und Basis-Copy-Trading. Der Pro Plan für $249/Monat erweitert dies mit mehr Wallets und Prioritäts-Support. Der Enterprise Plan für $499/Monat bietet unbegrenztes Copy Trading, höchste API-Priorität und einen dedizierten Account Manager. Alle Pläne haben eine 30-Tage-Geld-zurück-Garantie. Für institutionelle Kunden bieten wir maßgeschneiderte Lösungen. Für vollständige Details fragen Sie nach 'Preisgestaltung'.",
            "is it safe":
              "Sicherheit hat bei Rust Rocket höchste Priorität. Wir verwenden ein Non-Custodial Design, bei dem Sie volle Kontrolle über Ihre privaten Schlüssel behalten. Alle Daten werden mit AES-256 verschlüsselt, und wir nutzen eine Zero-Knowledge-Architektur. Unser Code wird regelmäßig von unabhängigen Experten auditiert, und wir haben ein Bug-Bounty-Programm. Für Transaktionen gibt es mehrfache Validierung, Anomalieerkennung und anpassbare Risikostufen. Für umfassende Sicherheitsdetails fragen Sie nach 'Sicherheitsfeatures'.",
            "how do i get started":
              "Um mit Rust Rocket zu beginnen: 1) Melden Sie sich für die Waitlist an und erstellen Sie ein Konto, sobald Sie eine Einladung erhalten. 2) Verbinden Sie Ihre Solana-Wallet (Phantom, Solflare, Ledger oder Trezor) und konfigurieren Sie die Handelsberechtigungen. 3) Richten Sie Ihre Trading-Strategie ein, wählen Sie Wallets zum Kopieren und setzen Sie Risikomanagement-Parameter. 4) Überwachen Sie Ihre Trades über das Dashboard und richten Sie Benachrichtigungen ein. 5) Analysieren und optimieren Sie Ihre Strategie basierend auf Performance-Daten. Für eine detaillierte Anleitung fragen Sie nach 'Erste Schritte'.",
            "what is bdn network":
              "Das Block Dependent Network (BDN) ist unser proprietäres globales Netzwerk von 15 strategisch platzierten Solana-Gateways auf 5 Kontinenten. Jeder BDN-Knoten unterhält direkte Hochgeschwindigkeitsverbindungen zu mehreren Solana-Validatoren, mit redundanten Pfaden und adaptivem Routing. Die durchschnittliche Latenz beträgt weltweit <15ms, mit einer Netzwerkkapazität von >10.000 TPS und 99,99% Verfügbarkeit. Im Vergleich zu Standard-RPC-Endpunkten bietet unser BDN 5-10x schnellere Transaktionsübermittlung und priorisierte Verarbeitung. Für technische Details fragen Sie nach 'BDN Netzwerk'.",
            "what can you do":
              "Ich bin ein hochentwickelter KI-Assistent für Rust Rocket und kann Ihnen bei folgenden Themen helfen:\n\n• Detaillierte Erklärungen zu allen Rust Rocket Funktionen\n• Informationen zur Same-Block Execution Technologie\n• Erläuterungen zum Copy-Trading System\n• Details zum BDN Netzwerk und Bloxroute-Integration\n• Vergleiche mit anderen Trading-Bots\n• Antworten zu Preisen und Verfügbarkeit\n• Sicherheitsfeatures und Best Practices\n• Technische Spezifikationen\n• Anleitungen für die ersten Schritte\n• Allgemeine Fragen zu Solana und Memecoins\n\nIch lerne ständig dazu und verbessere meine Antworten mit jeder Interaktion!",
            "who created you":
              "Ich wurde vom Rust Rocket-Entwicklungsteam erstellt, einer Gruppe von Experten für Blockchain-Technologie, algorithmischen Handel und Künstliche Intelligenz. Das Team kombiniert jahrelange Erfahrung im Hochfrequenzhandel mit tiefem Verständnis der Solana-Blockchain. Mein Zweck ist es, Benutzern zu helfen, die fortschrittlichen Funktionen von Rust Rocket zu verstehen und zu nutzen, insbesondere die Same-Block Execution und Copy-Trading-Funktionen, die Rust Rocket von anderen Trading-Bots unterscheiden.",
            "what is solana":
              "Solana ist eine Hochleistungs-Blockchain-Plattform, bekannt für ihre schnellen Transaktionsgeschwindigkeiten (bis zu 65.000 TPS) und niedrigen Gebühren. Sie verwendet einen innovativen Proof-of-History (PoH) Konsensmechanismus in Kombination mit Proof-of-Stake (PoS). Solana ist besonders beliebt für DeFi-Anwendungen, NFTs und Memecoins aufgrund ihrer Effizienz. Die Blockchain hat eine Blockzeit von etwa 400 Millisekunden, was sie ideal für Trading-Bots wie Rust Rocket macht, die von dieser Geschwindigkeit profitieren, um Same-Block Execution zu ermöglichen.",
            "why better":
              "Rust Rocket übertrifft andere Trading-Bots durch mehrere entscheidende Vorteile: 1) Unsere Same-Block Execution garantiert Ausführung im selben Block - andere Bots sind mindestens 1-2 Blöcke langsamer. 2) Unser proprietäres BDN-Netzwerk und Bloxroute-Integration bieten unübertroffene Geschwindigkeit. 3) Unser KI-gestütztes Copy Trading identifiziert die profitabelsten Wallets in Echtzeit mit umfangreichen Anpassungsmöglichkeiten. 4) Wir bieten höchste Sicherheitsstandards ohne Verwahrung Ihrer Gelder. 5) Unsere Benutzeroberfläche ist intuitiv und benutzerfreundlich. Für einen vollständigen Vergleich fragen Sie nach 'Vorteile'.",
            "technical details":
              "Rust Rocket ist auf maximale Performance ausgelegt: Das Backend ist in Rust entwickelt, Smart Contracts nutzen die Solana Program Library mit benutzerdefinierten Optimierungen. Wir verwenden Bare-Metal-Server mit Intel Xeon Prozessoren, 10 Gbit/s Netzwerkverbindungen und NVMe SSDs. Unsere direkte Integration mit über 50 Solana-Validatoren und proprietäre Pipelining-Technologie ermöglicht eine Latenz von <10ms. Wir setzen ML-Algorithmen für Trader-Identifikation und Risikobewertung ein. Die Erfolgsrate für Same-Block Execution liegt bei >99,8%. Für vollständige technische Spezifikationen fragen Sie nach 'Technische Details'.",
          }

          let foundLocalResponse = false

          for (const [key, value] of Object.entries(localResponses)) {
            if (lowerCaseInput.includes(key)) {
              setMessages((prev) => [...prev, { role: "assistant", content: value }])
              foundLocalResponse = true
              break
            }
          }

          // Wenn keine lokale Antwort gefunden wurde und die API verfügbar ist, versuche die API zu nutzen
          if (!foundLocalResponse && apiStatus === "connected") {
            console.log("No local response found, trying AI...")
            // Call the AI API through our server action
            const response = await chatWithGrokAI([...messages, userMessage])

            if (response.success) {
              setMessages((prev) => [...prev, { role: "assistant", content: response.message }])
            } else {
              console.error("Error from AI API:", response.error)
              // Fallback auf generische Antwort bei API-Fehler
              setMessages((prev) => [
                ...prev,
                {
                  role: "assistant",
                  content:
                    "Entschuldigung, ich konnte keine spezifische Antwort auf Ihre Frage finden. Ich kann Ihnen detaillierte Informationen zu Copy Trading, Bloxroute, Same-Block Execution, unserem BDN-Netzwerk, Vorteilen gegenüber Konkurrenten, Sicherheitsfeatures, Preisgestaltung oder technischen Details geben. Was interessiert Sie am meisten?",
                },
              ])
              setShowSuggestions(true)
              setApiStatus("error")
            }
          } else if (!foundLocalResponse) {
            // Fallback-Antwort, wenn die API nicht verfügbar ist und keine lokale Antwort gefunden wurde
            setMessages((prev) => [
              ...prev,
              {
                role: "assistant",
                content:
                  "Entschuldigung, ich konnte keine spezifische Antwort auf Ihre Frage finden. Ich kann Ihnen detaillierte Informationen zu Copy Trading, Bloxroute, Same-Block Execution, unserem BDN-Netzwerk, Vorteilen gegenüber Konkurrenten, Sicherheitsfeatures, Preisgestaltung oder technischen Details geben. Was interessiert Sie am meisten?",
              },
            ])
            setShowSuggestions(true)
          }
        }
      } catch (error) {
        console.error("Error in chat submission:", error)
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder fragen Sie nach einem spezifischen Thema wie Copy Trading oder Same-Block Execution.",
          },
        ])
        setApiStatus("error")
        setShowSuggestions(true)
      } finally {
        setIsLoading(false)
      }
    },
    [input, isLoading, messages, apiStatus, activeCategory, showSuggestions],
  )

  const handleCategoryClick = (category: InfoCategory) => {
    setActiveCategory(category)
    handleSubmit(new Event("submit") as unknown as React.FormEvent)
  }

  const toggleChat = () => {
    setIsOpen((prev) => !prev)
  }

  // Funktion zum Rendern der Kategorie-Icons
  const getCategoryIcon = (category: InfoCategory) => {
    switch (category) {
      case "copy-trading":
        return <Repeat className="h-4 w-4" />
      case "bloxroute":
        return <Zap className="h-4 w-4" />
      case "same-block":
        return <Clock className="h-4 w-4" />
      case "bdn-network":
        return <Globe className="h-4 w-4" />
      case "advantages":
        return <Cpu className="h-4 w-4" />
      case "security":
        return <Shield className="h-4 w-4" />
      case "pricing":
        return <DollarSign className="h-4 w-4" />
      case "technical":
        return <Cpu className="h-4 w-4" />
      case "getting-started":
        return <Info className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-background-secondary border border-gray-800 rounded-lg shadow-xl w-80 sm:w-96 h-[500px] flex flex-col">
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gradient-to-r from-primary/20 to-solana-purple/20">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-solana-purple" />
              <div>
                <span className="font-medium text-text-primary block">Rust Rocket Assistant</span>
                <span className="text-xs text-gray-400">KI-gestützt • Immer verfügbar</span>
              </div>
              {apiStatus === "error" && (
                <span className="flex items-center text-xs text-amber-400 ml-2">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Offline Mode
                </span>
              )}
            </div>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-text-primary transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            ref={messagesContainerRef}
          >
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[90%] rounded-lg px-4 py-2 ${
                    msg.role === "user" ? "bg-primary/10 text-text-primary" : "bg-solana-purple/10 text-text-primary"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-solana-purple/10 text-text-primary max-w-[80%] rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-solana-purple/50 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-solana-purple/50 animate-bounce delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-solana-purple/50 animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            {showSuggestions && !isLoading && (
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <button
                  onClick={() => handleCategoryClick("copy-trading")}
                  className="flex items-center gap-1 bg-solana-purple/10 hover:bg-solana-purple/20 text-text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {getCategoryIcon("copy-trading")} Copy Trading
                </button>
                <button
                  onClick={() => handleCategoryClick("bloxroute")}
                  className="flex items-center gap-1 bg-solana-purple/10 hover:bg-solana-purple/20 text-text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {getCategoryIcon("bloxroute")} Bloxroute
                </button>
                <button
                  onClick={() => handleCategoryClick("same-block")}
                  className="flex items-center gap-1 bg-solana-purple/10 hover:bg-solana-purple/20 text-text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {getCategoryIcon("same-block")} Same-Block
                </button>
                <button
                  onClick={() => handleCategoryClick("bdn-network")}
                  className="flex items-center gap-1 bg-solana-purple/10 hover:bg-solana-purple/20 text-text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {getCategoryIcon("bdn-network")} BDN Netzwerk
                </button>
                <button
                  onClick={() => handleCategoryClick("advantages")}
                  className="flex items-center gap-1 bg-solana-purple/10 hover:bg-solana-purple/20 text-text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {getCategoryIcon("advantages")} Vorteile
                </button>
                <button
                  onClick={() => handleCategoryClick("security")}
                  className="flex items-center gap-1 bg-solana-purple/10 hover:bg-solana-purple/20 text-text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {getCategoryIcon("security")} Sicherheit
                </button>
                <button
                  onClick={() => handleCategoryClick("pricing")}
                  className="flex items-center gap-1 bg-solana-purple/10 hover:bg-solana-purple/20 text-text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {getCategoryIcon("pricing")} Preise
                </button>
                <button
                  onClick={() => handleCategoryClick("technical")}
                  className="flex items-center gap-1 bg-solana-purple/10 hover:bg-solana-purple/20 text-text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {getCategoryIcon("technical")} Technik
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Fragen Sie nach Copy Trading, Bloxroute..."
                className="flex-1 bg-background border border-gray-800 rounded-md px-3 py-2 text-text-primary focus:outline-none focus:ring-1 focus:ring-solana-purple"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || (!input.trim() && !activeCategory)}
                className="bg-solana-purple/20 hover:bg-solana-purple/30 text-solana-purple px-3 py-2 rounded-md transition-colors disabled:opacity-50 flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <button
            className="flex items-center justify-center w-14 h-14 rounded-full bg-background-secondary border border-gray-800 shadow-lg hover:border-solana-purple/50 transition-all duration-300 hover:scale-105 group"
            aria-label="Chat with Rust Rocket Assistant"
            onClick={toggleChat}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-solana-purple/20 to-solana-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Bot className="h-6 w-6 text-solana-purple group-hover:text-solana-purple transition-colors duration-300" />
            {apiStatus === "error" && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-amber-400 rounded-full border border-background-secondary"></span>
            )}
          </button>

          {/* Tooltip */}
          <div
            className={`absolute bottom-full right-0 mb-3 bg-background-secondary border border-gray-800 rounded-lg py-2 px-4 shadow-lg transition-all duration-300 whitespace-nowrap ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <div className="text-sm font-medium">Chat mit Rust Rocket Assistant</div>
            <div className="absolute bottom-0 right-5 transform translate-y-1/2 rotate-45 w-2 h-2 bg-background-secondary border-r border-b border-gray-800"></div>
          </div>

          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full border-4 border-solana-purple/30 animate-ping opacity-30"></div>
        </div>
      )}
    </div>
  )
}
