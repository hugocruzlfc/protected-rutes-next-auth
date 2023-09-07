"use client";
import { useState, useEffect, use } from "react";

export default function APITestPage() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    fetch("/api/whoAmI")
      .then((res) => res.json())
      .then((json) => setName(json.name));
  }, []);

  return (
    <div>
      <div>
        API Route From <span className="font-bold underline">Client</span>
      </div>
      <div>Name: {name}</div>
    </div>
  );
}
