import React from "react";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <span style={{ width: "20px" }}>
        <label className="checkbox checkbox-single checkbox-all">
          <input type="checkbox" ref={resolvedRef} {...rest} />
          &nbsp;<span></span>
        </label>
      </span>
    );
  }
);

export default IndeterminateCheckbox;
