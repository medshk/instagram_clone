import React from "react";
import Story from "./story";

function StoriesContainer() {
  return (
    <div className="flex bg-white rounded-md border-gray-200 border items-center gap-2 py-2">
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
}

export default StoriesContainer;
