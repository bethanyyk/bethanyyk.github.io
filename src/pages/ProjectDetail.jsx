import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Presto from "./projects/Presto";
import DENVSurveillance from "./projects/DENVSurveillance";
import DailyBruin from "./projects/DailyBruin";

const PAGES = {
  "presto":            Presto,
  "denv-surveillance": DENVSurveillance,
  "daily-bruin": DailyBruin
};

export default function ProjectDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const Page = PAGES[slug];
  if (Page) return <Page/>;
}
