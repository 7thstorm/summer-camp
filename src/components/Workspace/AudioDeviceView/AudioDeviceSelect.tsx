import { MenuItem, Select } from '@material-ui/core';
import React from 'react';

interface AudioDeviceSelectorProps {
  devices: Array<MediaDeviceInfo>;
  value: string;
  handleUpdate: (device: MediaDeviceInfo | undefined) => void;
}

export const AudioDeviceSelect = (props: AudioDeviceSelectorProps) => {
  const handleChange = (event: any) => {
    props.handleUpdate(props.devices.find((device) => device.deviceId === event.target.value));
  };

  return (
    <Select value={props.value} fullWidth onChange={handleChange}>
      {props.devices.map((device: MediaDeviceInfo, index: number) => {
        return (
          <MenuItem key={index} value={`${device.deviceId}`}>
            {device.label}
          </MenuItem>
        );
      })}
    </Select>
  );
};
