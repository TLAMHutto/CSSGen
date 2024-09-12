import React from 'react';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import CropDinIcon from '@mui/icons-material/CropDin';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TransformIcon from '@mui/icons-material/Transform';
import GrainIcon from '@mui/icons-material/Grain';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <CropDinIcon />, name: 'Box-Shadow', path: '/box-shadow' },
  { icon: <ColorLensIcon />, name: 'Color-Gradient', path: '/color-gradient' },
  { icon: <TransformIcon />, name: 'Transform', path: '/transform' },
  { icon: <GrainIcon />, name: 'Filter', path: '/filter' },
  { icon: <AspectRatioIcon />, name: 'Resize', path: '/resize' },
];

export default function BasicSpeedDial() {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1300 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'relative' }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => navigate(action.path)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
