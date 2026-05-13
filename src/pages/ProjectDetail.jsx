import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Presto from "./projects/Presto";
import DENVSurveillance from "./projects/DENVSurveillance";

const PAGES = {
  "presto":            Presto,
  "denv-surveillance": DENVSurveillance
};

export default function ProjectDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const Page = PAGES[slug];
  if (Page) return <Page/>;
}
