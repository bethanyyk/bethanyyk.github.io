import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DailyBruin from "./projects/DailyBruin";
import Presto from "./projects/Presto";
import BruinSportsAnalytics from "./projects/BruinSportsAnalytics";
import DENVSurveillance from "./projects/DENVSurveillance";

const PAGES = {
  "daily-bruin": DailyBruin,
  "presto": Presto,
  "bruin-sports-analytics": BruinSportsAnalytics,
  "denv-surveillance": DENVSurveillance,
};

export default function ProjectDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const Page = PAGES[slug];
  if (Page) return <Page/>;
}
