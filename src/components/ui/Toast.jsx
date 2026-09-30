import { useRef } from "react";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearToast, hideToast } from "../../features/ui/toast/toastSlice";

function Toast() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.toast);

  const lastMessage = useRef("");
  const lastSeverity = useRef("info");

  if (message) lastMessage.current = message;
  if (severity) lastSeverity.current = severity;

  const closeHandler = (event, reason) => {
    if (reason === "clickaway") return;
    dispatch(hideToast());
  };

  const getBorderColor = () => {
    switch (lastSeverity.current) {
      case "success":
        return "!border-emerald-500/30 !text-emerald-400";
      case "warning":
        return "!border-amber-500/30 !text-amber-400";
      case "error":
        return "!border-rose-500/30 !text-rose-400";
      default:
        return "!border-primary/30 !text-primary";
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={closeHandler}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      TransitionProps={{
        onExited: () => dispatch(clearToast()),
      }}
      className="!fixed !top-6 !right-6 !z-[99999]"
    >
      <Alert
        onClose={closeHandler}
        severity={lastSeverity.current}
        variant="outlined"
        className={`
          !flex !items-center !gap-3
          !rounded-2xl !py-3.5 !px-5
          !bg-bg-surface/70 !backdrop-blur-md
          !border !shadow-2xl
          !font-medium !text-sm sm:!text-base
          !text-text-muted transition-all duration-300
          ${getBorderColor()}
        `}
      >
        {lastMessage.current}
      </Alert>
    </Snackbar>
  );
}

export default Toast;