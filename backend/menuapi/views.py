from django.shortcuts import render
from .models import menuapi
from rest_framework import status
from .serializers import menu_serailizer
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView

class orderlist(ListCreateAPIView):
    queryset=menuapi.objects.all()
    serializer_class =menu_serailizer
    def list(self,request):
        queryset=self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        # print(serializer.data)
        return Response(serializer.data)
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class OrderDetail(RetrieveUpdateDestroyAPIView):
    queryset = menuapi.objects.all()
    serializer_class = menu_serailizer
    lookup_field = 'id'

    def update(self, request, *args, **kwargs):
        menu = self.get_object()  
        
        serializer = self.get_serializer(menu, data=request.data)
        print(serializer,"*****************")
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, *args, **kwargs):
        menu = self.get_object()  
        menu.delete()  
        return Response({"message": "Student record deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        
    
    
    

# Create your views here.
