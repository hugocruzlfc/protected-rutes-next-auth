"use client";
import { useState } from "react";

export default function WhoAmIButton({
  whoAmI,
}: {
  whoAmI: () => Promise<string>;
}) {
  const [name, setName] = useState<string>("");

  console.log(name);

  return (
    <div>
      <button
        className="p-2 bg-blue-500 text-white"
        onClick={async () => setName(await whoAmI())}
      >
        Who am I?
      </button>
      <br />
      {name}
    </div>
  );
}
