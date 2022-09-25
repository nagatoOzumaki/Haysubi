import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Modal } from '@mui/material';
import ShareToSocialMedia from './ShareToSocialMedial';

export default function ArticleActions() {
  const [open, setOpen] = React.useState(false);
  const [shareToSocialMediaOpen, setCloseShareToSocialMediaOpen] =
    React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseShareToSocialMedia = () => {
    setCloseShareToSocialMediaOpen(false);
  };
  const handleOpenShareToSocialMedia = () => {
    setCloseShareToSocialMediaOpen(true);
  };
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    {
      icon: <ShareIcon onClick={handleOpenShareToSocialMedia} />,
      name: 'Share',
    },
  ];

  return (
    <Box
      sx={{
        height: 330,
        width: 160,

        transform: 'translateZ(0px)',
        flexGrow: 1,
      }}
    >
      {/* <Backdrop open={open} sx={{ backgroundColor: 'transparent' }} /> */}
      <SpeedDial
        ariaLabel="article actions"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
        icon={<SpeedDialIcon color="secondary" />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>

      <Modal
        open={shareToSocialMediaOpen}
        onClose={handleCloseShareToSocialMedia}
        aria-labelledby="share to social media"
        aria-describedby="share to social media"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ShareToSocialMedia />
      </Modal>
    </Box>
  );
}
