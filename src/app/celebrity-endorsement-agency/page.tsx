import { getPageContent } from "@/lib/content";
import { PageRenderer } from "@/components/layout/PageRenderer";
import { notFound } from "next/navigation";

export default function Page() {
  const data = getPageContent("celebrity-endorsement-agency");
  if (!data) return notFound();
  return <PageRenderer data={data.frontmatter} />;
}
