import React from "react";
import Icons from "./Icons";

export default function Footer() {
  return (
    <div className={styles.container}>
      <hr className={styles.divider} />
      <div className={styles.content}>
        <p>
          © 2025 | Built by
          <a href="mailto:dusichka.d@northeastern.edu" target="_blank">
            <span className={styles.link}>Dessy Dusichka</span>
          </a>
        </p>
        <div className={styles.iconsContainer}>
          <Icons color="black" size="1em" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: "ml-4",
  divider: "h-px mb-2 bg-gray-400 border-0",
  content: "flex justify-between tablet:justify-normal text-lg pb-2",
  link: "ml-1 font-bold text-[#81559b]",
  iconsContainer:
    "ml-2 tablet:ml-6 mr-4 mt-1 flex gap-2 laptop:gap-4 justify-center",
};
