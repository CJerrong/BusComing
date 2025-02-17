from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from decouple import config
import requests

class BusTimingView(APIView):
    def get(self, request, bus_stop_id):
        # LTA API endpoint
        API_KEY = config("API_KEY")
        url = config("BUS_TIMING_URL")

        headers = {
            'AccountKey': API_KEY
            'accept': 'application/json'
        }

        params = {
            'BusStopCode': bus_stop_id
        }

        response = requests.get(url, headers=headers, params=params)
        return Response(response.json())
# Create your views here.
