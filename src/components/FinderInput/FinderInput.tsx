"use client";
import React from "react";
import styles from "./FinderInput.module.scss";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const FinderInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={styles.inputFinder} data-testid="input-container">
      <input
        type="text"
        placeholder="Search a character..."
        onChange={(event) => handleSearch(event.target.value)}
        data-testid="finder-input"
        defaultValue={searchParams?.get("search") ?? ""}
      />
    </div>
  );
};

export default FinderInput;
