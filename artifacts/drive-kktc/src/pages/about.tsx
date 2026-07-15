import { Layout } from "@/components/layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About | Drive KKTC</title>
        <meta name="description" content="The story behind Drive KKTC, a premium self-drive platform for Northern Cyprus." />
      </Helmet>

      <div className="bg-background pt-32 pb-24 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Philosophy</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              We believe the best way to understand a place is behind the wheel, with the windows down and no strict schedule.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/5]">
              <img 
                src="/attached_assets/generated_images/about-bg.jpg" 
                alt="Traditional courtyard in Northern Cyprus" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-p:text-muted-foreground"
          >
            <h2>The Anti-Itinerary</h2>
            <p>
              Most travel guides for Northern Cyprus point you toward the same five castles and three beaches. They treat travel as a checklist: arrive, take a photo, leave. 
            </p>
            <p>
              <strong>Drive KKTC was built as an antidote.</strong>
            </p>
            <p>
              We spent months driving the back roads, talking to local café owners in Maronite villages, hiking down to unnamed coves, and waiting for the light to hit Roman ruins at golden hour. The itineraries you see here are the result of that obsession.
            </p>
            <h3>Curated, Not Crowdsourced</h3>
            <p>
              We don't scrape generic data or aggregate reviews. Every stop on this platform was chosen deliberately. If a highly-rated tourist trap lacks soul, we leave it out. If a tiny dirt pull-off offers the best view of the Karpaz peninsula, we include exact coordinates.
            </p>
            <p>
              We want you to experience the island the way it deserves to be experienced: slowly, respectfully, and with a sense of wonder.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
