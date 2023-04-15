import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

type User = {
  userName: string;
  name: string;
  initialIsFollowing: boolean;
};

const users: User[] = [
  {
    userName: "daguttt",
    name: "Daniel Gutiérrez Muñoz",
    initialIsFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Angel Durán",
    initialIsFollowing: false,
  },
  {
    userName: "stephenfluin",
    name: "Stephen Fluin",
    initialIsFollowing: false,
  },
  {
    userName: "BenLesh",
    name: "Ben Lesh",
    initialIsFollowing: false,
  },
];

export function App() {
  return (
    <main>
      {users.map((user) => {
        const { userName, name, initialIsFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={initialIsFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </main>
  );
}
