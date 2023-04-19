import { useState } from 'react';
import './App.css';
import MouseFollower from './components/MouseFollower';

function App() {
  const [isMouseFollowerEnabled, setIsMouseFollowerEnabled] = useState(false);

  const toggleMouseFollower = () => {
    setIsMouseFollowerEnabled(!isMouseFollowerEnabled);
  };

  return (
    <main>
      <h1>Mouse Follower</h1>
      <MouseFollower
        isEnabled={isMouseFollowerEnabled}
        toggleFn={() => toggleMouseFollower()}
      />
    </main>
  );
}

export default App;
