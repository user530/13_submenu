import React from "react";
import { useAppContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useAppContext();

  const container = React.useRef(null);

  const [columns, setColumns] = React.useState("col-2");

  React.useEffect(() => {
    // Set Default style
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;

    if (links.length === 3) setColumns("col-3");
    else if (links.length > 3) setColumns("col-4");

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map(({ label, icon, url }, linkInd) => (
          <a key={linkInd} href={url}>
            {icon}
            {label}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Submenu;
