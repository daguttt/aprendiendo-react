// import { useCallback, useState } from "react";
import { useState } from "react";

export type TwitterFollowCardProps = {
  userName: string;
  initialIsFollowing?: boolean;
  children: string;
};

export function TwitterFollowCard({
  children,
  userName,
  initialIsFollowing,
}: TwitterFollowCardProps) {
  const [followed, setFollowed] = useState(initialIsFollowing);

  const imgSrc = `https://unavatar.io./${userName}`;

  const buttonText = followed ? "Siguiendo" : "Seguir";
  const buttonClassnames = followed
    ? "tw-folloCard-btn isFollowing"
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
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassnames}>
          <span className="tw-folloCard-btn-text">{buttonText}</span>
          {/* Displaying logic of this element (⬇️) is handled on App.css */}
          <span className="tw-folloCard-btn-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
