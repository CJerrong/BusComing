import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface BusStop {
  BusStopCode: string;
  Description: string;
  RoadName: string;
}

interface BusStopButtonProps {
  stop: BusStop;
}

const BusStopButton = ({ stop }: BusStopButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      className="w-full justify-start text-left h-auto py-2"
      onClick={() => navigate('/bus_timings', { state: { busStopCode: stop.BusStopCode, stopInfo: stop } })}
    >
      <div>
        <div className="font-semibold">{stop.Description}</div>
        <div className="text-sm text-gray-500">
          {stop.RoadName} · {stop.BusStopCode}
        </div>
      </div>
    </Button>
  );
};

export default BusStopButton;