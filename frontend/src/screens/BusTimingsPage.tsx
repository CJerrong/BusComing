import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, Card, Skeleton, Stack, ActionIcon } from '@mantine/core'
import { IconArrowBackUp } from '@tabler/icons-react'

const BusTimingsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { busStopCode, stopInfo } = location.state || {};
  const [busTimings, setBusTimings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If no bus stop code, navigate back to home page
    if (!busStopCode) {
      navigate('/');
      return;
    }

    const fetchBusTimings = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/bus-timings/${busStopCode}`);
        const data = await response.json();
        setBusTimings(data.Services || []);
      } catch (error) {
        console.error('Error fetching timings:', error);
      }
      setLoading(false);
    };

    fetchBusTimings();
  }, [busStopCode, navigate]);

  if (!stopInfo) {
    return null;
  }

  return (
    <div className="p-4 space-y-4">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/')}
        className="mb-4"
      >
        <ActionIcon variant="filled">
          <IconArrowBackUp size={24} />
        </ActionIcon>
      </Button>

      <Card>
        <Card.Section>
          <h2 className="text-xl font-bold">{stopInfo.Description}</h2>
          <p className="text-sm text-gray-500">{stopInfo.RoadName}</p>
        </Card.Section>
        <Stack>
            <Skeleton visible={loading}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {busTimings.map(service => (
                  <div key={service.ServiceNo} className="p-3 border rounded">
                    <div className="font-bold mb-1">Bus {service.ServiceNo}</div>
                    <div className="text-sm">
                      <div>Next: {service.NextBus.EstimatedArrival}</div>
                      <div>After: {service.NextBus2.EstimatedArrival}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Skeleton>
        </Stack>
      </Card>
    </div>
  );
};

export default BusTimingsPage;