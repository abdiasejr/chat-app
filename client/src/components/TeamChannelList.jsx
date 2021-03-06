import React from "react";

import { AddChannel } from "../assets";

const TeamChannelList = ({
  children,
  error = false,
  loading,
  isCreating,
  setCreateType,
  setIsCreating,
  setIsEditing,
  type,
}) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          There was an error loading the team channels.
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "Channels" : "Messages"} loading...
        </p>
      </div>
    );
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Channels" : "Direct Messages"}
        </p>
        <AddChannel
          isCreating={isCreating}
          setCreateType={setCreateType}
          setIsCreating={setIsCreating}
          setIsEditing={setIsEditing}
          type={ type === "team" ? "team" : "messaging" }
        />
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
