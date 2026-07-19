import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Compass, ArrowRight, RotateCcw } from "lucide-react";
import { Layout } from "@/components/layout";
import { RouteCard } from "@/components/route-card";
import { Button } from "@/components/ui/button";
import { routes, Category } from "@/data/routes";

type Answer = { label: string; category?: string; difficulty?: string };

const questions: { title: string; options: Answer[] }[] = [
  { title: "What sounds most like your perfect day?", options: [
    { label: "Castles and stories", category: "History" }, { label: "Swims and sea views", category: "Coastline" },
    { label: "Villages and long lunches", category: "Food" }, { label: "Wild landscapes", category: "Nature" },
  ] },
  { title: "Who is travelling?", options: [
    { label: "Just adults", category: "Photography" }, { label: "With children", category: "Family Friendly" },
    { label: "A mixed group", category: "Villages" }, { label: "A couple", category: "Sunset" },
  ] },
  { title: "How much driving feels right?", options: [
    { label: "Keep it easy", difficulty: "Easy" }, { label: "A little adventure", difficulty: "Moderate" },
    { label: "Bring on the roads", difficulty: "Challenging" },
  ] },
];

export default function RouteFinder() {
  const [answers, setAnswers] = useState<number[]>([]);
  const results = useMemo(() => {
    const picks = answers.map((answer, index) => questions[index].options[answer]);
    return [...routes].map((route) => ({ route, score: picks.reduce((score, pick) => score + (pick.category && route.category.includes(pick.category as Category) ? 3 : 0) + (pick.difficulty === route.difficulty ? 2 : 0), 0) }))
      .sort((a, b) => b.score - a.score).slice(0, 3).map((item) => item.route);
  }, [answers]);
  const complete = answers.length === questions.length;
  const question = questions[answers.length];

  return <Layout><section className="bg-muted min-h-screen pt-32 pb-24"><div className="container mx-auto max-w-5xl px-4">
    <div className="text-center max-w-2xl mx-auto mb-12"><Compass className="w-12 h-12 text-primary mx-auto mb-5" /><p className="text-primary font-medium mb-3">ROUTE FINDER</p><h1 className="font-serif text-4xl md:text-6xl font-bold mb-5">Find your perfect drive</h1><p className="text-lg text-muted-foreground">Three quick choices, then we’ll match you with the right side of Northern Cyprus.</p></div>
    {!complete && question && <div className="max-w-3xl mx-auto bg-card rounded-2xl border p-8 md:p-12 shadow-sm"><p className="text-sm text-muted-foreground mb-3">Question {answers.length + 1} of {questions.length}</p><div className="h-2 bg-muted rounded-full mb-9"><div className="h-full bg-accent rounded-full transition-all" style={{ width: `${(answers.length / questions.length) * 100}%` }} /></div><h2 className="font-serif text-3xl font-bold mb-8">{question.title}</h2><div className="grid sm:grid-cols-2 gap-4">{question.options.map((option, index) => <Button key={option.label} variant="outline" className="h-auto min-h-16 justify-start text-left px-5 text-base hover:border-primary hover:bg-primary/5" onClick={() => setAnswers([...answers, index])}>{option.label}</Button>)}</div></div>}
    {complete && <div><div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10"><div><p className="text-primary font-medium">YOUR MATCHES</p><h2 className="font-serif text-3xl font-bold">Start with these routes</h2></div><Button variant="outline" onClick={() => setAnswers([])}><RotateCcw className="w-4 h-4 mr-2" />Try again</Button></div><div className="grid md:grid-cols-3 gap-8">{results.map((route, index) => <RouteCard key={route.id} route={route} index={index} />)}</div><div className="text-center mt-12"><Button asChild size="lg" className="rounded-full"><Link href="/planner">Build a day plan <ArrowRight className="w-4 h-4 ml-2" /></Link></Button></div></div>}
  </div></section></Layout>;
}
