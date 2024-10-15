"use client";

import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import { Button } from "./core/button";
import { Input } from "./core/input";

const Footer = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <footer className="h-14 w-full flex flex-row items-center space-x-4">
      <Input
        placeholder="Pergunte alguma coisa"
        className="text-white rounded-full"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button className="rounded-full bg-white hover:bg-[#f3f3f3] transition-colors duration-300">
        <SendHorizontal className="text-black/95 h-4 w-4 p-0" />
      </Button>
    </footer>
  );
};

export default Footer;
