import { createContext, useContext, useState, ReactNode } from "react";

type Locale = "sv" | "en";

const translations = {
  nav: {
    plattformen: { sv: "Plattformen", en: "Platform" },
    howItWorks: { sv: "Hur det fungerar", en: "How it works" },
    useCases: { sv: "Användning", en: "Use Cases" },
    sakerhet: { sv: "Säkerhet", en: "Security" },
    faq: { sv: "FAQ", en: "FAQ" },
    loggain: { sv: "Logga in", en: "Log in" },
    bokademo: { sv: "Boka demo", en: "Book demo" },
  },
  hero: {
    headline: {
      sv: "Sök i era dokument\nmed AI",
      en: "Search your documents\nwith AI",
    },
    subheadline: {
      sv: "Roxana gör det möjligt att söka i teknisk dokumentation som manualer, tjänstekontrakt och ritningar – men också direkt i era befintliga kunskapskällor som Confluence. Ställ frågor på naturligt språk och få verifierbara svar med källhänvisning – utan att flytta eller kopiera data.",
      en: "Roxana lets you search technical documentation like manuals, service contracts and blueprints — but also directly in your existing knowledge sources like Confluence. Ask questions in natural language and get verifiable answers with source references — without moving or copying data.",
    },
    cta: { sv: "Boka demo", en: "Book demo" },
    secondaryCta: { sv: "Se hur det fungerar", en: "See how it works" },
  },
  value: {
    title: {
      sv: "Informationen finns redan – Roxana gör den tillgänglig",
      en: "The information already exists — Roxana makes it accessible",
    },
    subtitle: {
      sv: "Kritisk kunskap ligger begravd i PDF:er, Confluence-sidor, specifikationer och kontrakt. Medarbetare lägger timmar på att leta istället för att arbeta. Roxana kopplar sig till era befintliga system och gör allt sökbart med AI – utan att data behöver flyttas.",
      en: "Critical knowledge is buried in PDFs, Confluence pages, specifications and contracts. Employees spend hours searching instead of working. Roxana connects to your existing systems and makes everything searchable with AI — without moving any data.",
    },
    points: [
      {
        title: { sv: "Förstår frågor, inte bara nyckelord", en: "Understands questions, not just keywords" },
        desc: {
          sv: "Semantisk sökning som tolkar innebörden bakom det du frågar. Hitta rätt information utan att veta exakt vad dokumentet kallar det.",
          en: "Semantic search that interprets the meaning behind what you ask. Find the right information without knowing the exact terminology.",
        },
      },
      {
        title: { sv: "Varje svar har en källa", en: "Every answer has a source" },
        desc: {
          sv: "Svar visas med sidhänvisning och markering i originaldokumentet. Inget är fabricerat – allt går att verifiera.",
          en: "Answers include page references and highlighting in the original document. Nothing is fabricated — everything is verifiable.",
        },
      },
      {
        title: { sv: "Er data stannar hos er", en: "Your data stays with you" },
        desc: {
          sv: "Driftsätts i privat miljö eller helt on-prem. Ni bestämmer var data lagras och vem som har åtkomst.",
          en: "Deploy in a private environment or fully on-prem. You decide where data is stored and who has access.",
        },
      },
    ],
  },
  howItWorks: {
    title: { sv: "Från fråga till verifierat svar – på sekunder", en: "From question to verified answer — in seconds" },
    steps: [
      {
        title: { sv: "Koppla era kunskapskällor", en: "Connect your knowledge sources" },
        desc: {
          sv: "Anslut Confluence, SharePoint eller Google Drive – eller ladda upp PDF:er, manualer och specifikationer direkt. Utan att bygga om eller flytta något.",
          en: "Connect Confluence, SharePoint or Google Drive — or upload PDFs, manuals and specifications directly. Without rebuilding or moving anything.",
        },
      },
      {
        title: { sv: "Ställ en fråga på naturligt språk", en: "Ask a question in natural language" },
        desc: {
          sv: "Skriv din fråga som du skulle ställa den till en kollega. Roxana tolkar innebörden, inte bara orden.",
          en: "Write your question as you'd ask a colleague. Roxana interprets the meaning, not just the words.",
        },
      },
      {
        title: { sv: "Få svar med källa", en: "Get answers with source" },
        desc: {
          sv: "Svaret visas tillsammans med originaldokumentet – markerat på rätt sida och avsnitt, redo att verifiera.",
          en: "The answer is shown alongside the original document — highlighted on the right page and section, ready to verify.",
        },
      },
    ],
  },
  features: {
    title: { sv: "Byggd för komplex teknisk dokumentation", en: "Built for complex technical documentation" },
    items: [
      {
        title: { sv: "AI-chatt med dokumentkontext", en: "AI chat with document context" },
        desc: {
          sv: "Ställ följdfrågor i en konversation. Roxana behåller sammanhanget och hämtar svar från rätt dokument automatiskt.",
          en: "Ask follow-up questions in a conversation. Roxana maintains context and retrieves answers from the right documents automatically.",
        },
      },
      {
        title: { sv: "Visa och verifiera i originalet", en: "View and verify in the original" },
        desc: {
          sv: "Källdokumentet visas direkt i gränssnittet med det relevanta avsnittet markerat – så att ni alltid kan granska underlaget.",
          en: "The source document is shown directly in the interface with the relevant section highlighted — so you can always review the basis.",
        },
      },
      {
        title: { sv: "Flerspråkig dokumentförståelse", en: "Multilingual document understanding" },
        desc: {
          sv: "Fråga på svenska, få svar från engelska dokument – eller tvärtom. Roxana hanterar flera språk automatiskt.",
          en: "Ask in Swedish, get answers from English documents — or vice versa. Roxana handles multiple languages automatically.",
        },
      },
      {
        title: { sv: "Koppla befintliga system direkt", en: "Connect existing systems directly" },
        desc: {
          sv: "Confluence, SharePoint, Google Drive och lokala filsystem – Roxana indexerar innehållet utan att flytta data. Allt sökbart från ett gränssnitt.",
          en: "Confluence, SharePoint, Google Drive and local file systems — Roxana indexes the content without moving data. Everything searchable from one interface.",
        },
      },
    ],
  },
  useCases: {
    title: { sv: "Hur team använder Roxana i praktiken", en: "How teams use Roxana in practice" },
    subtitle: {
      sv: "Tekniker, utvecklare och supportmedarbetare använder Roxana för att hitta rätt information i manualer, kontrakt och specifikationer – på sekunder istället för timmar.",
      en: "Technicians, developers and support agents use Roxana to find the right information in manuals, contracts and specifications — in seconds instead of hours.",
    },
    items: [
      {
        title: { sv: "Industri & teknik", en: "Industry & engineering" },
        desc: {
          sv: "Tekniker söker driftsparametrar, underhållsinstruktioner och säkerhetsföreskrifter direkt i manualer – utan att bläddra igenom hundratals sidor.",
          en: "Technicians search operating parameters, maintenance instructions and safety regulations directly in manuals — without scrolling through hundreds of pages.",
        },
        scenario: {
          sv: "En tekniker behöver snabbt veta rätt drifttemperatur för en pump. Istället för att bläddra genom en 200-sidig manual ställer hen frågan till Roxana.",
          en: "A technician needs to quickly find the operating temperature for a pump. Instead of scrolling through a 200-page manual, they ask Roxana.",
        },
        result: {
          sv: "\"Max temperatur är 85°C vid kontinuerlig drift\" – med referens till XR-500_spec_v3.2, s. 47.",
          en: "\"Max temperature is 85°C during continuous operation\" — with reference to XR-500_spec_v3.2, p. 47.",
        },
      },
      {
        title: { sv: "Systemutveckling & integration", en: "System development & integration" },
        desc: {
          sv: "Utvecklare söker i tjänstekontrakt, API-dokumentation och tekniska specifikationer för att förstå integrationskrav och dataformat.",
          en: "Developers search service contracts, API documentation and technical specifications to understand integration requirements and data formats.",
        },
        scenario: {
          sv: "En utvecklare behöver förstå vilka fält som krävs i ett API-anrop enligt ett tjänstekontrakt. Kontraktet är på 80 sidor.",
          en: "A developer needs to understand which fields are required in an API call according to a service contract. The contract is 80 pages long.",
        },
        result: {
          sv: "Roxana visar exakt vilka fält som krävs – med referens till §4.2 i tjänstekontraktet.",
          en: "Roxana shows exactly which fields are required — with reference to §4.2 in the service contract.",
        },
      },
      {
        title: { sv: "Support & kundservice", en: "Support & customer service" },
        desc: {
          sv: "Supportmedarbetare identifierar felkoder, hittar felsökningssteg och löser ärenden snabbare med hjälp av teknisk dokumentation.",
          en: "Support agents identify error codes, find troubleshooting steps and resolve tickets faster using technical documentation.",
        },
        scenario: {
          sv: "En supportmedarbetare får en felkod från en kund och behöver snabbt hitta orsak och lösning i den tekniska dokumentationen.",
          en: "A support agent receives an error code from a customer and needs to quickly find the cause and solution in technical documentation.",
        },
        result: {
          sv: "Felsökningsavsnittet visas med steg-för-steg-instruktioner – direkt från manualen, avsnitt 8.3.",
          en: "The troubleshooting section is shown with step-by-step instructions — directly from the manual, section 8.3.",
        },
      },
      {
        title: { sv: "Fältarbete & installation", en: "Field work & installation" },
        desc: {
          sv: "Elektriker och tekniker söker kopplingsscheman, installationsanvisningar och ritningar direkt på plats – även utan internetåtkomst.",
          en: "Electricians and technicians search wiring diagrams, installation instructions and blueprints directly on-site — even without internet access.",
        },
        scenario: {
          sv: "En elektriker på plats behöver hitta rätt kopplingsschema för en specifik elcentral. Dokumentationen finns i flera PDF:er.",
          en: "An electrician on-site needs to find the right wiring diagram for a specific electrical panel. The documentation exists in multiple PDFs.",
        },
        result: {
          sv: "Roxana söker igenom alla relevanta dokument och visar rätt schema med markering – även offline.",
          en: "Roxana searches through all relevant documents and shows the right diagram with highlighting — even offline.",
        },
      },
    ],
  },
  security: {
    title: { sv: "Säkerhet och kontroll", en: "Security and control" },
    subtitle: { sv: "Er organisation behåller full kontroll över all data. Alltid.", en: "Your organization retains full control over all data. Always." },
    options: [
      { title: { sv: "Privat miljö", en: "Private environment" }, desc: { sv: "All data stannar inom ert eget nätverk. Ingen information lämnar er infrastruktur. Full kontroll över lagring, åtkomst och hantering.", en: "All data stays within your own network. No information leaves your infrastructure. Full control over storage, access and handling." } },
      { title: { sv: "On-prem / offline", en: "On-prem / offline" }, desc: { sv: "Driftsätts lokalt på er egen hårdvara, helt utan internetåtkomst. För försvarsindustri, kritisk infrastruktur och miljöer med höga säkerhetskrav.", en: "Deployed locally on your own hardware, entirely without internet access. For defense, critical infrastructure and environments with strict security requirements." } },
    ],
    sourceTitle: { sv: "Spårbarhet i varje svar", en: "Traceability in every answer" },
    sourceDesc: { sv: "Varje svar refererar till originaldokumentet med sida och avsnitt. Inget är fabricerat – allt går att granska.", en: "Every answer references the original document with page and section. Nothing is fabricated — everything can be reviewed." },
  },
  faq: {
    title: { sv: "Vanliga frågor om Roxana", en: "Frequently asked questions about Roxana" },
    items: [
      {
        q: { sv: "Vad är Roxana?", en: "What is Roxana?" },
        a: {
          sv: "Roxana är en AI-plattform som gör teknisk dokumentation sökbar. Ställ frågor på naturligt språk mot era manualer, specifikationer, kontrakt och Confluence-sidor – och få svar med exakt källhänvisning.",
          en: "Roxana is an AI platform that makes technical documentation searchable. Ask questions in natural language against your manuals, specifications, contracts and Confluence pages — and get answers with exact source references.",
        },
      },
      {
        q: { sv: "Hur skiljer sig Roxana från ChatGPT?", en: "How does Roxana differ from ChatGPT?" },
        a: {
          sv: "ChatGPT svarar utifrån allmän träningsdata. Roxana arbetar enbart med era egna dokument och visar alltid var svaret kommer ifrån – med sida, avsnitt och markering. Svaren är spårbara och går att granska direkt.",
          en: "ChatGPT answers based on general training data. Roxana works exclusively with your own documents and always shows where the answer comes from — with page, section and highlighting. Answers are traceable and can be reviewed directly.",
        },
      },
      {
        q: { sv: "Vilka dokumentformat stöds?", en: "Which document formats are supported?" },
        a: {
          sv: "PDF, Confluence-sidor, tekniska ritningar och flera andra format. Roxana hanterar komplexa dokument med tabeller, diagram och flerspråkigt innehåll.",
          en: "PDF, Confluence pages, technical drawings and several other formats. Roxana handles complex documents with tables, diagrams and multilingual content.",
        },
      },
      {
        q: { sv: "Är det säkert att använda Roxana med känsliga dokument?", en: "Is it safe to use Roxana with sensitive documents?" },
        a: {
          sv: "Ja. Roxana driftsätts i er privata miljö eller helt on-prem. Er data lämnar aldrig er infrastruktur.",
          en: "Yes. Roxana is deployed in your private environment or fully on-prem. Your data never leaves your infrastructure.",
        },
      },
      {
        q: { sv: "Kan Roxana köras lokalt utan internet?", en: "Can Roxana run locally without internet?" },
        a: {
          sv: "Ja. Roxana kan driftsättas helt utan internetåtkomst – lämpligt för försvarsindustri, kritisk infrastruktur och andra säkerhetskänsliga miljöer.",
          en: "Yes. Roxana can be deployed entirely without internet access — suitable for defense, critical infrastructure and other security-sensitive environments.",
        },
      },
      {
        q: { sv: "Hur lång tid tar det att komma igång?", en: "How long does it take to get started?" },
        a: {
          sv: "De flesta organisationer kan vara igång inom några dagar. Vi hjälper med konfiguration och koppling till befintliga system som Confluence och SharePoint – ingen datamigration krävs.",
          en: "Most organizations can be up and running within a few days. We help with configuration and connection to existing systems like Confluence and SharePoint — no data migration required.",
        },
      },
      {
        q: { sv: "Vem är Roxana byggd för?", en: "Who is Roxana built for?" },
        a: {
          sv: "Organisationer som arbetar med komplex dokumentation – inom industri, teknik, energi, försvar och systemutveckling. Typiska användare är tekniker, ingenjörer, utvecklare och supportteam.",
          en: "Organizations that work with complex documentation — in industry, engineering, energy, defense and system development. Typical users are technicians, engineers, developers and support teams.",
        },
      },
    ],
  },
  finalCta: {
    headline: { sv: "Testa med era egna dokument", en: "Try it with your own documents" },
    subtitle: {
      sv: "Se hur Roxana hittar svar i era manualer, specifikationer och Confluence-sidor. Boka en demo så visar vi hur det fungerar.",
      en: "See how Roxana finds answers in your manuals, specifications and Confluence pages. Book a demo and we'll show you how it works.",
    },
    cta: { sv: "Boka en demo", en: "Book a demo" },
    download: { sv: "Ladda ner", en: "Download" },
    downloadMac: { sv: "Ladda ner för Mac", en: "Download for Mac" },
    downloadWin: { sv: "Ladda ner för Windows", en: "Download for Windows" },
    alsoAvailable: { sv: "Finns även för", en: "Also available for" },
  },
  footer: {
    produkt: { sv: "Produkt", en: "Product" },
    useCases: { sv: "Användning", en: "Use Cases" },
    sakerhet: { sv: "Säkerhet", en: "Security" },
    kontakt: { sv: "Kontakt", en: "Contact" },
    integritet: { sv: "Integritet", en: "Privacy" },
    rights: { sv: "Alla rättigheter förbehållna.", en: "All rights reserved." },
  },
  productPage: {
    title: { sv: "Produkten", en: "The Product" },
    subtitle: {
      sv: "Roxana gör teknisk dokumentation sökbar med AI. Här ser du hur plattformen fungerar i praktiken.",
      en: "Roxana makes technical documentation searchable with AI. Here's how the platform works in practice.",
    },
    flowTitle: { sv: "Från fråga till verifierat svar", en: "From question to verified answer" },
    flowDesc: {
      sv: "Roxana analyserar er fråga, söker igenom anslutna dokument och kunskapskällor, och returnerar ett svar med källhänvisning – på sekunder.",
      en: "Roxana analyzes your question, searches through connected documents and knowledge sources, and returns an answer with source reference — in seconds.",
    },
    flow: [
      { title: { sv: "Fråga", en: "Question" }, desc: { sv: "Användaren ställer en fråga på naturligt språk.", en: "The user asks a question in natural language." } },
      { title: { sv: "AI tolkar", en: "AI interprets" }, desc: { sv: "Roxana förstår innebörden och kontexten.", en: "Roxana understands the meaning and context." } },
      { title: { sv: "Hittar källa", en: "Finds source" }, desc: { sv: "Rätt dokument och avsnitt identifieras.", en: "The right document and section are identified." } },
      { title: { sv: "Visar svar", en: "Shows answer" }, desc: { sv: "Svaret visas med markering i originalet.", en: "Answer shown with highlighting in the original." } },
    ],
    features: [
      {
        title: { sv: "Semantisk sökning i dokument med AI", en: "Semantic AI document search" },
        desc: {
          sv: "Roxana förstår innebörden bakom era frågor – inte bara nyckelord. Ställ frågor på naturligt språk och få relevanta svar även om exakta termer inte matchar.",
          en: "Roxana understands the meaning behind your questions — not just keywords. Ask questions in natural language and get relevant answers even when exact terms don't match.",
        },
      },
      {
        title: { sv: "Konversation med dokumentkontext", en: "Conversation with document context" },
        desc: {
          sv: "Ställ följdfrågor i en konversation. Roxana behåller sammanhanget och refererar till specifika avsnitt i era PDF:er, Confluence-sidor och specifikationer.",
          en: "Ask follow-up questions in a conversation. Roxana maintains context and references specific sections in your PDFs, Confluence pages and specifications.",
        },
      },
      {
        title: { sv: "Granska i originaldokumentet", en: "Review in the original document" },
        desc: {
          sv: "Källdokumentet visas direkt i gränssnittet med relevant avsnitt markerat. Verifiera informationen utan att lämna Roxana.",
          en: "The source document is shown directly in the interface with the relevant section highlighted. Verify the information without leaving Roxana.",
        },
      },
      {
        title: { sv: "Koppla befintliga kunskapskällor", en: "Connect existing knowledge sources" },
        desc: {
          sv: "Confluence, SharePoint, Google Drive och andra system – Roxana indexerar innehållet direkt utan datamigration. Allt sökbart via ett gränssnitt.",
          en: "Confluence, SharePoint, Google Drive and other systems — Roxana indexes the content directly without data migration. Everything searchable through one interface.",
        },
      },
    ],
  },
  securityPage: {
    dataControlTitle: { sv: "Er data, er kontroll", en: "Your data, your control" },
    dataControl: {
      sv: "Er data lämnar aldrig er infrastruktur. Roxana driftsätts enligt era säkerhetskrav – i privat miljö eller helt on-prem.",
      en: "Your data never leaves your infrastructure. Roxana is deployed according to your security requirements — in a private environment or fully on-prem.",
    },
    deployTitle: { sv: "Driftsättningsalternativ", en: "Deployment options" },
    trustTitle: { sv: "Tillförlitlighet och spårbarhet", en: "Reliability and traceability" },
    trustDesc: {
      sv: "Roxana visar aldrig svar utan källa. Varje svar går att spåra tillbaka till originaldokumentet – med sida och avsnitt. Systemet är byggt för att förhindra fabricerade svar, inte bara minimera dem.",
      en: "Roxana never shows answers without a source. Every answer can be traced back to the original document — with page and section. The system is built to prevent fabricated answers, not just minimize them.",
    },
  },
} as const;

type Translations = typeof translations;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("sv");
  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
};

export type { Locale };
