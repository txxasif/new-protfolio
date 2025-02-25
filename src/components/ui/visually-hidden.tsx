import * as React from "react";

const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ children, ...props }, forwardedRef) => {
  return (
    <span
      ref={forwardedRef}
      className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
      {...props}
    >
      {children}
    </span>
  );
});
VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
