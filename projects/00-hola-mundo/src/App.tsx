import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export function App() {
  return (
    <main>
      <TwitterFollowCard
        userName="daguttt"
        name="Daniel Gutiérrez Muñoz"
        isFollowing
      />
      <TwitterFollowCard userName="midudev" name="Miguel Angel Durán" />
      <TwitterFollowCard userName="stephenfluin" name="Stephen Fluin" />
      <TwitterFollowCard userName="BenLesh" name="Ben Lesh" />
    </main>
    // <TwitterFollowCard />
  );
}
