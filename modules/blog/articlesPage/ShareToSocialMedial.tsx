import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const ShareToSocialMedial = () => {
  const router = useRouter();

  const [shareUrl] = useState(router.pathname);
  return (
    <Box
      sx={{
        zIndex: 1323424,
        backgroundColor: '#bbb',
        color: '#fff',
        display: 'flex',
        gap: 2,
        p: 13,
      }}
    >
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <EmailShareButton url={shareUrl}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <InstapaperShareButton url={shareUrl}>
        <InstapaperIcon size={32} round={true} />
      </InstapaperShareButton>
      <PinterestShareButton media="" url={shareUrl}>
        <PinterestIcon size={32} round={true} />
      </PinterestShareButton>
      <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <FacebookMessengerShareButton appId="" url={shareUrl}>
        <FacebookMessengerIcon size={32} round={true} />
      </FacebookMessengerShareButton>
    </Box>
  );
};

export default ShareToSocialMedial;
