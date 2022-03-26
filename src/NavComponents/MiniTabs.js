import React from "react";

const MiniTabs = (props) => {
  const {
    tabname01,
    tabnametag01,
    tabnamelink01,
    tabname02,
    tabnametag02,
    tabnamelink02,
    tabname03,
    tabnametag03,
    tabnamelink03,
    tabname04,
    tabnametag04,
    tabnamelink04,
  } = props;

  return (
    <>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href={tabnamelink01}
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase

      active:bg-blue-200
      focus-within:bg-blue-200
      focus-visible:bg-blue-200

      focus:bg-blue-200s
      px-6
      py-3
      my-2
      mx-1
      rounded-full
      active
    "
            id={tabnametag01}
            data-bs-toggle="pill"
            data-bs-target={tabnamelink01}
            role="tab"
            aria-controls={tabname01}
            aria-selected="true"
          >
            전체
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href={tabnamelink02}
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      active:bg-blue-200
      focus-within:bg-blue-200
      focus-visible:bg-blue-200
      target:bg-blue-200
      default:bg-blue-200
      px-3
      py-3
      my-2
      mx-1
      rounded-full
    "
            id={tabnametag02}
            data-bs-toggle="pill"
            data-bs-target={tabnamelink02}
            role="tab"
            aria-controls={tabname02}
            aria-selected="false"
          >
            나의 글
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href={tabnamelink03}
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      active:bg-blue-200
      focus-within:bg-blue-200
      focus-visible:bg-blue-200

      px-3
      py-3
      my-2
      mx-1
      rounded-full
    "
            id={tabnametag03}
            data-bs-toggle="pill"
            data-bs-target={tabnamelink03}
            role="tab"
            aria-controls={tabname03}
            aria-selected="false"
          >
            나의 댓글
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            href={tabnamelink04}
            className="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      active:bg-blue-200
      focus-within:bg-blue-200
      focus-visible:bg-blue-200

      px-3
      py-3
      my-2
      mx-1
      rounded-full
    "
            id={tabnametag04}
            data-bs-toggle="pill"
            data-bs-target={tabnamelink04}
            role="tab"
            aria-controls={tabname04}
            aria-selected="false"
          >
            스크랩 글
          </a>
        </li>
      </ul>
    </>
  );
};

MiniTabs.defaultProps = {
  tabname: "",
  tabnametag: "",
  tabnamelink: "",
};

export default MiniTabs;
