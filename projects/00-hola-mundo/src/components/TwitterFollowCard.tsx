import { useCallback, useState } from "react";

export type TwitterFollowCardProps = {
  userName: string;
  name: string;
  isFollowing?: boolean;
};

export function TwitterFollowCard({
  userName,
  name,
  isFollowing,
}: TwitterFollowCardProps) {
  const [followed, setFollowed] = useState(isFollowing);

  const imgSrc = `https://unavatar.io./${userName}`;

  const buttonText = followed ? "Siguiendo" : "Seguir";
  const buttonClassnames = followed
    ? "tw-folloCard-btn is-following"
    : "tw-folloCard-btn";

  // const handleClick = useCallback(() => setFollowed((prev) => !prev), []);
  const handleClick = () => setFollowed((prev) => !prev);

  return (
    <article className="tw-followCard">
      <header className="tw-folloCard-header">
        <img
          className="tw-folloCard-avatar"
          src={imgSrc}
          alt="daguttt's avatar"
        />
        <div>
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassnames}>
          {buttonText}
        </button>
      </aside>
    </article>
  );
}
