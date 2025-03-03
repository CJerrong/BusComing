from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from decouple import config, Config, RepositoryEnv, AutoConfig
import requests

class BusStopsView(APIView):
    def get(self, request):
        url = "https://datamall2.mytransport.sg/ltaodataservice/BusStops"
        API_KEY = config("API_KEY")
        headers = {
            'AccountKey': API_KEY,
            'accept': 'application/json'
        }
        
        # Need to iterate through as datamall restricts requests to 500 lines
        # Need to loop through until no more bus stops
        all_bus_stops = []
        skip = 0
        
        while True:
            response = requests.get(url, headers=headers, params={'$skip':skip})
            
            if response.status_code != 200:
                return Response(
                    {'error: Failed to fetch bus stops'},
                    status=response.status_code
                )
            
            data = response.json()
            bus_stops = data.get('value', [])
            
            # No more bus stops
            if not bus_stops:
                break
            
            all_bus_stops.extend(bus_stops)
            skip += 500
        
        return Response(all_bus_stops)
            
            

class BusTimingView(APIView):
    def get(self, request, bus_stop_id):
        # LTA API endpoint
        API_KEY = config("API_KEY")
        url = config("BUS_TIMING_URL")

        headers = {
            'AccountKey': API_KEY,
            'accept': 'application/json'
        }

        params = {
            'BusStopCode': bus_stop_id
        }

        response = requests.get(url, headers=headers, params=params)
        return Response(response.json())
# Create your views here.
