import React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CropDinIcon from '@mui/icons-material/CropDin';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <CropDinIcon />, name: 'Box-Shadow', path: '/box-shadow' },
];

export default function BasicSpeedDial() {
  const navigate = useNavigate();

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
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
