import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState, useSyncExternalStore } from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  url: string;
};

const copiedFeedbackDuration = 2000;

const subscribeToNothing = () => () => undefined;

export const ShareButtons = ({ title, url }: Props) => {
  const hasNativeShare = useSyncExternalStore(
    subscribeToNothing,
    () => typeof navigator.share === "function",
    () => false,
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), copiedFeedbackDuration);
    return () => clearTimeout(timeout);
  }, [copied]);

  const shareNatively = () => {
    navigator.share({ title, url }).catch(() => undefined);
  };

  const copyLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => setCopied(true))
      .catch(() => undefined);
  };

  const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title} ${url}`,
  )}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url,
  )}`;

  return (
    <div className={styles.share}>
      <span className={styles.label}>Compartilhar</span>
      {hasNativeShare ? (
        <IconButton onClick={shareNatively} aria-label="Compartilhar">
          <ShareIcon />
        </IconButton>
      ) : (
        <>
          <IconButton
            href={whatsAppUrl}
            target="_blank"
            aria-label="Compartilhar no WhatsApp"
          >
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            href={linkedInUrl}
            target="_blank"
            aria-label="Compartilhar no LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
        </>
      )}
      <Tooltip title={copied ? "Link copiado" : "Copiar link"}>
        <IconButton onClick={copyLink} aria-label="Copiar link">
          {copied ? <CheckIcon /> : <ContentCopyIcon />}
        </IconButton>
      </Tooltip>
    </div>
  );
};
