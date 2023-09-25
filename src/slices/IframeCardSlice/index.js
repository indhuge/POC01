import Styles from "./iframe.module.scss";

/**
 * @typedef {import("@prismicio/client").Content.IframeCardSliceSlice} IframeCardSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IframeCardSliceSlice>} IframeCardSliceProps
 * @param {IframeCardSliceProps}
 */
const IframeCardSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={Styles.iframeContainer}>
        <div
          className={Styles.iframeStyle}
          dangerouslySetInnerHTML={{ __html: slice.primary.iframe.html }}
        />
      </div>
    </section>
  );
};

export default IframeCardSlice;
