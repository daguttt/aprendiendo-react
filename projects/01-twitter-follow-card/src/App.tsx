import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export function App() {
  return (
    <main>
      <TwitterFollowCard userName="daguttt" initialIsFollowing>
        Daniel Gutiérrez Muñoz
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev">
        Miguel Angel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName="stephenfluin">
        Stephen Fluin
      </TwitterFollowCard>
      <TwitterFollowCard userName="BenLesh">Ben Lesh</TwitterFollowCard>
    </main>
  );
}
