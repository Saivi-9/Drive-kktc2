import { Layout } from "@/components/layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Instagram, Twitter } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = (data: FormValues) => {
    // Client-side only
    toast({
      title: "Message sent",
      description: "Thanks for reaching out! We'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact | Drive KKTC</title>
        <meta name="description" content="Get in touch with the Drive KKTC team." />
      </Helmet>

      <div className="bg-background pt-32 pb-24 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Questions about a route? Found a hidden gem we should know about? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We're a small team of local travel enthusiasts. While we don't operate a physical office, we check our inbox daily.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:hello@drivekktc.com" className="text-muted-foreground hover:text-primary transition-colors">hello@drivekktc.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Kyrenia (Girne)<br/>Northern Cyprus</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50">
              <h4 className="font-semibold mb-4">Follow our journeys</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-muted p-3 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-muted p-3 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <span className="my-auto text-sm text-muted-foreground font-medium ml-2">@drivekktc</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold mb-6">Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "Email is required",
                      pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@example.com" type="email" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help?" 
                            className="bg-background min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full font-semibold">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </Layout>
  );
}
