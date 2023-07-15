from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from Restapp.models import Task
from Restapp.serializers import DetailSerializer


# Create your views here.
@api_view(['POST'])
def details(request):
    serializer = DetailSerializer()
    if request.method == 'POST':
        serializer = DetailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getdata(request):
    details = Task.objects.all()
    serializer = DetailSerializer(details,many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_data(request,id):
    details = Task.objects.get(id=id)
    print(details)
    details.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)