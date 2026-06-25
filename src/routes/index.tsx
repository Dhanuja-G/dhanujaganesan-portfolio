import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhanuja G — Full Stack Developer Portfolio" },
      { name: "description", content: "Premium portfolio of Dhanuja G — full stack developer building modern, scalable MERN applications, APIs and user-focused web solutions." },
      { property: "og:title", content: "Dhanuja G — Full Stack Developer" },
      { property: "og:description", content: "Building Modern Full Stack Experiences." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
